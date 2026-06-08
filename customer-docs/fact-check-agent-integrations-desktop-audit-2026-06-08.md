# Integrations and Desktop fact-check audit - 2026-06-08

Worker scope: `customer-docs/integrations/**/*.mdx` and `customer-docs/desktop/**/*.mdx` only.

Source boundary: product behavior was checked against the approved repos only: `docs`, `Ergo-Dashboard-Frontend`, `Ergo-Dashboard-Backend`, `Desktop-App`, and `Ergo-Automations`. Excluded repos were not used for product verification.

## MCP and connector checks

- CLI Ergo MCP baseline: from the docs repo, `/Applications/Codex.app/Contents/Resources/codex mcp list` and `/Applications/Codex.app/Contents/Resources/codex mcp get ergo` were run for every assigned route. Each check returned `ergo https://api.joinergo.com/api/mcp enabled OAuth`. No `codex mcp login ergo` was needed.
- In-thread Ergo MCP, Salesforce page question: runId `03ee9ff2-7538-4d04-9493-8bbf022015dd`, threadId `624e3c76-22c2-4af3-a7fd-e1a3a5684f6b`, status `answered`. The answer was treated as context only where repo evidence confirmed it; broad bidirectional/real-time language was not published.
- In-thread Ergo MCP, grouped remaining integration and desktop question: runId `f55c2b84-5df1-4ea8-aeb7-9e237c702218`, threadId `16a1073e-68f1-4279-9dfb-58a8e5c4b3d0`, status `answered` after repeated polls. The answer was useful as customer-context guidance, but repo-confirmed behavior controlled the final public wording where the answer overclaimed sync, timing, or desktop behavior.
- Tool exposure: Ergo MCP, Pylon, Linear, Slack, and Gmail tools were exposed through `tool_search`.
- Pylon and Linear were used read-only as generalized customer/planning signal. No issue IDs, customer names, private excerpts, or customer-specific facts were published.
- Slack search was attempted read-only and returned `401: Reauthentication required`; no Slack-specific private context was used.
- Gmail was available read-only but was not used as product-behavior evidence.

## Completed pages

### Integrations

