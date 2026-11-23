# Company View: Custom Tabs + Editable Sidebar — Design Spec

**Date:** 2026-07-07
**Repos:** Ergo-Dashboard-Frontend, Ergo-Dashboard-Backend
**Status:** Approved design, pending implementation plan

## Goal

Bring the company detail view to parity with the deal detail view on two customization features it currently lacks:

1. **Custom tabs** — let a user add/rename/delete tabs on a company and pick which company properties appear in each (mirrors the deal's "Edit Properties" custom tabs).
2. **Editable sidebar** — add the gear/settings icon to the company sidebar so a user can reorder and hide/show custom fields via drag-and-drop (mirrors `DealSidebarDetails.tsx`).

## Decisions (locked)

- **Scope:** Per-user, applied to **all companies**. Companies have no pipeline concept, so there is no pipeline/company-level segmentation — one config per user covers every company they open. Each teammate has their own independent config.
- **Persistence:** **Backend** for both features (custom tabs *and* sidebar layout). This syncs across devices/browsers and survives cache-clear. It intentionally diverges from the deal's localStorage-based tabs (the deal uses `customTabConfig.ts` localStorage) — in the better direction.
- **Deal view is untouched.** The deal keeps its existing behavior (localStorage tabs, pipeline/deal/view-scoped `field-layout` sidebar). All shared-component changes are additive and backward-compatible.

## Non-goals (YAGNI)

- Migrating the deal view's tabs to the backend (explicitly deferred; may revisit later).
- Org-wide/shared company configs or per-company configs (rejected during design in favor of per-user-all-companies).
- Right-rail field config on companies (`FieldConfigPopover`) — out of scope for this change.
- Company "Company Info" tab restructuring — leave the existing hardcoded tabs as-is; we only *add* custom tabs alongside them.

## Current-state reference

**Company detail (missing the features):**
- Route/page: `src/pages/CrmCompanyDetail.tsx`
- Layout (shared with deal): `src/components/DealView/EntityDetailLayout.tsx`
- Company components: `src/components/DealView/company/` — `CompanySidebar.tsx` (inline-editable fields, no gear icon), `CompanyTabs.tsx` (4 hardcoded tabs), `CompanyRightRail.tsx`, `CompanyInfoCard.tsx`
- Data: `useCompanyDetails.ts` → `CompanyDetailsResponse` (includes `normalizedFields`), writes via `useCompanyMutations.ts` → `useUpdateCompany`

**Deal detail (the source pattern):**
- Tabs + custom tabs: `src/components/DealView/DealTabs.tsx`, `src/components/DealView/tabs/customTabConfig.ts` (localStorage), `src/components/DealView/tabs/CustomPropertiesTab.tsx`
- Editable sidebar: `src/components/DealView/sidebar/DealSidebarDetails.tsx` (gear icon), backed by `src/hooks/dealview/useDealFieldLayout.ts` (backend `field-layout` API, requires `pipelineId`)
- Generic/reusable: `useFieldCustomizationMode.ts`, `FieldCustomizationContext.tsx`, `FieldCustomizationDrawer.tsx`, `shared/DraggableFieldCell.tsx`

## Architecture

### Reuse strategy

| Piece | Strategy |
|---|---|
| `EntityDetailLayout`, `FieldCustomizationContext`, `FieldCustomizationDrawer`, `DraggableFieldCell` | Reuse directly — already generic (take `section` + drag-type keys). |
| `useFieldCustomizationMode` | Reuse, but inject a **company persistence adapter** rather than the pipeline-based `useDealFieldLayout`. |
| `CustomPropertiesTab` | **Parameterize**: today it hardwires `useUpdateDeal` + a deal-only canonical-field map. Inject the field-save mutation so companies can save via `useUpdateCompany`. Deal passes its existing handler → no behavior change. |
| Persistence | One new backend document type + one endpoint pair. |

### Backend — new per-user document

Add a new polymorphic `type` on the existing `DealViewData` model (`src/models/DealViewData.js`), keyed uniquely by `(orgId, userId)`:

```
type: 'company_view_config'
orgId:   string
userId:  string
tabs:    [{ id: string, name: string, fieldKeys: string[] }]   // custom tabs
sidebar: { fieldOrder: string[], hiddenFields: string[] }        // sidebar layout
```

- Unique partial index on `(orgId, userId)` where `type === 'company_view_config'` (follows the existing per-type partial-index pattern in `DealViewData`).
- No `pipelineId` / `dealId` / `viewId` — company config is a single per-user document.

**Endpoints** (mounted alongside the existing CRM views routes, e.g. `src/routes/dashboard/crmViews.js` or a sibling):
- `GET /api/dashboard/crm/company-view-config` → returns `{ tabs, sidebar }` for the current user (defaults to `{ tabs: [], sidebar: { fieldOrder: [], hiddenFields: [] } }` when absent).
- `PUT /api/dashboard/crm/company-view-config` → upsert. Body: `{ tabs?, sidebar? }` (partial update — only the provided section is written).
- Cache invalidation consistent with existing views caching (invalidate on write).

### Frontend — persistence hook

New `src/hooks/dealview/useCompanyViewConfig.ts`:
- `useCompanyViewConfig()` — React Query read, key `['crm', 'company-view-config']`.
- `useSaveCompanyViewConfig()` — mutation with optimistic update + rollback + invalidate (per the repo's mutation convention in CLAUDE.md).
- Exposes helpers to update just `tabs` or just `sidebar`.

### Frontend — editable sidebar

- Add the `Settings` gear button + customization mode to `CompanySidebar.tsx`, mirroring `DealSidebarDetails.tsx` (drag-reorder + hide/show through the existing `FieldCustomizationDrawer`).
- Drive it with `useFieldCustomizationMode` configured with:
  - a **new `section` value** `'companySidebar'`,
  - company-specific drag-type keys (`company-sidebar-visible-field`, etc.),
  - a **persistence adapter** backed by `useCompanyViewConfig` instead of `useDealFieldLayout`.
- Drop the pipeline/deal/view scope selector in the drawer for the company case (single per-user scope). This requires the drawer/hook to support a "no scope selector" mode.
- Field source: `company.normalizedFields` (already returned by `useCompanyDetails`). Exclude fixed keys (`hubspot_owner_id`); default-hide `longtext` (same rules as deal).

### Frontend — custom tabs

- Extend `CompanyTabs.tsx` with the "+ add tab / rename / delete" UI from `DealTabs.tsx`.
- Render each custom tab with the parameterized `CustomPropertiesTab`, passing a company save handler that calls `useUpdateCompany` (with `custom_properties: { [key]: value }`).
- Tab configs read/write via `useCompanyViewConfig` (`tabs` array). Tab shape reuses `{ id, name, fieldKeys }` from `CustomDealTabConfig`.
- Built-in company tabs (Activity, Company Info, Emails, Meetings) remain hardcoded and unchanged; custom tabs render after them.

### The two real refactors (rest is wiring)

1. **`CustomPropertiesTab` → entity-agnostic.** Replace the internal `useUpdateDeal` call and `CANONICAL_FIELD_MAP` usage with an injected `onSaveField(key, value, source?)` prop (and an injected history-restore handler). Deal call site passes a deal-backed handler; company call site passes a company-backed handler.
2. **`useFieldCustomizationMode` → persistence adapter.** Abstract the layout read/write (currently `useDealFieldLayout`, pipeline-keyed) behind an adapter interface `{ load(): Layout, save(layout): void, scopes: ... }`. Deal provides the pipeline/deal/view adapter; company provides a single-scope per-user adapter over `useCompanyViewConfig`.

## Data flow

1. Company detail mounts → `useCompanyDetails(companyId)` (fields) + `useCompanyViewConfig()` (tabs + sidebar layout) load in parallel.
2. Sidebar renders custom fields ordered by `sidebar.fieldOrder`, hiding `sidebar.hiddenFields`. Gear icon toggles customization mode → drawer → drag/hide → `useSaveCompanyViewConfig` PUT (`sidebar`).
3. Tab bar renders built-in tabs + `tabs[]`. "+" adds a tab; "Edit Properties" in a custom tab updates that tab's `fieldKeys` → PUT (`tabs`). Editing a field value in a tab calls `useUpdateCompany`.

## Error handling

- Optimistic updates with rollback on error for both sidebar and tab mutations (repo convention).
- Missing/absent config returns safe defaults (empty tabs, empty layout = show all fields in default order).
- Fields present in config but no longer in `normalizedFields` (deleted CRM property) are ignored on render (mirrors deal's "N properties no longer available" handling).
- Toast on save failure via `@/lib/toast` (auto-tracked in PostHog).

## Testing

- **Backend:** unit/integration for GET/PUT `company-view-config` — default when absent, upsert creates once, partial update writes only provided section, per-user isolation, unique index enforcement.
- **Frontend:** `useCompanyViewConfig` optimistic update + rollback; `CustomPropertiesTab` renders/saves with an injected company handler (regression: deal path unchanged); company sidebar reorder/hide persists and reloads.
- **Manual:** open two companies as same user → config shared across both; open as second user → independent; reload after edits → persists; clear localStorage → still persists (backend).

## Analytics (PostHog — required by frontend CLAUDE.md)

- Company sidebar customize toggle, field hide/show/reorder, custom tab add/rename/delete, edit-properties save — mirror the existing deal events (e.g. `DEAL_VIEW_DEAL_DETAIL_BTN_CUSTOM_FIELD_SETTINGS`) with company-scoped event names.

## Open questions / risks

- The scope-selector removal must not regress the deal drawer — gate it behind a prop (`scopes?: undefined` ⇒ hide selector) rather than branching on entity type inside the drawer.
- Confirm the exact mount point/route file for the new backend endpoints during planning (crmViews vs. a new companyViewConfig route file).
