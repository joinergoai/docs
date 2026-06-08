# Setup/Admin/Troubleshooting fact-check audit - 2026-06-08

Scope: remaining Setup pages after `meeting-title-phrases`, Admin pages, and Troubleshooting pages assigned to this worker.

Connector baseline:

- CLI MCP check from docs repo succeeded: `codex mcp list` shows `ergo` enabled via OAuth; `codex mcp get ergo` shows streamable HTTP URL `https://api.joinergo.com/api/mcp`.
- In-thread Ergo MCP tools exposed through `tool_search`: `ask_ergo_agent`, `get_ergo_agent_result`.
- Linear read-only search available and used for generalized demand signals around field mapping/backfill, Slack CRM reliability, notetaker friction, and permission/access issues.
- Pylon read-only search available; type-filtered searches were blocked by connector enum validation, but unfiltered recent issue search succeeded and showed generalized themes around notetaker recording, deal stage/pipeline changes, duplicate drafts, email failures, sign-in/reset, and user guide requests.

## Setup

### customer-docs/setup/crm-properties-setup.mdx

- docs.json route: Setup group, after `meeting-title-phrases` and before `pipeline-stages`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=d7d1a776-6ce8-486e-a622-11d1f5918c36`, `threadId=a688f820-ffae-4e13-9bc0-8da6a2a8461d`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/api/crmProperties.ts`; `Ergo-Dashboard-Frontend/src/components/PropertiesConfig.tsx`; `Ergo-Dashboard-Backend/src/routes/dashboard/crm.js`; canonical docs in `customer-docs/field-mapping/*`.
- Customer/planning signal: Linear search surfaced field mapping/backfill and CRM property audit needs; Pylon recent issues surfaced deal-stage/pipeline-change support themes.
- Edit summary: replaced placeholder setup copy with a CRM-property onboarding checklist; clarified Field Mapping ownership, CRM permissions, drift, and forward-looking effect of property changes; pointed detailed instructions to canonical Field Mapping pages.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

## Admin

### customer-docs/admin/admin-dashboard-overview.mdx

- docs.json route: Admin group, first Admin page.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=040130a1-61c6-4a4e-b1d4-59c61a92dab7`, `threadId=1a9766f9-94e5-48b7-9b5b-967a0b9f079c`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/pages/AdminDashboard.tsx`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; AdminDashboard components; `Ergo-Dashboard-Backend/src/models/Org.js`; `Ergo-Dashboard-Backend/src/routes/dashboard/admin.js`.
- Customer/planning signal: generalized support/planning themes emphasize access confusion, provisioning, reporting access, team ownership, and meeting visibility.
- Edit summary: reframed overview as map of Admin surface; clarified org overview, team cards, member tables, provisioning, team actions, reporting access, global controls, persona, pipeline access, and usage visibility by role.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/organization-and-team-hierarchy.mdx

- docs.json route: Admin group, after `admin-dashboard-overview`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=df8b3a5b-95d7-4f35-924a-9b77a2d65da5`, `threadId=1e3c348f-d467-4dc4-bda2-ea5e4c5445fc`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Backend/src/models/Org.js`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; `Ergo-Dashboard-Frontend/src/pages/AdminDashboard.tsx`; AdminDashboard team/member components.
- Edit summary: clarified org/team model, team types, primary admin, secondary admins, users, spectators, and separate access grants.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/create-edit-delete-teams.mdx

- docs.json route: Admin group, after `organization-and-team-hierarchy`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=2cdce710-8ff6-43ac-8574-87d19d71c809`, `threadId=77478c95-b9d3-4aab-8cdd-55ccb11d4f05`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/AdminDashboard/CreateTeamModal.tsx`; `EditTeamDetailsModal.tsx`; `Ergo-Dashboard-Frontend/src/pages/AdminDashboard.tsx`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/admin.js`; `Ergo-Dashboard-Backend/src/models/Org.js`.
- Edit summary: documented create/edit/delete steps, super-admin/primary-admin permissions, required primary admin, supported team types, and deletion guardrail when members would have no team.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/provision-accounts.mdx

- docs.json route: Admin group, after `create-edit-delete-teams`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=330154ac-6771-4b68-835a-1836c7d09f32`, `threadId=4f037591-cb52-4700-85ed-de283f6d704a`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/AdminDashboard/AccountProvisionModal.tsx`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/admin.js`.
- Edit summary: documented required first/last/email/team fields, role and seat type, account/dashboard creation, welcome email attempt, tasks-disabled default, personal setup follow-up, and billing/seat-check caveats.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/add-remove-move-members.mdx

