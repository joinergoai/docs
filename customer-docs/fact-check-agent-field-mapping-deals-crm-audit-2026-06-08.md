# Field Mapping + Deals CRM fact-check audit - 2026-06-08

Worker scope:

- `customer-docs/deals-crm/**/*.mdx`
- `customer-docs/field-mapping/**/*.mdx`

Do not consolidate from this file directly into public docs without rechecking source conflicts. Public pages were kept generalized and do not include customer names, private tickets, private Slack excerpts, or source-specific anecdotes.

## MCP and connector status

- CLI MCP setup check from `/Users/YashDulla/Documents/GitHub/ergo_live/docs`: `/Applications/Codex.app/Contents/Resources/codex mcp list` and `/Applications/Codex.app/Contents/Resources/codex mcp get ergo` succeeded. `ergo` is enabled with OAuth at `https://api.joinergo.com/api/mcp`.
- In-thread Ergo MCP Deals/CRM question: runId `1ba0e70c-b303-40a2-a04a-883d37ccc7a6`, threadId `c1dc3914-4fd7-463d-9346-b237f660f8fb`, status `answered`.
- In-thread Ergo MCP Field Mapping question: runId `ef04eeee-ca0c-4978-afb3-a9d340cd2762`, threadId `20e521c1-ecff-4558-8b58-bc3c922e1e63`, status `answered`.
- Linear read-only signal search succeeded. Generalized signals used: backfill gaps after adding mapped fields, deal-view task/note work not fully GA, audit trails still project work, stage/amount automation caution, and stage creation edge cases.
- Pylon read-only search succeeded after omitting the `type` filter. Generalized signals used: user-guide demand, deal creation failure questions, pipeline review/email workflow questions, and support pressure around CRM-like workflows.
- Slack read-only search blocked with `401: Reauthentication required`.
- Gmail read-only was exposed but not used; repo and MCP evidence were sufficient for this scope.

## Approved repo evidence used

- `Ergo-Dashboard-Frontend/src/pages/CrmBoardShell.tsx`: pipeline selector, Companies selector, URL handling.
- `Ergo-Dashboard-Frontend/src/pages/CrmBoard.tsx`: kanban/list views, built-in tabs, custom views, board settings, field layouts, search/filter/sort, bulk action bar, reminders filter, add deal modal.
- `Ergo-Dashboard-Frontend/src/components/CrmBoard/BulkActionBar.tsx`: bulk stage move, status, owner, pin/unpin, delete, draft generation, clear drafts.
- `Ergo-Dashboard-Frontend/src/components/CrmBoard/GenerateDraftsButton.tsx`: email draft generation plus Slack draft option gated by `ff-agent-integrations`.
- `Ergo-Dashboard-Frontend/src/pages/CrmDealDetail.tsx`, `src/components/DealView/DealTabs.tsx`, and `src/components/DealView/DealRightRail.tsx`: deal detail tabs, follow-up drafting, company/contact/document right rail, custom local tabs.
- `Ergo-Dashboard-Frontend/src/pages/CrmCompanyDetail.tsx` and `src/components/DealView/company/CompanyTabs.tsx`: company detail tabs, health, AI overview, related deals, emails, meetings, company info.
- `Ergo-Dashboard-Frontend/src/components/FieldMapping.tsx`: Field Mapping tabs and object/property/stage types.
- `Ergo-Dashboard-Frontend/src/components/SyncCRMProperties.tsx`: deal/contact/company property sync, selected existing properties, auto-generated descriptions toggle, CRM-defined property visibility.
- `Ergo-Dashboard-Frontend/src/components/SyncPipelineStages/SyncPipelineStages.tsx`: stage sync/edit modes, supported CRM handling, warning that edit mode writes directly to CRM.
- `Ergo-Dashboard-Frontend/src/components/MeetingTitles.tsx`: meeting-title phrases, Strict Mode / AI Boost toggle behavior.
- `Ergo-Dashboard-Backend/src/models/Dashboard.js`: `customProperties`, `contactProperties`, `companyProperties`, `pipelineStages`, `restrictToPipeline`, alternate domains, partnership domains, property permissions.
- `Ergo-Dashboard-Backend/src/routes/dashboard/stages.js`, `customFields.js`, `properties.js`, and `crm.js`: pipeline stage CRUD/sync, property routing, default stages, stage and property drift utilities.
- `Ergo-Dashboard-Backend/src/services/company-intelligence/*`, `deal-health/*`, and `crm/*PipelineService*`: company overview/details, deal health services, and CRM pipeline service support.

