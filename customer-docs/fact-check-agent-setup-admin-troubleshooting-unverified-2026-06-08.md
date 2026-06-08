# Setup/Admin/Troubleshooting unverified notes - 2026-06-08

Use this file for page-specific claims that were useful during research but were removed, softened, or not published because code-confirmed support was missing or the detail was too customer-specific.

## customer-docs/setup/crm-properties-setup.mdx

- Ergo MCP mentioned exact onboarding-duration guidance and anecdotal "failed to add" behavior for duplicate CRM properties. I did not publish exact timing or normalize every failure notice because I did not confirm the current UI/error behavior in approved repos.
- Ergo MCP mentioned Attio-specific duplicate ID and checkbox-to-multiselect limitations. I did not publish these because the page is a generalized setup page and the details came from anecdotal support context rather than current code review.
- Historical backfill behavior remains a caveat. I published only a softened warning to treat backfill as separate confirmation rather than claiming unsupported universally.

## customer-docs/setup/pipeline-stages.mdx

- Ergo MCP described deal board sync as "real-time, 1:1" and described automatic stage moves, stale-deal bulk movement, activity logging, and role visibility. I did not publish those stronger claims on this setup page because the approved code review for this page focused on stage configuration/sync endpoints rather than full automation behavior.
- Ergo MCP recommended closed-stage exit-point guardrails based on customer incidents. I published the general exit-point concept and drift caveat, but left incident-specific guidance out of public docs.

## customer-docs/setup/pricing-configuration.mdx

- Ergo MCP framed the page as CRM deal-value field mapping and downstream deal-health/reporting behavior. Approved repo code for this page instead showed a Super Admin-only `PricingConfig` model with a single org-scoped free-text `description`, so I kept the public page tied to the code-confirmed pricing component.
- I did not publish MCP claims about currency, sync latency, multi-currency, forecasting, CRM write-back, expansion tracking, or supported CRM-specific pricing fields because those were not verified for this page in approved code.

## customer-docs/setup/advanced-settings.mdx

- Ergo MCP described broad defaults for meeting capture, mailbox scope, auto-write, post-call drafts, dialers, and data capture continuity. I did not publish those broad claims because this page's approved repo evidence centered on the AdvancedSettings component and its code-confirmed cards/toggles.
- I did not claim selective Gmail folder behavior, Slack indexing scope, notetaker default behavior, or exact "immediate effect" semantics because those belong to integrations/meetings pages or need page-specific verification.

## customer-docs/setup/reporting-defaults.mdx

- Ergo MCP mentioned a rough recorded-conversation threshold, weekly digest behavior, shareable report behavior, and forward-only custom property timing. I did not publish those details on this setup page because the approved code evidence for this page verified default dashboard/rubric creation and reporting access gating, not the exact data threshold or digest behavior.
- Ergo MCP described reporting defaults as applied by the Ergo team during onboarding, but current frontend code exposes onboarding toggles and self-serve default dashboard creation from Reporting for users with access. I used the code-confirmed self-serve behavior.

## customer-docs/admin/admin-dashboard-overview.mdx

- Ergo MCP included claims about contract-dependent billing triggers, specific integration availability, granular permissions comparable to AWS, day-to-day admin overhead, and pricing/license model. I did not publish those in the overview because the approved Admin code review did not verify them.
- Ergo MCP said dashboards can surface in connected CRM tools and mentioned freeform forecasting/agent queries. I kept the overview focused on Admin controls, not reporting/agent functionality.

## customer-docs/admin/organization-and-team-hierarchy.mdx

- Ergo MCP claimed specific data-visibility boundaries such as secondary admins not seeing primary admin activity and members only seeing their own data. I did not publish those as hard rules because this page's code review verified team structure, not every meeting/reporting permission edge.
- Ergo MCP described scheduled runs/team-scoped agents and reporting rollups. I left those out because this hierarchy page should not promise AI/reporting behavior without page-specific verification.

## customer-docs/admin/create-edit-delete-teams.mdx

- Ergo MCP said team type had no confirmed UI picker and delete behavior was not confirmed. Current approved frontend/backend code does expose a team type selector and a super-admin-gated delete route with a no-orphan-members guardrail, so I published the code-confirmed behavior.
- Ergo MCP described backfill, historical scoring, and immediate permission-change effects. I did not publish those because they were not verified in the team create/edit/delete code reviewed for this page.

## customer-docs/admin/provision-accounts.mdx