- docs.json route: Admin group, after `provision-accounts`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=e2256342-91e0-46de-8582-62295316d9ce`, `threadId=9b7993a7-98ac-4532-aae3-b029664c14d0`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/AdminDashboard/AddMemberModal.tsx`; `RemoveMemberModal.tsx`; `SwapTeamModal.tsx`; `MembersTable.tsx`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/admin.js`.
- Edit summary: clarified that add-member is for existing organization users, documented move-to-team behavior, separated "Remove from team" from "Remove entirely", and added guardrails for primary admins, only-team membership, destination teams, and downstream access checks.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/promote-demote-convert-roles.mdx

- docs.json route: Admin group, after `add-remove-move-members`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=3d40884a-4c2c-4382-aaac-a8c5932bc3dd`, `threadId=9123b013-5c17-492c-bf63-6be047ceea05`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/AdminDashboard/PromoteUserModal.tsx`; `DemoteUserModal.tsx`; `ConvertRoleModal.tsx`; `MembersTable.tsx`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/admin.js`.
- Edit summary: documented the three code-confirmed role flows: promote member to secondary admin, demote secondary admin to user, and convert between standard user and spectator; added primary-admin conversion limit and integration/toggle effects of spectator conversion.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/spectator-management.mdx

- docs.json route: Admin group, after `promote-demote-convert-roles`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=6f4a90ba-01ca-41ba-8179-4b918de99c85`, `threadId=1f3ecc00-5fa0-4f1b-9bc9-27f3a57aa76e`, status `answered` after multiple polls.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/AdminDashboard/AccountProvisionModal.tsx`; `MembersTable.tsx`; `ConvertRoleModal.tsx`; `organizationStats.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/admin.js`; `Ergo-Dashboard-Backend/src/models/Dashboard.js`.
- Edit summary: documented spectator provisioning, Admin display, standard/spectator conversion, disabled Ergo behavior, integration/toggle effects, and separate meeting/reporting access checks.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/grant-meeting-reporting-access.mdx

- docs.json route: Admin group, after `spectator-management`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=00237e44-75ef-49fe-8538-74d631931d1c`, `threadId=e19e8ad5-775d-4a81-a158-2e1d3f851b6f`, status `answered` but blocker: MCP could not see substantive page/product context and only found a stub document.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/AdminDashboard/GrantMeetingAccessModal.tsx`; `MembersTable.tsx`; `Ergo-Dashboard-Frontend/src/components/Admin/ReportingAccessGrantModal.tsx`; `ReportingAccessManager.tsx`; `Ergo-Dashboard-Frontend/src/api/meetings.ts`; `api/reporting.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/meetings.js`; `routes/dashboard/reporting.js`; `utils/getReportingAccess.js`.
- Edit summary: split meeting access grants from reporting access grants; documented selected-member meeting visibility, same-team/exclusion nuance, reporting all-dashboard/specific-dashboard/create scopes, edit/revoke behavior, and global meeting access pointer.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/sync-crm-settings-to-team-members.mdx

- docs.json route: Admin group, after `grant-meeting-reporting-access`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=e3144a6b-4e5e-4b39-9409-ac54fc4f429c`, `threadId=532520ce-67b4-41a7-956a-03242e9bde8b`, status `answered`, but response focused mostly on onboarding "Sync with Admin" and Field Mapping "Sync from CRM" instead of the Admin member-table actions.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/AdminDashboard/MembersTable.tsx`; `PushSettingsModal.tsx`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/base.js`; `routes/dashboard/organization.js`.
- Edit summary: separated `Sync CRM` from `Sync Settings to User`; documented CRM key copy behavior, owner-property check, selectable settings categories, template default-off behavior, overwrite caveats, and Salesforce record-type condition.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/global-meeting-access.mdx

- docs.json route: Admin group, after `sync-crm-settings-to-team-members`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=19ba3fd5-9cb4-445c-b7c7-8c5a3ded8b42`, `threadId=9509748b-8023-46d0-ad52-12428d745211`, status `answered` after one result-call timeout.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/pages/AdminDashboard.tsx`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/admin.js`; `Ergo-Dashboard-Backend/src/routes/dashboard/meetings.js`.
- Edit summary: documented the super-admin-only organization toggle, broad meeting-visibility effect, default fallback to owned/attended/team/custom grants when disabled, dashboard invalidation expectation, and individual-grant alternative.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/default-meeting-summary-settings.mdx

