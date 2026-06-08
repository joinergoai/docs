# Drafts, AI Search, and Reporting unverified or softened notes - 2026-06-08

These notes are for consolidation into the shared unverified file. They were not published as customer-specific details.

## MCP and connector limitations

- CLI MCP path confirmed `ergo` was enabled, but did not provide a direct page-specific ask/query command in this worker session. Page-specific questions were run through in-thread Ergo MCP.
- Several in-thread Ergo MCP runs stayed queued or timed out on result polling. The audit records their run IDs and blocker status.
- Pylon, Linear, Gmail, and Slack were used only for generalized public framing. Customer names, private issue IDs, Slack quotes, Linear IDs, and email-specific details were intentionally excluded.

## Drafts and email

- Draft search/user filtering: an early MCP answer could not confirm search/user filtering, but frontend code confirmed it. Public docs use code-confirmed behavior.
- Draft tab labels: an MCP answer warned exact labels needed UI confirmation; frontend code confirmed queue labels. Public docs use code-confirmed labels.
- Auto-send: no broad universal auto-send/no-auto-send claim should be made. Public docs keep auto-send scoped to advanced/narrow settings and tell users to review settings before relying on it.
- Open tracking: no per-recipient attribution was confirmed. Public docs explain pixel-based caveats and avoid overclaiming accuracy.
- Provider-side drafts: some draft flows may create provider-side drafts, but docs should not assume every Ergo draft is always mirrored in every email client.
- Draft creation: AI relevance checks and workflow triggers mean drafts are not guaranteed for every meeting, deal, or message.

## AI search and automation

- Scheduled agent runs: current code supports the narrow scheduled-run workflow, but docs should keep alpha/limited-scope language and avoid guaranteeing delivery.
- Scheduled run limit: code indicates a maximum active run limit; docs frame it as a practical UI/API limit rather than a broad product promise.
- Follow-ups panel: feature-flag/access behavior means the page should not imply all users will see the panel.
- Floating panel context: docs should not claim every visible page field is always included in AI context.
- Search sources: code-confirmed entity filters are `meeting`, `email_thread`, and `user_document`. Public docs should not add other entities unless verified.

## Reporting

- Reporting access: code confirms access is controlled by `/dashboard/reporting/access`, with `hasAccess`, `allDashboards`, `dashboardIds`, and `canCreate`. Public docs avoid unsupported plan-tier language.
- Reporting email cadences: code confirms admin-only tab visibility in `Reporting.tsx`; public docs use admin-only language.
- Reporting email cadence field selection: manual mode supports selected fields/rubrics with a max of 10; auto mode leaves selected fields empty and lets Ergo choose at run time. Public docs should not promise which fields auto mode chooses.
- Reporting email run delivery: queueing a test run or send-now action is not final delivery confirmation. Public docs direct users to run history.
- Default dashboards: code supports Sales, Customer Success, and Product default dashboard types. MCP/customer-call context mentioned possible auto-creation on signup and call-count thresholds, but those are not code-confirmed as universal customer behavior; public docs avoid guaranteeing them.
- Create/edit reports: code currently saves reports directly to a selected dashboard through `reportingDashboardId`; some MCP/customer-call context described an older two-step saved-report flow. Public docs use the current code-confirmed dashboard save flow.
- Widget move/copy/rename/remove: MCP customer-call context could not verify these actions, but frontend code confirms handlers and dashboard API calls. Public docs use code-confirmed behavior.
- Shared chart/dashboard revoke and password update: MCP customer-call context could not verify revocation, but frontend code confirms `unshare`, `update-password`, and password length validation. Public docs use code-confirmed behavior.
- Shared reporting detail limits: frontend code indicates authenticated endpoints for sentence details and revenue deal details, while shared chart/dashboard analysis endpoints are narrower. Public docs say shared views may be narrower and direct users to authenticated Reporting for full drilldown.
- Picklist/numerical bucket changes: public docs avoid saying bucket changes automatically backfill or reprocess all historical data.
- Custom field backfill: public docs softened historical backfill claims because code confirms field configuration and reclustering APIs but not a universal self-serve historical backfill guarantee.
- Reporting email legacy cron: backend legacy cron had hard-coded internal/customer-specific mappings. These were not published and should not be treated as canonical customer-facing behavior for the current cadence UI.
- Cross-org analytics: frontend uses local-dev-server cross-org endpoints and metadata across org IDs/fields. Public docs now state this is not a standard customer workflow unless explicitly provisioned.

