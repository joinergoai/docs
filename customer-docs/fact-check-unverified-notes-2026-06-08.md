# Customer docs fact-check unverified notes - 2026-06-08

This file is internal audit material for the `customer-docs/**/*.mdx` rewrite. It is intentionally not a public MDX page.

## Source access notes

- Approved repo evidence used: `docs`, `Ergo-Dashboard-Frontend`, `Ergo-Dashboard-Backend`, `Desktop-App`, and `Ergo-Automations`.
- Excluded from repo verification: `ergoagents`, `ergoemailjobs`, `chrome-extension`, `internal-dashboard`, and `Contextbot`.
- Ergo MCP CLI check succeeded for configuration discovery: `codex mcp list` and `codex mcp get ergo` showed the `ergo` server enabled with OAuth.
- Ergo MCP noninteractive research did not return evidence. The CLI exposed `ask_ergo_agent` and `get_ergo_agent_result`, but `ask_ergo_agent` calls were cancelled before returning results. `codex mcp login ergo` then required an interactive OAuth browser flow and was stopped.
- Pylon and Linear were used read-only for durable support patterns. Gmail search was attempted as supplemental context but returned mostly unrelated recent mail, so it was not used as product evidence.
- Slack search was not available in the loaded tool surface; only channel/thread reads were exposed when a channel ID is already known. Slack-specific docs were therefore grounded in repo behavior, Pylon/Linear support patterns, and existing internal inventory, not direct fresh Slack search.
- Current editorial rule for the second pass: Pylon, Linear, Slack, and Ergo MCP should drive which customer problems a page covers; approved repos should then verify the current product behavior and supply precise public-safe wording. When support/planning context conflicts with code-confirmed behavior, public docs should soften, scope, or omit the claim and log the unresolved item here.

## Claims softened or kept out of public docs