- `customer-docs/integrations/index.mdx`: rewritten as an action-oriented integration hub; added source categories, verification steps, and failure-mode routing. Evidence: frontend integration catalog and API modules.
- `customer-docs/integrations/salesforce.mdx`: narrowed to OAuth connection, CRM record matching, field-mapping prerequisites, and validation-rule limits. Evidence: frontend integration panel and backend Salesforce OAuth route; MCP run `03ee9ff2-7538-4d04-9493-8bbf022015dd`.
- `customer-docs/integrations/hubspot.mdx`: clarified HubSpot OAuth, CRM fields, recording-link dependency, and permission constraints. Evidence: frontend integration panel and automations recording-link services.
- `customer-docs/integrations/hubspot-meeting-activities-and-recording-links.mdx`: focused on when meeting activities and recording links can be written, with processing and matching caveats. Evidence: automations CRM recording-link services.
- `customer-docs/integrations/attio.mdx`: documented OAuth/API connection behavior and field-mapping dependency without promising complete sync. Evidence: frontend integration panel/catalog.
- `customer-docs/integrations/pipedrive.mdx`: documented API-token style connection and downstream field-mapping dependency. Evidence: frontend integration catalog and API modules.
- `customer-docs/integrations/ergo-crm.mdx`: softened to Ergo-managed CRM mode and feature/sentinel behavior instead of treating it as an external provider. Evidence: frontend `ergoCrm` integration handling and dashboard key checks.
- `customer-docs/integrations/google-workspace.mdx`: clarified Gmail/Calendar connection, calendar settings, expired grant handling, and source limits. Evidence: frontend integration APIs, backend Google OAuth/Nylas/calendar routes, and prior repo-backed audit memory.
- `customer-docs/integrations/calendar-scopes-and-meeting-auto-join.mdx`: separated calendar visibility, auto-join settings, and notetaker scheduling assumptions. Evidence: backend calendar/status/events routes and frontend settings APIs.
- `customer-docs/integrations/microsoft-365.mdx`: clarified Microsoft calendar/email connection path and reconnect behavior without mirroring Google-only settings. Evidence: frontend integration APIs and backend Nylas routes.
- `customer-docs/integrations/email-signature.mdx`: clarified signature insertion and duplicate-signature risks. Evidence: backend email sender signature service and draft-email post-processing.
- `customer-docs/integrations/expired-grants-and-reconnecting.mdx`: scoped expired-grant handling to Google/Microsoft integration status, reconnect, and downstream symptoms. Evidence: frontend expired-grant API and integration status handling.
- `customer-docs/integrations/slack.mdx`: clarified Slack connection, settings/status, channel access, and disconnect/reconnect behavior. Evidence: frontend integration APIs and backend dashboard Slack routes.
- `customer-docs/integrations/slack-monitoring-and-pre-call-context.mdx`: separated Slack monitoring/pre-call context from base Slack auth and avoided complete-context claims. Evidence: frontend Slack settings/status APIs.
- `customer-docs/integrations/beeper.mdx`: documented token/feature-gated setup and limited public claims. Evidence: frontend integration catalog and key-based integration handling.
- `customer-docs/integrations/pylon.mdx`: clarified Pylon admin-token use for meeting-recording delivery and avoided ticket-sync claims. Evidence: frontend Pylon API and integration panel.
- `customer-docs/integrations/ergo-notetaker.mdx`: clarified cloud notetaker behavior, calendar/meeting dependencies, and duplicate-source risks. Evidence: frontend integration catalog and meeting/notetaker routes.
- `customer-docs/integrations/ergo-desktop-notetaker.mdx`: differentiated desktop no-bot recording from cloud bot workflows and linked to desktop setup. Evidence: frontend catalog plus backend desktop routes and Desktop-App behavior.
- `customer-docs/integrations/gong.mdx`: clarified OAuth integration and downstream recording/source behavior without broad backfill promises. Evidence: frontend integration panel and automations services.
- `customer-docs/integrations/fireflies.mdx`: clarified token validation and source limitations. Evidence: frontend integration panel and automations services.
- `customer-docs/integrations/circleback.mdx`: clarified third-party recording-source behavior and duplicate-source caution. Evidence: frontend integration catalog and automations services.
- `customer-docs/integrations/bluedot.mdx`: clarified third-party recording-source behavior and duplicate-source caution. Evidence: frontend integration catalog and automations services.
- `customer-docs/integrations/fathom.mdx`: clarified third-party recording-source behavior and duplicate-source caution. Evidence: frontend integration catalog and automations services.
- `customer-docs/integrations/granola.mdx`: clarified OAuth/API setup and source limitations. Evidence: frontend Granola API/integration panel and automations services.
- `customer-docs/integrations/outreach.mdx`: clarified OAuth setup and sales-engagement source limits. Evidence: frontend integration panel/catalog and automations services.
- `customer-docs/integrations/nooks.mdx`: clarified API-key style setup and dialer/source limits. Evidence: frontend Nooks API/modal and integration catalog.
- `customer-docs/integrations/salesfinity.mdx`: clarified API-key style setup and dialer/source limits. Evidence: frontend integration catalog and dashboard key handling.
- `customer-docs/integrations/mcp-external-agent-tools.mdx`: clarified MCP availability, OAuth/external-client behavior, and permission-aware results. Evidence: CLI MCP checks, in-thread MCP behavior, and approved repo/API context.

### Desktop

