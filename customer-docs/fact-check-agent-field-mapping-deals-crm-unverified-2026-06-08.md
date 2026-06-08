# Field Mapping + Deals CRM unverified notes - 2026-06-08

These notes were intentionally kept out of public customer docs or softened because they were connector-derived, MCP-derived, anecdotal, roadmap-oriented, or not fully code-confirmed in the approved repos.

## Deals and CRM

- MCP described specific Ergo View thresholds, health score tiers, nightly health refresh, fixed health-signal counts, and default view definitions. Public docs were kept broader because repo verification showed the relevant surfaces but not enough stable public guarantee for those exact thresholds.
- MCP stated bulk actions are only documented in list view and did not confirm stage/owner/delete bulk actions. Frontend code confirms bulk stage move, status, owner, pin/unpin, delete, draft generation, and clear drafts, so public docs mention these but keep scope/permission cautions.
- MCP did not confirm bulk Slack draft GA behavior. Frontend code shows a Slack draft option gated by `ff-agent-integrations`, so public docs describe Slack drafts only when the relevant integration/feature access is enabled.
- MCP mentioned deal stage updates not being automatic and lead/custom-object limitations. These were not added to assigned pages because they belong in integrations/setup/troubleshooting or require broader product confirmation.

## Field Mapping

- MCP could not verify customer-facing per-property read/write controls from its sources. Backend and frontend code show property permissions APIs/models, so public docs keep permission guidance but avoid over-specific UI labels.
- MCP warned that `stage drift resolution` and `restrict-to-pipeline` may not be official UI labels. Public docs describe the behavior with cautious wording and avoid promising a discrete named button.
- MCP listed advanced toggles and exact verbal labels from onboarding. Public docs were kept generic because exact UI strings need engineering/UI confirmation.
- MCP described a discrete deal qualification behavior through mapped fields but not a standalone settings screen. Public docs treat deal qualification as mapped fields plus stage criteria, not as a separate confirmed panel.
- MCP described historical backfill as possible but high-effort/source-limited. Public docs now say backfill may be limited or operations-supported and is not guaranteed for every newly mapped field or historical deal.

## Supplemental page-level unresolved notes

- `customer-docs/field-mapping/deal-qualification.mdx`: page-specific Ergo MCP ask timed out twice before returning a run ID, so no page-level MCP answer was available. Public page was left unchanged because approved-repo evidence and existing wording were conservative.
- Several Field Mapping MCP answers reported that the actual MDX was not available to the Ergo agent and inferred likely claims from the page title/topic. Public edits were made only when the live MDX contained the flagged overclaim or when approved repo evidence supported a safer caveat.
- Linear read-only search showed active planning around backfill, deal-view task/note CRM sync, audit trails, CRM record processing, and reminders. Public docs avoid publishing those as available behavior unless code-confirmed in the approved repos.
- Pylon read-only recent issue search succeeded, but exposed only broad recent issue summaries in this pass and no useful full-text per-page search. No private issue names, numbers, or customer-specific details were used in public docs.