- Exact meeting-processing SLA windows were not code-verified. Public docs now say processing can finish separately and advise checking status rather than promising a fixed time.
- Exact data-retention periods, subprocessors, and LLM/model-provider terms were not verified in the approved repos. Public docs now route procurement/security questions to formal Ergo support material.
- Page-specific MCP context for the security/retention/LLM page indicated that general non-training and agreement-level deletion guidance is customer-safe, but exact provider roster, exact 30/90-day deletion numbers, subprocessor lists, provider confidentiality terms, and certification claims should stay in formal security/legal materials.
- Exact commercial pricing rules were not verified in the approved repos. The pricing setup page now treats pricing configuration as internal workspace context, not a public pricing promise.
- Exact customer names, support-ticket specifics, Slack excerpts, call quotes, and account-specific examples were deliberately excluded from public docs.
- Third-party UI instructions can drift. Public docs keep third-party setup guidance to what is visible in Ergo code or to generalized permission/webhook checks.
- Dedupe behavior across every notetaker source is not fully code-confirmed. Public docs recommend choosing an authoritative source and checking duplicate drafts rather than promising automatic dedupe.
- Shared reporting detail availability varies by authenticated versus shared routes. Public docs describe the limitation generally and do not promise every authenticated drilldown is available from shared links.
- Alternative recording or notetaker flows should not be promoted as stable public fast paths unless their current support status is confirmed.
- Manual CRM automation workarounds should not be presented as default customer behavior without a clearly verified scope.
- Recording disclosure and consent guidance should not make legal or compliance claims without legal review.
- Recording/privacy pages should keep legal-consent guidance limited to team policy, local rules, and formal legal review; do not publish region-specific recording-law claims from support or anecdotal sources.
- Shared recording links should be described as scoped sharing controls, not as broad dashboard access or guaranteed delivery mechanisms.
- Support docs should not publish Pylon vendor/app IDs, internal Slack routing details, support-channel rationale, or roadmap/role constraints unless they are part of approved customer-facing support material.
- Setup docs should not present RevOps owner/operator labels as literal app permission roles unless the page separately confirms the product role. Use admin, user, super admin, spectator, or plain-language setup owner wording.
- Pricing, reporting, CRM field, and organization-default setup should be treated as admin/gated areas unless the page verifies broader user access.
- First-time setup docs should not state admin-transfer, backfill-after-reconnect, external Slack channel registration, platform-specific admission differences, repeated field-mapping sync, or duplicate/missing option-ID behavior as definitive public product behavior without page-specific repo/product confirmation.
- Setup-by-role docs should not state exact admin permission limits, workspace toggle defaults, provider-specific recording failures, or infrastructure causes unless the relevant page verifies the current customer-facing behavior.
- RevOps rollout setup docs should keep customer anecdotes, customer names, pricing, benchmark/stat claims, implementation timelines, internal infrastructure details, investigated CRM/deal incidents, white-label discussions, rep scoring/grading, and exact Gmail toggle labels out of public docs unless separately approved and page-specific.
- RevOps rollout setup docs should not claim a specific CRM is easiest to set up, publish CRM OAuth implementation timelines, or describe checkout/payment-triggered stage changes as Ergo behavior.
- Operator setup docs should not publish exact notetaker timeout durations, private support examples, Slack excerpts, exact first-source sync timing, or future CRM task/note write behavior from Linear unless the relevant page verifies current shipped behavior.
- Operator setup docs should keep Microsoft 365 admin-consent behavior, Gmail signature/multiple-signature behavior, outbound watermark/default branding, and unexpected bot-join behavior neutral until verified on their own pages.
- AE setup docs should not publish MCP setup-time estimates, customer-specific follow-up workflow examples, private email-quality tickets, no-show auto-draft/send behavior, duplicate-source dedupe promises, future task/note CRM write behavior, or claims that Google Workspace is required.
- AE setup docs should keep Pylon setup out of AE-managed setup steps unless an admin or integration page verifies current access and customer-facing behavior.
- CSM setup docs should not publish customer-specific onboarding patterns, Slack Connect support details, white-glove setup claims, exact default toggle values, exact surfacing timing/cadence, External Email Client/Superhuman UI, or future customer-health/account-view/read-only CS bot behavior as current product behavior.
- CSM setup docs should keep Desktop-App evidence out of the page unless the page intentionally covers Ergo Desktop Notetaker.
- Spectator/viewer setup docs should not publish a formal Dashboard Viewer role, separate viewer provisioning/pricing path, spectator pricing, broad spectator AI/chat access, all-recordings access, or roadmap role/permission work unless separately verified as current customer-facing behavior.
- Spectator/viewer setup docs should treat spectator automation exclusion and reporting/admin visibility Linear items as planning signals, not shipped public promises, until page-specific code/product evidence supports them.
- RevOps tips docs should not publish MCP-mentioned pipeline inaccuracy percentages, customer-specific anecdotes, specific notetaker preference guidance, unverified dialer vendor behavior, future automation write paths, task/note CRM sync, audit trails, KPI dashboards, or internal support-loop details as current product behavior.
- Operator tips docs should not publish exact notetaker miss-rate percentages, white-label/recording-default claims, exact external-email-client behavior, skip-onboarding/manual-resync mechanics, ad hoc Push Automation behavior, admin-consent details, future task/note/automation write paths, or customer-specific operator support examples without page-specific product confirmation.
- AE tips docs should not publish exact notetaker timeout durations, exact draft generation timing, draft expiry/deletion defaults, the absolute claim that Ergo never auto-sends, manual non-sales draft-trigger mechanics, third-party notetaker retroactive matching rules, CRM email-association breadth, one-notetaker-per-org behavior, Slack brief edge cases, or Automation Log/CRM audit-trail claims without page-specific product confirmation.
- CSM tips docs should not publish exact account-health score thresholds, custom health signal weighting, manual health score overrides, arbitrary report delivery cadence, Slack-native account querying, org-level notetaker naming as self-serve behavior, automatic deal duplication or stage movement into CS pipelines, batch at-risk re-engagement, exact post-call draft timing, or customer-specific CS workflow examples without page-specific product confirmation.
- CSM tips docs should treat account health, renewal, expansion, churn-risk, feature-request, objection, and customer-success reporting as source/config/access-dependent signal layers, not guaranteed out-of-the-box outcomes for every workspace.
- Sales manager tips docs should not publish exact deal-health algorithms or weighting, nightly recalculation claims, exact health-score thresholds, customer-specific pipeline-meeting reductions, team-size caps, saved-prompt or hotkey mechanics, exact custom-signal setup paths, exact notetaker timeout behavior, video/audio retention windows, branded notetaker naming, or dedicated forecasting-module language without page-specific product/legal confirmation.
- Sales manager tips docs should treat AI grades, health scores, priority, KPI dashboards, rep-performance views, and forecast/pipeline inspection as directional review signals that require source evidence, not final performance judgments or deterministic forecast outputs.
- Spectator/viewer tips docs should not publish a formal Dashboard Viewer role, spectator pricing, broad spectator deal-board access, broad spectator AI/chat access, bulk transcript download access for spectators, private-meeting mechanics, exact shared-dashboard unauthenticated behavior, multiple-super-admin support, granular permissions rework, deep-research AI for spectators, snapshot scheduled-report delivery, or static capability matrices without page-specific product confirmation.
- Spectator/viewer tips docs should keep shared-link viewers, reporting viewers, spectator seats, standard users, admins, team admins, and super-admin controls as separate access concepts unless a page-specific code check confirms overlap for the exact workflow.
- Connect-your-CRM setup docs should not publish exact CRM OAuth scopes, exact minimum CRM permission levels, or provider-specific admin-role requirements until engineering/product confirms them per CRM.
- Connect-your-CRM setup docs should avoid a blanket "all supported CRMs use OAuth" claim because current repo evidence confirms OAuth-style paths for Salesforce, HubSpot, and Attio while Pipedrive uses an API-key path and older HubSpot metadata still contains API-key wording.
- Connect-your-CRM setup docs should not promote Zoho as a headline supported integration despite code references until customer-facing support status is confirmed.
- Connect-your-CRM setup docs should not promise duplicate-record prevention, automatic contact/company/deal creation from every source, automatic deal creation from emails, task creation, note creation, or automatic association behavior unless the exact workflow is verified on its own page.
- Connect-your-CRM setup docs should not publish customer-specific CRM incidents, manual stage examples, exact pipeline structures, HubSpot deal-creation failures, or CRM sync tickets from Pylon.
- Connect-your-CRM setup docs should treat task/note CRM sync, call-to-CRM automation write paths, Slack-to-CRM reliability, audit trails, newly mapped-field backfill, live ingestion, and custom-object support as roadmap or page-specific evidence items, not current setup-page promises.
- Connect-your-CRM setup docs should not claim exact CRM sync frequency, real-time schema refresh, automatic historical backfill, or broad all-fields/all-objects support without current implementation or product-policy confirmation.
- Connect-your-CRM setup docs should keep post-call automation trigger behavior neutral until the exact automatic-versus-manual trigger paths are verified across CRM types and source workflows.
- Connect-your-CRM setup docs should not claim recording links are written to every CRM activity; HubSpot-specific activity/recording-link behavior belongs on the HubSpot meeting activities page.
- Connect-email-and-calendar docs should not publish auth vendor names, underlying calendar/notetaker infrastructure vendors, exact OAuth/internal error strings, or internal auth-provider debugging details.
- Connect-email-and-calendar docs should not claim exact OAuth scopes, exact provider-admin requirements, or exact "select all scopes" UX behavior until the current customer-facing OAuth screens are verified.
- Connect-email-and-calendar docs should not promise fixed post-call draft timing such as 2-5 minutes, exact surfacing send cadence, surfacing beta/GA status, no-show draft automation, or draft-agent roadmap behavior without product confirmation.
- Connect-email-and-calendar docs should not publish the exact Superhuman/Gmail draft-sync compatibility claim until verified in current shipped behavior; keep external-email-client behavior general unless the dedicated drafts page confirms it.
- Connect-email-and-calendar docs should not blame or name customer-specific HubSpot-Google Calendar native sync incidents; if documented later, frame native CRM/calendar sync as a neutral configuration consideration and keep it on the relevant HubSpot page.
- Connect-email-and-calendar docs should not state that rescheduled meetings always dispatch at the original time or always fail to follow updates; use source/link/status recheck language unless the exact behavior is verified.
- Connect-email-and-calendar docs should not publish internal support actions such as backend reruns, manual grants, or Ergo-side bot dispatches as customer self-service steps.
- Connect-email-and-calendar docs should treat teammate-calendar access, scheduled-agent calendar access, and calendar-enriched surfacing as page-specific or roadmap context, not default setup behavior.
- Workspace-configuration docs should not publish exact default states for Email Analysis, Post-Call Followup Emails, External email client, or Surfacing without a current source-of-truth check; frontend fallback defaults and support-call descriptions can conflict.
- Workspace-configuration docs should not publish exact Google OAuth scope-selection instructions such as "select all scopes" until the current customer-facing OAuth screen is verified.
- Workspace-configuration docs should not state a blanket "Ergo never auto-sends" because existing draft docs distinguish reviewable drafts from separately approved auto-send workflows.
- Workspace-configuration docs should not publish surfacing beta/GA status, exact surfacing cadence, or proactive deal-revival criteria without product confirmation.
- Workspace-configuration docs should not publish exact External email client/Superhuman routing behavior until the dedicated drafts/integration page verifies current shipped behavior.
- Workspace-configuration docs should not claim Sync with Admin copies "all settings"; code-confirmed options are broad but selective, and admin push/team sync can omit templates by default.
- Workspace-configuration docs should not publish customer-specific duplicate email/logging incidents or blame HubSpot/Gmail/Calendar native sync behavior without page-specific confirmation on the relevant integration page.
- Workspace-configuration docs should not publish exact "Ergo Enabled" toggle location, default, or failure behavior until the dedicated admin/field-mapping page verifies current behavior.
- Workspace-configuration docs should not publish one-super-admin limits, multi-admin roadmap, or internal support-operated permission changes unless an admin page verifies the current customer-facing flow.
- Workspace-configuration docs should not state Gmail signature import limitations or outbound footer controls broadly until the email-signature page verifies current behavior.
- Workspace-configuration docs should not state exact Slack monitoring scope, Slack org/admin toggle ownership, or wrong-workspace OAuth recovery steps beyond general wrong-workspace checks until the Slack page verifies the current customer-facing flow.
- Workspace-configuration docs should not claim admins can enforce every workspace toggle across all users unless code confirms the exact control and access path.
- Email-templates setup docs should not publish exact post-call draft generation timing, draft retention/expiration windows, or draft availability windows without current implementation or product-policy confirmation.
- Email-templates setup docs should not publish Superhuman-specific draft-folder behavior until the current external-email-client behavior is verified on the relevant integration or drafts page.
- Email-templates setup docs should not publish template analytics, sequence infrastructure, no-show follow-up automation, low-volume audit behavior, email triage eval behavior, or draft UI redesign items as current product behavior.
- Email-templates setup docs should not publish exact smart-drafting tradeoffs, writing-voice profile visibility/exportability, or learned preference behavior unless the dedicated email preferences/rules page verifies the current customer-facing controls.
- Email-templates setup docs should not publish the internal active-template cap or exact template-selection threshold; it is enough to state that Ergo may draft without a template when no active template is a strong fit.
- Email-templates setup docs should not publish per-recipient draft suppression reliability, watermark-removal rules, open-tracking behavior, or CRM email-object dedupe behavior without page-specific verification.
- Email-templates setup docs should not claim multiple Gmail signatures can be imported automatically; current page only says signatures are configured separately.
- Email-templates setup docs should not define exact non-sales meeting filtering criteria; route draft eligibility issues to the dedicated meeting/draft eligibility pages.
- Collaboration-tools setup docs should not publish the Slack agent/chat-in-Slack capability as shipped until current Slack app status and customer availability are verified.
- Collaboration-tools setup docs should not publish bidirectional CRM updates from @-mentioning Ergo in Slack threads, Slack App Store approval status, Slack CRM self-healing, automatic bot auto-add, or Slack CRM health status as current behavior unless the specific feature is code-confirmed and customer-facing.
- Collaboration-tools setup docs should not promise that historical Slack channels are retroactively synced after adding the bot; keep channel pickup language to verify and test controlled examples until engineering confirms exact backfill behavior.
- Collaboration-tools setup docs should not publish exact Slack OAuth scope lists, exact "Authorize with your account" wording, or exact Slack email-mismatch skip guidance until the current customer-facing Slack OAuth/management flow is verified.
- Collaboration-tools setup docs should not publish exact pre-call Slack delivery timing, `/brief` slash-command availability, direct Slack inline field-editing behavior, or Slack-template navigation shortcuts until the dedicated Slack/pre-call pages verify current shipped behavior.
- Collaboration-tools setup docs should not state that all Slack Connect/customer-channel messages automatically feed deal health or CRM records; public wording should keep this source/access/processing-dependent.
- Collaboration-tools setup docs should not publish Pylon ticket creation, Pylon queue automation, or a Gong-like account-level logging claim as shipped unless the current Pylon backend path is verified.
- Collaboration-tools setup docs should treat Pylon as admin-managed/org-level for setup based on current frontend evidence, but avoid narrower token ownership or per-seat claims until backend/product confirmation is complete.
- Collaboration-tools setup docs should not present Beeper, WhatsApp, iMessage, Instagram DMs, LinkedIn DMs, or other informal messaging channels as generally supported. Frontend evidence only supports a gated Beeper token UI when enabled.
- Notetaker setup docs should not publish exact waiting-room timeout, in-call inactivity timeout, or bot-exit timing values without current backend/product confirmation.
- Notetaker setup docs should not publish underlying recording, calendar, speech-to-text, or infrastructure provider names; use customer-facing source and processing language instead.
- Notetaker setup docs should not publish Desktop app beta/GA status, OS/platform availability, audio-only/video support, auto-record reliability, or exact permissions beyond what the dedicated desktop pages verify.
- Notetaker setup docs should not claim desktop recordings trigger all automations identically to meeting-bot recordings unless the exact CRM, draft, reporting, and transcript paths are verified.
- Notetaker setup docs should not publish deterministic duplicate-capture behavior for every source mix. Public wording can say to test the team's source mix and avoid duplicate third-party sources.
- Notetaker setup docs should not claim exact Granola self-serve availability, MCP/API token availability, or source-specific recording/timestamp behavior unless the dedicated integration page verifies it.
- Notetaker setup docs should not state exact non-sales meeting classification, sales-only processing criteria, no-show draft behavior, concurrent-meeting limits, or source-specific automation skip rules without page-specific confirmation.
- Notetaker setup docs should not publish customer-specific bot-admission scripts, regulated-industry compliance use cases, litigation/subpoena framing, competitor legal exposure claims, or sales-call pricing/seat-count details.
- Notetaker setup docs should not present "Add Bot to Meeting," "dispatch immediately," or live removal controls with exact button labels unless the current UI label is verified on the dedicated meeting pages.
- User-sync docs should not publish a fixed onboarding duration, near-instant rollout promise, or claim that every user added after admin setup is ready without personal setup.
- User-sync docs should not publish exact `/onboarding` path guidance, invitation-email behavior, user inactive/active defaults, or provider login-loop debugging details unless the current auth/onboarding pages verify them.
- User-sync docs should not claim Sync with Admin copies every admin setting; code-confirmed sync options are broad but selective, and admin push/team sync can leave templates unchecked by default.
- User-sync docs should not claim Sync with Admin connects a user's personal Google/Microsoft email/calendar, Slack, desktop app, notetaker source, or third-party accounts.
- User-sync docs should not publish old default behavior for outbound email branding, watermarks, recording/logo settings, Gmail multiple-signature limits, or admin-owned email-footer controls unless the dedicated email/signature/admin pages verify current customer-facing behavior.
- User-sync docs should not state that spectators need admin role for reporting, or that spectator onboarding has a fixed step count, without current role/reporting/access verification on the relevant pages.
- User-sync docs should not publish exact three-dot menu controls, upgrade/downgrade flows, or support-gated role-change behavior unless the admin role page verifies current self-serve access.
- User-sync docs should not publish internal bot failure statuses, exact meeting-platform admission behavior by provider, or the kicked-bot toggle workaround as universal unless the dedicated notetaker troubleshooting pages verify it.
- User-sync docs should not imply retroactive import of old call recordings, support-only reruns, personal support/Calendly paths, or account-specific seat/pricing details.
- Company-details docs should not publish exact customer positioning, private value-proposition examples, private ICP segments, onboarding-call quotes, or account-specific sales narratives.
- Company-details docs should not claim ICP is a current field on the Company Details setup page unless the current UI/backend path for that field is verified; code-confirmed fields are description, challenges, and solution overview.
- Company-details docs should not claim pricing context is consumed by the Company Details page or by external-facing generated outputs; pricing configuration is a separate setup surface and pricing language is high-risk without product confirmation.
- Company-details docs should not claim company details are only white-glove or only self-serve. Code confirms a live UI and MCP/customer context confirms Ergo-assisted rollout is common.
- Company-details docs should not promise exact downstream use in every AI output, pre-call briefing, deal-health score, call grading rubric, or revenue-intelligence report unless the dedicated page verifies the current code path.
- Company-details docs should not promise next-day go-live, automatic rewriting of existing drafts/descriptions/stages, guaranteed output accuracy, or automatic CRM-update correctness from company context alone.
- Meeting-title-phrases docs should not publish customer-specific calendar naming conventions, booking-link examples, private onboarding-call guidance, or account-specific soft-sales classification incidents.
- Meeting-title-phrases docs should not publish exact meeting classifier model names, prompts, thresholds, confidence behavior, or real-time versus post-call timing.
- Meeting-title-phrases docs should not claim customers can see or manually override classifier decisions unless the current customer-facing UI is verified.
- Meeting-title-phrases docs should not claim AI Boost catches every exploratory, relationship-building, or soft-sales meeting; use phrase-tuning and retest language.
- Meeting-title-phrases docs should not claim title phrases alone dispatch or cancel the notetaker. Calendar connection, notetaker setup, meeting URL, and skip-internal behavior are separate controls.
- Meeting-title-phrases docs should not conflate setup Meeting Titles with org notetaker-webhook titlePhrases or reporting rubric-specific meetingTitlePhrases.
- Meeting-title-phrases docs should not publish fixed default state for AI Boost without reconciling backend defaults, getter fallbacks, and current UI state.
- Exact admin versus super-admin capability boundaries should not be stated broadly unless the relevant page has code-confirmed the specific control.
- Specific integration sync frequencies should not be stated unless verified against current implementation or formal product policy.
- Account-specific feature enablement and web-versus-desktop rollout preferences should not be stated as universal product behavior without current product-policy confirmation.
- Spectator access should not be implied beyond code-confirmed meeting/view restrictions.
- Shared-link viewers should not be described as workspace roles; keep them separate from user/admin/super-admin/spectator role language.
- Shared-link issues should not be framed as a top support category unless page-specific evidence supports that framing.
- Broad `workspace and team` prerequisites should be replaced with concrete Ergo source, account, organization, team, or setup language only when the page evidence supports that terminology.
- Public docs should avoid mentioning approved auto-send flows unless the current customer-facing behavior is verified on a draft/email page.
- Scheduled/recurring prompt preview controls should be described with `when available` language unless a page-specific check confirms the current stable customer-facing state.
- `Rollout owner` is useful internal shorthand but should usually be replaced in public docs with admin, super admin, or admin responsible for setup unless a page defines it plainly.
- Documents as a peer-level data source need stronger durable evidence before being presented broadly as a primary ingest source.
- Desktop recording docs should avoid unstable capability, version, roadmap, or provider-specific details unless product confirms the current behavior.
- Provider outage details and backend support-process details should stay internal unless they are converted into approved customer-facing support guidance.

