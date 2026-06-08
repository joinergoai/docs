# Drafts, AI Search, and Reporting fact-check scratch audit - 2026-06-08

Worker scope:

- `customer-docs/drafts-email/**/*.mdx`
- `customer-docs/ai-search-automation/**/*.mdx`
- `customer-docs/reporting/**/*.mdx`

Editing boundaries honored: only assigned category pages and this worker's two scratch files were edited. Shared audit files were not edited. Other workers' dirty-tree changes were not reverted.

## Shared verification setup

- Docs repo: `/Users/YashDulla/Documents/GitHub/ergo_live/docs`
- Approved product repos used:
  - `/Users/YashDulla/Documents/GitHub/ergo_live/docs`
  - `/Users/YashDulla/Documents/GitHub/ergo_live/Ergo-Dashboard-Frontend`
  - `/Users/YashDulla/Documents/GitHub/ergo_live/Ergo-Dashboard-Backend`
- Approved repos not needed for this scope after frontend/backend checks: `Desktop-App`, `Ergo-Automations`.
- Excluded repos were not used for product verification: `ergoagents`, `ergoemailjobs`, `chrome-extension`, `internal-dashboard`, `Contextbot`.
- CLI MCP check from docs repo:
  - `/Applications/Codex.app/Contents/Resources/codex mcp list`
  - `/Applications/Codex.app/Contents/Resources/codex mcp get ergo`
  - Result: `ergo` enabled, transport `streamable_http`, URL `https://api.joinergo.com/api/mcp`, OAuth auth.
  - CLI blocker: nested CLI path exposed MCP configuration but not a direct page-specific ask/query command in this session; page-specific questions were run through in-thread Ergo MCP instead.
- Connector context:
  - Pylon read-only search: used only as generalized signal for demand around email failures, automated follow-up workflows, Slack workflow clarity, and reporting visibility. No customer names, issue IDs, or private specifics were published.
  - Linear read-only search: used only as generalized signal for email analytics/templates, automation processing, reporting KPI dashboard, and auto-draft/send demand. No Linear IDs published.
  - Gmail read-only search/read: used only as broad signal for reporting email and docs-review context. No private names or email details published.
  - Slack read-only: available through connector search, but no Slack quotes or private excerpts were needed for final public docs.

## Repo evidence used

Drafts/email:

- Frontend: `src/pages/EmailDraftsInbox.tsx`
- Frontend: `src/pages/EmailDraft.tsx`
- Frontend: `src/api/draftEmails.ts`
- Frontend: `src/api/draftEmails.types.ts`
- Frontend: `src/api/emailTemplate.ts`
- Frontend: `src/api/emailSignature.ts`
- Frontend: `src/api/emailOpenTracking.ts`
- Frontend: `src/hooks/useEmailOpenTracking.ts`
- Frontend: `src/components/EmailDrafts/openTrackingStatus.ts`

AI search/automation:

- Frontend: `src/pages/Search.tsx`
- Frontend: `src/api/search.ts`
- Frontend: `src/pages/ScheduledAgentRuns.tsx`
- Frontend: `src/api/scheduledAgentRuns.ts`
- Frontend: `src/components/FollowupsPanel.tsx`
- Frontend: `src/components/DashboardLayout.tsx`

Reporting:

- Frontend: `src/pages/Reporting.tsx`
- Frontend: `src/pages/ChartBuilderPage.tsx`
- Frontend: `src/pages/CrossOrgAnalytics.tsx`
- Frontend: `src/api/reporting.ts`
- Frontend: `src/api/dashboards.ts`
- Frontend: `src/hooks/useReportingAccess.ts`
- Frontend: `src/components/Reporting/SavedReports.tsx`
- Frontend: `src/components/Reporting/ChartBuilder.tsx`
- Frontend: `src/components/Reporting/CustomReportFields.tsx`
- Frontend: `src/components/Reporting/CallGradingRubrics.tsx`
- Frontend: `src/components/Reporting/ShareDashboardButton.tsx`
- Frontend: `src/components/Reporting/ShareReportButton.tsx`
- Frontend: `src/components/Reporting/EmailCadencesTab.tsx`
- Frontend: `src/components/Reporting/useReportingEmailCadenceForm.ts`
- Frontend: `src/components/Reporting/ReportingEmailCadenceModal.types.ts`
- Frontend: `src/components/Reporting/ReportingEmailCadenceModal.utils.ts`
- Frontend: `src/components/Reporting/ReportingEmailRunDetailDrawer.tsx`
- Frontend: `src/components/Reporting/RepPerformanceTab.tsx`
- Backend: `src/routes/dashboard/reporting.js`
- Backend: `src/services/reportingDefaults.js`
- Backend: `src/emails/WeeklyReportingEmailCron.js` was read only to identify legacy/internal cadence behavior; customer/org-specific hard-coded mappings were not used in public docs.

## Validation commands

- `git diff --check -- customer-docs/drafts-email/*.mdx` passed.
- `git diff --check -- customer-docs/ai-search-automation/*.mdx` passed.
- `git diff --check -- customer-docs/reporting/*.mdx` passed.
- Combined link/frontmatter/image script passed for all assigned categories.
- Privacy/overclaim scan found only intentional caveats such as "does not guarantee" and "does not always expose"; no customer names, private ticket IDs, Slack quotes, Linear IDs, or roadmap promises were present in assigned pages.

## Page audit - Drafts and email

### `customer-docs/drafts-email/index.mdx`

- docs.json section: root page for Drafts and email.
- Frontmatter/links read: title/description/icon/keywords present; related links resolve.
- Ergo MCP: runId `4dba86f7-15e6-46eb-9360-1952579b04bf`, threadId `0839163b-3ee9-4204-8f41-712e85331730`, status answered.
- Repo verification: draft inbox, draft API, email template/signature/open-tracking APIs.
- Edit result: strengthened section index around inbox, review/send, templates/signatures, sent/open tracking, and failed draft paths.
- Validation: frontmatter, links, images, privacy scan, and diff check passed.

### `customer-docs/drafts-email/drafts-inbox.mdx`

- docs.json section: first Drafts and email page after root.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `25a1c86b-7a60-45e9-a4de-41fc98e2ae34`, threadId `5ddd30c7-1038-403c-8a35-74824b01eedb`, status answered.
- Repo verification: `EmailDraftsInbox.tsx`, `draftEmails.ts`, `draftEmails.types.ts`.
- Edit result: documented queue review, search/user filtering, source caveats, and provider-side draft caveat.
- Validation: passed.

### `customer-docs/drafts-email/draft-tabs-and-queues.mdx`

- docs.json section: second Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `2454f220-0bf3-48c8-b562-f723b383b4db`, threadId `aa38e325-6702-4949-93f7-44be7c9064c5`, status answered.
- Repo verification: `EmailDraftsInbox.tsx` tab/queue behavior.
- Edit result: documented Post Call, Surfacing, Account Handoffs, Reminders, Scheduled, Composed, Sent, Errors, and Go Mode queues.
- Validation: passed.

### `customer-docs/drafts-email/draft-email-logic-when-drafts-are-created-and-how-to-dismiss.mdx`

- docs.json section: third Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `676cd8b4-1849-46cb-9e0b-caae338c1700`, threadId `2a134f65-da74-4b06-9b8d-3cc3960f9031`, status answered.
- Repo verification: draft API/types and inbox dismissal/disqualification behavior.
- Edit result: softened broad creation claims; separated triggers, relevance checks, dismiss/disqualify, and retry/report paths.
- Validation: passed.

### `customer-docs/drafts-email/turn-post-call-drafts-on-or-off.mdx`

- docs.json section: fourth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `3b944336-62ba-49eb-bc68-f4e904a91df4`, threadId `339c056f-c6aa-41bb-8092-eca061dea5e8`, status answered.
- Repo verification: draft settings and post-call draft behavior from frontend/API.
- Edit result: clarified toggle scope and that turning drafts on does not guarantee every meeting creates a draft.
- Validation: passed.