- docs.json route: Admin group, after `global-meeting-access`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=7f7dbf89-c3fd-4f6a-9619-dcbdccf02136`, `threadId=8d5785e8-ad96-4218-b4d0-955939ba1a5c`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/UpcomingMeetings/CalendarSettingsMenu.tsx`; `Ergo-Dashboard-Backend/src/models/Dashboard.js`; `Ergo-Dashboard-Backend/src/routes/dashboard/notetaker.js`; `Ergo-Dashboard-Backend/src/routes/calendar/recallWebhooks.js`; related notetaker API types.
- Edit summary: documented super-admin default controls for `Send Summary Email` and `Send Recording & Transcript`, user override behavior from the UI copy, delivery caveats, recording-link/private-meeting caveat, and distinction from access/reporting/disclaimer settings.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/recording-disclaimer-defaults.mdx

- docs.json route: Admin group, after `default-meeting-summary-settings`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=a8d3883d-18fd-4a4d-a394-e3e2b43543d7`, `threadId=fb2e629a-14d4-4606-ac4b-740ed05492df`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/UpcomingMeetings/CalendarSettingsMenu.tsx`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/notetaker.js`; `Ergo-Dashboard-Backend/src/routes/calendar/nylasWebhooks.js`; `Ergo-Dashboard-Backend/src/models/Org.js`.
- Edit summary: documented the super-admin recording-disclaimer switch, bot chat-message purpose, org setting persistence, active/scheduled bot update attempt, desktop caveat, and compliance-notice caution.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/agent-persona.mdx

- docs.json route: Admin group, after `recording-disclaimer-defaults`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=b6373e72-cc4c-4364-9910-65e42468d94e`, `threadId=62acfe60-91d3-4b65-8046-891187205a07`, status `answered` but blocker: MCP could not verify the Agent Persona setting from indexed sources.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/pages/AdminDashboard.tsx`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/admin.js`; `Ergo-Dashboard-Backend/src/models/Org.js`.
- Edit summary: documented the super-admin-only org persona selector, supported values `Standard Sales` and `Investment Firm`, default value, org persistence, unsupported-value rejection, and non-permission effects.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/ergo-enabled-status.mdx