## Pages completed

Deals and CRM navigation order:

- `customer-docs/deals-crm/index.mdx`
- `customer-docs/deals-crm/deals-board-overview.mdx`
- `customer-docs/deals-crm/pipeline-view-selector.mdx`
- `customer-docs/deals-crm/kanban-and-list-views.mdx`
- `customer-docs/deals-crm/search-filter-sort-deals.mdx`
- `customer-docs/deals-crm/custom-views-and-ergo-view.mdx`
- `customer-docs/deals-crm/add-edit-deals.mdx`
- `customer-docs/deals-crm/how-ergo-names-and-matches-crm-records.mdx`
- `customer-docs/deals-crm/company-board.mdx`
- `customer-docs/deals-crm/deal-detail.mdx`
- `customer-docs/deals-crm/company-detail.mdx`
- `customer-docs/deals-crm/deal-and-account-health.mdx`
- `customer-docs/deals-crm/ai-deal-account-overviews.mdx`
- `customer-docs/deals-crm/activity-emails-meetings-and-documents-tabs.mdx`
- `customer-docs/deals-crm/bulk-actions.mdx`
- `customer-docs/deals-crm/bulk-email-slack-drafts.mdx`
- `customer-docs/deals-crm/reminders-and-follow-up-view.mdx`

Field Mapping navigation order:

- `customer-docs/field-mapping/index.mdx`
- `customer-docs/field-mapping/field-mapping-overview.mdx`
- `customer-docs/field-mapping/field-mapping-setup-required-before-crm-updates-work.mdx`
- `customer-docs/field-mapping/crm-properties.mdx`
- `customer-docs/field-mapping/property-permissions.mdx`
- `customer-docs/field-mapping/create-sync-crm-properties.mdx`
- `customer-docs/field-mapping/pipelines.mdx`
- `customer-docs/field-mapping/stage-definitions-and-ai-descriptions.mdx`
- `customer-docs/field-mapping/default-stages.mdx`
- `customer-docs/field-mapping/reorder-delete-stages.mdx`
- `customer-docs/field-mapping/stage-drift-resolution.mdx`
- `customer-docs/field-mapping/stage-controls.mdx`
- `customer-docs/field-mapping/restrict-to-pipeline.mdx`
- `customer-docs/field-mapping/company-info.mdx`
- `customer-docs/field-mapping/alternate-domains-emails.mdx`
- `customer-docs/field-mapping/partnership-domains.mdx`
- `customer-docs/field-mapping/meeting-title-ai-boost.mdx`
- `customer-docs/field-mapping/advanced-crm-toggles.mdx`
- `customer-docs/field-mapping/deal-qualification.mdx`
- `customer-docs/field-mapping/backfill-crm-fields-from-historical-meetings.mdx`

## Major corrections and consolidations

- Replaced generic page stubs with action-oriented public docs around the main customer action on each page.
- Added precise scope language around Deals feature gating, pipeline vs Companies selector, built-in views, custom views, kanban/list behavior, field layout, filters, reminders, and matching.
- Corrected public bulk-action docs to reflect code-confirmed bulk stage/status/owner/pin/delete/draft behavior while keeping Slack drafts gated by integration feature access.
- Softened AI overview and health language so docs do not imply complete, guaranteed, or final summaries.
- Kept deal task/note CRM sync out of public docs because Linear signal indicates it is still project work.
- Reframed Field Mapping as five admin tabs and separated property mapping, permissions, CRM property sync/create, pipelines/stages, stage descriptions, stage drift, restrict-to-pipeline, company/domain context, meeting-title AI Boost, advanced toggles, deal qualification, and backfill.
- Softened historical backfill language so newly mapped fields are not implied to backfill automatically or universally.

## Validation status

- `git diff --check` passed for `customer-docs/deals-crm/*.mdx` and `customer-docs/field-mapping/*.mdx` before scratch creation.
- Final validation should include the scratch files as well.

## Supplemental page-level MCP audit - 2026-06-08

Reason: supplemental request asked for page-by-page Ergo MCP loops because the prior batch used category-level MCP runs.

CLI MCP preflight: page-level preflight loop run from the docs repo for all 37 assigned pages. Every page returned `codex mcp list` OK and `codex mcp get ergo` OK with Ergo enabled through OAuth. No CLI login was required.