### `customer-docs/drafts-email/compose-a-new-email.mdx`

- docs.json section: fifth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `6c37f3e2-6c01-471f-8f32-24dc15917dd0`, status queued/not answered during audit window.
- Repo verification: draft compose route/API and templates/thread context.
- Edit result: separated manual compose from AI-created draft review; documented recipient/body/template/thread checks.
- Validation: passed.

### `customer-docs/drafts-email/review-edit-ai-drafts.mdx`

- docs.json section: sixth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `d9051639-00f4-4b1b-83d8-268c8728a649`, threadId `152f41f5-44e7-4a2e-b0ab-ef6cc161d0f2`, status answered.
- Repo verification: draft detail/review/send APIs.
- Edit result: emphasized human review of sender, recipients, body, source context, attachments, links, and signature.
- Validation: passed.

### `customer-docs/drafts-email/reprompt-drafts-with-ai.mdx`

- docs.json section: seventh Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `ab4876ed-7b28-41b4-94dd-b82fea4dc666`, threadId `94b58e2c-796f-4f83-aa6f-fed80c77c584`, status answered.
- Repo verification: draft revision/AI reprompt behavior.
- Edit result: documented same-draft revision, prompt specificity, no guaranteed final copy, and review after reprompt.
- Validation: passed.

### `customer-docs/drafts-email/thread-history-and-related-threads.mdx`

- docs.json section: eighth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `a9af4127-1c8c-4fb9-a12e-a65568c37d6a`, status queued/not answered during audit window.
- Repo verification: draft detail/thread APIs and email search/thread context.
- Edit result: documented thread history, related threads, source freshness, and review caveats.
- Validation: passed.

### `customer-docs/drafts-email/send-schedule-unschedule-undo.mdx`

- docs.json section: ninth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `8b180353-ba87-4bf1-8179-c0032de0b4e1`, status queued/not answered during audit window.
- Repo verification: draft send/schedule/unschedule/undo APIs.
- Edit result: separated send, schedule, unschedule, undo, provider validation, and failure retry/report behavior.
- Validation: passed.

### `customer-docs/drafts-email/attachments-images-and-links.mdx`

- docs.json section: tenth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `ac26066e-a005-4f44-8e3a-b6f202e06def`, status queued/not answered during audit window.
- Repo verification: draft editor/send APIs and provider failure paths.
- Edit result: documented attachment/image/link review, provider limits, and failure cases without overclaiming allowed file types.
- Validation: passed.

### `customer-docs/drafts-email/dismiss-disqualify-drafts.mdx`

- docs.json section: eleventh Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `4ae2d934-1e91-4f68-abf0-54e3069866b1`, status queued/not answered during audit window.
- Repo verification: dismissal/disqualification and queue behavior.
- Edit result: documented dismiss vs disqualify and when to use each.
- Validation: passed.

### `customer-docs/drafts-email/failed-drafts-retry-report.mdx`

- docs.json section: twelfth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `9c84a369-56fb-4b89-b26e-8dd8b6e3f082`, status queued/not answered during audit window.
- Repo verification: failed draft/error queue and retry/report behavior.
- Edit result: documented failure causes, retry path, and what to report to support without private internals.
- Validation: passed.

### `customer-docs/drafts-email/go-mode-and-bulk-sending.mdx`

- docs.json section: thirteenth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `c02dd323-22c6-484a-aef0-ea6806352302`, status queued/not answered during audit window.
- Repo verification: Go Mode queue and bulk sending controls.
- Edit result: clarified bulk review/send behavior and retained human-review caveats.
- Validation: passed.

### `customer-docs/drafts-email/open-tracking-and-sent-flow.mdx`

- docs.json section: fourteenth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `fa7c5122-4400-46c8-9c4b-db13f70ca2e9`, status queued/not answered during audit window.
- Repo verification: `emailOpenTracking.ts`, `useEmailOpenTracking.ts`, open tracking status component.
- Edit result: documented open pixel caveats, no per-recipient attribution claim, and sent flow.
- Validation: passed.