- docs.json route: Admin group, after `agent-persona`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=c7a45186-e462-4d45-92c5-bccd93f1bed6`, `threadId=8c981843-500e-494e-9cd1-a274916689ff`, status `answered` after multiple polls.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/AdminDashboard/MembersTable.tsx`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/admin.js`; `Ergo-Dashboard-Backend/src/routes/dashboard/ergo.js`; `Ergo-Dashboard-Backend/src/models/Dashboard.js`.
- Edit summary: documented Admin status fetch/toggle behavior, Active vs. Enabled distinction, CRM-connected/standard-seat requirements for Active, spectator `N/A` behavior, same-org/dashboard validation, and failure modes.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/agent-usage-and-billing.mdx

- docs.json route: Admin group, after `ergo-enabled-status`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=8db66870-a691-4ad3-b348-2f1e52ba8a3d`, `threadId=d0f9363f-42a3-468b-8375-d1d1976c1d60`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/pages/AdminDashboard.tsx`; `Ergo-Dashboard-Frontend/src/components/AdminDashboard/AgentUsageSummary.tsx`; `MembersTable.tsx`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; `Ergo-Dashboard-Backend/src/models/AgentUsageMetrics.js`; searched approved backend routes and did not find a matching public admin route implementation.
- Edit summary: documented the Admin usage panel as month-to-date operational visibility, not an invoice; explained billable totals, billable turns, raw turns/tokens, top users, member-row usage, unavailable/zero states, and billing caveats.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/setup/pipeline-stages.mdx

- docs.json route: Setup group, after `crm-properties-setup` and before `pricing-configuration`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=47b3fd56-dd51-4dc9-8e1b-5b79234612f8`, `threadId=97e48ef3-3c9d-4ada-8e9b-f1ad3040f898`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/api/pipelineStages.ts`; `Ergo-Dashboard-Frontend/src/components/StageCard.tsx`; `Ergo-Dashboard-Frontend/src/components/AddDefaultStagesModal.tsx`; `Ergo-Dashboard-Backend/src/routes/dashboard/crm.js`; `Ergo-Dashboard-Backend/src/services/crm-sync/CRMSyncService.ts`; canonical Field Mapping stage pages.
- Customer/planning signal: Linear/Pylon generalized themes include stage drift, missing deal stage after pipeline changes, and stage setup confusion.
- Edit summary: replaced placeholder setup copy with stage-sync workflow; clarified selected CRM pipelines/stages, internal IDs, stage descriptions, exit points, default stages, drift, and permission/source caveats.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/setup/pricing-configuration.mdx

- docs.json route: Setup group, after `pipeline-stages` and before `advanced-settings`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=6620baae-bdb8-4df4-94aa-d55c88bb4a57`, `threadId=d78b9349-a029-493d-9b1f-3901a74d5755`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/Onboarding/OnboardingStepPricing.tsx`; `Ergo-Dashboard-Frontend/src/components/PricingModel.tsx`; `Ergo-Dashboard-Frontend/src/api/pricing.ts`; `Ergo-Dashboard-Frontend/src/types/pricing.ts`; `Ergo-Dashboard-Backend/src/routes/pricing.js`; `Ergo-Dashboard-Backend/src/models/PricingConfig.js`.
- Customer/planning signal: broader setup docs already flag pricing as a gated setup area; exact commercial pricing rules were intentionally not used.
- Edit summary: reframed as Super Admin-only org pricing context for deal amount reasoning; clarified that it stores one free-text description and is not Ergo billing, plan management, or a public pricing source.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/setup/advanced-settings.mdx

- docs.json route: Setup group, after `pricing-configuration` and before `reporting-defaults`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=46143536-c292-472b-b253-659f2fcaf7de`, `threadId=3495cb67-5ac7-45a0-b5b1-2747787563e8`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/Onboarding/OnboardingStepAdvancedSettings.tsx`; `Ergo-Dashboard-Frontend/src/components/AdvancedSettings/AdvancedSettings.tsx`; `DomainConfigCard.tsx`; `CrmDealSettingsCard.tsx`; `SlackNotificationsCard.tsx`; `HubSpotSettingsCard.tsx`; `SalesforceSettingsCard.tsx`; `Ergo-Dashboard-Frontend/src/api/fieldMapping.ts`; dashboard routes in `Ergo-Dashboard-Backend/src/routes/dashboard/crm.js` and `base.js`.
- Customer/planning signal: broader Linear/Pylon themes make CRM/logging/stage-domain misconfiguration and notification reliability important, but no private details were published.
- Edit summary: reframed as optional advanced tuning; listed code-confirmed categories including domains, CRM object/logging toggles, Slack notifications, provider-specific settings, update sensitivity, and deal qualification availability.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/setup/reporting-defaults.mdx

- docs.json route: Setup group, final Setup page after `advanced-settings`.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=3d460904-72f6-458c-9412-7cc2e912186d`, `threadId=1873b796-95f0-4c1d-98d7-a8015d4e7bd8`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/Onboarding/OnboardingStepReportingDefaults.tsx`; `Ergo-Dashboard-Frontend/src/pages/Reporting.tsx`; `Ergo-Dashboard-Frontend/src/components/Reporting/CreateDefaultDashboardModal.tsx`; `Ergo-Dashboard-Frontend/src/hooks/useReportingAccess.ts`; `Ergo-Dashboard-Backend/src/utils/getReportingAccess.js`; reporting/admin docs.
- Customer/planning signal: reporting access and empty-result issues recur in planning/support signals, but the page keeps the guidance generalized.
- Edit summary: replaced placeholder copy with setup guidance for optional sales/CS/product dashboards, default grading rubric, reporting access grants, team-specific dashboards, and empty-result/access caveats.
- Validation: frontmatter present; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/admin/index.mdx

- docs.json route: Admin group root, before `customer-docs/admin/admin-dashboard-overview`; Troubleshooting group follows Admin in navigation.
- CLI MCP: `codex mcp list` and `codex mcp get ergo` succeeded before edit.
- Ergo MCP: `runId=ff51fae2-deaf-4e62-ac88-0d25b78fdf78`, `threadId=df7f1d03-6964-4965-a3d2-0b752ec1704c`, status `answered` but blocker: MCP could not see the page content or structured admin docs and returned only generalized product guidance.
- Code/docs evidence: `customer-docs/admin/admin-dashboard-overview.mdx`; `customer-docs/admin/organization-and-team-hierarchy.mdx`; `Ergo-Dashboard-Frontend/src/pages/AdminDashboard.tsx`; `Ergo-Dashboard-Frontend/src/api/admin.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/admin.js`.
- Customer/planning signal: not used for public behavior; this page is a section index and repo evidence was sufficient for route/content framing.
- Edit summary: removed duplicated intro copy, clarified Admin versus Super Admin audience, and kept the page as a route map to canonical Admin workflow pages.
- Validation: frontmatter has title/description; all local links resolve; no images to validate; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/index.mdx

- docs.json route: Troubleshooting group root, followed by `sign-in-and-desktop-callback-issues`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=b258d70f-5e0c-4d0b-9357-ee72ed8bd3a0`, `threadId=85ee79e4-3310-43ad-9d1e-d68a40aecf47`, status `answered` but blocker: MCP could not see the MDX/source docs and only found a stub document.
- Code/docs evidence: `docs.json` Troubleshooting route order; related troubleshooting pages; `customer-docs/start-here/getting-support.mdx`.
- Customer/planning signal: Pylon/Linear broad signal showed recorder/notetaker, CRM/stage, Slack, email draft, and support-docs themes; no private details were used.
- Edit summary: removed duplicated intro, clarified the category routing purpose, added admin/operator escalation context, and made the issue path source/access/processing oriented.
- Validation: frontmatter has title/description/icon; all local links resolve; no images to validate; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/sign-in-and-desktop-callback-issues.mdx