- Ergo MCP said provisioning is not self-serve and is handled by the Ergo team. Current approved frontend/backend code exposes an admin-gated `Provision New Account` modal and `/dashboard/admin/provision-account` route, so I published the code-confirmed self-serve admin path.
- Ergo MCP included specific billing terms, discounts, renewal windows, reporting add-on pricing, and spectator billing claims. I did not publish those because commercial terms are not appropriate for this admin how-to and were not verified in approved product code.
- Ergo MCP listed detailed post-provisioning setup steps for integrations and notetaker admission. I kept only a general personal-setup follow-up and linked elsewhere because those details belong to setup/meetings/integrations pages.

## customer-docs/admin/add-remove-move-members.mdx

- Ergo MCP included billing/deactivation claims for seat removal. Approved admin code verifies the "Remove entirely" product action, dashboard deletion, WorkOS membership deactivation attempt, and organization/team removal, but not commercial billing timing, so I did not publish billing-adjustment promises.
- Ergo MCP described meeting visibility, private meetings, global access, and historical access behavior after team moves. I kept the public page to code-confirmed team membership updates and pointed admins to access pages because this member-management code review did not verify every meeting/reporting visibility edge.
- Ergo MCP said role changes and team reassignments may require action through the super admin's account. Current code confirms add/move/remove routes are super-admin-gated; I published the permission requirement but did not publish broader support-process claims.

## customer-docs/admin/promote-demote-convert-roles.mdx

- Ergo MCP included support-specific claims about exact meeting visibility boundaries, reporting access defaults, and permission-model gaps. I did not publish those as hard rules on this role-change page because the approved role code verifies role and spectator conversion behavior, not every downstream access edge.
- The convert-role modal mentions billing-rate changes, but approved product code for this page does not verify commercial terms or billing timing. I did not publish billing promises.
- MCP described future or in-progress permission-model work and super-admin transfer support. I left those out because they are not current code-confirmed role-change behavior for this page.

## customer-docs/admin/spectator-management.mdx

- Ergo MCP said spectator-to-standard conversion may require support or backend action in some support contexts. Current approved admin code exposes a super-admin-gated convert-role route and UI action, so I published the code-confirmed super-admin conversion flow and left the support-process uncertainty out of the public page.
- MCP included broad claims about spectators seeing team recordings, deal board, reports, reporting email cadences, and meeting summaries. I kept access language conditional and pointed to access grants because this page's approved code review verified seat status and conversion behavior, not every downstream visibility surface.
- MCP mentioned CRM appearing connected through inherited/org-level context in a support scenario. I did not publish that edge case because it was not confirmed in the reviewed Admin code.

## customer-docs/admin/grant-meeting-reporting-access.mdx

- Ergo MCP could not provide substantive product behavior for this page because the visible knowledge base only surfaced a stub. I used approved repo evidence instead.
- I did not publish broad claims about all meetings, private meeting behavior, or reporting email cadences on this page. The reviewed code verified custom meeting grants, global-meeting-access references, and reporting dashboard grants, not every downstream visibility or email-cadence edge.
- Meeting-grant backend comments mention primary-admin scoped behavior while the Admin member-table action is shown for super admins. I kept the public wording precise: the Admin member-table action is super-admin oriented, and primary-admin scope may be limited.

## customer-docs/admin/sync-crm-settings-to-team-members.mdx

- Ergo MCP focused on onboarding "Sync with Admin" and Field Mapping "Sync from CRM" rather than the Admin member-table `Sync CRM` and `Sync Settings to User` actions. I used approved Admin code for the public page.
- MCP said admin settings sync does not copy personal CRM credentials, but the reviewed Admin member-table `Sync CRM` and `Sync Settings to User` code can copy stored CRM keys from an admin dashboard to a user dashboard. I published the code-confirmed Admin behavior and left onboarding-flow claims out.
- I did not publish MCP claims about re-running onboarding sync, 403 support bugs, or Field Mapping import behavior because those belong to setup/field-mapping troubleshooting rather than this Admin page.

## customer-docs/admin/global-meeting-access.mdx

- Ergo MCP included private-meeting override behavior and external meeting share-link behavior. I did not publish those on this Admin page because the page-specific approved code review verified the org-level toggle and meeting scope resolution, not private-meeting or external-share semantics.
- MCP suggested primary admin terminology and secondary-admin toggle uncertainty from conversations. Current approved Admin routes gate global meeting access with `superAdminAuth`, so I published super-admin-only control language.
- I avoided claiming exact Ask Ergo/search scope effects after global access because that was not verified in the reviewed Admin/meetings code for this page.