### `customer-docs/drafts-email/team-access-to-email-drafts.mdx`

- docs.json section: fifteenth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `fa016b9f-2da3-4c6a-ba24-11dcb704f154`, status queued/not answered during audit window.
- Repo verification: org draft access and user selector behavior in inbox.
- Edit result: clarified team/org access and permissions caveats.
- Validation: passed.

### `customer-docs/drafts-email/email-signatures-and-draft-footers.mdx`

- docs.json section: sixteenth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `f993c17a-b535-40a6-874c-fa4630fff6f0`, status queued/not answered during audit window.
- Repo verification: `emailSignature.ts`, draft review/send behavior.
- Edit result: documented signature/footer review and provider/account caveats.
- Validation: passed.

### `customer-docs/drafts-email/templates-overview.mdx`

- docs.json section: seventeenth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `88b842d5-85d7-4c9c-a0b1-cb85ec56728a`, status queued/not answered during audit window.
- Repo verification: `emailTemplate.ts`, template references in draft creation/review.
- Edit result: clarified templates guide draft generation but do not guarantee final copy.
- Validation: passed.

### `customer-docs/drafts-email/create-edit-templates.mdx`

- docs.json section: eighteenth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `f238841b-9949-41b0-89f1-6e1e9df7d973`, status queued/not answered during audit window.
- Repo verification: template API and template management UI.
- Edit result: documented create/edit/delete considerations and template quality checks.
- Validation: passed.

### `customer-docs/drafts-email/ai-template-builder.mdx`

- docs.json section: nineteenth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `b0700583-2c73-4c46-94bc-e924a0099711`, status queued/not answered during audit window.
- Repo verification: AI template builder and template APIs.
- Edit result: framed generated templates as reviewable drafts, not guaranteed final language.
- Validation: passed.

### `customer-docs/drafts-email/sent-email-browser.mdx`

- docs.json section: twentieth Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `273c5040-2ed7-4c94-bd90-ed5b0db5cdcb`, status queued/not answered during audit window.
- Repo verification: sent email browser and open tracking APIs.
- Edit result: documented sent email browsing, search/filter use, and provider caveats.
- Validation: passed.

### `customer-docs/drafts-email/auto-send-settings.mdx`

- docs.json section: twenty-first Drafts and email page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `d232fa30-a2dd-49f0-a505-05b7d9b8f6e1`, status queued/not answered during audit window.
- Repo verification: draft settings and send/schedule behavior.
- Edit result: limited auto-send language to advanced/narrow settings; avoided blanket auto-send or no-auto-send claims.
- Validation: passed.

## Page audit - Ergo AI, search, and automation

### `customer-docs/ai-search-automation/index.mdx`

- docs.json section: root page for Ergo AI, search, and automation.
- Frontmatter/links read: title/description/icon/keywords present; related links resolve.
- Ergo MCP: runId `ff8933ad-03c7-4e31-91c2-319bfb678c13`, status queued/not answered during audit window.
- Repo verification: `Search.tsx`, `search.ts`, `ScheduledAgentRuns.tsx`, scheduled run API, follow-ups panel.
- Edit result: strengthened section routing across chat, sources/actions, scheduled runs, search, and follow-ups.
- Validation: passed.

### `customer-docs/ai-search-automation/chat-with-ergo.mdx`

- docs.json section: first AI/search page after root.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `f6291fcd-f135-420c-8336-19330f4a8095`, status queued/not answered during audit window.
- Repo verification: search/chat UI and source/action semantics.
- Edit result: clarified chat responses are context-grounded and proposed actions need review.
- Validation: passed.

### `customer-docs/ai-search-automation/understanding-sources-actions-in-chat.mdx`

- docs.json section: second AI/search page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `6eabb49f-244e-4d06-b1e0-81f77e63e676`, status queued/not answered during audit window.
- Repo verification: chat/search source and action components.
- Edit result: separated sources from actions and avoided implying source data authorizes actions automatically.
- Validation: passed.

### `customer-docs/ai-search-automation/floating-agent-panel.mdx`