## Customer-context themes generalized for docs

- Customers need a clear first-use path because support has received direct requests for user guides.
- Meeting capture issues usually need separate checks for calendar connection, source calendar, changed links, waiting-room admission, manual dispatch, and processing state.
- CRM sync issues usually trace back to field mapping, property permissions, owner fields, pipeline/stage mapping, or stage drift.
- Draft confusion usually comes from disabled draft settings, sales/customer meeting classification, duplicate notetaker sources, stale email grants, or failed-send validation.
- Reporting confusion usually comes from missing access, narrow filters/date ranges, unpopulated custom fields, or sharing assumptions.
- Desktop issues usually need checks for sign-in, macOS permissions, restart requirements, app version, local detection, upload, and processing state.

## Parallel-worker unresolved notes consolidated

Detailed worker packets remain in the agent scratch files under `customer-docs/fact-check-agent-*-unverified-2026-06-08.md`. The items below are the canonical summary of unresolved or softened claims from those packets.

### Admin, Setup, and Troubleshooting

- Admin pages should not publish contract-dependent billing triggers, discounts, renewal windows, spectator pricing, or exact invoice behavior. Public docs keep usage/billing surfaces operational and point commercial reconciliation to contract/invoice sources.
- Admin access pages should not claim exact downstream meeting, reporting, Ask Ergo, search, or email-cadence visibility effects unless the specific page code verified that edge. Public docs use conditional access language and link to the relevant grants/settings pages.
- Admin role and team pages should not publish support-only transfer flows, future permission-model work, or exact historical-access behavior after team moves without current customer-facing evidence.
- Provisioning and user-management pages should not claim provisioning is only Ergo-team-operated when approved code exposes admin-gated self-serve actions, but also should not promise billing adjustment timing or full personal setup completion.
- Agent Persona docs should not claim exactly which AI surfaces change from the persona selector; code confirmed storage and enum values, not every downstream behavior.
- `Ergo Enabled` docs should not state every automation surface stopped by disabling Ergo, historical defaults, or missed-meeting reprocessing behavior without dedicated verification.
- Troubleshooting pages should not publish exact token-expiry windows, provider error-code tables, waiting-room timeouts, attachment limits, rate limits, or source-provider outage details unless current implementation or product policy confirms them.
- Troubleshooting pages should keep support request examples generalized and should not include customer names, ticket IDs, private Slack excerpts, account-specific source details, or incident-specific root causes.
- Pylon troubleshooting should stay generalized around connection, destination mapping, asset readiness, retries, and duplicates because page-specific MCP did not expose complete Pylon delivery mechanics and approved repo evidence did not verify a full public Pylon workflow.