- `customer-docs/desktop/index.mdx`: rewritten as the desktop section hub, with clear links to install, permissions, recording, transcript, settings, limits, and troubleshooting pages. Evidence: backend desktop routes and Desktop-App.
- `customer-docs/desktop/install-and-sign-in-to-ergo-desktop.mdx`: clarified feature-gated download, WorkOS sign-in, browser callback, and updater. Evidence: backend desktop download/auth routes and Desktop-App auth/update code.
- `customer-docs/desktop/macos-permissions.mdx`: clarified macOS permissions needed for recording/transcript workflows without claiming universal platform support. Evidence: Desktop-App capture/transcript behavior.
- `customer-docs/desktop/desktop-onboarding-checklist.mdx`: consolidated first-run customer actions around install, auth, permissions, source selection, and upload verification. Evidence: backend desktop auth/notetaker/recording routes and Desktop-App.
- `customer-docs/desktop/quick-note.mdx`: documented note-linked recording behavior and editing/processing expectations. Evidence: backend desktop recording service and `linkedNoteId` behavior.
- `customer-docs/desktop/silent-desktop-recording.mdx`: clarified no-bot desktop recording, auto-record detected meetings, and upload/processing caveats. Evidence: backend desktop notetaker/recording routes and Desktop-App capture behavior.
- `customer-docs/desktop/live-transcript-and-mute-controls.mdx`: clarified temporary transcription token dependence, mute controls, and transcript availability. Evidence: backend desktop STT route and Desktop-App transcript/capture code.
- `customer-docs/desktop/desktop-settings-and-updates.mdx`: clarified settings, source controls, download/update behavior, and reconnect paths. Evidence: backend desktop routes and Desktop-App updater/auth code.
- `customer-docs/desktop/desktop-performance-requirements-and-current-limitations.mdx`: softened exact platform/version and capacity claims; documented practical limits around capture, upload, processing, and rate limiting. Evidence: backend recording route/service and Desktop-App behavior.
- `customer-docs/desktop/troubleshoot-missed-detection-or-upload-failures.mdx`: focused on detection, upload, retry, and processing statuses. Evidence: backend desktop recording status/retry/init-processing routes and Desktop-App capture/upload flow.

## Validation

- Frontmatter check passed: all 38 assigned MDX files have `title` and `description`. Two assigned pages omit `keywords`; treated as optional/as appropriate.
- Local markdown links, MDX `href` targets, and image paths passed across all 38 assigned MDX files.
- Public-page privacy/roadmap scan passed for ticket IDs, raw customer names screened for, private Slack excerpt phrasing, roadmap, `coming soon`, and `will ship` patterns.
- Scratch-file scan contains only audit-language references to private-source restrictions and the Slack `401` blocker; no private details were added.
- `git diff --check -- customer-docs/integrations customer-docs/desktop customer-docs/fact-check-agent-integrations-desktop-audit-2026-06-08.md customer-docs/fact-check-agent-integrations-desktop-unverified-2026-06-08.md` passed.
- Private/customer-specific details were not added to public pages.
- No commits or pushes were made.

## Supplemental page-level MCP audit

Supplemental audit date: 2026-06-08. For each assigned page, the current page, related links, section index, and docs.json nav position were checked. CLI preflight was rerun page-by-page from the docs repo with `/Applications/Codex.app/Contents/Resources/codex mcp list` and `/Applications/Codex.app/Contents/Resources/codex mcp get ergo`; every page returned Ergo enabled with OAuth at `https://api.joinergo.com/api/mcp`. In-thread Ergo MCP was used for a fresh page-specific question per page. Pylon and Linear remained read-only customer/planning signal only where useful; no private connector details were published. Slack read-only search remained blocked by `401: Reauthentication required`; Gmail was not used as product-behavior evidence.

### Supplemental integrations results