- docs.json section: third AI/search page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `535c7128-e56f-48ea-8e69-ebd1a92e09e8`, status queued/not answered during audit window.
- Repo verification: dashboard layout and agent panel context.
- Edit result: added caveat that panel context does not guarantee every visible page field is included.
- Validation: passed.

### `customer-docs/ai-search-automation/using-deal-and-meeting-context.mdx`

- docs.json section: fourth AI/search page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `5fdf4ddb-02ca-43dc-82c6-adf97e1463d4`, status queued/not answered during audit window.
- Repo verification: deal/meeting detail context surfaces and search API.
- Edit result: documented deal/meeting context use, stale/missing context caveats, and review before actions.
- Validation: passed.

### `customer-docs/ai-search-automation/scheduled-agent-runs.mdx`

- docs.json section: fifth AI/search page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `3fe6e08d-3c9f-412c-b006-b0a2625d9739`, status queued/not answered during audit window.
- Repo verification: `ScheduledAgentRuns.tsx`, `scheduledAgentRuns.ts`.
- Edit result: documented alpha/narrow scheduled runs, weekly schedule, enable/edit/delete/run-now, and max-active-run caveat.
- Validation: passed.

### `customer-docs/ai-search-automation/email-slack-delivery-for-scheduled-runs.mdx`

- docs.json section: sixth AI/search page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `f67ae851-90a1-4909-a084-b25873bfe367`, status queued/not answered during audit window.
- Repo verification: scheduled run delivery settings and Slack/email integrations.
- Edit result: separated run execution from delivery and avoided guaranteed delivery claims.
- Validation: passed.

### `customer-docs/ai-search-automation/scheduled-run-history-and-health.mdx`

- docs.json section: seventh AI/search page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `873dffeb-3494-48a6-aafb-714607482944`, status queued/not answered during audit window.
- Repo verification: scheduled run history/status APIs.
- Edit result: documented statuses, active run health, and how to inspect failed/skipped runs.
- Validation: passed.

### `customer-docs/ai-search-automation/search-across-meetings-emails-and-documents.mdx`

- docs.json section: eighth AI/search page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `7eba75b7-a7b1-4074-80b3-10f9cb02d3b9`, status queued/not answered during audit window.
- Repo verification: `Search.tsx`, `search.ts`.
- Edit result: documented searchable entities `meeting`, `email_thread`, and `user_document`; emphasized access/freshness caveats.
- Validation: passed.

### `customer-docs/ai-search-automation/search-filters-modes-results.mdx`

- docs.json section: ninth AI/search page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `53891e9d-2e05-44b5-9172-872073acf55f`, status queued/not answered during audit window.
- Repo verification: search filters, modes, paging, and query behavior.
- Edit result: documented hybrid/keyword/semantic modes, entity filters, attendee filter behavior, query length, and result limits.
- Validation: passed.

### `customer-docs/ai-search-automation/follow-ups-panel.mdx`

- docs.json section: tenth AI/search page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `a8fea167-c1da-4f86-9918-1a8a3fba0e74`, status queued/not answered during audit window.
- Repo verification: `FollowupsPanel.tsx`, dashboard layout feature flag references.
- Edit result: separated follow-ups panel from scheduled runs and Drafts; added feature-flag/access caveat.
- Validation: passed.

## Page audit - Reporting

### `customer-docs/reporting/index.mdx`

- docs.json section: root page for Reporting.
- Frontmatter/links read: title/description/icon/keywords present; related links resolve.
- Ergo MCP: runId `dff913ce-47b9-4f4e-bb28-d2548ee79996`, threadId `1e3ecae5-48b2-41fa-8652-bde8845a9b0b`, status answered.
- Repo verification: Reporting route/tabs/access hook, dashboards API, custom fields/rubrics/cadences APIs.
- Edit result: replaced template text with workflow router and access/freshness caveats.
- Validation: passed.

### `customer-docs/reporting/reporting-overview.mdx`