- docs.json route: Troubleshooting group, first page after root.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=9d3432d2-a655-4cfc-abb7-4fa68e53fe69`, `threadId=00e6dc98-ad8d-4ff0-97d8-9f0fce66c3c6`, status `answered`. Main-thread reconciliation MCP also answered with `runId=6c39cb46-d44c-4702-adb7-26c2cc2a418b`, `threadId=c75bc4e4-a936-4b76-ad42-f9a5c4398481`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/pages/DesktopAuthCallback.tsx`; `Ergo-Dashboard-Frontend/src/providers/ElectronAuthProvider.tsx`; `Ergo-Dashboard-Frontend/src/providers/WorkOSAuthBridge.tsx`; `Desktop-App/src/index.js`; `Desktop-App/forge.config.js`; desktop docs.
- Customer/planning signal: Pylon broad signal included sign-in/password reset and recorder/desktop support themes; no private details were used.
- Edit summary: replaced generic copy with account-mismatch, exact provisioned email, desktop callback/deep-link, running-app, quit-and-reopen permission handling, version/update, browser/SSO, and escalation checks.
- Validation: frontmatter has title/description/keywords; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/dashboard-setup-errors.mdx

- docs.json route: Troubleshooting group, after `sign-in-and-desktop-callback-issues`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=815c1f56-0ec2-4c1a-81cf-43c41ddaafd5`, `threadId=0ceec343-7a96-487a-b457-5056686e90b9`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/pages/Onboarding.tsx`; `Ergo-Dashboard-Frontend/src/context/OnboardingContext.tsx`; `Ergo-Dashboard-Frontend/src/components/Onboarding/*`; setup docs.
- Customer/planning signal: Pylon/Linear broad signal included user-guide demand, setup questions, and source-connection issues; no private details were used.
- Edit summary: documented role-specific setup, source connection checks, admin/Super Admin workspace settings, CRM/notetaker/reporting follow-ups, and setup-step escalation context.
- Validation: frontmatter has title/description/keywords; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/crm-sync-issues.mdx

