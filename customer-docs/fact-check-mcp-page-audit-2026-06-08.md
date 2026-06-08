# Customer docs MCP page audit - 2026-06-08

This internal audit log tracks the second pass requested after the first rewrite did not successfully use Ergo MCP evidence.

Method:

- Follow `docs.json` navigation order.
- For each routed `customer-docs/**/*.mdx` page, read the page before querying.
- Query Ergo MCP for that page only.
- Generalize returned evidence and keep customer names, direct quotes, tickets, Slack excerpts, emails, and account specifics out of public docs.
- Edit the page only when the MCP evidence or approved repos justify a durable customer-facing change.
- Validate frontmatter, local links, images, and related-article paths for the page after editing or confirming no edit is needed.

Parallel worker split after goal restart:

- Main thread completed the initial nav-order loop through `customer-docs/setup/meeting-title-phrases.mdx`, then kept coordination/local validation while workers processed disjoint categories.
- Worker Hegel (`019ea892-08ff-7382-92da-98dcabeccdb6`) owns remaining Setup pages after `meeting-title-phrases`, plus Admin and Troubleshooting.
- Worker Lorentz (`019ea892-6bd9-7f81-861f-3932d0c4361a`) owns Integrations and Desktop.
- Worker Bohr (`019ea892-cfe9-7ef3-a5c3-c7c4f3d7837c`) owns Meetings and Knowledge Base.
- Worker Hypatia (`019ea893-3e9c-7513-84f2-bc85e1ffc725`) owns Drafts/Email, Ergo AI/Search/Automation, and Reporting.
- Worker Maxwell (`019ea893-ada3-7ab2-881a-9347f1a2b655`) owns Field Mapping and Deals/CRM.
- Each worker was instructed to follow the same page-by-page loop: read the page and nearby context, use Ergo MCP CLI first, use Pylon/Linear/Slack/Gmail read-only where useful, verify against approved repos only, edit the page, validate links/images/frontmatter/private claims, and record MCP/connector/code evidence in category-specific scratch audit and unverified files.
- Workers were instructed not to edit the shared audit or unverified notes files to avoid merge conflicts; the main thread will consolidate their scratch files after completion.

## Progress

### 001 - `customer-docs/index.mdx`

- MCP: answered via `ask_ergo_agent` / `get_ergo_agent_result`; run ID `8459fa8b-58ed-4556-bfd7-a42c0a33982b`; thread ID `c61d9f49-bd0e-48f5-8e3c-aa63554062cb`.
- Page read: full frontmatter, body, fast-path links, and local links checked before querying.
- Public edits made:
  - Added setup-order framing: email/calendar, notetaker, then CRM field mapping before CRM updates.
  - Added recording/privacy as a first-session topic without making legal claims.
  - Clarified field mapping is for admins and rollout owners.
  - Split access troubleshooting into wrong-account versus organization/IT permission blocks.
  - Added support-channel guidance for customer-specific screenshots, error codes, and account context.
- Internal-only or unresolved items logged separately:
  - Alternative recording/notetaker flows should not be promoted as stable public fast paths without support-status confirmation.
  - Manual CRM workaround flows should not be framed as default behavior.
  - Recording-consent language should avoid legal/compliance claims without review.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 002 - `customer-docs/start-here/index.mdx`

- MCP: answered via `ask_ergo_agent` / `get_ergo_agent_result`; run ID `ad94ddfa-6e8f-4615-91f6-25632c7ad07e`; thread ID `3436d3ce-0ece-44a3-936d-dc88bc2467b9`.
- Page read: full frontmatter, body, article links, and troubleshooting link checked before querying.
- Approved repo check: frontend/backend search confirmed `spectator` as a dashboard access tier and did not confirm `viewer` as a dashboard role; `viewer` appears only in public/shared-view contexts.
- Public edits made:
  - Removed duplicated section-index intro line.
  - Replaced generic workspace/team prerequisite with connected-source context: CRM, calendar, email, meeting, and collaboration sources.
  - Removed `viewer` from the role prerequisite and kept user, admin, super admin, and spectator.
- Internal-only or unresolved items logged separately:
  - Exact admin versus super-admin capability boundaries should stay out until confirmed per page.
  - Specific retention periods, sync frequencies, and LLM provider/model names remain unverified.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 003 - `customer-docs/start-here/welcome-to-ergo.mdx`

- MCP: answered via `ask_ergo_agent` / `get_ergo_agent_result`; run ID `5d699728-aa75-49d6-bbf1-0999f9a5be6c`; thread ID `e1887297-a538-45c9-a5b3-c002d5c4ac28`.
- Page read: full frontmatter, screenshot image, body, related links, and common issues checked before querying.
- Approved repo check: `super admin` is code-confirmed through frontend/backend role gates; `viewer` is not confirmed as a dashboard role and was treated as shared-link/public-viewer language, not a user role.
- Public edits made:
  - Replaced generic description with a clearer page-purpose description.
  - Replaced workspace/team prerequisite with connected-source context.
  - Removed `viewer` from the role list while keeping code-confirmed `super admin`.
  - Clarified that access, recording, integration defaults, and admin-only setup areas should go through the rollout owner.
  - Moved field mapping out of ordinary day-to-day navigation and called it an admin/setup area.
  - Reframed wrong workspace/team issue as wrong source, account, or organization context.
- Internal-only or unresolved items logged separately:
  - Account-specific feature enablement and web-versus-desktop rollout preferences should not be published unless confirmed as current product policy.
  - Spectator access should not be implied beyond code-confirmed meeting/view restrictions.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 004 - `customer-docs/start-here/navigating-ergo.mdx`

- MCP: answered via `ask_ergo_agent` / `get_ergo_agent_result`; run ID `f4973112-3f92-4961-8ba2-325aa05ad26b`; thread ID `0b9d65c3-da97-41d2-b222-f1da8769e66c`.
- Page read: full frontmatter, screenshot image, body, route descriptions, common issues, and related links checked before querying.
- Approved repo check: earlier frontend/backend searches confirmed `spectator` and `super admin` as product concepts; `viewer` was not confirmed as a dashboard role. Frontend route/nav code confirmed surfaces can be hidden by role, feature availability, desktop context, and access.
- Public edits made:
  - Replaced generic description with route/access/source-oriented description.
  - Replaced workspace/team prerequisite with connected-source context.
  - Removed `viewer` from the role list while keeping code-confirmed user, admin, super admin, and spectator.
  - Defined rollout owner as a rollout coordination person, not a product role.
  - Split Deals from other gated surfaces and softened public feature-flag wording.
  - Reframed Field Mapping as an admin/setup area rather than an everyday user workflow.
  - Replaced wrong workspace/team issue with wrong source/account/organization context.
- Internal-only or unresolved items logged separately:
  - Do not publish feature-flag mechanics as product terminology unless the page needs that implementation detail.
  - Desktop support/GA status and product-policy preferences should be checked on desktop-specific pages.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 005 - `customer-docs/start-here/roles-and-permissions.mdx`

- MCP: answered via `ask_ergo_agent` / `get_ergo_agent_result`; run ID `55e35ce7-8b21-4f32-acc8-e2a4d95d5160`; thread ID `8b98058e-2ccb-4b97-885a-b01d95c84da3`.
- Page read: full frontmatter, admin screenshot image, role/access body, common issues, and related links checked before querying.
- Approved repo check: previous frontend/backend searches confirmed `spectator` and `super admin`; frontend/backend admin code confirms super-admin-gated controls exist, while MCP context warned that some elevated changes may still require Ergo support in practice.
- Public edits made:
  - Replaced generic description with role/access-specific description.
  - Replaced workspace/team prerequisite with connected-source context.
  - Removed `viewer` as a workspace role and separated shared-link viewers from product roles.
  - Clarified spectator access as permitted-meeting review without drafts, CRM writes, integration control, or broad organization access.
  - Clarified shared links as object-specific access for meetings, documents, charts, or dashboards.
  - Changed reporting/global/team access guidance to admin or Ergo-support adjustment instead of pure self-service.
  - Added directional visibility guidance for broader admin roles versus members/spectators.
  - Replaced wrong workspace/team issue with wrong source/account/organization context.
- Internal-only or unresolved items logged separately:
  - Global meeting access, persona, and create-team behavior should be described only at the level verified by code and customer-facing support context on each page.
  - Shared-link issues should not be framed as a top support category without page-specific evidence.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 006 - `customer-docs/start-here/spectator-access.mdx`

- MCP: answered via `ask_ergo_agent` / `get_ergo_agent_result`; run ID `4f87b17b-bcd0-4b6c-a788-0c56ef3e315e`; thread ID `df4c42a4-d388-4924-a03d-81ddb27660cf`.
- Page read: full frontmatter, admin screenshot image, spectator guidance, common issues, and related links checked before querying.
- Public edits made:
  - Replaced generic description with spectator/scoped-access description.
  - Replaced workspace/team prerequisite with connected-source context.
  - Replaced generic role list with the actual access decision: spectator seat, admin/reporting grant, shared link, or standard user seat.
  - Clarified that rollout-owner approval is best-practice guidance before changing access/defaults, not a separate product role.
  - Added reporting cadences as a possible spectator need.
  - Reframed Field Mapping as admin-only rather than a spectator-specific exception.
  - Added that external shared-route recipients may need email verification.
  - Replaced wrong workspace/team and overbroad shared-link language with source/account/org context and access-scope expectations.
- Internal-only or unresolved items logged separately:
  - `viewer` should not be used as a formal role label without product confirmation.
  - `super admin` should not be presented as a spectator setup role; keep it role-hierarchy context.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 007 - `customer-docs/start-here/data-sources-and-freshness.mdx`

- MCP: answered via `ask_ergo_agent` / `get_ergo_agent_result`; run ID `b097476f-2ea0-4138-bb21-bf6b63e5d7fe`; thread ID `274a7ba1-4665-40ec-ac60-4033dd0e3ba1`.
- Page read: full frontmatter, source/freshness body, common issues, and related links checked before editing.
- Public edits made:
  - Replaced generic description with source, destination, matching, and freshness language.
  - Removed unverified `viewer` role language.
  - Clarified that CRM, email, Slack, meeting capture, notetakers, and connected call sources are primary input sources.
  - Reframed calendar as meeting matching/attribution context, not conversation content.
  - Reframed Pylon and reporting fields as destinations or outputs, not standalone ingest sources.
  - Added matching and identity mismatch as freshness/access causes.
  - Clarified staged meeting outputs and that insights or drafts may depend on meeting classification.
- Internal-only or unresolved items logged separately:
  - Documents as a peer-level ingest source need stronger durable evidence.
  - Desktop recording version, provider, outage, roadmap, and backend support-process details should stay out of public docs unless product confirms them.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 008 - `customer-docs/start-here/security-data-retention-and-llm-usage.mdx`

- MCP: answered via `ask_ergo_agent` / `get_ergo_agent_result`; run ID `17390bd0-0a5a-48bd-8588-111acdde389c`; thread ID `369353b8-91ea-490c-82c6-1a0ec4ce6923`.
- Page read: full frontmatter, body, common issues, related links, and Start here section index checked before editing.
- Approved repo check: searches in approved repos found AI/LLM processing and deletion/admin workflows, but did not verify exact public retention windows, subprocessors, provider/model terms, SOC/DPA claims, or legal/privacy commitments. Existing role checks confirmed user, admin, super admin, and spectator; `viewer` was not confirmed as a formal dashboard role.
- Public edits made:
  - Replaced generic/internal-audit wording with customer-safe operational guidance.
  - Removed unverified `viewer` role language.
  - Added minimum-context, human-review, and formal-security-material routing.
  - Added softened non-training and agreement-level deletion guidance without publishing exact retention windows or provider roster.
  - Reframed common issues around wrong source/account/org context, overbroad access expectations, unreviewed AI output, and contractual questions routed through workflow channels.
- Internal-only or unresolved items logged separately:
  - Exact provider roster, deletion numbers, subprocessor list, certification claims, provider confidentiality terms, and infrastructure details should stay in formal security/legal material.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 009 - `customer-docs/start-here/reviewing-ai-generated-outputs.mdx`