## customer-docs/admin/default-meeting-summary-settings.mdx

- Ergo MCP described per-user Integrations settings and CS-assisted bulk changes. Current approved frontend code exposes super-admin default controls in the calendar settings menu, so I published that code-confirmed Admin behavior rather than CS-process language.
- MCP mentioned an "internal recipients only" sub-option and the distinction between post-call summary emails and follow-up draft emails. I did not add those details to this Admin default page because the page-specific approved code review centered on default summary/recording toggles, not the full Integrations email settings surface.
- MCP included timing estimates and notetaker-ownership edge cases. I did not publish exact timing or ownership behavior because approved backend evidence only verified delivery prerequisites and skip conditions.

## customer-docs/admin/recording-disclaimer-defaults.mdx

- Ergo MCP included transcript-only claims about per-meeting disclaimer toggles and default-on/default-off behavior. I did not publish those because this Admin page's approved code review verified the org-level setting, not the full per-meeting UI or product-wide default state.
- MCP described desktop recording as silent/audio-only and legally sensitive. I published only the narrow caveat that desktop recording should be reviewed separately because no bot joins; I did not publish broader legal conclusions or desktop product specifics on this Admin page.
- I did not claim every active bot will definitely update after a toggle change. Approved backend code attempts to update active/scheduled bots and returns counts, so the public page uses "attempts" language.

## customer-docs/admin/agent-persona.mdx

- Ergo MCP could not verify the Admin Persona setting from indexed customer/docs sources. I used approved repo code as the source of truth.
- I did not publish claims about exactly which AI surfaces persona affects because approved code verified storage and enum values, not all downstream agent behavior.
- MCP mentioned unrelated CRM contact persona concepts and user-level writing-voice customization; I left those out because they are not this org-level Admin setting.

## customer-docs/admin/ergo-enabled-status.mdx

- Ergo MCP included support-context claims about Field Mapping toggle location, missed-meeting reprocessing, historical default states, and exact automation surfaces stopped by disabling Ergo. I did not publish those strong claims on this Admin page because the page-specific approved code review verified the Admin status/toggle routes and Active calculation, not every downstream automation or support reprocessing path.
- MCP mentioned spectator pricing and reporting visibility. I left those out because pricing and reporting grants are covered separately and were not verified in the reviewed code for this page.
- I avoided claiming admin-only enforcement beyond what the current Admin routes show because MCP described some user self-toggle behavior outside Admin.

## customer-docs/admin/agent-usage-and-billing.mdx

- Ergo MCP included internal cost estimates, Stripe/billing-system implementation status, rate limits, and historical ledger-hardening caveats. I did not publish those because they are not customer-doc-safe and were not verified in the approved product UI/backend review for this page.
- I did not publish exact customer-facing pricing, invoice behavior, or contract terms. The public page says Admin usage is operational visibility and points billing reconciliation to contract/invoice sources.
- Approved frontend code references `/dashboard/admin/agent-usage`, but I did not find the matching route in the approved backend repo during this page pass. I kept the page phrased around what the UI renders when usage data is available.

## customer-docs/troubleshooting/sign-in-and-desktop-callback-issues.mdx

- Ergo MCP included exact desktop version numbers, provider deprecation timing, and support-case-specific auth root causes. I did not publish exact versions, dates, or incident details because the approved repo review verified WorkOS/deep-link/auth-callback behavior but not those current operational facts.
- I kept provider/SSO language generalized and code-backed: same account, exact provisioned email, desktop callback/deep link, quit-and-reopen permission handling, and update checks.
- A main-thread MCP reconciliation run mentioned provider-specific auth details, Google/Microsoft account behavior, and desktop beta/platform anecdotes. I published only the stable account/callback/support-escalation guidance that matched approved repo and current desktop docs evidence.

## customer-docs/troubleshooting/dashboard-setup-errors.mdx

- Ergo MCP included exact waiting-room timeout, unsupported scheduling-tool, and historical sync/backfill claims. I did not publish exact timing or backfill promises because those were not verified in the page-specific approved code review.
- I kept setup guidance tied to role path, source connection, workspace-level settings, CRM mapping, notetaker setup, and reporting access.

## customer-docs/troubleshooting/crm-sync-issues.mdx