- docs.json route: Troubleshooting group, after `dashboard-setup-errors`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=95ad2047-a142-41c7-b64b-ca0ed43c7532`, `threadId=6e06bac0-66ae-4c00-8dfc-ef7b5041b81e`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/api/crmProperties.ts`; `Ergo-Dashboard-Frontend/src/api/pipelineStages.ts`; `Ergo-Dashboard-Frontend/src/components/PropertyCard.tsx`; `Ergo-Dashboard-Frontend/src/components/StageCard.tsx`; `Ergo-Dashboard-Backend/src/routes/dashboard/crm.js`; `Ergo-Dashboard-Backend/src/services/crm-sync/CRMSyncService.ts`.
- Customer/planning signal: Pylon/Linear broad signal included HubSpot/CRM sync, missing stages, Slack-to-CRM, and association issues; no private details were used.
- Edit summary: expanded checks for CRM connection, field mapping, property permissions, owner/stage filters, record associations, controlled-record testing, and sync-versus-visibility separation.
- Validation: frontmatter has title/description/keywords; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/stage-drift-conflicts.mdx

- docs.json route: Troubleshooting group, after `crm-sync-issues`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=41f2343a-bc37-44e1-8f20-e3bb190cb0b0`, `threadId=ed1d150c-c182-49c2-a277-1a552008e516`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/DriftCheckProvider.tsx`; `Ergo-Dashboard-Frontend/src/components/StageCard.tsx`; `Ergo-Dashboard-Frontend/src/api/crmPipeline.ts`; `Ergo-Dashboard-Backend/src/services/crm-sync/CRMSyncService.ts`; `customer-docs/field-mapping/stage-drift-resolution.mdx`.
- Customer/planning signal: Pylon/Linear broad signal included missing deal stage after pipeline changes and stage configuration work; no private details were used.
- Edit summary: documented rename versus structural stage changes, stage identifiers, delete/recreate risk, stage-deal counts, Field Mapping/stage sync, and controlled deal testing.
- Validation: frontmatter has title/description/keywords; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/google-microsoft-slack-reconnects.mdx

- docs.json route: Troubleshooting group, after `stage-drift-conflicts`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=d62f12de-1d27-417a-b985-962f2ccfe678`, `threadId=93c9f32c-d7ee-4a0a-b2a2-87425276d5c0`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/Onboarding/OnboardingStepWorkspace.tsx`; `OnboardingStepCollaboration.tsx`; `Ergo-Dashboard-Frontend/src/api/integrations.ts`; `Ergo-Dashboard-Backend/src/routes/oauth/google.js`; `routes/nylas.js`; `customer-docs/integrations/expired-grants-and-reconnecting.mdx`.
- Customer/planning signal: Pylon broad signal included auth/reconnect and stale source themes; no private details were used.
- Edit summary: clarified expired/revoked grants, same-account reconnects, scopes, Slack channel access, one-workflow retry, and no automatic backfill expectation.
- Validation: frontmatter has title/description/keywords; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/slack-enterprise-grid-channel-listing-issues.mdx

- docs.json route: Troubleshooting group, after `google-microsoft-slack-reconnects`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=662ce803-5b0b-4039-8fd8-af9485e5a594`, `threadId=71a737df-e6fc-4b46-9857-08d6af1089d2`, status `answered` but blocker: MCP could not see the MDX file and only provided generalized Slack checks.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/Onboarding/OnboardingStepCollaboration.tsx`; `Ergo-Dashboard-Frontend/src/components/AddToSlackButton.tsx`; `Ergo-Dashboard-Backend/src/routes/agents/slack-bot/router.ts`; Slack integration docs.
- Customer/planning signal: Linear/Pylon broad signal included Slack Connect/channel visibility and Slack-to-CRM capture themes; no private details were used.
- Edit summary: clarified workspace/channel/user visibility, private/external channels, bot membership, exact channel search, Enterprise Grid scope caution, and escalation fields.
- Validation: frontmatter has title/description/keywords; no images to validate; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/slack-disconnect-reconnect-and-stale-channel-mappings.mdx

- docs.json route: Troubleshooting group, after `slack-enterprise-grid-channel-listing-issues`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=7268a44f-c79b-45dc-bbaa-ebd9a584a8eb`, `threadId=fa2928f6-a761-4071-92d3-72252d7a4ff4`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/Onboarding/OnboardingStepCollaboration.tsx`; `Ergo-Dashboard-Frontend/src/api/integrations.ts`; `Ergo-Dashboard-Backend/src/routes/agents/slack-bot/router.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/notifications.js`; Slack integration docs.
- Customer/planning signal: Linear/Pylon broad signal included Slack mapping, Slack-to-CRM reliability, and stale-channel/capture themes; no private details were used.
- Edit summary: documented reconnect as auth repair, channel/destination review, bot membership, re-saving destinations, no automatic backfill, and controlled Slack workflow testing.
- Validation: frontmatter has title/description/keywords; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/add-ergo-to-new-slack-customer-channels.mdx