- MCP: answered via `ask_ergo_agent` / `get_ergo_agent_result`; run ID `946989d0-8932-4340-b744-188128b50b05`; thread ID `9e1a055c-6f2f-4240-8cef-8d878f108cc1`.
- Page read: full frontmatter, body, common issues, related links, and Start here section index checked before editing.
- Approved repo check: docs and code confirm AI outputs across chat answers, meeting summaries/action items/insights, drafts, reporting/CRM updates, and deal/account AI overviews. Draft behavior supports review-before-send guidance; role checks confirm user, admin, super admin, and spectator, not `viewer`.
- Public edits made:
  - Expanded output scope to answers, summaries, drafts, insights, deal overviews, CRM updates, and reporting updates.
  - Removed unverified `viewer` role language.
  - Replaced generic `workspace and team` and `rollout owner` phrasing with setup, source, account, organization, and admin language.
  - Added review checks against transcripts, summaries, records, threads, documents, channels, and report fields.
  - Separated wording cleanup from upstream source/configuration fixes.
  - Added field mapping and field-permission checks for CRM/reporting updates.
  - Replaced vague shared-link issue wording with scoped output-visibility guidance.
- Internal-only or unresolved items logged separately:
  - Do not publish auto-send-flow caveats on this start page without page-specific customer-facing verification.
  - Keep `viewer` and broad workspace/team prerequisites out unless product terminology confirms them on the relevant page.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 010 - `customer-docs/start-here/prompting-ergo-effectively.mdx`

- MCP: answered via `ask_ergo_agent` / `get_ergo_agent_result`; run ID `be5bc234-f71e-4bac-b1f3-5a33e037a589`; thread ID `20e73f42-f599-4807-8ce4-8e5e0160e94c`.
- Page read: full frontmatter, body, common issues, related links, and Start here section index checked before editing.
- Approved repo check: docs and code support prompting across Chat with Ergo, search, scheduled agent runs, deal/meeting context, drafts/reprompting, template generation, and post-call instructions. Prior role checks confirm user, admin, super admin, and spectator, not `viewer`.
- Public edits made:
  - Replaced generic description with account, source, output-format, and review-path language.
  - Expanded scope to Chat with Ergo, search, scheduled runs, draft reprompting, templates, and post-call instructions.
  - Removed unverified `viewer` and replaced `workspace`/`rollout owner` language with Ergo account, team, admin, and super-admin language.
  - Added source-selection guidance for meetings, customer conversations, deals, date ranges, documents, reports, and source sets.
  - Added availability/permission context for answer quality.
  - Kept scheduled/recurring output testing with `when available` preview/manual-run wording.
  - Replaced vague shared-link issue wording with specific meeting-share-link scope guidance.
- Internal-only or unresolved items logged separately:
  - Treat scheduled/recurring preview controls as conditional unless page-specific checks confirm stable customer-facing availability.
  - Keep future or unconfirmed view-only role language out of public role lists.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 011 - `customer-docs/start-here/recording-privacy-basics.mdx`

- MCP: answered via `ask_ergo_agent` / `get_ergo_agent_result`; run ID `5ddccc98-0429-456b-a32f-796bff80910c`; thread ID `33ac1990-301a-4a1b-91c3-eeeb2c91d904`.
- Page read: full frontmatter, body, common issues, related links, Start here section index, and nearby recording/meeting docs checked before editing.
- Approved repo check: docs and code support bot/notetaker capture, calendar/meeting-link/waiting-room/manual-dispatch troubleshooting, recording disclaimer defaults, shared links/passwords/revoke controls, desktop/local capture as distinct from bot capture, and desktop permission/upload/restart caveats. Legal/consent specifics were not verified beyond safe policy/local-rule guidance.
- Public edits made:
  - Replaced generic description with meeting-bot, desktop-capture, disclosure, and sharing language.
  - Removed unverified `viewer` role and replaced `workspace`/`rollout owner` language with Ergo account, team, admin, and super-admin language.
  - Split capture paths between Ergo Notetaker bot capture and Ergo Desktop local capture.
  - Added pre-call checks for calendar connection, meeting link, source calendar, and waiting-room admission.
  - Added desktop permission, upload, and processing checks.
  - Reframed shared recording links as scoped sharing controls with password/revoke options.
  - Replaced vague shared-link issue wording with specific meeting-share-link scope guidance.
- Internal-only or unresolved items logged separately:
  - Do not publish region-specific recording-law or consent guidance without formal legal review.
  - Do not describe shared recording links as broad dashboard access or guaranteed delivery.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 012 - `customer-docs/start-here/getting-support.mdx`

- MCP: answered in a read-only scout via fresh nested CLI `ask_ergo_agent` / `get_ergo_agent_result`; run ID `63f336f0-1d6f-4566-a0b2-df76ef1a4c5f`; thread ID `c08436b8-f6f8-45fa-b3bd-431f7a8b4eae`; scout CLI thread `019ea58c-8bf0-7570-9bc7-bc0fceb4d6cc`.
- Page read: full frontmatter, body, common issues, related links, Start here section index, and troubleshooting support-context patterns checked before editing.
- Approved repo check: frontend supports in-app support chat; docs/code support approved customer Slack channels and support-context checklists; role/access behavior is grounded by roles docs, super-admin middleware, spectator restrictions, and admin provisioning code.
- Public edits made:
  - Replaced generic description with source, access, and timing context.
  - Removed `viewer` as a workspace role and reframed it as shared-link viewer context.
  - Replaced generic `workspace` and `rollout owner` language with Ergo account, team, source, workflow, admin, and super-admin language.
  - Clarified support context to include approximate time window and exact timestamp when available.
  - Added direct link to Roles and permissions.
  - Reframed common issues around account/team/source/shared-link view, source freshness, role/spectator/reporting/shared-link scope.
- Internal-only or unresolved items logged separately:
  - Do not publish Pylon vendor/app IDs, internal Slack routing details, support-channel rationale, or roadmap/role constraints.
  - Treat the support checklist as evidence-based support pattern guidance, not a formal published runbook.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 013 - `customer-docs/setup/index.mdx`

- MCP: answered in a read-only scout via fresh nested CLI `ask_ergo_agent` / `get_ergo_agent_result`; run ID `9fc38238-85ce-4bb1-9a9d-2fd06389117d`; thread ID `5d85eb04-51b6-4dcb-b04a-42821a783582`; scout CLI thread `019ea58d-40fa-7620-8d24-5c6d1b9748a6`.
- Page read: full frontmatter, body, article list, related Troubleshooting link, and setup group from `docs.json` checked before editing.
- Approved repo check: frontend onboarding code supports CRM, workspace/account setup, templates, collaboration, notetaker, user sync, company details, fields, pipelines, pricing, advanced settings, and reporting defaults. Integration code supports CRM, Google Workspace/Microsoft 365 email/calendar, notetakers, and collaboration tools. Backend models/routes support user/admin, spectator flag, integration keys, email templates, CRM fields/stages, notetaker config, and admin-sync onboarding status.
- Public edits made:
  - Changed generic `templates` to `email templates`.
  - Reframed setup index copy around setup owner, source, or workflow instead of repeating the section description.
  - Replaced `RevOps owners` with `RevOps teams` to avoid implying a product permission role.
  - Replaced broad `workspace` wording with Ergo account and organization-level setup language.
  - Added admin-ownership guidance for gated setup areas such as pricing, reporting, CRM fields, and organization defaults.
- Internal-only or unresolved items logged separately:
  - Do not treat RevOps owner/operator labels as literal product permission roles.
  - Pricing/reporting setup appears permission or feature gated; do not imply every user can configure it.
  - Keep the manual article list synced with the Setup pages array in `docs.json`.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 014 - `customer-docs/setup/first-time-setup-checklist.mdx`

- MCP: answered in a read-only scout via fresh nested CLI `ask_ergo_agent` / `get_ergo_agent_result`; run ID `be369986-8a2b-4a0c-9750-61d192a39f8c`; thread ID `7e065cdd-60a8-421a-adc4-624a6a8f7624`; scout CLI thread `019ea58f-cb1a-74d3-8162-cf5ddeb3ec5d`. First scout `ask_ergo_agent` attempt timed out before returning a run ID; retry completed successfully.
- Page read: full frontmatter, onboarding image, body, related links, setup index, setup-by-role page, and dashboard setup troubleshooting page checked before editing.
- Approved repo check: docs place this page first in Setup. Frontend onboarding routes and context support role-dependent admin, user, secondary-admin, and spectator flows; CRM/email/notetaker steps depend on connection status; field mapping depends on CRM status and role flags. Backend onboarding routes support CRM configuration and sync-status endpoints. Automations evidence supports downstream dependencies on meeting, user/org, recipient, deal, and organization context for draft workflows.
- Public edits made:
  - Replaced generic checklist language with shared/admin setup first, personal setup next, and one controlled workflow test.
  - Clarified audiences: admins/setup owners, users completing personal connections, and spectators/managers with limited access.
  - Added role and admin-owner prerequisites for gated areas such as CRM fields, field mapping, pricing, reporting, and organization defaults.
  - Added concrete setup order for CRM, field mapping, pipeline stages, company details, meeting-title phrases, collaboration tools, notetaker defaults, email templates, reporting/pricing when enabled, and personal email/calendar/notetaker/collaboration setup.
  - Added verification of one meeting or call, dashboard visibility, processing state, and CRM/reporting/draft output when configured.
  - Reframed common issues around source freshness/matching, admin-owned settings, spectator/shared-link scope, filters/permissions/settings, and incomplete capture/processing/downstream output.
- Internal-only or unresolved items logged separately:
  - Do not publish admin transfer, backfill-after-reconnect, external Slack channel registration, platform-specific admission, repeated field-mapping sync, or duplicate/missing option-ID behavior without page-specific confirmation.
  - Treat RevOps/operator/manager as setup personas, not formal product permission roles.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 015 - `customer-docs/setup/setup-by-role.mdx`

- MCP: answered in a read-only scout via fresh nested CLI `ask_ergo_agent` / `get_ergo_agent_result`; run ID `287e04e7-c2ce-42cc-a552-a836dbb28f59`; thread ID `a396e9da-2ddb-479b-8f1e-13f22fafb299`; scout CLI output `/tmp/mcp_page_setup_by_role_agent.txt`.
- Page read: full frontmatter, onboarding image, body, related links, setup index, setup nav order, and adjacent role setup pages checked before editing.
- Approved repo check: frontend onboarding code supports role-dependent admin, user, secondary-admin, and spectator flows; setup steps differ by feature flags and reporting access. Frontend/backend role evidence supports user, admin, super admin, spectator, and shared-link recipient language, but not operator or RevOps as formal product permission roles.
- Public edits made:
  - Reframed the page around routing each person to the setup path they own.
  - Split audiences into admins/super admins, RevOps or operations setup teammates, standard users, managers, spectators, and shared-link recipients.
  - Added shared setup before personal setup: CRM, field mapping, pipeline stages, organization defaults, templates, collaboration tools, notetaker defaults, reporting, and pricing when enabled.
  - Added role-specific paths for admin/delegated operator, standard user, and manager/spectator/shared-link access.
  - Added a narrow pilot workflow before broad rollout and noted optional notifications, templates, and follow-up workflows can wait when not required.
  - Clarified that Ergo Desktop has separate local permission and capture setup.
  - Reframed common issues around stale or mismatched sources, role/reporting/spectator/shared-link access, filters/settings/permissions, and incomplete capture/processing/downstream output.
- Internal-only or unresolved items logged separately:
  - Current admin permission limits and workspace toggle defaults should not be documented broadly without page-specific confirmation.
  - Provider-specific recording failures and infrastructure issues should stay internal unless converted into approved customer-facing guidance.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 016 - `customer-docs/setup/revops-setup-for-ergo-rollout.mdx`