### Integrations and Desktop

- Integration pages should not promise complete sync, broad backfill, fixed timing, or bidirectional parity from MCP/customer context when approved repo evidence only confirms connection setup, source limits, and downstream prerequisites.
- Salesforce, HubSpot, Attio, Pipedrive, and Ergo CRM docs should keep provider-specific caveats tied to current code and should not publish anecdotal validation-rule, required-field, or historical-backfill behavior as universal.
- Slack docs should not publish exact OAuth scope lists, Slack App Store/status claims, automatic channel auto-add, self-healing channel mappings, retroactive channel indexing, or direct Slack CRM editing unless code-confirmed and customer-facing.
- Slack Connect and Enterprise Grid docs should keep channel visibility, user access, and bot membership language generalized because exact workspace/org policy behavior depends on Slack configuration.
- Pylon integration docs should not claim ticket creation, Pylon queue automation, or account-level CRM behavior. Current public docs should describe Pylon as a recording/workflow delivery destination that requires admin-managed destination setup.
- Beeper and informal messaging docs should not imply broad WhatsApp, iMessage, Instagram DM, LinkedIn DM, or general messaging-channel support; frontend evidence supports only gated token-style surfaces where enabled.
- Desktop pages should not publish beta/GA status, exact supported chip/year/version thresholds, provider names, or platform-roadmap details without product confirmation. Public docs use supported-download, macOS permissions, quit-and-reopen, local capture, upload, and processing caveats.
- Desktop recording docs should not claim desktop recordings trigger every bot-based automation identically unless the specific CRM, draft, reporting, transcript, and source-attribution path is verified.