- docs.json route: Troubleshooting group, after `slack-disconnect-reconnect-and-stale-channel-mappings`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=cb825dae-8e82-4106-9fa8-a0acf877f9d4`, `threadId=b533b150-4c0d-4eae-8c56-d7e9f1183dbb`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/Onboarding/OnboardingStepCollaboration.tsx`; `Ergo-Dashboard-Frontend/src/components/AddToSlackButton.tsx`; `Ergo-Dashboard-Backend/src/routes/agents/slack-bot/router.ts`; Slack integration docs.
- Customer/planning signal: Linear/Pylon broad signal included new Slack channel, external channel, and Slack-to-CRM capture themes; no private details were used.
- Edit summary: documented new-channel membership, connected-user visibility, external-channel permissions, exact channel name/destination settings, forward-only monitoring, and one-channel testing.
- Validation: frontmatter has title/description/keywords; no images to validate; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/pylon-delivery-failures-duplicate-deliveries-and-queue-health.mdx

- docs.json route: Troubleshooting group, after `add-ergo-to-new-slack-customer-channels`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=138ebdbe-efc9-4190-b73d-a8d84f300792`, `threadId=e21ec2fa-d24d-40b6-9ea2-bc01e4ec85be`, status `answered` but blocker: MCP could not see the MDX file or substantive Pylon delivery docs.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/Onboarding/OnboardingStepCollaboration.tsx`; `Ergo-Dashboard-Backend/src/services/external-webhook/deliveryWorker.js`; `Ergo-Dashboard-Backend/src/models/WebhookDeliveryLog.js`; Pylon integration docs.
- Customer/planning signal: Pylon broad signal included delivery, recording, duplicate, and support workflow themes; no private details were used.
- Edit summary: documented Pylon connection/destination mapping, source asset readiness, retries, duplicate-rule checks, queue-health separation, and safe escalation fields.
- Validation: frontmatter has title/description/keywords; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/notetaker-did-not-join.mdx

- docs.json route: Troubleshooting group, after `pylon-delivery-failures-duplicate-deliveries-and-queue-health`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=39f541b3-b6a1-48e6-9b8e-c71e36c8cd7b`, `threadId=93fa9bf3-b27f-4846-9731-b6c72c0b8455`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/UpcomingMeetings/MeetingCard.tsx`; `Ergo-Dashboard-Frontend/src/api/notetaker.ts`; `Ergo-Dashboard-Backend/src/routes/calendar/nylasWebhooks.js`; `Ergo-Dashboard-Backend/src/routes/oauth/recallCalendar.js`; meeting/notetaker docs.
- Customer/planning signal: Pylon/Linear broad signal included notetaker auto-recording, joins, waiting room, and recurring-meeting themes; no private details were used.
- Edit summary: documented stale calendar/notetaker state, current meeting link, host admission, removal, shared-call coverage, **Add Bot to Meeting**, and live-meeting recovery.
- Validation: frontmatter has title/description/keywords; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/transcript-or-recording-missing.mdx

- docs.json route: Troubleshooting group, after `notetaker-did-not-join`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=7a8c3f49-36c3-45ed-b7a4-eec31b9f6d1e`, `threadId=906bf8a8-ab3b-4d75-858f-df6e8e369fd5`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/pages/NewDashboard.tsx`; `Ergo-Dashboard-Frontend/src/api/notetaker.ts`; `Ergo-Dashboard-Backend/src/routes/dashboard/customMeetings.js`; `Ergo-Dashboard-Backend/src/routes/calendar/recallWebhooks.js`; `Desktop-App/src/features/listen/liveSummaryService.js`; meeting-processing docs.
- Customer/planning signal: Pylon broad signal included recording, transcript, upload, and processing themes; no private details were used.
- Edit summary: split recording/transcript/summary/insights/reporting/draft outputs, added bot/source/upload/processing/access checks, and softened timing/qualification language.
- Validation: frontmatter has title/description/keywords; no images to validate; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/duplicate-drafts-from-multiple-notetakers.mdx