Connector signal: Linear read-only search succeeded for broad planning context and reinforced that backfill, deal-view tasks/notes, audit trail, CRM record processing, and reminders are active planning areas. Pylon read-only recent issue search succeeded; used only generalized signal around recorder/email/HubSpot/manual-stage workflows. Pylon search does not provide useful full-text page-level search in the exposed tool, so no private issue details were used. Slack direct search was not used in this supplemental pass; prior connector note remains that Slack search was blocked by `401: Reauthentication required`. Gmail was not used.

### Deals and CRM page-level MCP ledger

| Page | Ergo MCP result | Decision |
| --- | --- | --- |
| `customer-docs/deals-crm/index.mdx` | answered; runId `dcba7cb4-5548-4f24-b3bb-006989e5a75f`; threadId `6360cedb-e681-43ab-af8b-2497bb0e5bba` | Patched internal feature-flag wording, writeback setup nuance, and indexed-source caveat. |
| `customer-docs/deals-crm/deals-board-overview.mdx` | answered; runId `698e70c2-ba11-4867-a0be-e56c17eed9cc`; threadId `c77cbf60-9d0c-4dd8-9638-64c8616f0fff` | Patched internal feature-flag wording. Code confirmed board/list/bulk behavior; no additional page change needed. |
| `customer-docs/deals-crm/pipeline-view-selector.mdx` | answered; runId `4428bc29-82de-439a-9a9d-e7faa3a271a2`; threadId `c1637de6-bb32-491d-86b3-8cf2e227e764` | Patched Companies selector and reminder-view wording; removed pipeline-state overclaim. |
| `customer-docs/deals-crm/kanban-and-list-views.mdx` | answered; runId `70e843e3-36e3-4e81-91df-e5b0f454e8fc`; threadId `925b9935-792e-4e27-a679-9df1ee6a4cb6` | Patched internal feature-flag wording only; frontend code confirmed list/kanban claims. |
| `customer-docs/deals-crm/search-filter-sort-deals.mdx` | answered; runId `1e23309f-212c-45b4-bd80-1edc27fcf599`; threadId `90fa8482-c448-4ea7-b98e-665d82afa18d` | Patched internal feature-flag wording and troubleshooting reset phrasing. |
| `customer-docs/deals-crm/custom-views-and-ergo-view.mdx` | answered; runId `34a38266-db5e-487a-b540-4046507c321d`; threadId `f9e632c3-d5da-44c0-9830-cde08dea79e4` | Patched internal feature-flag wording and reminder-view wording. |
| `customer-docs/deals-crm/add-edit-deals.mdx` | answered; runId `39444f6c-4a1c-4aa7-9366-6a163bde9a52`; threadId `336feea8-6ec7-423e-b471-a28808646cc9` | Patched internal feature-flag wording, required-field wording, and task/note sync overclaim. |
| `customer-docs/deals-crm/how-ergo-names-and-matches-crm-records.mdx` | answered; runId `4764a02a-e6e5-411f-9248-6cd4ea6931e0`; threadId `9ba2e453-15d2-4b99-9b33-5e6180fff90a` | Patched internal feature-flag wording, partnership-domain wording, and source CRM association caveat. |
| `customer-docs/deals-crm/company-board.mdx` | answered; runId `7116f030-7a35-48da-b186-8c73deb628a9`; threadId `2583a2d8-a642-4432-9bfe-3107b9a8eea3` | Patched internal feature-flag wording and softened available company-detail context. |
| `customer-docs/deals-crm/deal-detail.mdx` | answered; runId `c26cb636-ca6a-4ee5-b49c-8038ec55c3a2`; threadId `e2c3bbd6-fd11-4d77-9f26-b6d250bd30de` | Patched internal feature-flag wording, unsupported search/mention entry points, and unsupported linked-doc/right-rail claims. |
| `customer-docs/deals-crm/company-detail.mdx` | answered; runId `51a1bdf9-2422-4c48-9139-a478bcd5a20f`; threadId `54f16184-949b-45cd-b170-6423cdca90df` | Patched internal feature-flag wording and softened exact tab/right-rail/Slack wording. |
| `customer-docs/deals-crm/deal-and-account-health.mdx` | answered; runId `edb90b26-2c91-471d-9381-4d0f372ac5fc`; threadId `509618c4-3d3e-4acc-8a91-468b958d2560` | Patched internal feature-flag wording, indexed-source caveat, and deal vs account health scope. |
| `customer-docs/deals-crm/ai-deal-account-overviews.mdx` | answered; runId `4e427ff6-a9d0-4c16-a1ac-02f9208a0e50`; threadId `59dd5770-71a8-43ef-b917-58c5543f1a15` | Patched internal feature-flag wording, removed unsupported document/regeneration phrasing, and added not-yet-generated caveat. |
| `customer-docs/deals-crm/activity-emails-meetings-and-documents-tabs.mdx` | answered; runId `c45df94f-32a8-434f-9e9e-f2af9fc4ab1d`; threadId `9c13fbee-07dc-442b-a31c-f6eb8bef61f7` | Patched internal feature-flag wording and removed unsupported documents/right-rail and exact-tab overclaims. |
| `customer-docs/deals-crm/bulk-actions.mdx` | answered; runId `daf801e3-d661-4ee4-89f2-deec017ea55e`; threadId `af48ae2f-7196-41ee-a736-6c38cb8c8747` | Patched internal feature-flag wording and replaced unsupported pin/delete/clear/Slack overclaim phrasing with code/MCP-supported actions. |
| `customer-docs/deals-crm/bulk-email-slack-drafts.mdx` | answered; runId `c1ac22cc-5414-483c-aaf2-e870184355d0`; threadId `d40eb4af-cdbc-4127-ab00-28105707fbf0` | Patched internal feature-flag wording, removed Slack draft parity, removed document dependency, and added shared-prompt/contact-email caveats. |
| `customer-docs/deals-crm/reminders-and-follow-up-view.mdx` | answered; runId `d0ea5090-9021-4597-baa8-554100d044ee`; threadId `c5105883-ab9a-4036-a197-1ade95fa3e3b` | Patched internal feature-flag wording and softened enabled/dismiss/complete/replace action claims. |