- MCP: answered via a fresh local nested CLI `ask_ergo_agent` / `get_ergo_agent_result` retry after the read-only scout lacked exposed Ergo tools; run ID `d1abfa9c-a9b0-444c-87eb-83f64fbfeed0`; thread ID `a228b201-0b67-41f2-b465-da4f7c19b952`; nested Codex thread `019ea59b-58d5-7222-8b4b-ec7f7cd8b64e`; output `/tmp/mcp_page_016_revops_setup_local.txt`.
- Page read: full frontmatter, image, body, related links, setup index, setup nav order, adjacent operator/setup/tips pages, and relevant CRM/email/notetaker/backfill troubleshooting pages checked before editing.
- Approved repo check: frontend onboarding code supports admin-owned CRM, email/calendar, templates, collaboration, notetaker, company details, meeting-title phrases, CRM properties, pipeline stages, pricing, advanced settings, and reporting defaults when enabled. Existing docs and code support field mapping before CRM writeback, user-specific email/calendar setup, notetaker calendar/admission risks, sales-only processing, and scoped backfill guidance.
- Public edits made:
  - Replaced the generic setup shell with an admin/RevOps rollout checklist.
  - Replaced the onboarding SVG and `grading` alt text with the field-mapping/product setup image to avoid unverified grading framing.
  - Narrowed the audience to admins, super admins, RevOps or operations setup teammates, and delegated operators.
  - Added production CRM/source-of-truth readiness, CRM account permissions, required field/stage finalization, and admin ownership for gated areas.
  - Separated must-do rollout setup from deferrable setup such as optional notifications, templates, and follow-up workflows.
  - Added notetaker readiness checks around calendar ownership, waiting-room admission, and manual bot dispatch.
  - Added controlled pilot workflow before broad invitation.
  - Added scoped historical backfill guidance and common issues for test/stale CRM data, incomplete mapping, missed capture, broad backfills, and premature user invitations.
  - Added direct related links to CRM, email/calendar, field mapping, pipeline stages, notetaker, sales-only processing, and historical backfill pages.
- Internal-only or unresolved items logged separately:
  - Keep customer anecdotes, customer names, pricing, benchmark/stat claims, implementation timelines, internal infrastructure details, and investigated CRM/deal incidents out of public docs.
  - Do not publish unverified claims about Salesforce being easiest to set up, exact CRM OAuth implementation timelines, checkout/payment-triggered stage changes, rep scoring/grading, white-label options, or exact Gmail toggle labels without page-specific product confirmation.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 017 - `customer-docs/setup/operator-setup.mdx`

- MCP: answered in a read-only scout via fresh nested CLI `ask_ergo_agent` / `get_ergo_agent_result`; first attempt timed out before returning an ID, retry succeeded with run ID `c48f3429-4901-4e4d-a6ac-fb3939ec0e53`; thread ID `20c23537-8ff1-408f-b65c-28109f398667`; output `/tmp/mcp_page_operator_setup_agent.txt`.
- Page read: full frontmatter, admin dashboard image, body, related links, setup nav order, operator tips, user sync, email templates, admin sync page, and approved repo role/sync code checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that operator/setup docs need to cover notetaker processing, deal/CRM creation failures, HubSpot stage/mapping decisions, and Slack workflow questions without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that CRM write paths, CRM object associations, backfill, and agent/MCP reliability are active product areas; these were treated as context and not converted into public promises.
  - Slack public search returned `401: Reauthentication required`, so Slack did not contribute direct fresh evidence for this page.
- Approved repo check: frontend onboarding supports admin/user/spectator setup paths, Sync with Admin, personal email/calendar/notetaker/collaboration steps, and role-dependent onboarding. Backend organization routes confirm admin push/sync options for CRM keys, properties, pipeline stages, company descriptions, meeting titles, templates, task settings, alternate domains, partnership domains, record types, context notifications, property permissions, and advanced settings. Frontend/backend role models confirm `operator` and `RevOps owner` are setup personas, not formal permission roles.
- Public edits made:
  - Reframed the page around delegated operators or GTM ops helpers without treating `operator` as a product role.
  - Reintroduced durable Sync with Admin specifics based on repo-confirmed sync categories and MCP setup evidence.
  - Separated admin-provisioned/shared defaults from personal user grants for email, calendar, notetaker, desktop, and collaboration sources.
  - Added practical user-support checks for seat, team, role, spectator status, reporting access, connected source, authenticated account, CRM connection, field mapping, pipeline stages, calendar, and notetaker status.
  - Added one controlled workflow test covering meeting/call capture, draft generation when enabled, dashboard visibility, and CRM/contact or reporting output when configured.
  - Reframed common issues around wrong OAuth/CRM/calendar/team, insufficient permission, incomplete sync-from-admin/personal setup, premature sync of incomplete settings, notetaker admission/link/duplicate-source issues, and filters/permissions/processing state.
  - Added related links to operator tips, user sync, email templates, admin sync, roles, permission troubleshooting, and dashboard setup errors.
- Internal-only or unresolved items logged separately:
  - Do not publish exact notetaker timeout durations, customer-specific support examples, private Slack details, exact first-source sync timing, or roadmap/future CRM task/note write behavior from Linear.
  - Keep Microsoft 365 admin-consent, Gmail signature/multiple-signature behavior, outbound watermark/default branding, and unexpected bot-join behavior neutral unless confirmed on their own pages.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 018 - `customer-docs/setup/ae-setup.mdx`

- MCP: answered in a read-only CLI worker via fresh `ask_ergo_agent` / `get_ergo_agent_result`; run ID `c8021b08-e36d-479b-a221-4801201a84dc`; thread ID `e7e0eeff-a600-45bb-97c0-56d214c2ccfd`; output `/tmp/evidence_agent_ae_setup.txt`.
- Page read: full frontmatter, drafts image, body, related links, setup nav order, AE tips, email/calendar, notetaker, email templates, collaboration setup pages, and approved repo draft/notetaker/onboarding code checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that AE setup should cover post-call follow-up drafts, review-before-send expectations, email feature quality/context, meeting/call capture, deal creation/context, and follow-up workflow expectations.
  - Linear planning issues reinforced that post-call drafting eligibility, duplicate meeting sources, no-show follow-ups, task/note support, and CRM write paths are active product topics; future or in-progress behavior was not published as current product behavior.
- Approved repo check: frontend onboarding supports a standard user path with Sync with Admin, email/workspace, workspace configuration, templates, notetaker, and collaboration. Backend Google settings confirm inbox monitoring, follow-up emails, response drafts, external email-client behavior, surfacing, and spectator email restrictions. Automations confirm follow-up draft generation depends on follow-up settings, relevance, draft generation, Nylas draft creation, and stored metadata. Docs/code confirm meetings, drafts, deals, search, reporting, Slack, and collaboration access are source/permission dependent.
- Public edits made:
  - Replaced generic shell and `aE setup` casing issue with an AE-specific setup path.
  - Framed AE setup as personal setup after admin/RevOps shared CRM, field, template, and notetaker setup.
  - Added Sync with Admin, Google Workspace/Microsoft 365, email settings, templates, notetaker/desktop capture, Slack/collaboration, and one real external-meeting test.
  - Clarified that AEs usually follow the standard user onboarding path, not the admin CRM/field-mapping path.
  - Set review-before-send expectations for post-call drafts and avoided promising automated send behavior.
  - Added dependencies for drafts: connected email/calendar, draft settings, meeting capture, source relevance, templates, recipient context, and processing state.
  - Reframed common issues around disconnected/wrong email/calendar, draft timing/context, notetaker admission/link/duplicate-source problems, and hidden deals/drafts/search/reporting due to access, filters, saved views, or feature availability.
  - Added related links to AE tips, email/calendar, notetaker, templates, collaboration, draft review, meeting insight/draft troubleshooting, roles, and dashboard setup errors.
- Internal-only or unresolved items logged separately:
  - Do not publish the MCP setup-time estimate, customer-specific follow-up workflow examples, private email-quality tickets, no-show auto-draft/send behavior, duplicate-source dedupe promises, task/note CRM write behavior, or claim Google Workspace is required.
  - Keep Pylon setup out of AE-managed steps unless an admin/feature-specific page confirms current access.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 019 - `customer-docs/setup/csm-setup.mdx`

- MCP: answered in a read-only CLI worker via fresh `ask_ergo_agent` / `get_ergo_agent_result`; run ID `dafb4506-b803-442a-bf61-1964d65d6c64`; thread ID `fe3c8a0f-b0f0-4696-86e9-9de910520a81`; output `/tmp/evidence_agent_csm_setup.txt`.
- Page read: full frontmatter, meetings image, body, related links, setup nav order, CSM tips, email/calendar, notetaker, templates, drafts, field mapping, and approved repo onboarding/draft/notetaker/settings evidence checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that CSM setup needs to cover meeting capture/processing, draft timing and quality, duplicate notetaker context, account visibility, CRM/account sync, field/stage mapping, and customer-guide clarity without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that customer health, adoption risk, support-load visibility, account-view parity, CS/support read-only questions, and automations/handoff flows are active product topics; future or in-progress behavior was not published as current product behavior.
- Approved repo check: frontend onboarding supports standard user setup with Sync with Admin, personal email/workspace setup, workspace configuration, templates, notetaker, and collaboration. Backend settings confirm email analysis, post-call follow-up email, surfacing, calendar/notetaker prerequisites, field mapping for deal/contact/company properties, pipeline/stage sync, and draft categories. Docs/code confirm Meetings, Drafts, Field Mapping, and account/deal/reporting visibility are source/permission dependent.
- Public edits made:
  - Replaced generic setup shell and `cSM` casing issue with a CSM-specific setup path.
  - Framed the page around customer meetings, account context, reviewable follow-up drafts, and CS workflow readiness.
  - Added prerequisites for connected CRM/source of truth, CSM account/deal/meeting/report access, admin-owned Field Mapping, stages, account fields, templates, and reporting defaults.
  - Added Sync with Admin, Google Workspace/Microsoft 365, email settings, notetaker, manual Add Bot, template, test-meeting, Drafts, Meetings, and Field Mapping verification steps.
  - Clarified that CSMs usually follow the standard user path and should not reconnect CRM sources or redefine organization defaults unless they also own admin setup.
  - Scoped renewal, expansion, handoff, churn-risk, and account-health wording to configured fields, stages, templates, reports, source permissions, and processing state.
  - Reframed common issues around skipped/captured meetings, team/source/shared-link access, incomplete account context, premature CS workflow expectations, and missing/low-quality drafts.
  - Added related links to CSM tips, email/calendar, notetaker, templates, Add Bot, Drafts, Field Mapping, roles, and dashboard setup errors.
- Internal-only or unresolved items logged separately:
  - Do not publish customer-specific onboarding patterns, Slack Connect support details, white-glove setup claims, exact default toggle values, exact surfacing timing/cadence, External Email Client/Superhuman UI, or future customer-health/account-view/read-only CS bot behavior as current product behavior.
  - Keep Desktop-App evidence out of CSM setup unless the page intentionally covers Ergo Desktop Notetaker.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 020 - `customer-docs/setup/spectator-and-viewer-setup.mdx`

- MCP: answered in a read-only CLI worker via fresh `ask_ergo_agent` / `get_ergo_agent_result`; run ID `665f5fe2-53d3-4cf2-a2d5-191631c0aef9`; thread ID `57af16a5-5b19-4b2b-bc9d-29781a7e0ad2`; output `/tmp/evidence_agent_spectator_viewer_setup.txt`.
- Page read: full frontmatter, admin-dashboard image, body, related links, setup nav order, spectator access, setup-by-role, spectator-management, grant-meeting/reporting-access, reporting sharing, meeting visibility, and approved repo spectator/reporting/shared-link code checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that this page should cover access enablement, meeting unavailability, dashboard/reporting visibility, team/member visibility, shared meeting links, and broad-versus-narrow access decisions without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that spectator automation exclusion, reporting cadence/admin visibility, WorkOS roles/permissions, reporting/dashboard work, and transcript/API access are active product topics; future or in-progress behavior was not published as current product behavior.
- Approved repo check: frontend onboarding supports a spectator path with user sync, workspace, and Ergo Notetaker when prompted, not the full user templates/collaboration/draft path. Frontend/backend role evidence supports `user` and `admin` roles plus an `isSpectator` flag, not a formal dashboard-viewer role. Backend spectator conversion and middleware block non-Ergo notetakers, Slack/email toggles, CRM writes, email drafting, and integration connections for spectator seats. Reporting access is separately granted to admins/team admins or explicit reporting grants; shared reporting/dashboard/meeting routes are link/session access patterns rather than workspace roles.
- Public edits made:
  - Kept the route/title but clarified that spectator seats are supported while shared-link viewers and reporting viewers are access patterns, not formal workspace roles.
  - Replaced generic setup copy with a narrow-access provisioning flow for shared links, reporting grants, meeting/folder access, global meeting access, and spectator seats.
  - Removed draft/template/collaboration setup from spectator/viewer instructions.
  - Added guidance to avoid granting admin, CRM, email-drafting, integration, or organization-default access when limited visibility is enough.
  - Added spectator onboarding guidance limited to the steps shown by Ergo, such as user sync, workspace access, and Ergo Notetaker when prompted.
  - Added explicit verification from the viewer account or shared link before relying on access.
  - Reframed common issues around over-granting, unshared resources, wrong Ergo account/stale link, meeting visibility, and reporting visibility.
  - Added related links to spectator tips, spectator access, roles, spectator management, grant meeting/reporting access, global meeting access, meeting visibility, dashboard sharing, and permission troubleshooting.