- docs.json route: Troubleshooting group, after `transcript-or-recording-missing`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=e408cd99-1aa3-4003-aeea-2203dd8e45fb`, `threadId=09925bbd-83c8-4086-b96f-864e6ce2e832`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/components/Onboarding/OnboardingStepNotetaker.tsx`; `Ergo-Dashboard-Frontend/src/pages/EmailDraftsInbox.tsx`; `Ergo-Dashboard-Backend/src/routes/calendar/nylasWebhooks.js`; multiple-notetaker and draft docs.
- Customer/planning signal: Pylon/Linear broad signal included duplicate drafts from overlapping notetakers and stale draft themes; no private details were used.
- Edit summary: documented overlapping meeting/notetaker sources, duplicate meeting records, authoritative-source choice, review-before-send, and repeat-duplicate escalation fields.
- Validation: frontmatter has title/description/keywords; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/draft-send-failures.mdx

- docs.json route: Troubleshooting group, after `duplicate-drafts-from-multiple-notetakers`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=c6c129f0-146d-4e48-add8-ad0050c0b744`, `threadId=39ed16bc-6c73-4014-80a9-ec0fbf993446`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/pages/EmailDraftsInbox.tsx`; `Ergo-Dashboard-Frontend/src/api/draftEmails.ts`; `Ergo-Dashboard-Frontend/src/api/draftEmails.types.ts`; `Ergo-Dashboard-Backend/src/services/emailSender/sendEmail.js`; failed-drafts docs.
- Customer/planning signal: Pylon broad signal included intermittent email feature failures and draft follow-up themes; no private details were used.
- Edit summary: documented validation, connected mailbox/sender identity, reply-thread context, provider rejection, failed-drafts retry, bulk-send caution, and escalation fields.
- Validation: frontmatter has title/description/keywords; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/search-reporting-has-no-results.mdx

- docs.json route: Troubleshooting group, after `draft-send-failures`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=7caf93cb-3f0c-4b75-a9a6-e544454c5d2c`, `threadId=58c6fa45-76c8-46da-9f1e-ea35d8104cca`, status `answered`.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/pages/Reporting.tsx`; `Ergo-Dashboard-Frontend/src/hooks/useReportingAccess.ts`; `Ergo-Dashboard-Frontend/src/pages/ScheduledAgentRuns.tsx`; `Ergo-Dashboard-Backend/src/utils/getReportingAccess.js`; reporting/search docs.
- Customer/planning signal: Linear broad signal included reporting insights and empty/source-scope work; Pylon broad signal included processing/support themes; no private details were used.
- Edit summary: documented date/filter/source/access checks, custom/reporting field population, scheduled preview windows, known-example testing, and access-before-rerun guidance.
- Validation: frontmatter has title/description/keywords; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.

### customer-docs/troubleshooting/permission-or-access-denied.mdx

- docs.json route: Troubleshooting group, final page after `search-reporting-has-no-results`.
- CLI MCP: page-specific batch check of `codex mcp list` and `codex mcp get ergo` succeeded.
- Ergo MCP: `runId=2169510a-e49d-4261-ad3a-ef7fdc1cce00`, `threadId=5d375a06-e9d3-4891-8b06-e07540220649`, status `answered` but blocker: MCP could not see the MDX file and returned generic permission framing.
- Code/docs evidence: `Ergo-Dashboard-Frontend/src/pages/AdminDashboard.tsx`; `Ergo-Dashboard-Frontend/src/components/Admin/ReportingAccessManager.tsx`; `Ergo-Dashboard-Frontend/src/hooks/useReportingAccess.ts`; `Ergo-Dashboard-Backend/src/utils/getReportingAccess.js`; `Ergo-Dashboard-Backend/src/routes/dashboard/meetings.js`; admin/access docs.
- Customer/planning signal: Pylon/Linear broad signal included seat/access, reporting, setup, and source-visibility issues; no private details were used.
- Edit summary: documented wrong workspace/account, role/team/spectator status, reporting grants, meeting/global access, shared links, source-object visibility, and narrow-access remediation.
- Validation: frontmatter has title/description/keywords; image exists; local links resolve; private-name/ticket scan clean; `git diff --check` clean for page and scratch files.
