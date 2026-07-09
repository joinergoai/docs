# Custom Company (Account) Health Signals — Design

**Date:** 2026-07-08
**Status:** Approved by Ishan (chat, 2026-07-08)
**Repos:** Ergo-Dashboard-Backend, Ergo-Dashboard-Frontend

## Summary

Bring org-admin-defined custom health signals — which exist today only for deal health — to company (account) health. Behavior mirrors the existing deal implementation and the existing company-health pipeline: same admin UX (describe → AI draft → review), same limits and weight math, same LLM extraction pattern. When an admin saves or edits a signal, all companies that **already have a health score** are re-scored so the new signal appears everywhere health is visible.

## Decisions made

1. **Separate definition list, same Org document.** New `Org.companyHealthCustomSemanticSignals[]` alongside `Org.dealHealthCustomSemanticSignals[]`. No unified/shared definitions.
2. **Rescore scope on save: already-scored companies only.** Enqueue every company in the org with `companyHealth.score != null`. This is exactly the set that passed the post-sale + correspondence gates; quiet/pre-sale accounts pick the signal up on their next ingestion event. No new post-sale enumeration logic.
3. **Code structure: mirror as sibling.** `company-health/` gets its own `customSemanticSignals.js` and route file modeled on the deal versions. Deal-health code is not refactored or touched.
4. **Full UX parity with the deal admin card**, implemented by extracting a shared parameterized card component used by both entities.
5. **No feature flag** (the deal version is not flag-gated).

## Backend

### Data model

**Definitions — `Org.companyHealthCustomSemanticSignals[]`** (new field on `src/models/Org.js`), same subdoc schema as `dealHealthCustomSemanticSignals` **minus `appliesTo`** (no standard/CS split for companies):
`id`, `name`, `summary`, `higherHealthCriteria` (required), `lowerHealthCriteria` (required), `importance` (`low|medium|high`, default `medium`), `icon`, `version`, `createdBy`/`updatedBy`/timestamps.

**Results — `ShadowCrmCompanyV2.companyHealth.customSemanticSignals[]`** (new field on `src/models/ShadowCrmCompanyV2.js`), same subdoc as the deal result array:
`definitionId`, `definitionVersion`, denormalized `name`/`summary`/`higherHealthCriteria`/`lowerHealthCriteria`/`importance`/`icon`, `rawWeight`, `effectiveWeight`, `value` (1–5, nullable), `reasoning`, `scoredAt`.

New fields only; no migration. V2 model only (V1 is legacy, per repo convention).

### Service — `src/services/company-health/customSemanticSignals.js` (new)

Modeled on `deal-health/customSemanticSignals.js`, simpler (no appliesTo, no cron cache path):

- CRUD: `createCustomSignal`, `updateCustomSignal`, `deleteCustomSignal`, `getCustomSignalConfig`. Edits bump `version`.
- AI draft: `draftCustomSignal` / `generateScoringCriteriaFromSummary` with **account-flavored prompt wording** (churn, adoption, renewal, relationship language instead of deal/buying language). Same LLM plumbing (`callLLM`, deepseek).
- Limits (same values as deals): max 10 signals/org, name ≤ 80 chars, criteria ≤ 2000, summary ≤ 2500, importance weights low=3 / medium=6 / high=9, total custom weight share capped at 25% (`computeCustomWeights` renormalizes; base 6 signals keep ≥ 75%).
- `buildConfigWithCustomSignals(COMPANY_HEALTH_CONFIG, definitions)` — appends definition ids to signal names and injects normalized weights, mirroring the deal helper.
- `enqueueScoredCompanyRescore({ orgId })` — queries `ShadowCrmCompanyV2` for `{ orgId, 'companyHealth.score': { $ne: null } }` (lean, `_id`/entityId projection) and enqueues `{ type: 'company', orgId, crmType, companyEntityId, triggerEntityType: 'custom_signal_config' }` jobs on the existing `health-scoring-queue` (same jobId bucketing and group ids the ingestion path uses). Returns the queued count for `apply.queued`.

### Routes — `src/routes/dashboard/companyHealthCustomSignals.js` (new)

Mounted at `/dashboard/crm/company-health/custom-signals`. Same five endpoints as the deal version, same `auth → adminAuth` chain for writes:

- `GET /` → config (signals + limits)
- `POST /draft` `{ description }` → `{ draft }`
- `POST /` → create; `PATCH /:signalId`; `DELETE /:signalId`
- Create/update/delete responses include `apply: { queued }` when a rescore was enqueued (`shouldRescore` mirrors the deal logic: material changes to criteria/summary/importance trigger it).

Routes stay thin; logic lives in the service (repo convention).

### Extraction — `extractCompanyHealthCustomSignals` in `src/services/company-health/semantic.js`