- Internal-only or unresolved items logged separately:
  - Do not publish a formal Dashboard Viewer role, separate viewer provisioning/pricing path, spectator pricing, broad spectator AI/chat access, all-recordings claims, or roadmap role/permission work unless separately verified as current customer-facing behavior.
  - Treat spectator automation exclusion and reporting/admin visibility Linear items as planning signals, not shipped public promises, until page-specific code/product evidence supports them.
- Validation: passed page-level frontmatter, local link, image, and `git diff --check` checks after edit.

### 021 - `customer-docs/setup/revops-tips-for-success.mdx`

- MCP: answered in a read-only CLI worker via fresh `ask_ergo_agent` / `get_ergo_agent_result`; run ID `2d277c7f-5a69-4aa8-a045-3deeda969d66`; thread ID `dfc917b2-b941-49fd-bb49-f28f6adb5ca9`; output `/tmp/evidence_agent_revops_tips.txt`.
- Page read: full frontmatter, field-mapping image, body, related links, setup nav order, RevOps rollout setup page, field-mapping overview, stage controls, backfill, AI-output review, CRM sync, duplicate-draft troubleshooting, and generated-docs source guidance checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that RevOps tips should cover field/stage mapping, deal creation and sync failures, notetaker processing, duplicate notetaker/draft context, support-loop handoff, access visibility, and customer-guide clarity without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that backfill of newly mapped fields, automation write paths, task/note sync, audit trails, KPI dashboards, Slack-to-CRM reliability, and field/property changes are active product topics; future or in-progress behavior was not published as current product behavior.
- Approved repo check: docs and frontend/backend code support admin-owned CRM setup, field mapping, property permissions, pipeline and stage setup, reporting defaults, call-grading/reporting surfaces, global/access rules, notetaker setup, review-before-use guidance, CRM sync troubleshooting, duplicate-notetaker guidance, and scoped backfill guidance. `Desktop-App` and `Ergo-Automations` are present locally; Automations evidence supports meeting/webhook processing, notetaker-to-CRM flows, Nylas/CRM context, and backfill processing; Desktop evidence was not needed beyond avoiding desktop-specific claims on this RevOps tips page.
- Public edits made:
  - Replaced generic setup shell and `revOps` casing issue with RevOps-specific operating guidance.
  - Framed the page around preventing rollout failures by aligning CRM mappings, source permissions, meeting capture, reporting, and AI review standards.
  - Added source-of-truth, CRM permission, first-pilot scope, and roadmap/experimental-work boundaries.
  - Added concrete tips for central decisions, production context, Field Mapping prerequisites, stage controls, small pilot, scoped backfill, AI-output review, first-week feedback loop, and workflow-based adoption measurement.
  - Reframed expected behavior around downstream Meetings, Deals, Drafts, Reporting, Search, and CRM sync.
  - Added customer-safe feature-dependent language for automation, task/note sync, audit trails, and KPI dashboards without naming internal planning sources in public docs.
  - Reframed common issues around premature invitations, sandbox/synthetic pilots, missing mappings/permissions/stages, broad backfills, duplicate notetakers, and absent feedback ownership.
  - Added direct related links to RevOps rollout setup, CRM, Field Mapping, stage controls, backfill, notetaker setup, AI review, CRM sync troubleshooting, duplicate drafts, and reporting defaults.
- Internal-only or unresolved items logged separately:
  - Do not publish MCP-mentioned pipeline inaccuracy percentages, customer-specific anecdotes, specific notetaker preference guidance, unverified dialer vendor behavior, future automation write paths, task/note CRM sync, audit trails, KPI dashboards, or internal support-loop details as current product behavior.
- Validation: passed page-level frontmatter, local link, image, internal-source-name, and `git diff --check` checks after edit.

### 022 - `customer-docs/setup/operator-tips-for-success.mdx`

- MCP: initial read-only CLI scout failed with `user cancelled MCP tool call` and no run ID; fresh in-thread Ergo MCP retry answered with run ID `ff4ba0aa-f4ef-467d-aceb-2f8275c2bd0e`; thread ID `fa52eebc-666f-4ad1-af47-0f7147ea31e8`.
- Page read: full frontmatter, admin-dashboard image, body, related links, setup nav order, Operator setup, User sync, Sync CRM/settings to team members, generated-docs source guidance, and approved repo onboarding/admin sync/notetaker/reporting/email settings evidence checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that operator tips should cover notetaker processing/admission, deal/CRM creation failures, HubSpot stage/mapping decisions, duplicate notetaker/draft context, access/reporting visibility, and support escalation examples without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that CRM write paths, task/note sync, automation write paths, reporting grants, duplicate-source dedupe, no-show follow-ups, and stage/property changes are active product topics; future or in-progress behavior was not published as current product behavior.
- Approved repo check: frontend onboarding/admin code supports Sync with Admin, role-dependent setup, user sync, personal email/calendar/notetaker/collaboration setup, and admin/team sync. Backend/frontend evidence supports email settings such as Email Analysis, Post-Call Followup Emails, and Surfacing when available; reporting access grants; notetaker admission/manual Add Bot docs; field mapping, pipeline stages, property permissions, and stage drift; duplicate-notetaker caution; and role/spectator/reporting/access troubleshooting. Frontend/backend role models confirm `operator` is a setup persona, not a formal permission role.
- Public edits made:
  - Replaced generic setup shell with delegated-operator support guidance.
  - Reframed operator as a setup persona helping users from approved admin settings.
  - Added prerequisites for approved Sync with Admin source, actual operator permissions, shared-versus-personal setup boundaries, and RevOps/admin approval before changing CRM, fields, stages, or pushed settings.
  - Added layered triage tips covering account/team/role/spectator/reporting, inherited settings, personal grants, email settings, notetaker/admission/manual Add Bot, templates, Field Mapping/stages, reporting grants, approved sync, and escalation context.
  - Reframed expected behavior around actual permissions, missing outputs caused by sources/grants/mappings/templates/processing, and incomplete inherited configuration when setup steps are skipped.
  - Reframed common issues around wrong account/team/role, missing Sync with Admin/personal setup, wrong email/calendar account, notetaker admission/manual Add Bot, draft settings/templates/meeting eligibility/duplicate sources, CRM field/stage issues, and reporting access/filter gaps.
  - Added related links to Operator setup, RevOps rollout, User sync, admin sync, email/calendar, notetaker, templates, Field Mapping, grant meeting/reporting access, and permission troubleshooting.
- Internal-only or unresolved items logged separately:
  - Do not publish exact notetaker miss-rate percentages, white-label/recording-default claims, exact external-email-client behavior, skip-onboarding/manual-resync mechanics, ad hoc Push Automation behavior, admin-consent details, future task/note/automation write paths, or customer-specific operator support examples without page-specific product confirmation.
- Validation: passed page-level frontmatter, local link, image, internal-source-name, and `git diff --check` checks after edit.

### 023 - `customer-docs/setup/ae-tips-for-success.mdx`

- MCP: initial read-only CLI scout failed with `user cancelled MCP tool call` and no run ID; fresh in-thread Ergo MCP retry answered with run ID `208ebc7a-6826-4cc4-afdf-eb213ec83dcd`; thread ID `4d74f087-204d-4d6b-b6c7-9a8085db3dbb`.
- Page read: full frontmatter, drafts image, body, related links, setup nav order, AE setup, generated-docs source guidance, draft logic/review/auto-send pages, Add Bot, why some meetings do not generate insights/drafts, multiple notetakers, Deals board, CRM matching, Chat with Ergo, and approved repo draft/notetaker/deal/search evidence checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that AE tips should cover post-call drafts, review-before-send expectations, email feature quality/context, notetaker admission/manual Add Bot, duplicate notetaker/draft context, CRM/deal creation and matching, Slack/collaboration expectations, and customer-guide clarity without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that draft eligibility, duplicate meeting sources, no-show follow-ups, task/note support, CRM write paths, deal view context, reporting permissions, and automation work are active product topics; future or in-progress behavior was not published as current product behavior.
- Approved repo check: docs/code support AE personal setup with Sync with Admin, email/calendar, draft settings, templates, notetaker/manual Add Bot, reviewable drafts unless an explicit auto-send workflow is approved, meeting qualification/processing dependencies, multiple-notetaker caveats, Deals/Ergo View feature/access gating, CRM matching dependencies, Chat with Ergo feature/access gating, and reporting access caveats. Existing docs contradict the MCP claim that Ergo never auto-sends, so public wording was aligned to the current Drafts docs instead.
- Public edits made:
  - Replaced generic setup shell and `aE` casing issue with AE-specific tips.
  - Framed meetings as the engine for downstream drafts, deal updates, search, and pipeline follow-up.
  - Added prerequisites around AE setup, templates, CRM fields/stages, reporting access, Slack/collaboration connection, and review unless explicitly approved auto-send.
  - Added practical tips for captured meetings, bot admission/manual Add Bot, draft review, draft eligibility, templates, Deals, specific Ergo prompts, Slack/collaboration when connected, and source-context correction.
  - Added expectations for separate output processing states, reviewable/approved auto-send draft behavior, feature/access gating, and duplicate notetaker-source risks.
  - Reframed common issues around draft timing/qualification, auto-send assumptions, moved/missing meetings, CRM matching, Slack/channel access, and reporting/deal filters.
  - Added related links to AE setup, Add Bot, meeting insight/draft troubleshooting, multiple notetakers, draft logic, review/edit drafts, templates, Deals board, CRM matching, and Chat with Ergo.
- Internal-only or unresolved items logged separately:
  - Do not publish exact notetaker timeout durations, exact draft generation timing, draft expiry/deletion defaults, the absolute claim that Ergo never auto-sends, manual non-sales draft-trigger mechanics, third-party notetaker retroactive matching rules, CRM email-association breadth, one-notetaker-per-org behavior, Slack brief edge cases, or Automation Log/CRM audit-trail claims without page-specific product confirmation.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/over-specific-claim, and `git diff --check` checks after edit.

### 024 - `customer-docs/setup/csm-tips-for-success.mdx`