### Field Mapping page-level MCP ledger

| Page | Ergo MCP result | Decision |
| --- | --- | --- |
| `customer-docs/field-mapping/index.mdx` | answered; runId `541646c5-8402-4720-b814-895a726f1d1c`; threadId `cb706f05-09a5-416c-9a6a-b3b36d267f99` | No supplemental patch; current index already stays broad and points to specific pages. |
| `customer-docs/field-mapping/field-mapping-overview.mdx` | answered; runId `0956ef18-d041-4172-9820-62b72da7f5f4`; threadId `f841f196-52f2-4043-b5d2-772ef538e19f` | No supplemental patch; actual page avoids the inferred self-serve/backfill/owner overclaims. |
| `customer-docs/field-mapping/field-mapping-setup-required-before-crm-updates-work.mdx` | answered; runId `b13a664c-a125-40fe-a114-b9e5854a9bfe`; threadId `486b8365-ab2d-4051-a362-e9e0b686200b` | No supplemental patch; actual page already distinguishes mappings, permissions, and testing before broad automation. |
| `customer-docs/field-mapping/crm-properties.mdx` | answered; runId `32bc639d-eff0-4caf-af02-fa14f0f32408`; threadId `4496044e-4b2f-4032-97f2-61408f87a4a2` | No supplemental patch; actual page avoids custom-object and approval-gate overclaims. |
| `customer-docs/field-mapping/property-permissions.mdx` | answered; runId `05024111-c6f9-4b65-b3c8-65607c575515`; threadId `8de520e1-39c3-4060-b60c-50a9dbc3fa26` | No supplemental patch; actual page already frames CRM restrictions and sensitive fields cautiously. |
| `customer-docs/field-mapping/create-sync-crm-properties.mdx` | answered; runId `4b5dee2a-0462-4016-b662-72c517b7ae52`; threadId `d64091e2-de3a-4cdd-9227-a0e0662293e5` | No supplemental patch; actual page already keeps create/sync as admin workflow and requires review before use. |
| `customer-docs/field-mapping/pipelines.mdx` | first ask timed out before run ID; retry answered; runId `1a3c1ccd-058d-4173-96dd-0785d9b738ce`; threadId `873b42b8-9862-4717-ac99-c707b152afe9` | Patched unsupported CRM-name keywords, narrowed pipeline-scope wording, and added manual-resync caveat. |
| `customer-docs/field-mapping/stage-definitions-and-ai-descriptions.mdx` | answered; runId `d8c9463e-317c-4167-80a8-fc852c7e2cfc`; threadId `5d43c6ec-a3f1-4946-b91e-ba4269f32283` | Patched wording around reviewing descriptions, stage IDs/display names, and CRM validation/stage controls. |
| `customer-docs/field-mapping/default-stages.mdx` | answered; runId `aebb9544-6cc0-4ed4-8d26-5a1275aef08f`; threadId `4a8b0c0f-b251-4105-bedc-44be71b89076` | No supplemental patch; actual page already says defaults are starting points only and require CRM-owner review. |
| `customer-docs/field-mapping/reorder-delete-stages.mdx` | answered; runId `e66609e5-c1c4-44b1-8369-ca7e43d1f93e`; threadId `13d328a3-ce7a-47a2-809c-80ba36346c04` | Patched stage-order/writeback overclaim and added manual-resync caveat. |
| `customer-docs/field-mapping/stage-drift-resolution.mdx` | answered; runId `4e680a6d-05eb-41e7-906c-90860310ac88`; threadId `7fd8f7b2-e8bd-4b08-b915-498f3b3f23a1` | No supplemental patch; actual page already avoids automatic-drift-detection promises. |
| `customer-docs/field-mapping/stage-controls.mdx` | answered; runId `2bb3eacf-6aa4-4f04-8f2b-05cd34dbf2e8`; threadId `89e3f946-5746-4116-b37e-0d860a7ee8a7` | No supplemental patch; actual page is generic and does not promise rollback or email/Slack deal creation. |
| `customer-docs/field-mapping/restrict-to-pipeline.mdx` | answered; runId `12e1baf9-0455-4887-ae29-d400974b8da3`; threadId `5b35d2e2-2b8a-479e-8912-e8061fc594d7` | Patched premise from hard restriction to synced-pipeline scope and unsynced-pipeline caveats. |
| `customer-docs/field-mapping/company-info.mdx` | answered; runId `96df41dd-0fa5-4682-964b-0e1fb97cbfad`; threadId `d222e0f4-ae84-48d3-880d-8b1ecb87e2a4` | No supplemental patch; MCP could not inspect MDX and actual page already avoids CRM-company writeback overclaims. |
| `customer-docs/field-mapping/alternate-domains-emails.mdx` | answered; runId `0183957a-dbee-4118-9999-09ddc061d367`; threadId `2e0e686d-7dc3-4562-bcb7-1c98c952abfa` | No supplemental patch; actual page already distinguishes generic/personal/partner/internal domains and CRM association limits. |
| `customer-docs/field-mapping/partnership-domains.mdx` | answered; runId `1f68bd13-65a1-4d0f-8a4f-49e2d719da96`; threadId `264fbbac-560d-4605-9ab0-12c6f03114e1` | No supplemental patch; actual page says classify partner context and avoids promising broad email suppression or retroactive cleanup. |
| `customer-docs/field-mapping/meeting-title-ai-boost.mdx` | answered; runId `a88f4a36-e0ff-47f2-b556-c3902305e43a`; threadId `8d2f7eb4-a873-4faf-b298-01600ceaf0ca` | Patched Strict Mode skip behavior, external-scheduler caveat, and case-insensitive phrase matching. |
| `customer-docs/field-mapping/advanced-crm-toggles.mdx` | answered; runId `4db898b7-a3a2-4cab-8fc1-295da1362353`; threadId `4e0a9310-6820-4cdc-b9e3-fe422f41d2c1` | No supplemental patch; actual page is intentionally generic and does not claim duplicate-free creation or rollback. |
| `customer-docs/field-mapping/deal-qualification.mdx` | blocker; two `ask_ergo_agent` attempts timed out before returning a run ID | No supplemental patch; actual page is conservative and issue recorded in unverified notes. |
| `customer-docs/field-mapping/backfill-crm-fields-from-historical-meetings.mdx` | answered; runId `6cc281ce-751f-484e-95ac-fd90a5024122`; threadId `5f9bbfb4-dd6e-4718-8f37-5bc7ad53a8a0` | Patched source-association, full-history, Slack/email/date/stage/amount limitation caveats. |

### Supplemental public-doc patches

- Deals/CRM: removed internal feature-flag name from every Deals page, narrowed Slack draft parity, unsupported documents/right-rail claims, exact tab overclaims, unsupported search/mention entry points, future task/note sync wording, regeneration wording, and overly strong reminder/follow-up action wording.
- Field Mapping: narrowed pipeline scope and supported-CRM wording, clarified stage description/stage ID behavior, added manual stage-resync caveats, corrected stage-order/writeback framing, clarified meeting-title Strict Mode behavior, and tightened historical backfill source/scope limits.