- docs.json section: first Reporting page after root.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `fe2b4a7c-cb67-47af-9451-119e3ec959e4`, threadId `ffce8fcb-9538-404b-9438-ac5a62b81a9f`, status answered.
- Repo verification: `Reporting.tsx`, `useReportingAccess.ts`, `reporting.ts`.
- Edit result: documented view/create/admin access, dashboard status/freshness, tabs, and interpretation checklist.
- Validation: passed.

### `customer-docs/reporting/default-dashboards.mdx`

- docs.json section: second Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `fe5b5ef3-2dd0-4bac-9c38-e7f707b1ad2f`, threadId `4da8df22-0ca0-4131-bb3b-944fdaa0da99`, status answered.
- Repo verification: `createDefaultDashboard` and `CreateDefaultDashboardModal` usage, backend `reportingDefaults.js`.
- Edit result: documented Add Default Dashboard, Sales/CS/Product types, team scoping, and non-guaranteed data availability.
- Validation: passed.

### `customer-docs/reporting/create-edit-reports.mdx`

- docs.json section: third Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `b28c3739-1b60-4d11-8bbd-298f50dd4836`, threadId `42c4cd72-5039-4206-bea4-f0b0bf5c4bf0`, status answered.
- Repo verification: `ChartBuilderPage.tsx`, `ChartBuilder.tsx`, dashboards widget update API.
- Edit result: documented create/edit flow, required main category, dashboard save, and restricted category combinations.
- Validation: passed.

### `customer-docs/reporting/chart-builder.mdx`

- docs.json section: fourth Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `ba20ccb7-8625-44ca-874b-754c2695d993`, threadId `e72bc66d-e947-4ee5-b00f-cae7f81e0dc3`, status answered.
- Repo verification: `ChartBuilder.tsx`, `types.ts`, `ChartDisplay.tsx`.
- Edit result: documented main category, breakdown/filter compatibility, time ranges, bar/pie chart types, and save requirements.
- Validation: passed.

### `customer-docs/reporting/filters-time-ranges-and-drilldowns.mdx`

- docs.json section: fifth Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `cd778f07-d774-4f9f-86d3-46204cf64f1a`, threadId `f55470de-f1d9-4cf2-8cfc-627c574945ff`, status answered.
- Repo verification: dashboard time range in `SavedReports.tsx`, chart time range/filter/drilldown in `ChartBuilder.tsx` and `reporting.ts`.
- Edit result: documented dashboard vs chart time ranges, filters, drilldowns, and no-results checks.
- Validation: passed.

### `customer-docs/reporting/save-widgets-to-dashboards.mdx`

- docs.json section: sixth Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `21c030d8-a07b-4554-8cc0-930ed262bae7`, threadId `e82b1fa9-84d9-4662-9625-86baabbab3a2`, status answered.
- Repo verification: widget create/update/move/copy/rename/remove handlers in `SavedReports.tsx`, dashboards API.
- Edit result: documented save to dashboard, layout persistence, move/copy/rename/remove behavior, and access caveats.
- Validation: passed.

### `customer-docs/reporting/share-charts-dashboards.mdx`

- docs.json section: seventh Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `3adf2006-62ef-4f9f-8fdb-a0a0e19707c0`, poll blocker: `get_ergo_agent_result` timed out after 120s; no threadId returned.
- Repo verification: `ShareDashboardButton.tsx`, `ShareReportButton.tsx`, `dashboards.ts`, `reporting.ts`.
- Edit result: documented chart-level vs dashboard-level shared links, password rules, unshare, and shared-view limits.
- Validation: passed.

### `customer-docs/reporting/reporting-dashboard-sharing-and-embedding-troubleshooting.mdx`

- docs.json section: eighth Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `9f4b7015-4db3-4746-b607-b7fdb9747def`, threadId `2e3b-4f4d-8eb4-b2c0c0072c81`, status answered.
- Repo verification: shared chart/dashboard routes, password headers, unshare/update-password APIs.
- Edit result: documented link type, password troubleshooting, authenticated detail limits, and embedding caveat without claiming iframe-specific support.
- Validation: passed.

### `customer-docs/reporting/custom-reporting-fields.mdx`