- MCP: initial read-only CLI scout attempts failed with `user cancelled MCP tool call` and no run ID; fresh in-thread Ergo MCP retry answered with run ID `49c276cc-e1d9-46db-82c4-dc2c0c9137fe`; thread ID `fd257e08-355e-4783-b77c-1e107c06e5ba`.
- Page read: full frontmatter, meetings image, body, related links, setup nav order, CSM setup, generated-docs source guidance, meeting history/detail, skip-internal-meetings, draft review, company detail, deal/account health, AI account overviews, reporting overview/default dashboards/custom fields, search, and approved repo CS/draft/reporting/deal-health evidence checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that CSM tips should cover user-guide clarity, meeting capture and processing, follow-up quality and timing, duplicate notetaker context, account visibility, CRM/account sync, field/stage mapping, and customer-safe review without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that customer health, adoption risk, support-load visibility, account-view parity, CS/support read-only questions, Slack-to-CRM reliability, and automation handoff work are active product topics; future or in-progress behavior was not published as current product behavior.
- Approved repo check: Automations meeting qualification includes customer success, account management, onboarding, implementation, renewals, expansions, QBRs, troubleshooting, and external customer support as revenue-relevant meeting types. Frontend code confirms CS and product default reporting dashboards, customer-success fields such as Expansion Opportunity Signals, Churn Signals, and Feature Requests, Deal/Account Health and Account Health cards, CS-related health signals, and gated Deals/reporting behavior. Automations draft code confirms follow-up drafts use dashboard/company context, active templates, meeting data, deal data, previous correspondence, sender/recipient context, relevance checks, and template selection. Existing docs confirm meetings, drafts, search, account context, reporting, and health views are source/access/processing dependent.
- Public edits made:
  - Replaced generic setup shell and `cSM` casing issue with a post-sale tips page for CSMs and account owners.
  - Framed the page around customer conversation prep, safe follow-ups, account recall, CS reporting, and current-source limitations.
  - Added prerequisites for completed CSM setup, customer-versus-internal meeting capture decisions, CS-specific fields/stages/templates/reporting, and AI-output review.
  - Added practical tips for reviewing account history, capturing the right meetings, making drafts customer-safe, searching by account context, keeping records linked, using reporting as a signal layer, and correcting bad context early.
  - Scoped account health, renewal, expansion, churn-risk, feature-request, objection, and reporting language to feature access, source access, CRM/account matching, configured fields, processed meetings, and permissions.
  - Reframed common issues around premature CS signal expectations, skipped/internal meetings, unreviewed customer recaps, incomplete account context, early reporting interpretation, and hidden resources caused by permissions, filters, date ranges, sources, or feature access.
  - Added related links to CSM setup, meeting history/detail, skip internal meetings, meeting insight/draft troubleshooting, draft review, search, company detail, deal/account health, default dashboards, custom reporting fields, sales manager tips, and roles.
- Internal-only or unresolved items logged separately:
  - Do not publish exact health-score thresholds, custom health signal weighting, manual score overrides, arbitrary report cadences, Slack-native CSM querying, org-level notetaker naming, automatic deal duplication/stage movement, batch at-risk re-engagement, exact draft timing, or customer-specific CS workflow examples without page-specific product confirmation.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/over-specific-claim, and `git diff --check` checks after edit.

### 025 - `customer-docs/setup/sales-manager-tips-for-success.mdx`

- MCP: Scout 06 checked Ergo MCP through CLI but its nested `ask_ergo_agent` call failed with `user cancelled MCP tool call`; fresh in-thread Ergo MCP retry answered with run ID `fcc1b8fd-a15b-4dad-9d16-3db41bf2fe3c`; thread ID `974ca374-c259-481e-acab-d2793aa0ce1c`.
- Page read: full frontmatter, reporting-dashboard image, body, related links, setup nav order, AE tips, CSM tips, generated-docs source guidance, reporting overview, call grading rubrics, notetaker adoption edge cases, deals board, custom views/Ergo View, deal/account health, meeting detail, video/transcript/action items, AI-output review, and approved repo reporting/deal/meeting/rubric evidence checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that manager-facing docs need practical guide clarity, notetaker capture/processing expectations, reporting visibility, draft/email-quality context, CRM/account sync, field/stage mapping, and access troubleshooting without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that KPI dashboards, automation write paths, task/note sync, CRM update tool usage, Slack-to-CRM capture, and dashboard work are active product topics; future or in-progress behavior was not published as current product behavior.
- Approved repo check: backend reporting access code confirms org reporting must be enabled; admins and team admins can have full reporting access; other users need explicit grants. Frontend reporting code confirms dashboard access, custom fields/call grading only when `canCreate` is true, admin email-cadence and rep-performance tabs, default Sales/Customer Success/Product dashboards, and configurable dashboard/reporting surfaces. Meeting detail code confirms graded rubrics and reporting mentions can appear on meeting insights when available. Automations reporting code confirms rubric grading processes formatted transcript/source data when rubrics and required company info exist. Deals board code/docs confirm health, priority, activity, saved views, list/kanban, and built-in Ergo View are feature/access/source dependent.
- Public edits made:
  - Replaced generic setup shell with a manager operating guide for 1:1s, call coaching, pipeline inspection, notetaker adoption, and team reporting.
  - Added prerequisites for reporting access, meeting visibility, rep onboarding, configured dashboards/fields/rubrics/views, and transparent use of AI signals with reps.
  - Added tips for choosing the manager workflow first, checking source coverage, using call grading from evidence, calibrating rubrics, using aggregate reporting, using health/priority/activity as an inspection queue, preparing 1:1s from source moments, asking specific AI/search questions, and closing the loop with RevOps.
  - Scoped reporting, call grading, Deals, Ergo View, email cadences, and rep-performance language to role, feature access, team setup, reporting grants, configured fields, processed meetings, and source freshness.
  - Reframed scores/grades as directional coaching and inspection signals rather than deterministic forecast or performance judgments.
  - Added related links to AE/CSM tips, reporting, call grading, chart builder, notetaker adoption, Deals, Ergo View, deal/account health, meeting detail, video/transcript/action items, AI-output review, spectator/viewer tips, and roles.
- Internal-only or unresolved items logged separately:
  - Do not publish exact deal-health algorithms or weighting, nightly recalculation claims, score thresholds, customer-specific reductions in pipeline meetings, team-size caps, saved-prompt/hotkey mechanics, exact custom-signal setup paths, exact notetaker timeout behavior, video/audio retention windows, or branded notetaker naming unless page-specific product/legal confirmation exists.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/over-specific-claim, and `git diff --check` checks after edit.

### 026 - `customer-docs/setup/spectator-and-viewer-tips-for-success.mdx`

- MCP: Scout 06 checked Ergo MCP through CLI but its nested `ask_ergo_agent` call failed with `user cancelled MCP tool call`; fresh in-thread Ergo MCP retry answered with run ID `e8bbc19d-f0d5-4711-97b6-6e78ceede787`; thread ID `fc4fa8f5-4b3a-446f-9f93-714d41c12a0e`.
- Page read: full frontmatter, reporting-dashboard image, body, related links, setup nav order, spectator/viewer setup, spectator access, spectator management, grant meeting/reporting access, global meeting access, meeting availability/visibility, reporting sharing/troubleshooting, permission troubleshooting, generated-docs source guidance, Scout 06 findings, and approved repo spectator/reporting/shared-link evidence checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that this page should prevent user-guide confusion, missing reporting/sidebar confusion, notetaker/viewing confusion, over-granted access, and shared-link/reporting visibility issues without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that spectator automation exclusion, permissions rework, reporting visibility, KPI dashboards, transcript/API access, and role granularity are active product topics; future or in-progress behavior was not published as current product behavior.
- Approved repo check: backend spectator middleware blocks CRM writes, email drafting, and integration connections. Admin conversion code supports standard-user/spectator conversion and disables non-Ergo notetakers, Slack, email toggles, and Ergo when converting to spectator. Ergo status/toggle code keeps Ergo disabled for spectators. Frontend onboarding confirms spectator onboarding is limited to user sync, workspace, and Ergo Notetaker, and spectator notetaker setup only shows the Ergo notetaker. Reporting access code confirms reporting is separately gated by org reporting enablement, admin/team-admin access, and explicit grants. Existing docs confirm shared links, reporting access, global meeting access, and meeting visibility are separate access paths.
- Public edits made:
  - Replaced generic setup shell with limited-access tips for spectators, reporting viewers, shared-link viewers, and external reviewers.
  - Framed the page around starting from the viewer's question and granting the narrowest access that answers it.
  - Added prerequisites for one-time versus ongoing access, exact resource scope, and avoiding admin/CRM/draft/integration/template/org-default access when visibility is enough.
  - Added tips for shared links, recurring spectator access, reporting grants, missing Reporting access, viewer expectations, freshness/scope, exact-path testing, and periodic access review.
  - Clarified that spectator seats block CRM write, email-drafting, and integration workflows; shared-link viewers are not workspace users unless separately signed in; reporting access is separate from meeting access; spectator onboarding is shorter than standard onboarding; shared pages can expose narrower detail than authenticated pages.
  - Reframed common issues around over-granting, missing reporting access, hidden meetings/folders, wrong workspace/account/stale link/password, and spectators expecting standard-user/admin workflows.
  - Added related links to spectator setup/access/management, grant meeting/reporting access, global meeting access, meeting visibility, reporting sharing/troubleshooting, permission troubleshooting, sales manager tips, CRM setup, and roles.
- Internal-only or unresolved items logged separately:
  - Do not publish a formal Dashboard Viewer role, spectator pricing, broad spectator deal-board or AI/chat access, bulk transcript download access for spectators, private-meeting mechanics, exact shared-dashboard unauthenticated behavior, multiple-super-admin support, granular permissions rework, deep-research AI for spectators, snapshot scheduled-report delivery, or static capability matrices without page-specific product confirmation.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/over-specific-claim, and `git diff --check` checks after edit.

### 027 - `customer-docs/setup/connect-your-crm.mdx`

- MCP: fresh in-thread Ergo MCP research answered with run ID `3e29641e-c47f-420c-922a-d6aa5c1fbb93`; thread ID `a8996ce7-9c8a-4e53-a537-f61c587bc738`.
- Page read: full frontmatter, integrations screenshot, body, related links, setup nav order, related CRM integration pages for Salesforce/HubSpot/Attio/Pipedrive/Ergo CRM, Field Mapping overview/setup/properties/permissions/pipelines/stage drift docs, CRM sync troubleshooting, CRM record matching, HubSpot meeting-activity page, and approved repo integration/field-mapping/CRM-write evidence checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that CRM setup docs should answer pipeline/stage changes, HubSpot deal creation failures, HubSpot sync issues, manual-stage changes, user-guide clarity, and CRM visibility expectations without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that live Shadow CRM ingestion, stage drift/no-stage states, task/note CRM write paths, newly mapped field backfill, audit trails, call-to-CRM automation write paths, Slack-to-CRM reliability, and Salesforce CDC handling are active product topics; future or incomplete behavior was not published as current product behavior.
- Approved repo check: frontend Integration data and connection code confirm CRM options for Ergo CRM, HubSpot, Attio, Pipedrive, and Salesforce; Salesforce/Attio/HubSpot OAuth paths; Pipedrive API-key metadata; and Ergo CRM connecting without an external API key. Frontend CRM status code confirms Ergo CRM is canonical/no external CRM mode while HubSpot/Salesforce/Attio/Pipedrive/Zoho are external CRM statuses. Backend CRM routes confirm property sync for deals/contacts/companies, CRM stage sync, generated stage descriptions, single-property sync from CRM, owner-ID sync behavior, property permissions for deal/contact/company create/update, stage exit-point schemas, drift warning storage, and spectator-blocked CRM write routes for deals, contacts, companies, and associations. Agent/deal-management code confirms CRM deal writes are proposal/user-approval based and require schema IDs for stages/properties/owners.
- Public edits made:
  - Replaced the generic setup shell with a CRM owner/admin setup page focused on connecting the source of truth before Field Mapping, reporting, AI context, deal views, and writeback.
  - Added clear audience and access boundaries, including that spectators should not complete CRM setup and CRM write actions are blocked for spectators.
  - Added prerequisites for choosing Salesforce/HubSpot/Attio/Pipedrive/Ergo CRM, using a sufficiently permissioned CRM account, deciding read-only versus writeback rollout scope, and identifying upstream-owned fields before automation.
  - Added connection steps that use the method shown in Ergo, while safely distinguishing Salesforce/HubSpot/Attio OAuth-style paths, Pipedrive API key, and Ergo CRM's no-external-key path.
  - Added a post-connection Field Mapping checklist covering property sync, internal IDs/types/options/descriptions, owner IDs, pipelines/stages, stage descriptions/guardrails, property permissions, drift, and controlled test records.
  - Reframed expectations around connection status versus write readiness, source permissions, Field Mapping, property permissions, feature/user access, drift, record matching, source freshness, and HubSpot-specific activity/recording-link setup.
  - Added common issues around incomplete mapping, stale permissions/tokens, CRM schema changes, missing owner fields, create/update blocks, wrong sandbox/production CRM, filters/saved views, and spectator/role limits.
  - Added related links to CRM-specific integration pages, Field Mapping pages, HubSpot meeting activities, CRM matching, and CRM sync troubleshooting.
