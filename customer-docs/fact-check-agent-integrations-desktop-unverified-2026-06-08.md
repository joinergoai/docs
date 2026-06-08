# Integrations and Desktop unverified notes - 2026-06-08

These notes capture claims intentionally removed, softened, or not published because they were not confirmed strongly enough for public docs in this worker scope.

## Removed or softened public claims

- Salesforce: the in-thread MCP answer used broad language around bidirectional real-time sync and preventing data drift. Repo evidence confirmed Salesforce OAuth and CRM-related settings/workflows, but not enough to publish complete, real-time, or drift-proof sync claims. The public Salesforce page now uses permission-, field-mapping-, and validation-aware language.
- CRM integrations generally: complete sync, broad backfill, exact object coverage, and exact update timing were not published unless the assigned page had code-confirmed support for the narrower workflow.
- HubSpot meeting activities and recording links: the page now treats activity/link writes as conditional on connection, matching, permissions, and processing. It does not promise every meeting will update HubSpot.
- Ergo CRM: public wording treats it as an Ergo-managed CRM mode/sentinel rather than a normal third-party integration.
- Google Workspace and Microsoft 365: public pages avoid exact OAuth scope lists and exact freshness/timing claims. They document customer-visible setup, source dependency, and reconnect behavior instead.
- Slack: private Slack context was unavailable because Slack search returned `401: Reauthentication required`. Public Slack pages rely on repo evidence and avoid complete channel/context coverage claims.
- Pylon: public wording is limited to configured meeting-recording delivery/admin-token setup. Ticket-sync or broad support-workflow claims were not published.
- Third-party notetaker and dialer integrations: pages avoid promising complete imports, automatic backfill, exact delivery timing, or duplicate-free behavior. They describe source prerequisites and duplicate-source cautions.
- MCP external agent tools: the page does not claim every customer workspace has MCP access. It documents behavior only when MCP is enabled and authenticated.
- Desktop: exact platform/version, beta status, and rollout claims were not published. Public wording focuses on feature-gated download, WorkOS auth, macOS permissions, recording/upload/processing behavior, and retry/status workflows.
- Desktop rate limiting: internal exact limits were not published. The public page says successful upload creation can be backend-rate-limited and recommends waiting/retrying.
- Desktop transcription: the page does not promise live transcript availability for every recording; it documents dependency on capture, connectivity, temporary transcription credentials, and processing.

## Connector context not published

- Pylon and Linear read-only searches were used only as generalized signal for customer pain areas such as recording delivery, auto-record reliability, desktop upload/performance, and integration setup friction.
- No customer names, ticket IDs, issue IDs, private Slack excerpts, or private email details were added to public docs.
- Gmail search results were not used for product-behavior verification.

## Follow-up candidates for main consolidation

- Decide whether shared docs should standardize on one phrase for integration freshness/timing across all CRM, calendar, recording-source, and dialer pages.
- Confirm whether public docs should expose any exact desktop upload rate-limit numbers. This worker intentionally kept the public page qualitative.
- Confirm whether MCP availability should get a central customer-facing eligibility note outside the integration page.

## Supplemental page-level MCP unresolved notes

- Ergo CRM: page-level MCP claimed Ergo does not have an Ergo-native CRM path and is only a layer on external CRM data. Approved frontend code showed `keys.ergoCrm`, `crmType === 'ergo'`, and external-CRM prefetch bypass behavior, so the public page was not changed.
- Beeper: page-level MCP described a local per-rep MCP/iMessage setup. Approved frontend evidence only confirmed feature-flagged Beeper token setup, so local MCP/iMessage details were not published.
- Fathom: page-level MCP suggested the Fathom page conflated outbound webhooks with inbound Fathom recording ingestion. Approved Automations and frontend code confirmed `/fathom_webhook`, signature verification, and Fathom email mapping, so the public page was not changed.
- Granola: page-level MCP argued MCP/OAuth should be removed in favor of token-only setup. Approved frontend/backend code still exposes both Granola API-token and MCP/OAuth source handling, so the public page was not changed.
- Nooks: page-level MCP disputed the signing-key flow. Approved frontend modal code confirms copying the Ergo webhook URL into Nooks and saving a one-time `nooks-webhook-signing-key-...`, so the public page was not changed.
- MCP/external agent tools: page-level MCP claimed token-based setup. Approved frontend MCP setup tests and component code confirm OAuth-oriented setup and no token-management UI, so the public page was not changed.
- Expired grants: page-level MCP suggested broadening the page to Slack and other auth-adjacent failures. Approved repo evidence for this page kept it focused on Google Workspace and Microsoft 365 email/calendar grants; Slack reconnect behavior remains elsewhere.
- Calendar auto-join: page-level MCP included detailed waiting-room timeouts, reschedule behavior, and no-show dependencies. These were not added to the integration page because the current page links to the dedicated notetaker scheduling/waiting-room pages and avoids reliable-auto-join promises.
- Desktop platform/version: several page-level MCP answers cited exact Mac year/chip and app version thresholds. Public docs were kept qualitative (`supported Mac`, approved download path, keep current, quit/reopen, test recording) because exact thresholds/version claims were not re-confirmed as stable customer-facing requirements in approved repos.
- Desktop reliability percentages, beta labels, and internal bug names were not published. Public docs now include durable customer actions and limits without exposing internal quality numbers or volatile release-state claims.
- Email signature: page-level MCP raised Gmail-native draft visibility differences. Public page was softened to tell users to test the actual send/review path and expect mail-client display variation; private customer-specific examples were not published.