- Ergo MCP included specific UI error names, retroactive backfill limitations, and score-filter thresholds. I did not publish exact thresholds or internal error labels without approved repo confirmation for this page.
- I softened CRM sync wording around write-vs-ingestion behavior and focused on public checks: connection, mapping, property permissions, owner/stage filters, and record associations.

## customer-docs/troubleshooting/stage-drift-conflicts.mdx

- Ergo MCP strongly stated that pure stage renames should keep matching by underlying stage identifier. Approved code confirms internal IDs are used in stage data, but I kept public wording focused on checking whether a change was display-only or structural rather than promising every rename case.

## customer-docs/troubleshooting/google-microsoft-slack-reconnects.mdx

- Ergo MCP included provider token-expiration windows, OAuth error codes, and Slack token-rotation details. I did not publish exact provider timings or error-code tables because the approved repo review only verified reconnect/connection surfaces and docs-safe source checks.
- I kept the public doc to expired/revoked grants, same-account reconnects, scopes, Slack workspace/channel access, and no automatic backfill promise.

## customer-docs/troubleshooting/slack-enterprise-grid-channel-listing-issues.mdx

- Ergo MCP could not see the MDX file and only offered general Slack Enterprise Grid checks. I used approved repo/docs evidence and kept the page to channel visibility, workspace, private/external access, and bot membership without promising exact Slack scope lists.

## customer-docs/troubleshooting/slack-disconnect-reconnect-and-stale-channel-mappings.mdx

- Ergo MCP included private support-thread statements and exact Slack workflow path language. I did not publish quotes or private details.
- MCP mentioned no automatic backfill and bot membership requirements; I published these only in generalized form and avoided promising self-healing, automatic remapping, or fixed sync timing.

## customer-docs/troubleshooting/add-ergo-to-new-slack-customer-channels.mdx

- Ergo MCP mentioned an auto-add/bulk-add Slack channel flow and exact Slack plan/channel eligibility details. Because these were not fully verified in approved repo code for this page, I did not publish plan requirements or roadmap-style auto-add promises.
- The public page keeps the safe current checks: Slack connected, user/channel visibility, Ergo added to the channel, external-channel app permission, and forward-looking monitoring only.

## customer-docs/troubleshooting/pylon-delivery-failures-duplicate-deliveries-and-queue-health.mdx

- Ergo MCP could not see the MDX file and did not provide product-specific delivery mechanics. Approved repo evidence showed external delivery/queue/dedup patterns but not a complete public Pylon delivery route, so I kept guidance generalized around connection, destination mapping, asset readiness, retries, and duplicates.

## customer-docs/troubleshooting/notetaker-did-not-join.mdx

- Ergo MCP included exact platform behavior and supported platform claims. I avoided publishing a complete supported-platform list or exact timeout language in this troubleshooting page because the page-specific approved code review centered on notetaker state, waiting room/admission, current links, manual dispatch, and shared-call behavior.

## customer-docs/troubleshooting/transcript-or-recording-missing.mdx

- Ergo MCP included an approximate minimum-duration threshold and plan/feature-entitlement language. I did not publish thresholds or plan gating because they were not confirmed in approved code for this page.
- I softened downstream-output language because recording, transcript, summary, insights, reporting, and drafts can process independently and may have separate qualification/access requirements.

## customer-docs/troubleshooting/duplicate-drafts-from-multiple-notetakers.mdx

- Ergo MCP suggested several duplicate-source causes that may happen in support contexts. Approved code/docs verified overlapping notetaker-source risk and existing multiple-notetaker guidance, so I published only generalized source/draft checks and avoided asserting universal dedupe behavior.

## customer-docs/troubleshooting/draft-send-failures.mdx

- Ergo MCP included exact provider scopes, attachment size limits, and rate-limit behavior. I did not publish those exact values because they were not verified in the approved repo pass for this page.
- The public page keeps provider rejection, connected mailbox, sender/recipient/body validation, reply-thread context, and failed-drafts retry checks.

## customer-docs/troubleshooting/search-reporting-has-no-results.mdx

- Ergo MCP included broad product-surface assumptions and browser-cache advice. I kept the public page tied to verified doc/code concepts: filters/date range/source processing, viewer access, custom/reporting fields, and scheduled preview windows.

## customer-docs/troubleshooting/permission-or-access-denied.mdx

- Ergo MCP could not see the MDX file and only offered generic permission-surface framing. Approved Admin/reporting/meeting docs and code verified separate role/team/spectator/reporting/meeting/shared-link controls, so I published those checks and did not add unverified feature-flag or entitlement details beyond cautious wording.