- Internal-only or unresolved items logged separately:
  - Do not publish exact CRM scopes/minimum permission levels, customer-specific CRM incidents, all-CRM OAuth claims, Zoho as a headline supported integration, duplicate-record guarantees, automatic contact/company/deal creation from every source, task/note CRM sync, call-to-CRM automation write paths, Slack-to-CRM reliability, historical backfill, exact sync cadence, exact Pipedrive/Attio write-permission behavior, custom-object support, or specific post-call automation trigger behavior without page-specific product confirmation.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/future-claim, and `git diff --check` checks after edit.

### 028 - `customer-docs/setup/connect-email-and-calendar.mdx`

- MCP: fresh in-thread Ergo MCP research answered with run ID `931374db-f30f-4251-8c93-16780ef6f13c`; thread ID `946fd52d-10c8-4745-84f3-6eca4792e0db`.
- Page read: full frontmatter, integrations screenshot, body, related links, setup nav order, Google Workspace and Microsoft 365 integration pages, calendar scopes/auto-join, expired grants, notetaker setup, first-time setup checklist, reconnect troubleshooting, notetaker did not join, draft send failures, upcoming meetings, schedule/cancel notetaker, rescheduled meetings, Add Bot, email signature, post-call draft toggle, draft signature pages, and approved repo integration/email/calendar/draft evidence checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that this page should cover recorder/notetaker failures, email feature failures, duplicate notetaker/draft context, processing expectations, user-guide clarity, and reconnect/support patterns without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that calendar context for surfacing, no-show drafts, Gmail preference learning, scheduled send, email draft threading, teammate-calendar access, and draft-agent work are active product topics; future or incomplete behavior was not published as current setup behavior.
- Approved repo check: frontend integration data confirms Google Workspace and Microsoft 365 as email/collaboration providers with Gmail/Calendar and Outlook/Calendar services and OAuth type. Integration UI confirms Google/Microsoft expired-grant status, OAuth callbacks, reconnect prompt, and mutual-exclusion behavior for email providers. Workspace integration UI confirms connected Google/Microsoft show Email Analysis and Post-Call Followup Emails toggles for non-spectators, plus Surfacing when workspace-enabled. Backend Google settings routes confirm spectators cannot change email settings and default settings are returned for standard users. Calendar status routes confirm connected/disconnected/invalid status and reconnect messaging. Failed-draft UI confirms `NO_GRANT` and `AUTH_EXPIRED` send users back to Integrations; send flow validates recipient, subject, body, thread strategy, and sender context. Existing docs confirm Add Bot requires a live Zoom/Google Meet/Microsoft Teams link and meeting/notetaker/processing states are separate.
- Public edits made:
  - Replaced generic setup shell with a personal email/calendar setup guide for Google Workspace and Microsoft 365.
  - Framed the page around connecting the primary work mailbox/calendar used for customer invites and customer email.
  - Added audience boundaries, including that spectators should not expect email analysis, follow-up draft, or send settings to behave like standard-user setup.
  - Added prerequisites for choosing one provider, using the right work account, confirming meetings are on the connected calendar, and handling provider/admin authorization blocks.
  - Added connection steps from Integrations and feature-toggle review for Email Analysis, Post-Call Followup Emails, Surfacing when enabled, and External email client.
  - Added calendar test steps for upcoming meetings, event ownership/link/attendee checks, rescheduled meetings, live/ad hoc Add Bot usage, live meeting-room URLs, and waiting-room admission.
  - Scoped expectations around email/calendar versus CRM/notetaker/draft settings, grant expiry, password/provider-policy changes, source matching, and downstream processing.
  - Reframed common issues around wrong account, mutually exclusive providers, missing permissions, provider admin blocks, meeting/calendar mismatch, reschedules/link changes, scheduling-page links, and draft validation.
  - Added related links to provider pages, calendar scopes, expired grants, signatures, notetaker setup, meetings, Add Bot, post-call drafts, draft send failures, and reconnect troubleshooting.
- Internal-only or unresolved items logged separately:
  - Do not publish auth vendor names, exact OAuth error strings, exact scope-selection UI behavior, exact draft-generation timing, surfacing cadence/beta status, exact Superhuman/Gmail draft-sync claims, HubSpot-native Google Calendar sync behavior, automatic no-show drafts, teammate-calendar access details, or internal support rerun/manual-backend flows without page-specific product confirmation.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/future-claim, and `git diff --check` checks after edit.

### 029 - `customer-docs/setup/workspace-configuration.mdx`

- MCP: fresh in-thread Ergo MCP research answered with run ID `026fe65b-9058-4d79-bb1b-e991649e5440`; thread ID `8c195e81-c7f6-4618-982e-1bd54d9fad77`.
- Page read: full frontmatter, onboarding image, body, related links, setup nav order, setup index/checklist, setup-by-role, RevOps/operator setup pages, company details, user sync, advanced settings, reporting defaults, admin overview, organization/team hierarchy, and approved repo onboarding/admin-sync/workspace-settings evidence checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that workspace configuration docs should answer email-feature failures, post-call follow-up confusion, guide clarity, new-seat/user access, meeting visibility, Slack/workspace setup, CRM/deal-stage changes, duplicate drafts, and duplicate activity logging risks without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that follow-up drafting, inbox ingress, email triage, Slack org mapping, spectator automation exclusion, admin/reporting visibility, meeting access, CRM health, and task/note write paths are active product topics; future or incomplete behavior was not published as current workspace configuration behavior.
- Approved repo check: frontend onboarding code confirms Workspace Configuration appears in admin and standard-user onboarding after email connection and before templates; broader admin setup steps include CRM, templates, collaboration, notetaker, company details, meeting titles, properties, pipeline stages, pricing, advanced settings, and reporting defaults when enabled. Workspace configuration code confirms Email Analysis, Post-Call Followup Emails, and Surfacing when feature-enabled. Integration UI confirms external email-client and workspace email toggles exist in integrations. Backend admin-sync code confirms Sync with Admin can copy CRM keys, properties, stages, company descriptions, meeting titles, templates, task settings, alternate domains, partnership domains, record types, property permissions, restrict-to-pipeline, and advanced context/notification settings. Admin push/team sync UI confirms selected settings can overwrite target users, with templates unchecked by default in push/team sync. Backend CRM-key sync confirms admin CRM keys can be copied to standard users. Existing admin docs confirm roles, team access, meeting access, reporting access, and spectators are separate access concepts.
- Public edits made:
  - Replaced the generic setup shell with a decision guide for shared defaults versus each user's personal email/calendar/notetaker/draft settings.
  - Framed workspace configuration as a cross-surface setup area spanning onboarding, Integrations, Field Mapping, Admin, Reporting, and Advanced Settings rather than a single screen.
  - Added prerequisites for source connection, first-output selection, inherited admin settings, meeting/reporting access decisions, and duplicate logging review.
  - Added personal setting descriptions for Email Analysis, Post-Call Followup Emails, Surfacing when available, and External email client when available, with review-before-customer-send language.
  - Added shared-default guidance for CRM/Field Mapping, company details, meeting-title phrases, templates, domains, task settings, advanced CRM settings, collaboration integrations, notetaker, reporting defaults, rubrics, dashboards, pricing context, and admin sync.
  - Clarified that Sync with Admin can copy shared configuration but does not connect a user's personal email, calendar, notetaker, or third-party accounts.
  - Added access guidance for provisioning, spectators, meeting access, reporting access, shared-link/user access testing, and role-specific boundaries.
  - Added a controlled test workflow and common issues around skipped sync, wrong workspaces, missing draft eligibility, separate access grants, duplicate logging, and settings spread across setup areas.
  - Added related links to first-time setup, setup by role, CRM, email/calendar, templates, collaboration, notetaker, user sync, company details, meeting titles, advanced settings, reporting defaults, admin overview, admin sync, roles, and setup troubleshooting.
- Internal-only or unresolved items logged separately:
  - Do not publish exact toggle defaults, exact OAuth scope-selection wording, a broad "Ergo never auto-sends" claim, surfacing beta/GA status, exact external-email-client routing behavior, all-settings inheritance claims, HubSpot/native calendar duplicate-meeting behavior, exact Ergo Enabled toggle behavior/location, one-super-admin limitation, Gmail signature import limits, Slack monitoring org/user scope, admin-enforced toggle states, internal support-run settings changes, or customer-specific duplicate logging incidents without page-specific product confirmation.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/future-claim, and `git diff --check` checks after edit.

### 030 - `customer-docs/setup/email-templates-setup.mdx`

- MCP: CLI configuration check confirmed `ergo` enabled with OAuth via `codex mcp list` and `codex mcp get ergo`; fresh in-thread Ergo MCP research answered with run ID `21e86e25-17c9-48af-8f26-5fbd4e28dbfb`; thread ID `f0733575-3a6b-4efa-8e06-a28978ca0149`. First result poll timed out after 120s, then a later poll returned the synthesis.
- Page read: full frontmatter, onboarding image, body, related links, setup nav order, setup index, workspace configuration, draft template overview/create/edit/AI-builder pages, and approved repo onboarding/template/frontend/backend/automations evidence checked before editing.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that template docs should cover post-call follow-up expectations, email-feature issues, template request/support-guide clarity, draft timing/quality confusion, duplicate drafts, meeting eligibility, and review-before-send expectations without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that email template analytics, email preference learning, post-call drafting scope, sequence infrastructure, low draft volume audits, email triage/over-replying evals, no-show follow-ups, and draft UI work are active product topics; future or in-progress behavior was not published as current template setup.
- Approved repo check: frontend onboarding code confirms an Email Templates step for admin and standard-user onboarding; the step fetches `/dashboard/emailTemplates`, supports creating/editing/deleting templates with name/description/content, has an Email Templates toggle, and marks template setup optional. The Templates page confirms Email Templates, Slack Templates, CRM Note, Email Preferences, Knowledge Base, and User tabs; the email tab supports creating, selecting, renaming, deleting, enabling/disabling, autosaving, AI generation, bracketed placeholder guidance, and separate email-signature handling. Backend template routes confirm create/update/delete/get, active-template filtering by `shouldBeUsed`, default `emailTemplatesEnabled` true, and auto-send configuration as a separate setting. Backend template chat confirms AI generation/refinement with structured name/description/content for new templates and bracketed placeholder guidance. Backend/Automations draft code confirms template selection compares available templates to deal, correspondence, and meeting context, may select no template, passes selected template name/content into reprompter generation, and template constraints shape draft structure. Backend utility/agent tools confirm only active templates are fetched for some agent paths and that those paths cap the returned active templates to the most recent five for token management.
- Public edits made:
  - Replaced the generic setup shell with a template setup page focused on post-call draft structure and review workflow.
  - Added audience boundaries for admins/RevOps/operators/managers, AEs/CSMs/account owners, and standard users inheriting templates.
  - Added prerequisites for email/calendar, follow-up draft enablement, call-type planning, central versus individual ownership, separate signature setup, and admin sync overwrite caution.
  - Explained the three template parts: name, description, and content.
  - Reframed the description field as routing guidance that helps Ergo choose the right template, while the content field sets the reusable structure.
  - Added guidance for static text, bracketed placeholders, short sections, signature separation, and avoiding private one-off examples.
  - Added enable/disable behavior for template guidance and clarified that draft review, reprompting, email preferences, and rules are better places for tone/style refinements.
  - Added AI template builder guidance and a controlled test workflow before team rollout.
  - Scoped expectations around no-template selection, non-word-for-word output, signatures, draft eligibility, source context, and user access.
  - Reframed common issues around vague descriptions, overlapping templates, tone/exact phrasing expectations, duplicate signatures, disabled/stale/overwritten templates, non-qualifying meetings, and assumptions that every draft must use a template.
  - Added related links to setup, workspace configuration, email/calendar, user sync, admin sync, template/draft pages, signatures, draft eligibility, and draft send failures.