- `customer-docs/integrations/index.mdx`: CLI OK; MCP runId `f7db6558-dcda-456c-926e-0f0a6b211200`, threadId `d2cde7af-f5ba-4957-9ba7-5d0eb556f9be`, status `answered`; no public patch. MCP reinforced existing connected-card-does-not-equal-full-coverage caveats.
- `customer-docs/integrations/salesforce.mdx`: CLI OK; MCP runId `0af35c59-3d18-430c-ad18-73b8c6ab0e3c`, threadId `67d36a24-4a29-4308-8e24-b35008e288a3`, status `answered`; no public patch. Current page already avoids bidirectional/complete-sync/backfill claims.
- `customer-docs/integrations/hubspot.mdx`: CLI OK; MCP runId `8536a247-f49f-42fc-9b91-77ef1884ee7d`, threadId `66c1c1cb-7df1-48e1-ace1-fe73bb04a11e`, status `answered`; no public patch. Current conditional wording covers permissions, matching, and workflow setup.
- `customer-docs/integrations/hubspot-meeting-activities-and-recording-links.mdx`: CLI OK; MCP runId `60d79c5d-9f0f-43cb-a40b-c62af02a252e`, threadId `db8850b0-3393-4069-997e-79f20fefcaa3`, status `answered`; no public patch. Conditional activity/link framing remains accurate.
- `customer-docs/integrations/attio.mdx`: CLI OK; MCP runId `06fd1373-08f7-4b32-9f2f-5bbbdafb9a1c`, threadId `8cb81806-eb56-4a08-a765-3e83e96858e0`, status `answered`; patched description from `configured CRM workflows` to `configured CRM updates` to avoid implying Attio-native workflow execution.
- `customer-docs/integrations/pipedrive.mdx`: CLI OK; MCP runId `85657c0f-bdc0-4b0d-8514-681f0e3569b0`, threadId `77f0f124-1b05-4078-b10e-cc1ad2822c3f`, status `answered`; no public patch. API-token and field/activity validation wording remains conservative.
- `customer-docs/integrations/ergo-crm.mdx`: CLI OK; MCP runId `9d31493f-9d1a-4b8a-9554-117e340d2762`, threadId `fe79e26a-ba42-4acc-9b60-5bc335cbc88c`, status `answered`; no public patch. MCP contradicted approved frontend evidence that `crmType === 'ergo'` and `keys.ergoCrm` represent a no-external-auth Ergo CRM path; code evidence controlled.
- `customer-docs/integrations/google-workspace.mdx`: CLI OK; MCP runId `852ad913-bc04-4387-8498-8188c791e870`, threadId `d1aed5f5-feac-46c3-b9c1-37671920b058`, status `answered`; no public patch. Current page already calls out requested scopes, reconnects, and source limits.
- `customer-docs/integrations/calendar-scopes-and-meeting-auto-join.mdx`: CLI OK; MCP runId `63db6f77-34c7-40c4-82e0-bc7aebcbbf4a`, threadId `bd232588-48da-4e08-964c-90d9e95d8c49`, status `answered` after an earlier result-poll timeout; no public patch. Detailed admission/time-out behavior belongs in linked meeting scheduling/waiting-room pages.
- `customer-docs/integrations/microsoft-365.mdx`: CLI OK; MCP runId `41b3e12b-1648-4b14-a1aa-9f9e1b42606b`, threadId `00ab7d27-cd4e-44d1-8893-1b89955b6e12`, status `answered`; patched tenant admin consent and per-user account connection prerequisites.
- `customer-docs/integrations/email-signature.mdx`: CLI OK; MCP runId `177fe50d-9def-458e-845e-52290132c15f`, threadId `54d04940-5150-4eaa-b976-826be46a3e6f`, status `answered` after an earlier result-poll timeout; patched test/expectation wording so users verify the actual send/review path and understand mail-client display can vary.
- `customer-docs/integrations/expired-grants-and-reconnecting.mdx`: CLI OK; MCP runId `4314a132-1405-403e-9606-3ec9d43008ab`, threadId `d8872f5f-06cc-40f2-9d71-a4b96cc3dcf2`, status `answered`; no public patch. MCP suggested broader Slack/auth-adjacent scope, but approved repo evidence keeps this page scoped to Google/Microsoft email-calendar grants.
- `customer-docs/integrations/slack.mdx`: CLI OK; MCP runId `0b3b2c35-1be0-4c4a-9df3-96302f43b774`, threadId `3e78c662-641c-45a4-a8d2-de08de996f3f`, status `answered`; patched explicit per-channel app/bot access and no-retroactive-channel-coverage caveat.
- `customer-docs/integrations/slack-monitoring-and-pre-call-context.mdx`: CLI OK; MCP runId `fa182419-b0ed-43a4-8c0d-e85f551e790a`, threadId `88de0c89-2a39-41f8-8232-8ccf5e78fa69`, status `answered`; patched Slack Connect/shared-channel visibility and direct-channel-access requirements.
- `customer-docs/integrations/beeper.mdx`: CLI OK; MCP runId `6ad5f7d0-89f8-4fde-9e13-4f0f8f17bc0c`, threadId `a1a62615-0b6b-461e-828e-f5f5d47ef9ea`, status `answered`; no public patch. Approved frontend evidence supports token/feature-flag flow; MCP-only local setup claims were not repo-confirmed.
- `customer-docs/integrations/pylon.mdx`: CLI OK; MCP runId `ec88296b-82e4-41ff-93de-3c56aa230aa5`, threadId `13a6f504-de1f-43bb-8acb-a7f5a63d3aff`, status `answered` after one ask timeout without run ID; no public patch. Page already states org-level/admin token, supported recordings, and no ticket sync.
- `customer-docs/integrations/ergo-notetaker.mdx`: CLI OK; MCP runId `28c2c7a7-bf7a-435f-8d88-d00c6592a419`, threadId `34f4a696-c35f-4c40-a1fd-95a0cd24dc1a`, status `answered`; no public patch. Current page links deeper scheduling/waiting-room/multiple-notetaker articles and avoids overpromising.
- `customer-docs/integrations/ergo-desktop-notetaker.mdx`: CLI OK; MCP runId `b1c60095-b39b-4661-8c23-714ee3bf2472`, threadId `eb0c5b41-0375-4295-a025-8279e36c2281`, status `answered`; patched local audio capture and recording-consent caveats.
- `customer-docs/integrations/gong.mdx`: CLI OK; MCP runId `6f7bea53-df11-47da-8421-63b18de136f4`, threadId `b8eea3ee-70c6-4652-9f01-87552b86f342`, status `answered`; no public patch. Approved repo evidence supports Gong webhook/JWT/source-limit framing; page does not deny scoped backfills or promise broad history.
- `customer-docs/integrations/fireflies.mdx`: CLI OK; MCP runId `7c1feede-46a5-4a92-9824-dfb3751f491c`, threadId `b721201a-c2ad-4c58-9829-94a555eb60e1`, status `answered`; no public patch. Core API-key/webhook-secret framing and partial-data caveat remain accurate.
- `customer-docs/integrations/circleback.mdx`: CLI OK; MCP runId `ec36491a-fca5-48f9-abf4-81d54b6d0718`, threadId `53089ca8-c945-43da-816d-2be004df7e7b`, status `answered`; no public patch. Current page already gives stable webhook/automation/test guidance; volatile UI-position details were not published.
- `customer-docs/integrations/bluedot.mdx`: CLI OK; MCP runId `0a2a42e1-40fc-4600-bdc3-f7e66bbc3a04`, threadId `637d5dd9-8d69-4592-8705-0d55932a10df`, status `answered`; no public patch. Core sign-in-secret/no-backfill framing remains accurate.
- `customer-docs/integrations/fathom.mdx`: CLI OK; MCP runId `8fd9a73c-78b6-4a3b-b6b2-612a64cdaadb`, threadId `44fe4f4f-1df3-48c9-9c48-e51cc4f8343b`, status `answered`; no public patch. MCP alleged webhook-flow conflation, but approved repos confirm frontend Fathom instructions and Automations `/fathom_webhook` ingestion with signature verification and email mapping.
- `customer-docs/integrations/granola.mdx`: CLI OK; MCP runId `424ae0d2-7e9b-4694-bc65-3f79cee34383`, threadId `a7734629-d6d9-4cfc-abf2-e0870720bb57`, status `answered`; no public patch. MCP argued token-only, but approved frontend/backend code still exposes API token and MCP/OAuth paths.
- `customer-docs/integrations/outreach.mdx`: CLI OK; MCP runId `549ca087-c9b9-4392-aeb2-0efb86d9df95`, threadId `ccf42920-1686-4f5a-96bb-e968893a7bd4`, status `answered`; patched explicit note that Outreach integration covers Outreach Dialer call data, not Outreach-sequenced emails.
- `customer-docs/integrations/nooks.mdx`: CLI OK; MCP runId `816efd90-19d2-4d68-b70e-6f40744a9852`, threadId `417cfc0d-949a-4b05-9988-1053331bfd26`, status `answered`; no public patch. MCP disputed signing-key wording, but approved Nooks modal code confirms Ergo webhook URL plus `nooks-webhook-signing-key-...` flow for `call.logged`.
- `customer-docs/integrations/salesfinity.mdx`: CLI OK; MCP runId `2e55acf5-125a-48de-90e7-646d11ab4432`, threadId `fdbb26a6-2fe3-4560-9b60-3df3ca466a16`, status `answered`; no public patch. Page already says feature-gated, beta-aware, API-key setup, and test before broad sync; frontend metadata matches API-key call-log/recording sync.
- `customer-docs/integrations/mcp-external-agent-tools.mdx`: CLI OK; MCP runId `6f48f0cb-2f97-48c5-9bee-4dc2919193b5`, threadId `c61f64f5-61ef-4005-ae99-7f2b0eb331e0`, status `answered`; no public patch. MCP claimed token-based setup, but approved frontend tests/setup component confirm OAuth MCP setup and absence of token-management UI.