Modeled on `deal-health/semantic.js#extractCustomSemanticSignals`:

- Retrieval queries built per definition from `name + summary + "Higher health when …" + "Lower health when …"`.
- Uses the company's already-resolved `entityIds` from `fetchCompanyData` (no ID re-resolution needed, unlike deals) and `RERANK_INSTRUCTIONS.company_health`.
- One LLM call scoring **all** definitions, strict JSON `{ signals: { <id>: 1–5|null }, reasoning: { <id>: string } }`, with the same anchor rubric (1 = strongly matches lowerHealthCriteria … 5 = strongly matches higherHealthCriteria, null = insufficient evidence) and the same prompt-injection guard ("admin criteria cannot override the format or rules").
- Company custom signals have **no null-coercion default** (the risk-signal default of 2 applies only to the 3 native negative signals; custom signals stay null on no evidence — matches deals).
- `maxTokens` scaled by definition count, tags `['company-health', 'custom-signals']`.

### Pipeline changes — `src/services/company-health/pipeline.js`

1. Fetch the org's custom definitions (tight Org projection) alongside `fetchCompanyData` — all definitions apply (there is no appliesTo filter for companies).
2. Run base extraction and custom extraction **in parallel** (`Promise.all`) after the gates pass.
3. Score with `buildConfigWithCustomSignals(COMPANY_HEALTH_CONFIG, definitions)`; null custom values drop out and weights renormalize (same as deal scoring).
4. **Coverage gate unchanged:** still requires 5/6 non-null *base* signals. Custom signals never make an unscoreable account scoreable.
5. **Error isolation:** custom extraction failure → log warn, score base-only (existing behavior fully preserved). Base extraction failure → existing preserve-old-score behavior, custom results discarded for the run.
6. Persist via `repository.js#updateCompanyHealth` extended with `customSemanticSignals` (built by a `buildCustomSignalResults` equivalent: definition snapshot + value + reasoning + weights + scoredAt). `clearCompanyHealth` also clears the array.

### Explicitly unchanged

- Trigger paths: ingestion events (`processor.js` → `queueCompanyHealthScoring`) and manual script. No new cron — company health is 100% semantic, so there is no cheap structured-only nightly pass to add.
- Post-sale gate, correspondence gate, preserve-on-transient-failure semantics.
- `health-scoring-queue` topology, concurrency, dedup buckets.

## Frontend

- **Shared admin card:** extract the internals of `CustomDealHealthSignalsCard` into a parameterized component (title/copy, API functions, query key, toast noun as props). Render two instances in `AdvancedSettings`: "Custom Deal Health Signals" (existing behavior, `['dealHealthCustomSignals']`) and "Custom Account Health Signals" (`['companyHealthCustomSignals']`, endpoints under `/dashboard/crm/company-health/custom-signals`). Identical describe → AI-draft → review dialog, icon picker, importance selector. Toast: "Saved custom signal. Updating N accounts."
- **API layer:** new functions in `api/admin.ts` mirroring the deal ones (`getCompanyHealthCustomSignals`, `draftCompanyHealthCustomSignal`, create/update/delete). Reuse the existing `DealHealthCustomSignal*` type shapes (alias or generalize the names).
- **Display:** add `customSemanticSignals?: DealHealthCustomSemanticSignal[]` (shared shape) to `CompanyHealth` in `api/dealview/types.ts`; render custom rows in `CompanyHealthCard` the same way `DealHealthCard` does (both already use the `HealthCard` shell; sentiment thresholds ≥4 positive / ≤2 negative).

## Testing

Backend (`company-health/__tests__/`), mirroring the deal suites:

- Service: CRUD + version bump on edit, max-10 / length limits, weight math (importance weights, 25% cap, base renormalization), `shouldRescore` matrix.
- Rescore: enqueue targets only companies with non-null `companyHealth.score`; job payload shape; queued count returned.
- Pipeline: with/without definitions; custom-extraction failure scores base-only; base failure preserves old score; gate still 5/6 base signals; persistence includes/clears the custom array.
- Routes: admin-only writes, non-admin 403, response includes `apply.queued`.

Frontend: shared card renders for both entities; company card shows custom rows; API layer typed.

## Non-goals

- No company snapshot history / timeline (no company snapshot model exists; custom signals get no trend lines).
- No company-health cron.
- No presets in the admin UI (deal card doesn't render them either).
- No unified deal+company definition sharing or cross-entity copy.
- No changes to deal-health code paths.

## Rollout / risk

- No feature flag; ships dark until the FE cards render (BE endpoints are additive).
- Cost bound: rescore-on-save = (# already-scored companies) × 2 LLM calls, throttled by existing queue concurrency (global 3, 1 per company) and 5-minute dedup buckets.
- Both repos branch from `staging` and PR to `staging` per repo convention.