- docs.json section: ninth Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `2d74d8e5-e4bf-4b5e-aadf-a3d1e514d7dd`, threadId `cc7647e5-09cc-4120-9ead-30f53bfacf49`, status answered.
- Repo verification: `CustomReportFields.tsx`, `reportingFieldsQuery.ts`, `reporting.ts`, backend custom field routes.
- Edit result: documented sentence/picklist/numerical fields, org/team scope, AI suggestions, autosave, duplicate/name constraints, and freshness caveats.
- Validation: passed.

### `customer-docs/reporting/picklist-and-numerical-buckets.mdx`

- docs.json section: tenth Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `af8a4370-b1a7-4643-8499-fac884f012f6`, poll blocker: `get_ergo_agent_result` timed out after 120s; no threadId returned.
- Repo verification: `PicklistOptionsModal.tsx`, `NumericalRangeModal.tsx`, `ChartBuilder.tsx`, `reporting.ts`.
- Edit result: documented picklist option merging/configuration, numerical range validation, and refresh/recluster caveats.
- Validation: passed.

### `customer-docs/reporting/call-grading-rubrics.mdx`

- docs.json section: eleventh Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `535260ff-0b61-4bc2-ab95-fe473c73d44b`, poll blocker: `get_ergo_agent_result` timed out after 120s; no threadId returned.
- Repo verification: `CallGradingRubrics.tsx`, `AddDefaultGradingRubricModal.tsx`, `CopyRubricModal.tsx`, rubric APIs.
- Edit result: documented org/team rubrics, meeting title phrases, rubric fields/options, AI/default/copy features, and chart caveats.
- Validation: passed.

### `customer-docs/reporting/reporting-competitors-custom-fields-and-backfill.mdx`

- docs.json section: twelfth Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `56430138-15de-4bbe-8451-a990b491f755`, status queued/not answered during audit window.
- Repo verification: custom fields, default reporting fields, recluster APIs, backend default field/backfill-adjacent routes.
- Edit result: softened historical backfill claims and documented safe rollout path for competitor/custom reporting fields.
- Validation: passed.

### `customer-docs/reporting/reporting-email-cadences.mdx`

- docs.json section: thirteenth Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `0594fa94-c073-473b-a37f-9a1b6f23b7bf`, status queued/not answered during audit window.
- Repo verification: `EmailCadencesTab.tsx`, `useReportingEmailCadenceForm.ts`, cadence API types.
- Edit result: documented admin-only access, setup/recipient/field/analysis steps, weekly schedule, manual vs auto field selection, max 10 selected fields, test run/send-now queue caveat.
- Validation: passed.

### `customer-docs/reporting/preview-run-history.mdx`

- docs.json section: fourteenth Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `f8d8f776-a6b4-4c7d-abdd-7bda20014396`, status queued/not answered during audit window.
- Repo verification: `ReportingEmailRunDetailDrawer.tsx`, run status/failure-stage API types.
- Edit result: documented run statuses, triggers, modes, failure stages, and diagnosis steps.
- Validation: passed.

### `customer-docs/reporting/notetaker-adoption-dashboard-reading-edge-cases.mdx`

- docs.json section: fifteenth Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `dcc18b8a-12a9-4948-8a60-0f0fc8e9e1db`, status queued/not answered during audit window.
- Repo verification: reporting source metadata, meeting status docs links, reporting field/source caveats.
- Edit result: documented source distinctions and edge cases; avoided treating every missing internal meeting as failed adoption.
- Validation: passed.

### `customer-docs/reporting/cross-org-analytics.mdx`

- docs.json section: sixteenth Reporting page.
- Frontmatter/links read: title/description/keywords present; related links resolve.
- Ergo MCP: runId `bcb4faa3-c0ec-4065-99b6-1535540826a4`, status queued/not answered during audit window.
- Repo verification: `CrossOrgAnalytics.tsx`, cross-org metadata/analysis endpoints in frontend API.
- Edit result: changed page to say cross-org analytics is not a standard customer workflow and should be treated as internal/specially provisioned unless explicitly enabled.
- Validation: passed.