- Internal-only or unresolved items logged separately:
  - Do not publish exact draft generation timing, exact draft retention/expiration, Superhuman draft-folder behavior, writing-voice/profile visibility, per-recipient suppression reliability, open tracking, sequence/no-show roadmap, template analytics, exact smart-drafting tradeoff wording, exact active-template cap/selection thresholds, CRM logging/dedupe behavior, email watermark removal, multiple Gmail signature import claims, or non-sales meeting filter criteria without page-specific product confirmation.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/future-claim, and `git diff --check` checks after edit.

### 031 - `customer-docs/setup/collaboration-tools-setup.mdx`

- MCP: CLI configuration check confirmed `ergo` enabled with OAuth via `codex mcp list` and `codex mcp get ergo`; fresh in-thread Ergo MCP research answered with run ID `a7ee48d3-726d-43bc-b0ac-f83e851e31bf`; thread ID `7b26110e-3218-4d25-8e65-5572e0d4ba52`.
- Page read: full frontmatter, onboarding image, body, related links, setup nav order, Slack, Slack monitoring/pre-call context, Pylon, Beeper, Slack reconnect/channel troubleshooting, Pylon delivery troubleshooting, and approved repo collaboration/Slack/Pylon/Beeper evidence checked before editing.
- Subagent context used read-only:
  - Setup scout and integrations scout both checked Ergo MCP through CLI, verified the server configuration, and produced repo-backed collaboration packets. Their nested MCP `ask_ergo_agent` attempts did not return run IDs because of hidden-tool, cancellation, timeout, or rate-limit blockers, so the public page relied on the in-thread MCP answer plus approved repo checks.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that this page should clarify user-guide needs, Slack integration workflow expectations, bot availability questions, webhook/delivery confusion, meeting/recording delivery, and duplicate/missing collaboration outputs without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that Slack CRM capture, auto-add, Slack CRM health/self-healing, Slack bot messaging, webhook reliability, and Slack pre-call context are active product topics; future or incomplete behavior was not published as current collaboration setup.
- Approved repo check: frontend onboarding code confirms Slack is always shown, Beeper only appears when enabled for the workspace, and Pylon is admin-only/org-level in onboarding. Frontend integration data confirms Slack services for notifications, summaries, and monitoring; Beeper as token-based messaging when available; and Pylon as an API-key integration for sending meeting recordings to Pylon. Integration UI confirms Slack Monitoring and Pre-call Meeting Context are separate toggles shown only after Slack is connected, and Pylon connect/disconnect controls are admin-scoped with org-level status. Frontend API code confirms Pylon status/connect/disconnect routes and Slack monitoring/pre-call setting routes. Backend Slack routes confirm Slack monitoring status depends on both a monitoring workspace connection and the user's enabled setting; pre-call meeting context is stored separately; spectators are blocked from Slack monitoring changes. Automations Slack-to-CRM code confirms Slack processing is filtered by Ergo-enabled state and needs Slack session data before CRM-oriented processing.
- Public edits made:
  - Replaced the generic setup shell with a collaboration setup guide focused on Slack first, then admin-managed Pylon and enabled/gated Beeper.
  - Framed collaboration setup around the customer outcome: Slack pre-call context, Slack monitoring, Slack notifications/summaries, Pylon recording delivery, or a workspace-enabled messaging workflow.
  - Added prerequisites for correct Slack workspace/account selection, target channel access, private/external channel access, separate email/calendar/CRM/notetaker setup, and ownership of noisy or customer-facing delivery.
  - Added Slack setup steps and made Slack OAuth, Slack Monitoring, and Pre-call Meeting Context separate states.
  - Added guidance for adding Ergo to active channels, testing a controlled channel, and rechecking new/renamed/archived/moved channels after workspace changes.
  - Added admin-scoped Pylon setup for meeting-recording delivery and clarified that it is not a CRM source, guaranteed ticket-creation workflow, or replacement for Pylon queue/account configuration.
  - Added Beeper wording that only documents it when visible/enabled for the workspace, without presenting informal messaging channels as broadly supported.
  - Reframed expectations and common issues around wrong Slack workspace, missing channels, private/external channel access, Slack Monitoring without CRM context, missing pre-call context, Pylon delivery, and hidden Beeper availability.
  - Added related links to workspace configuration, templates, notetaker, Slack, Slack monitoring/pre-call context, Pylon, Beeper, Slack reconnect/stale channel troubleshooting, Add Ergo to new Slack channels, Pylon delivery troubleshooting, and roles.
- Internal-only or unresolved items logged separately:
  - Do not publish Slack-agent/chat-in-Slack status, bidirectional Slack @-mention CRM updates, Slack App Store approval status, Slack CRM self-healing/auto-add/health status, exact Slack scopes, exact external authorization wording, exact email-mismatch skip guidance, exact pre-call Slack delivery timing, `/brief` slash command availability, Slack inline CRM field editing, Slack-template navigation shortcuts, universal Slack Connect ingestion/deal-health impact, Pylon ticket creation/queue automation, Gong-like Pylon logging, exact Pylon token ownership, or broad Beeper/informal-message support without page-specific product confirmation.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/future-claim, and `git diff --check` checks after edit.

### 032 - `customer-docs/setup/notetaker-setup.mdx`

- MCP: CLI configuration check confirmed `ergo` enabled with OAuth via `codex mcp list` and `codex mcp get ergo`; fresh in-thread Ergo MCP research answered with run ID `b5b8a5d1-f8f0-43e6-b125-7879026bbb8b`; thread ID `386fe0d3-e3c0-4bc6-945b-bc812e658cba`.
- Page read: full frontmatter, onboarding image, body, related links, setup nav order, Ergo Notetaker, Ergo Desktop Notetaker, dashboard/upcoming meetings, schedule/cancel notetaker, waiting-room admission, one-bot/shared-notetaking behavior, notetaker troubleshooting, and approved repo onboarding/integration/notetaker/desktop evidence checked before editing.
- Subagent context used read-only:
  - Setup and notetaker/meetings scouts both checked Ergo MCP through CLI, verified server configuration, and produced repo-backed notetaker packets. Their nested MCP attempts did not return usable Ergo run IDs because of cancellation, hidden-tool, timeout, or rate-limit blockers, so the public page relied on the in-thread MCP answer plus approved repo checks.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that this page should cover user-guide clarity, call-recorder setup with video/transcripts, desktop/notetaker CPU or auto-record issues, repeated join prompts, notetaker not stopping, call-processing time, duplicate drafts from multiple meeting sources, and external meeting-link capture without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that desktop auto-record reliability, stopping friction, meeting-source dedupe, failed transcript webhooks, automation processing, desktop app version/update handling, desktop video/chat, Slack pre-call-to-desktop, transcript access, and spectator automation exclusion are active product topics; future or incomplete behavior was not published as current setup.
- Approved repo check: frontend onboarding code confirms the notetaker step is optional for most users, requires calendar before connecting Ergo Notetaker, shows only Ergo Notetaker for spectators and certain workspace modes, supports transcription language, org image upload for super admins, and summary email/recording-link toggles when Ergo Notetaker is connected. Frontend integration data confirms Ergo Notetaker, Ergo Desktop Notetaker, Gong, Fireflies, Circleback, BlueDot, Fathom, and Granola as notetaking integration options, with source-specific connection types. Integration UI confirms Ergo cloud, Ergo Desktop, and Granola are an allowed coexistence cluster, while other third-party notetakers are mutually exclusive with existing notetaker setup. Backend Ergo Notetaker configuration confirms calendar is required for the non-Recall path, notetaker name is required, transcription language accepts `en` or `multi`, connected users can enqueue upcoming eligible events, and configuration exposes summary email, recording/transcript link, internal-only, skip-internal, key-term, image, disclaimer, and language settings. Backend desktop notetaker routes confirm desktop connection sets desktop as connected, cancels pending scheduled bots, disconnects non-Ergo notetakers, exposes auto-record-detected-meetings, and checks for scheduled or completed cloud bots before desktop capture. Upcoming/schedule routes confirm scheduled, removed, user-unscheduled, live/in-call/waiting-room, and processing states can be separate.
- Public edits made:
  - Replaced the generic setup shell with a source-decision guide for Ergo Notetaker, Ergo Desktop Notetaker, and supported external notetakers.
  - Framed the notetaker as the source for transcripts, summaries, action items, CRM context, follow-up drafts, reporting, and AI search.
  - Added audience and ownership boundaries for standard users/admins, super admins, spectators, and teams that already use another notetaker.
  - Added prerequisites for calendar connection, choosing visible bot versus desktop versus external source, choosing a recognizable bot name, recording/consent policy review, and avoiding duplicate third-party sources.
  - Added setup sections for Ergo Notetaker, Ergo Desktop Notetaker, and supported external notetakers, with source-specific expectations and testing steps.
  - Added Ergo Notetaker steps for calendar confirmation, name, transcription language, summary email, recording/transcript access, and upcoming-meeting verification.
  - Added desktop setup steps for downloading/installing the app, granting operating-system permissions, testing one controlled meeting, and rechecking upcoming meetings after switching capture paths.
  - Added first-meeting test steps covering calendar link, upcoming-meeting visibility, waiting-room admission, desktop app state, separate output checks, and live/ad hoc manual capture.
  - Scoped expectations around separate calendar/bot/desktop/processing states, reschedules, duplicate source mixes, third-party output variance, and downstream CRM/draft/reporting setup.
  - Reframed common issues around disabled connect button, bot no-show, host denial/removal, rescheduled meetings, duplicate drafts/records, missing insights despite recording, and third-party recording-link gaps.
  - Added related links to email/calendar, Ergo Notetaker, Ergo Desktop Notetaker, upcoming meetings, schedule/cancel, Add Bot, waiting-room admission, one-bot behavior, rescheduled meetings, transcript/recording troubleshooting, and recording privacy basics.
- Internal-only or unresolved items logged separately:
  - Do not publish exact waiting-room or in-call timeout values, underlying provider names, Desktop beta/GA/platform/audio/video support, desktop auto-record reliability, exact desktop permission claims, identical automation behavior across desktop and cloud capture, deterministic duplicate capture across every source mix, exact Granola self-serve/MCP/API availability, exact third-party recording/timestamp behavior, non-sales classification rules, no-show draft behavior, concurrent-meeting limits, source-specific automation skip rules, customer-specific bot admission scripts, regulated-industry compliance examples, litigation/subpoena framing, competitor legal claims, pricing/seat-count details, or unverified exact live-dispatch/removal button labels.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/future-claim, and `git diff --check` checks after edit.

### 033 - `customer-docs/setup/user-sync.mdx`

- MCP: CLI configuration check confirmed `ergo` enabled with OAuth via `codex mcp list` and `codex mcp get ergo`; fresh in-thread Ergo MCP research answered with run ID `2c2a09af-1ff1-458f-8175-a0e9e0818a32`; thread ID `eaad2b18-b6d9-41f0-b136-5408b242a78a`.
- Page read: full frontmatter, onboarding image, body, related links, setup nav order, workspace configuration, admin sync/settings/provisioning/member-management docs, and approved repo onboarding/admin-sync/admin-push/CRM-only sync evidence checked before editing.
- Subagent context used read-only:
  - Setup scout checked this page family through CLI MCP and produced a repo-backed user-sync packet. Its nested MCP attempt did not return usable Ergo run IDs because of hidden-tool/cancellation blockers, so the public page relied on the in-thread MCP answer plus approved repo checks.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that this page should answer user-guide requests, new-seat/user-access questions, user setup after invite, notetaker no-show after provisioning, empty CRM expectations, and rollout confusion without publishing customer names, ticket details, or quotes.
  - Linear planning issues reinforced that role/permission rework, spectator automation exclusion, admin reporting visibility, owner-ID ingestion for new seats, and access/API work are active product topics; future or incomplete behavior was not published as current user-sync setup.