### Meetings and Knowledge Base

- Meeting pages should not publish exact notetaker timeout values, in-call inactivity timing, provider names, platform-specific admission behavior, or deterministic bot-retry windows without current product confirmation.
- Meeting pages should keep calendar visibility, notetaker scheduling, live bot status, recording/transcript readiness, downstream draft/reporting qualification, and internal visibility/share access separate.
- Recurring/rescheduled meeting docs should avoid overclaiming every series/occurrence edge unless current backend code confirms it; public docs use occurrence-versus-series and unscheduled-marker language.
- Meeting share, clip, and password docs should not imply shared links change internal workspace roles or grant full authenticated drilldown access.
- Auto-delete docs should not promise exact deletion timing; code confirms time-based deletion settings and cron processing, not customer-visible minute-level timing.
- Knowledge-base docs should not claim uploaded documents become structured deal attachments or automatically drive every post-call output. Public docs distinguish uploaded documents, generated documents, document scopes, sharing, deal links, and post-call reference behavior.
- Knowledge-base retry docs should keep retry scoped to failed indexed documents and stored extracted text; do not imply arbitrary reprocessing or broad source backfill.

### Deals, CRM, and Field Mapping

- Deals pages should not publish internal feature-flag names, future task/note CRM sync, audit-trail work, or unsupported deal-view entry points. Supplemental edits removed internal feature-flag wording from public Deals pages.
- AI overview and health docs should not present summaries as complete, final, guaranteed, or refreshed on an exact cadence unless the cadence and thresholds are code-confirmed for the customer-facing page.
- Bulk action docs should mention only code-confirmed actions and keep Slack drafts conditional on relevant integration/feature access.
- Field Mapping docs should not promise newly mapped fields automatically backfill every historical record, nor that backfill is self-serve for every source. Public docs use limited/operations-supported/backfill-caveat language.
- Stage docs should not promise exact rename/delete/recreate behavior for every CRM. Public docs focus on internal IDs, current CRM state, resync, drift checks, and controlled test deals.
- Deal qualification docs had a page-specific MCP blocker; public wording stayed conservative and based on approved repo evidence.
- Company/domain mapping docs should avoid customer-specific promises, exact matching thresholds, and broad CRM-company writeback claims not verified in the relevant page evidence.