### Supplemental desktop results

- `customer-docs/desktop/index.mdx`: CLI OK; MCP runId `16f0d02c-494d-4cdc-89c6-c16452b039a5`, threadId `dc9f6cac-6d86-4286-9dbb-3a622b02213f`, status `answered`; no public patch. Hub remains accurate and delegates caveats to child pages.
- `customer-docs/desktop/install-and-sign-in-to-ergo-desktop.mdx`: CLI OK; MCP runId `fe20893b-e719-4564-b503-56b5997f7541`, threadId `10e61114-5096-465c-9471-1f0492fdefe1`, status `answered`; patched exact provisioned-email/account-match failure wording.
- `customer-docs/desktop/macos-permissions.mdx`: CLI OK; MCP runId `563a5f1e-7a30-4771-a7ed-0ac7aef8212f`, threadId `b4dfccbf-eac6-4a71-9964-e1f432132d81`, status `answered`; patched `restart` wording to `quit and reopen` the app.
- `customer-docs/desktop/desktop-onboarding-checklist.mdx`: CLI OK; MCP runId `dd429036-374a-434a-9af1-43b03322dff2`, threadId `8ee3271d-c9e9-487d-8a51-7194c23cd37b`, status `answered`; patched browser sign-in, Ergo Desktop macOS permissions, quit/reopen, and unresponsive-record-button recovery wording.
- `customer-docs/desktop/quick-note.mdx`: CLI OK; MCP runId `810e03e7-1cd7-47aa-a24c-af74adfa9487`, threadId `b117007e-ed1e-49b7-8e53-fbe938e57a14`, status `answered`; no public patch. Page is note-link scoped and does not promise automatic CRM routing.
- `customer-docs/desktop/silent-desktop-recording.mdx`: CLI OK; MCP runId `6b89b521-619c-41a1-801e-dc5f712530db`, threadId `b4a482cf-4477-4490-b8db-15c315a75e10`, status `answered`; patched local audio-capture, consent/disclosure, and quit/reopen wording.
- `customer-docs/desktop/live-transcript-and-mute-controls.mdx`: CLI OK; MCP runId `ade71648-e519-4a5a-8730-b7af7b742fc4`, threadId `ec70f63e-bacf-4a98-83b4-f6dde12d9b98`, status `answered`; patched live-output-vs-final-transcript and abnormal start/stop caveats.
- `customer-docs/desktop/desktop-settings-and-updates.mdx`: CLI OK; MCP runId `a27c777b-e3b6-4fcd-b203-e0610661acf8`, threadId `be64cfbc-873a-4ed8-9dde-396b86699766`, status `answered`; patched fallback to approved dashboard/download path when in-app update is unavailable or blocked.
- `customer-docs/desktop/desktop-performance-requirements-and-current-limitations.mdx`: CLI OK; MCP runId `332fcbb2-9930-4cd2-91b7-a71019e31758`, threadId `bb39c1a2-e92e-40cd-8b93-25da35c6cbaa`, status `answered`; patched supported-Mac/download-path and resource-heavy-app/screen-sharing performance caveats without publishing unverified exact chip/year/version thresholds.
- `customer-docs/desktop/troubleshoot-missed-detection-or-upload-failures.mdx`: CLI OK; MCP runId `bc865fb7-0466-4f72-aabf-424f06ae48ff`, threadId `83d69ee5-9c6d-466a-a492-6f7aef0bd1a9`, status `answered`; patched quit/reopen wording, calendar-less Quick Note/manual-note path, and unresponsive-record-button recovery.

### Supplemental validation status

- Supplemental validation passed after page-level MCP patches: all 38 assigned MDX files still have `title` and `description`; 2 omit `keywords` and remain treated as optional/as appropriate.
- Local markdown links, MDX `href` targets, and image paths passed across all 38 assigned MDX files.
- Public-page privacy/roadmap scan returned no hits for ticket IDs, screened customer names, private Slack excerpt phrasing, roadmap, `coming soon`, or `will ship` patterns.
- Scratch-file privacy scan hits are audit-language only: notes that private/customer-specific details were not published and Slack read-only search was blocked by `401`.
- `git diff --check -- customer-docs/integrations customer-docs/desktop customer-docs/fact-check-agent-integrations-desktop-audit-2026-06-08.md customer-docs/fact-check-agent-integrations-desktop-unverified-2026-06-08.md` passed after supplemental patches.