- Approved repo check: frontend onboarding code confirms a standard-user **Sync with Admin** step, optional onboarding sync status, admin selection, and selectable sync options. Frontend SyncOptionsModal confirms user-initiated sync options for CRM keys, properties, pipeline stages, company descriptions, meeting titles, templates, task requests, alternate domains, partnership domains, and advanced settings. Admin PushSettingsModal and TeamSyncModal confirm admins can push selected settings to one user or selected team members, with templates unchecked by default in those flows. Admin member UI confirms separate **Sync CRM** and **Sync Settings to User** actions for non-primary members. Backend `/dashboard/admin-sync` confirms user-initiated sync copies selected CRM keys, CRM properties, property permissions, pipeline stages, synced stages, pipeline descriptions, restrict-to-pipeline, company context, meeting titles, templates, task requests, advanced/context settings, alternate domains, partnership domains, HubSpot meeting search preference when applicable, and Salesforce record types when applicable. Backend `/dashboard/admin-push-to-user` confirms admin-only push to same-org users, blocks self-sync, validates target users, and copies the same broad setting families. Backend `/dashboard/sync-user-crm` confirms CRM-key-only sync from org admin to member, with owner-property checks after copied CRM keys. Backend onboarding sync-status route confirms only non-admin users can update `adminSynced`.
- Public edits made:
  - Replaced the generic setup shell with a guide that separates account/team provisioning, user-initiated Sync with Admin, admin-pushed settings, team sync, and CRM-only sync.
  - Framed user sync as copying selected admin configuration after user role, team, and access are correct.
  - Added audience boundaries for admins/super admins, standard users, RevOps/operators, and spectators.
  - Added prerequisites for org/team/role correctness, admin configuration readiness, CRM credential ownership decisions, selective sync, overwrite risk, and personal-source limitations.
  - Added provisioning steps for invite/provision, role, team, meeting/reporting access, and personal setup completion.
  - Added user-initiated Sync with Admin options, including CRM keys, CRM properties/permissions, pipeline stages, company details, meeting-title rules, templates, task settings, domains, and advanced context/CRM behavior settings.
  - Added admin push guidance for one user or selected team members and clarified that template sync should be reviewed because templates may be unchecked by default.
  - Added CRM-only sync guidance to distinguish CRM credentials from broader workspace configuration.
  - Added post-sync test workflow and expectations around overwrites, owner fields, CRM-specific record types, separate access grants, and partial team-sync outcomes.
  - Reframed common issues around missing invites, missing meeting/reporting access, newly added users whose notetaker does not join, missing drafts after sync, CRM writeback failures, empty CRM, template overwrites, wrong admin source, team moves, and missing personal sources.
  - Added related links to workspace configuration, company details, CRM setup, CRM properties, pipeline stages, templates, email/calendar, notetaker, provisioning, member management, admin sync, meeting/reporting access, roles, and permission troubleshooting.
- Internal-only or unresolved items logged separately:
  - Do not publish fixed onboarding-duration or near-instant-rollout promises, exact `/onboarding` path guidance, invitation-email behavior, user active/inactive defaults, provider login-loop debugging, claims that Sync with Admin copies every admin setting, claims that sync connects personal accounts, old outbound-branding defaults, watermark/footer controls, Gmail multiple-signature limits, fixed spectator onboarding/reporting-role claims, exact three-dot role-change controls, internal bot statuses, provider-specific admission behavior, universal kicked-bot toggle workarounds, retroactive recording import claims, support-only reruns, personal support paths, or account-specific seat/pricing details without dedicated page confirmation.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/future-claim, and `git diff --check` checks after edit.

### 034 - `customer-docs/setup/company-details.mdx`

- MCP: CLI configuration check confirmed `ergo` enabled with OAuth via `codex mcp list` and `codex mcp get ergo`; fresh in-thread Ergo MCP research answered with run ID `48799fe7-0d09-4d2a-9adf-b9f4e721487a`; thread ID `4c1aaf80-d949-4268-9702-fc360094534d`.
- Page read: full frontmatter, onboarding image, body, related links, setup nav order, workspace configuration, user sync, pricing configuration, field-mapping company-info, and approved repo company-context evidence checked before editing.
- Subagent context used read-only:
  - Setup scout checked this page family through CLI MCP and produced a repo-backed company-details packet. Its nested MCP attempt did not return a usable Ergo run ID because the nested CLI tool was not exposed, so the public page relied on the in-thread MCP answer plus approved repo checks.
- Pylon and Linear context used read-only as demand signal:
  - Pylon recent support patterns reinforced adjacent demand for clearer user guides, less generic or missing email outputs, CRM field/stage correctness, and setup clarity without publishing customer names, ticket details, or quotes.
  - Linear searches for company-details and company-context terms returned no page-specific matches, so no Linear-only product claim was published for this page.
- Approved repo check: frontend CompanyDetails code confirms a live Company Information UI for company description, three challenges addressed, and three solution overview fields, plus AI generation when available. Frontend companyDetails API confirms `/dashboard/description` read/write and `/dashboard/generate-company-info`. Backend `/dashboard/description` confirms stored description, company challenges, company solution, and a combined company-specific context string. Backend generate-company-info confirms AI-generated company information can be cached and saved from org name/domain. Frontend SyncOptionsModal and admin push/team sync code confirm company descriptions/details are selectable sync settings. Backend dashboard utilities confirm company context is formatted for field/property, stage, template, and related AI-generation prompts. Backend AI field/stage description generators, email regeneration, draft email routes, meeting chat, note chat, and Automations email-draft prompt builder confirm company context can inform field descriptions, stage descriptions, drafts/draft revisions, meeting or note answers, and email planning. Automations extraction confirms company info currently carries name, description, and company solution for draft generation.
- Public edits made:
  - Replaced the generic setup shell with a canonical company-context guide for company description, customer challenges, and solution overview.
  - Framed the page around the customer problem of generic AI outputs and clarified that company details help make drafts, CRM field descriptions, stage descriptions, meeting/note answers, and reporting context more specific.
  - Added ownership guidance for admins, super admins, RevOps, operators, founders, sales leaders, standard users reviewing synced context, and teams working with Ergo during rollout.
  - Added prerequisites for shared wording ownership, durable context, CRM/email/calendar/notetaker dependencies, Sync with Admin timing, and keeping pricing assumptions on the separate pricing configuration page.
  - Added configuration steps for reviewing company description, up to three challenges, up to three solution points, saving, and testing one workflow.
  - Added cautious AI-generation language that requires review before saving generated context.
  - Added guidance for writing durable company context without private customer names, confidential pricing, or unapproved claims.
  - Added a test workflow covering CRM field or stage descriptions, follow-up drafts or revisions, meeting/note answers, and generated-output review.
  - Scoped expectations around context influence, selected sync behavior, future generated content, dependencies on transcript/email/CRM/templates/stages/user instructions, and pricing separation.
  - Reframed common issues around generic output, outdated positioning, user/admin context mismatch, overwritten details, CRM errors, missing drafts, and unavailable/disabled setup access.
  - Added related links to workspace configuration, user sync, CRM properties, pipeline stages, pricing configuration, field-mapping company info, create/sync CRM properties, stage definitions, templates, meeting titles, reviewing AI-generated outputs, CRM sync issues, roles, and dashboard setup errors.
- Internal-only or unresolved items logged separately:
  - Do not publish exact customer positioning examples, private value-proposition language, ICP details not visible in current UI, pricing-context use in public outputs, self-serve-only ownership claims that ignore onboarding support, fixed go-live timing, guaranteed accuracy, automatic rewriting of old outputs, or broad downstream-output lists beyond code-confirmed context consumers.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/future-claim, and `git diff --check` checks after edit.

### 035 - `customer-docs/setup/meeting-title-phrases.mdx`

- MCP: CLI configuration check confirmed `ergo` enabled with OAuth via `codex mcp list` and `codex mcp get ergo`; fresh in-thread Ergo MCP research answered with run ID `21977146-46fc-4de8-a9b1-0b882d4006f2`; thread ID `67bc2a13-952f-4a77-9a08-38fafe1efa75`.
- Page read: full frontmatter, onboarding image, body, related links, setup nav order, field-mapping meeting-title AI Boost page, meeting filter/sales-only page, skip-internal meetings page, and approved repo meeting-title/classification evidence checked before editing.
- Subagent context used read-only:
  - Setup scout checked this page family through CLI MCP and produced a repo-backed meeting-title packet. Its nested MCP attempt did not return a usable Ergo run ID because it was cancelled before creating a run, so the public page relied on the in-thread MCP answer plus approved repo checks.
- Pylon and Linear context used read-only as demand signal:
  - Pylon support patterns reinforced that this page should answer why only sales/customer-facing calls produce drafts, why meeting processing or notetaker outputs can be missing, and why users need clearer guides without publishing customer names, ticket details, or quotes.
  - Linear searches for meeting-title, AI Boost, Strict Mode, and meeting-relevancy terms returned no page-specific matches, so no Linear-only product claim was published for this page.
- Approved repo check: frontend onboarding code confirms the Meeting Title Phrases step is complete only after at least one non-empty phrase is configured. Frontend MeetingTitles code confirms the UI stores phrase rows, shows Strict Mode versus AI Boost, and describes phrases as keywords/symbols/phrases that indicate relevant sales/customer meetings. Frontend fieldMapping API confirms `/dashboard/meetingTitlesAIBoost` read/write. Backend scheduling routes confirm `/dashboard/meetingTitles` read/write stores meetingTitles on the user's Dashboard. Backend customFields routes confirm `/dashboard/meetingTitlesAIBoost` read/write stores a boolean AI Boost setting. Backend Dashboard model defaults `meetingTitlesAIBoost` true, while the public page avoids publishing a fixed default because getter/UI fallback behavior can differ. Backend and frontend sync code confirms meeting titles are selectable settings for Sync with Admin, admin push, and team sync. Automations meeting qualifier code confirms Strict Mode uses case-insensitive substring matching against configured patterns and returns non-sales when no pattern is configured or matched. Automations AI Boost code confirms the qualifier uses meeting title patterns, company description/org context, notes or transcript, and classifies revenue-relevant meetings including sales, customer success, onboarding, implementation, renewals, expansions, QBRs, and troubleshooting with external prospects/customers. Backend recall and desktop processing code confirms meeting relevancy affects summary/action generation and related downstream processing. Automations draft code confirms draft email relevance is checked separately using meeting data, seller, and company info. Reporting v1 code confirms reporting rubrics can also have their own meeting-title phrase applicability, which is separate from the setup page's general Meeting Titles setting.
- Public edits made:
  - Replaced the generic setup shell with a guide explaining that meeting-title phrases help identify revenue-relevant meetings.
  - Framed the customer problem around avoiding internal/unrelated meetings while preserving downstream outputs for customer-facing work.
  - Added owner/audience guidance for admins, RevOps, operators, sales leaders, CSM leaders, standard users reviewing synced settings, and teams diagnosing missing downstream outputs.
  - Added prerequisites for calendar/source setup, company details, narrow versus broad filter decisions, common calendar naming patterns, and setting phrases before Sync with Admin/admin push.
  - Added concrete generalized phrase examples, including demos, discovery, intros, QBRs, renewals, implementation, onboarding, customer check-ins, and meeting-title delimiters.
  - Warned against overly broad phrases such as sync/weekly/team/call unless the calendar naming convention makes them safe.
  - Corrected Strict Mode wording to title-containing phrase matching rather than full-title exact matching.
  - Explained AI Boost as using configured phrases together with meeting content and company context, with AI Boost recommended for teams whose titles vary or are created by external attendees.
  - Added a controlled test workflow for one customer-facing meeting and one internal meeting.
  - Scoped expectations around classification influence, notetaker/calendar independence, downstream dependencies, transcript substance, external attendees, skip-internal settings, and selected sync behavior.
  - Reframed common issues around missed customer calls, internal meetings producing outputs, person-name-only titles, exploratory/relationship calls, short/no-show calls, admin/user mismatch, new team naming, and notetaker no-show causes.
  - Added related links to workspace configuration, company details, user sync, CRM properties, field-mapping AI Boost, sales-only meeting filter, skip internal meetings, missing insights/drafts, processing states, email/calendar, notetaker, draft logic, CRM sync, roles, and dashboard setup errors.
- Internal-only or unresolved items logged separately:
  - Do not publish customer-specific calendar naming conventions, exact classifier prompts/models/thresholds, exact real-time versus post-call timing, customer-visible override claims, claims that AI Boost catches every soft sales call, claims that title phrases alone control notetaker dispatch, or webhook title-phrase behavior as the same setting.
- Validation: passed page-level frontmatter, local link, image, internal-source-name/future-claim, and `git diff --check` checks after edit.