### Drafts, AI Search, and Reporting

- Draft docs should not claim every meeting, deal, or message creates a draft. Draft creation depends on workflow triggers, source qualification, settings, template fit, and processing.
- Draft docs should not publish exact draft generation timing, retention/expiration windows, attachment limits, provider-side mirroring, per-recipient tracking, or email-client-specific folder behavior without current implementation confirmation.
- Auto-send docs should not make universal no-auto-send or universal auto-send claims; public docs keep auto-send scoped to separately approved settings and reviewable workflows.
- Open tracking docs should not promise complete delivery or engagement records, per-recipient certainty, or provider-independent accuracy.
- AI search docs should not add source entity types beyond code-confirmed meetings, email threads, and user documents unless verified. Floating-panel docs should not imply every visible page field is in AI context.
- Scheduled-agent docs should keep alpha/limited-scope wording and should not treat queued/test runs as final delivery confirmation.
- Reporting docs should not publish exact data thresholds, automatic field choices, plan-tier access, historical backfill guarantees, or internal/customer-specific legacy cron behavior.
- Reporting share docs should keep shared chart/dashboard drilldown narrower than authenticated Reporting where code supports narrower public/shared endpoints.
- Cross-org analytics should not be described as a standard customer workflow unless explicitly provisioned; current docs keep it non-standard and admin/operator oriented.
