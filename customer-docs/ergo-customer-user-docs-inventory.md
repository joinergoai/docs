# Ergo Customer User Docs Inventory

Generated: 2026-06-07

Scope: customer-facing Ergo user, admin, super-admin, spectator, desktop, gated, beta, and integration docs. This inventory intentionally excludes product API docs and implementation guides.

Grounding:
- Live route and shared-link coverage from `src/App.tsx`
- Navigation, role visibility, reporting access, spectator visibility, and Electron-only settings from `src/components/DashboardLayout.tsx`
- Role-specific setup flows from `src/pages/Onboarding.tsx`
- Integration coverage and gated/beta integrations from `src/components/Integrations/integrationData.ts`
- Customer-friction research from Ergo MCP CLI research on 2026-06-07, plus Slack/Pylon and Linear fallback findings when Slack app search was blocked by reauthentication

## Field Definitions

| Field | Definition |
|---|---|
| `title` | Canonical customer-facing article title |
| `category` | Docs collection or product surface |
| `audience` | `User`, `Admin`, `Super Admin`, `Spectator`, `Desktop`, or combinations |
| `access` | Live visibility or access condition such as `Live`, `Admin-only`, `Reporting access`, `Beta/Gated`, `Desktop-only`, or `Shared link` |
| `priority` | `P0` critical launch docs, `P1` high-value onboarding/support reducers, `P2` standard coverage, `P3` advanced or rare workflows |
| `feature_gate` | Feature flag, role gate, desktop gate, reporting gate, or `None` |
| `required_integration` | Integration required before the article applies |
| `status` | Backlog state for this inventory |
| `owner` | Initial owner placeholder |

## Research-Informed Priority Notes

The Ergo MCP CLI research identified the highest-friction docs as notetaker admission, rescheduled meetings, field mapping before CRM writes, roles and permissions, global meeting access, draft email logic, sales-only meeting filtering, one-bot-per-org behavior, desktop limitations, and multi-notetaker duplicate drafts. Those articles are marked `P0` or `P1` even when they are small workflows because they directly address recurring customer confusion.

Notable customer examples from the MCP research include AsyncHealth for Outlook/notetaker confusion and churn risk, Beagle for notetaker adoption and waiting-room admission, ClubHub and Bizforce for rescheduled meetings, Solidroad for waiting-room/Pylon/admin confusion, Retell for spectator provisioning and super-admin bottlenecks, Athena for draft confusion, Wispr for field mapping blocking CRM updates, Hyperspell for reporting dashboard sharing, Arcline for desktop performance and screen-recording expectations, Sphinx for duplicate drafts with another notetaker, Fluency for meeting visibility, Weave for competitor reporting setup, Rho for adoption-dashboard edge cases, and Neondeer/Rosebud for Circleback coexistence.

## Source Coverage Status

| source | access status | how it informed this plan |
|---|---|---|
| Ergo MCP CLI | Connected through `codex mcp login ergo`; research result retrieved with `get_ergo_agent_result` | Confirmed high-volume themes across meetings, drafts, desktop, CRM configuration, reporting, roles, and third-party notetaker coexistence |
| Pylon | Direct plugin available and used; issue search works when omitting the `type` filter | Added customer-conversation evidence from open and recently closed support issues, including Pylon issues sourced from Slack |
| Linear | Direct plugin available and used | Added product/support issue evidence for duplicate Pylon deliveries, Slack reconnects, stage drift, field mapping sync, rescheduled meetings, duplicate pre-call briefings, and desktop notetaker stopping |
| Slack | Direct search attempted but blocked by `401 reauthentication required` | Slack-specific findings are still represented through Ergo MCP indexed context and Pylon conversations where the issue source is Slack |
| Gmail | Direct plugin available and used as a supplemental fallback | Reinforced onboarding, CRM, meeting-summary, security/trust, and draft-delivery themes where customer email surfaced the same questions |

## Source-Informed Planning Inputs

| source evidence | customer misconception or friction | docs implication | affected or new article titles | priority |
|---|---|---|---|---|
| Pylon #1580 | A customer directly asked whether Ergo has user guides, and support said there are none today | Treat start-here docs as urgent, not polish | Welcome to Ergo; Navigating Ergo; First-time setup checklist; Getting support | P0 |
| Ergo MCP research | Customers often treat missed notetaker joins as an Ergo failure even when the host did not admit the bot, the bot was removed, or the meeting moved calendars | Separate setup, admission, reschedule, and vendor-status troubleshooting | Notetaker waiting-room admission guide; What happens when a meeting is rescheduled; Notetaker did not join | P0 |
| Pylon #1569 | Users ask how to add Ergo to an external Zoom link | Add a direct manual-dispatch workflow | Add the bot to a live or ad hoc meeting | P0 |
| Pylon #1576 | Users ask how long notetaker processing takes and why summaries, insights, or drafts are missing | Set expectations for processing states and sales-only behavior | Meeting processing time and status states; Why some meetings do not generate insights or drafts | P0 |
| Pylon #1572 and Sphinx MCP evidence | Running Ergo and another notetaker such as Granola can create duplicate drafts or confusing ownership | Document recommended coexistence setup and no-dedupe limitations | Using multiple notetakers with Ergo; Duplicate drafts from multiple notetakers | P1 |
| Pylon #1577 and ERGO-2310 | Users report the desktop/notetaker not stopping after a call ends | Add desktop stop, pause, and upload troubleshooting | Troubleshoot missed detection or upload failures; Desktop settings and updates | P0 |
| Pylon #1493 | Calendar-connected meetings can fail when Google/Microsoft scopes are missing or stale | Make scopes and reconnect steps explicit | Calendar scopes and meeting auto-join; Google/Microsoft/Slack reconnects | P0 |
| Pylon #1570 | Deal/company naming mismatches cause confusion about where HubSpot records appear | Explain CRM record matching and naming behavior | How Ergo names and matches CRM records; Deal detail; Company detail | P1 |
| Pylon #1566 and ERGO-2124 | Admins need to know which properties are automated, and sync-with-admin failures block setup | Treat field mapping as a prerequisite, not an advanced topic | CRM properties setup; Field mapping setup: required before CRM updates work; Create/sync CRM properties | P0 |
| Pylon #1486 | Customers expect newly mapped fields to backfill from historical meetings automatically | Explain backfill limits and manual alternatives | Backfill CRM fields from historical meetings; Reporting: competitors, custom fields, and backfill | P1 |
| Pylon #1484 | Customers ask where Ergo recording links appear in HubSpot and why some sources have no audio | Document HubSpot activity links and source-specific recording behavior | HubSpot meeting activities and recording links; Summary emails and recording links | P1 |
| Pylon #1553 and #1514 | Users want drafts only for sales calls, or want post-call drafts disabled entirely | Distinguish soft custom instructions, sales filters, and hard disable controls | Turn post-call drafts on or off; Draft email logic: when drafts are created and how to dismiss | P0 |
| Pylon #1470 | Teams ask who can see drafts, whether signatures pull through, and whether footers can be removed | Add team access and email-signature docs | Team access to email drafts; Email signatures and draft footers | P1 |
| Pylon #1503 | A meeting can have a recording but no transcript or notes after provider failure | Explain asset-specific failure states and retry/reporting path | Transcript or recording missing; Delete/retry processing | P0 |
| ERGO-2265 | Duplicate Pylon deliveries and weak failure logging created customer confusion | Add Pylon delivery queue and duplicate-delivery troubleshooting | Pylon delivery failures, duplicate deliveries, and queue health | P1 |
| ERGO-2342 and ERGO-2142 | Slack reconnects can fail because stale org/team mappings survive disconnects | Explain Slack reconnect, stale mapping, and channel listing issues | Slack disconnect/reconnect and stale channel mappings; Slack Enterprise Grid channel listing issues | P1 |
| ERGO-1968 | Rescheduling an active calendar event can leave meetings missing or unprocessed | Include reschedule edge cases and manual redispatch | What happens when a meeting is rescheduled; Add the bot to a live or ad hoc meeting | P0 |
| ERGO-2013 | Duplicate pre-call briefings can appear when Slack/customer-channel context is misconfigured | Add Slack pre-call context troubleshooting | Slack monitoring and pre-call context; Add Ergo to new Slack customer channels | P1 |

## Article Index

| title | category | audience | access | priority | feature_gate | required_integration | status | owner |
|---|---|---|---|---|---|---|---|---|
| Welcome to Ergo | Start and guidelines | User; Admin; Super Admin; Spectator | Live | P0 | None | None | Backlog | Docs |
| Navigating Ergo | Start and guidelines | User; Admin; Super Admin; Spectator | Live | P1 | None | None | Backlog | Docs |
| Roles and permissions | Start and guidelines | User; Admin; Super Admin; Spectator | Live | P0 | Role-based navigation; AdminRoute | None | Backlog | Docs |
| Spectator access | Start and guidelines | Spectator; Admin; Super Admin | Live | P0 | Spectator role | None | Backlog | Docs |
| Data sources and freshness | Start and guidelines | User; Admin; Super Admin | Live | P1 | None | CRM; Google Workspace or Microsoft 365; Notetaker | Backlog | Docs |
| Security, data retention, and LLM usage | Start and guidelines | User; Admin; Super Admin; Spectator | Live | P0 | None | None | Backlog | Docs |
| Reviewing AI-generated outputs | Start and guidelines | User; Admin; Super Admin | Live | P1 | None | None | Backlog | Docs |
| Prompting Ergo effectively | Start and guidelines | User; Admin; Super Admin | Live | P2 | None | None | Backlog | Docs |
| Recording/privacy basics | Start and guidelines | User; Admin; Super Admin; Spectator | Live | P0 | None | Notetaker or Desktop Notetaker | Backlog | Docs |
| Getting support | Start and guidelines | User; Admin; Super Admin; Spectator | Live | P0 | Pylon chat widget | None | Backlog | Docs |
| First-time setup checklist | Onboarding | User; Admin; Super Admin; Spectator | Live | P0 | Onboarding route | None | Backlog | Docs |
| Setup by role | Onboarding | User; Admin; Super Admin; Spectator | Live | P0 | Onboarding role flow | None | Backlog | Docs |
| Primary admin setup for founders, RevOps, and sales leaders | Onboarding | Admin; Super Admin | Live | P0 | Onboarding admin role flow | CRM; Google Workspace or Microsoft 365; Notetaker | Backlog | Docs |
| Secondary admin and operator setup | Onboarding | Admin; Super Admin | Live | P1 | Onboarding secondary admin role flow | Google Workspace or Microsoft 365; CRM; Notetaker | Backlog | Docs |
| AE setup | Onboarding | User; Admin; Super Admin | Live | P0 | Onboarding user role flow | Google Workspace or Microsoft 365; Notetaker | Backlog | Docs |
| CSM setup | Onboarding | User; Admin; Super Admin | Live | P1 | Onboarding user role flow | Google Workspace or Microsoft 365; Notetaker | Backlog | Docs |
| Spectator and viewer setup | Onboarding | Spectator; Admin; Super Admin | Live | P1 | Spectator role | None | Backlog | Docs |
| Primary admin tips for success | Onboarding | Admin; Super Admin | Live | P1 | Onboarding admin role flow | CRM; Google Workspace or Microsoft 365; Notetaker | Backlog | Docs |
| Secondary admin and operator tips for success | Onboarding | Admin; Super Admin | Live | P2 | Onboarding secondary admin role flow | Google Workspace or Microsoft 365; CRM; Notetaker | Backlog | Docs |
| AE tips for success | Onboarding | User; Admin; Super Admin | Live | P0 | Onboarding user role flow | Google Workspace or Microsoft 365; Notetaker | Backlog | Docs |
| CSM tips for success | Onboarding | User; Admin; Super Admin | Live | P1 | Onboarding user role flow | Google Workspace or Microsoft 365; Notetaker | Backlog | Docs |
| Spectator and viewer tips for success | Onboarding | Spectator; Admin; Super Admin | Live | P2 | Spectator role | None | Backlog | Docs |
| Connect your CRM | Onboarding | Admin; Super Admin | Live | P0 | Admin onboarding step | Salesforce; HubSpot; Attio; Pipedrive; Ergo CRM | Backlog | Docs |
| Connect email and calendar | Onboarding | User; Admin; Super Admin; Spectator | Live | P0 | Onboarding workspace step | Google Workspace or Microsoft 365 | Backlog | Docs |
| Workspace configuration | Onboarding | User; Admin; Super Admin | Live | P1 | Onboarding workspace_config step | Google Workspace or Microsoft 365 | Backlog | Docs |
| Email templates setup | Onboarding | User; Admin; Super Admin | Live | P1 | Onboarding templates step | Google Workspace or Microsoft 365 | Backlog | Docs |
| Collaboration tools setup | Onboarding | User; Admin; Super Admin | Live | P1 | Onboarding collaboration step | Slack; Beeper; Pylon | Backlog | Docs |
| Notetaker setup | Onboarding | User; Admin; Super Admin; Spectator | Live | P0 | Onboarding notetaker step | Ergo Notetaker; Desktop Notetaker; external notetaker | Backlog | Docs |
| User sync | Onboarding | User; Admin; Super Admin; Spectator | Live | P1 | Onboarding user_sync step | Google Workspace or Microsoft 365 | Backlog | Docs |
| Company details | Onboarding | Admin; Super Admin | Live | P2 | Onboarding company_details step | CRM | Backlog | Docs |
| Meeting title phrases | Onboarding | Admin; Super Admin | Live | P1 | Onboarding meeting_titles step | Calendar | Backlog | Docs |
| CRM properties setup | Onboarding | Admin; Super Admin | Live | P0 | Onboarding properties_config step | CRM | Backlog | Docs |
| Pipeline stages | Onboarding | Admin; Super Admin | Live | P0 | Onboarding pipeline_stages step | CRM | Backlog | Docs |
| Pricing configuration | Onboarding | Admin; Super Admin | Live | P2 | Onboarding pricing step | CRM | Backlog | Docs |
| Advanced settings | Onboarding | Admin; Super Admin | Live | P2 | Onboarding advanced_settings step | CRM | Backlog | Docs |
| Reporting defaults | Onboarding | Admin; Super Admin | Reporting access | P1 | Reporting enabled onboarding step | Reporting | Backlog | Docs |
| Salesforce | Integrations | Admin; Super Admin | Live | P0 | None | Salesforce | Backlog | Docs |
| HubSpot | Integrations | Admin; Super Admin | Live | P1 | None | HubSpot | Backlog | Docs |
| HubSpot meeting activities and recording links | Integrations | Admin; Super Admin | Live | P1 | None | HubSpot; Notetaker or Granola | Backlog | Docs |
| Attio | Integrations | Admin; Super Admin | Live | P1 | None | Attio | Backlog | Docs |
| Pipedrive | Integrations | Admin; Super Admin | Live | P1 | None | Pipedrive | Backlog | Docs |
| Ergo CRM | Integrations | Admin; Super Admin | Live | P1 | None | Ergo CRM | Backlog | Docs |
| Google Workspace | Integrations | User; Admin; Super Admin; Spectator | Live | P0 | None | Google Workspace | Backlog | Docs |
| Calendar scopes and meeting auto-join | Integrations | User; Admin; Super Admin; Spectator | Live | P0 | Expired grants | Google Workspace or Microsoft 365; Calendar | Backlog | Docs |
| Microsoft 365 | Integrations | User; Admin; Super Admin; Spectator | Live | P0 | None | Microsoft 365 | Backlog | Docs |
| Email signature | Integrations | User; Admin; Super Admin | Live | P2 | None | Google Workspace or Microsoft 365 | Backlog | Docs |
| Expired grants and reconnecting | Integrations | User; Admin; Super Admin; Spectator | Live | P0 | ExpiredGrantIndicator; ExpiredGrantBlockingScreen | Any connected integration | Backlog | Docs |
| Slack | Integrations | Admin; Super Admin | Live | P0 | None | Slack | Backlog | Docs |
| Slack monitoring and pre-call context | Integrations | User; Admin; Super Admin | Live | P1 | None | Slack | Backlog | Docs |
| Beeper | Integrations | Admin; Super Admin | Beta/Gated | P2 | ff-beeper-integration | Beeper | Backlog | Docs |
| Pylon | Integrations | Admin; Super Admin | Live | P1 | None | Pylon | Backlog | Docs |
| Ergo Notetaker | Integrations | User; Admin; Super Admin; Spectator | Live | P0 | None | Ergo Notetaker | Backlog | Docs |
| Ergo Desktop Notetaker | Integrations | User; Admin; Super Admin; Desktop | Desktop-only | P1 | Electron/Desktop app | Desktop Notetaker | Backlog | Docs |
| Gong | Integrations | Admin; Super Admin | Live | P2 | None | Gong | Backlog | Docs |
| Fireflies | Integrations | Admin; Super Admin | Live | P2 | None | Fireflies | Backlog | Docs |
| Circleback | Integrations | Admin; Super Admin | Live | P1 | None | Circleback | Backlog | Docs |
| BlueDot | Integrations | Admin; Super Admin | Live | P2 | None | BlueDot | Backlog | Docs |
| Fathom | Integrations | Admin; Super Admin | Live | P2 | None | Fathom | Backlog | Docs |
| Granola | Integrations | Admin; Super Admin | Live | P1 | None | Granola | Backlog | Docs |
| Outreach | Integrations | Admin; Super Admin | Beta/Gated | P2 | ff-outreach-dialer | Outreach | Backlog | Docs |
| Nooks | Integrations | Admin; Super Admin | Beta/Gated | P2 | ff-nooks-dialer | Nooks | Backlog | Docs |
| Salesfinity | Integrations | Admin; Super Admin | Beta/Gated | P2 | ff-salesfinity-dialer; beta | Salesfinity | Backlog | Docs |
| MCP/external agent tools | Integrations | Admin; Super Admin | Beta/Gated | P1 | External agent tooling | External agent tools | Backlog | Docs |
| Dashboard/upcoming meetings | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P1 | None | Calendar | Backlog | Docs |
| Schedule or cancel the notetaker | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P0 | None | Ergo Notetaker | Backlog | Docs |
| Notetaker waiting-room admission guide | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P0 | None | Ergo Notetaker | Backlog | Docs |
| One bot per org: shared notetaking behavior | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P1 | None | Ergo Notetaker | Backlog | Docs |
| What happens when a meeting is rescheduled | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P0 | None | Calendar; Ergo Notetaker | Backlog | Docs |
| Recurring meetings | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P1 | None | Calendar; Ergo Notetaker | Backlog | Docs |
| Add the bot to a live or ad hoc meeting | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P0 | None | Calendar; Ergo Notetaker | Backlog | Docs |
| Skip internal meetings | Meetings and notes | User; Admin; Super Admin | Live | P1 | Meeting filters | Calendar; Ergo Notetaker | Backlog | Docs |
| Meeting filter: what sales-only processing means | Meetings and notes | User; Admin; Super Admin | Live | P1 | Meeting filters | Calendar; Ergo Notetaker | Backlog | Docs |
| Meeting processing time and status states | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P0 | None | Notetaker or Desktop Notetaker | Backlog | Docs |
| Why some meetings do not generate insights or drafts | Meetings and notes | User; Admin; Super Admin | Live | P0 | Meeting filters; Drafts route | Notetaker; Google Workspace or Microsoft 365 | Backlog | Docs |
| Summary emails and recording links | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P1 | None | Google Workspace or Microsoft 365; Notetaker | Backlog | Docs |
| Recording disclaimer | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P0 | None | Notetaker or Desktop Notetaker | Backlog | Docs |
| Auto-delete meetings | Meetings and notes | Admin; Super Admin | Live | P2 | Admin meeting settings | Notetaker | Backlog | Docs |
| Meeting history and folders | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P2 | None | Notetaker | Backlog | Docs |
| Meeting availability and visibility | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P0 | Role-based access; Global meeting access | Calendar; Notetaker | Backlog | Docs |
| Meeting detail page | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P1 | None | Notetaker | Backlog | Docs |
| Video, transcript, and action items | Meetings and notes | User; Admin; Super Admin; Spectator | Live | P1 | None | Notetaker | Backlog | Docs |
| Ask AI about a meeting | Meetings and notes | User; Admin; Super Admin | Live | P2 | None | Notetaker | Backlog | Docs |
| Share/revoke/password-protect meetings | Meetings and notes | User; Admin; Super Admin | Shared link | P1 | Shared meeting routes | Notetaker | Backlog | Docs |
| Create and share clips | Meetings and notes | User; Admin; Super Admin | Shared link | P2 | Shared clip route | Notetaker | Backlog | Docs |
| Upload external recordings | Meetings and notes | User; Admin; Super Admin | Live | P2 | None | External recording | Backlog | Docs |
| Manual notes | Meetings and notes | User; Admin; Super Admin; Desktop | Live; Desktop-only variant | P1 | `/meetings/new`; Electron desktop variant | None | Backlog | Docs |
| Push notes or meetings to automations | Meetings and notes | User; Admin; Super Admin | Beta/Gated | P2 | Automations | Slack; Pylon; CRM | Backlog | Docs |
| Delete/retry processing | Meetings and notes | User; Admin; Super Admin | Live | P1 | None | Notetaker | Backlog | Docs |
| Using multiple notetakers with Ergo | Meetings and notes | User; Admin; Super Admin; Desktop | Live | P1 | None | Ergo Notetaker; external notetaker | Backlog | Docs |
| Install and sign in to Ergo Desktop | Desktop | Desktop; User; Admin; Super Admin | Desktop-only | P0 | Electron/Desktop app | Desktop app | Backlog | Docs |
| macOS permissions | Desktop | Desktop; User; Admin; Super Admin | Desktop-only | P0 | Electron/Desktop app | Desktop app | Backlog | Docs |
| Desktop onboarding checklist | Desktop | Desktop; User; Admin; Super Admin | Desktop-only | P1 | DesktopOnboardingOverlay | Desktop app | Backlog | Docs |
| Quick Note | Desktop | Desktop; User; Admin; Super Admin | Desktop-only | P1 | Electron Quick Note | Desktop app | Backlog | Docs |
| Silent desktop recording | Desktop | Desktop; User; Admin; Super Admin | Desktop-only | P1 | Electron/Desktop app | Desktop Notetaker | Backlog | Docs |
| Live transcript and mute controls | Desktop | Desktop; User; Admin; Super Admin | Desktop-only | P2 | Electron/Desktop app | Desktop Notetaker | Backlog | Docs |
| Desktop settings and updates | Desktop | Desktop; User; Admin; Super Admin | Desktop-only | P1 | `isElectron` settings route | Desktop app | Backlog | Docs |
| Desktop performance requirements and current limitations | Desktop | Desktop; User; Admin; Super Admin | Desktop-only | P1 | Electron/Desktop app | Desktop app | Backlog | Docs |
| Troubleshoot missed detection or upload failures | Desktop | Desktop; User; Admin; Super Admin | Desktop-only | P0 | Electron/Desktop app | Desktop Notetaker | Backlog | Docs |
| Deals board overview | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P1 | ff-deal-view | CRM | Backlog | Docs |
| Pipeline/view selector | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P1 | ff-deal-view | CRM | Backlog | Docs |
| Kanban and list views | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P1 | ff-deal-view | CRM | Backlog | Docs |
| Search/filter/sort deals | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P1 | ff-deal-view | CRM | Backlog | Docs |
| Custom views and Ergo View | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P1 | ff-deal-view | CRM | Backlog | Docs |
| Add/edit deals | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P1 | ff-deal-view | CRM | Backlog | Docs |
| How Ergo names and matches CRM records | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P1 | ff-deal-view | CRM; Calendar | Backlog | Docs |
| Company board | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P2 | ff-deal-view | CRM | Backlog | Docs |
| Deal detail | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P1 | ff-deal-view | CRM | Backlog | Docs |
| Company detail | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P1 | ff-deal-view | CRM | Backlog | Docs |
| Deal and account health | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P2 | ff-deal-view | CRM; Notetaker; Email | Backlog | Docs |
| AI deal/account overviews | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P2 | ff-deal-view | CRM; Notetaker; Email | Backlog | Docs |
| Activity, emails, meetings, and documents tabs | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P2 | ff-deal-view | CRM; Email; Notetaker; Docs | Backlog | Docs |
| Bulk actions | Deals and CRM workspace | Admin; Super Admin | Beta/Gated | P2 | ff-deal-view | CRM | Backlog | Docs |
| Bulk email/Slack drafts | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P1 | ff-deal-view | Google Workspace or Microsoft 365; Slack | Backlog | Docs |
| Reminders and follow-up view | Deals and CRM workspace | User; Admin; Super Admin | Beta/Gated | P1 | ff-followups-whitelist | Email; Calendar | Backlog | Docs |
| Field Mapping overview | Field mapping and CRM configuration | Admin; Super Admin; Spectator Admin | Live | P0 | Field Mapping route | CRM | Backlog | Docs |
| Field mapping setup: required before CRM updates work | Field mapping and CRM configuration | Admin; Super Admin | Live | P0 | Field Mapping route | CRM | Backlog | Docs |
| CRM properties | Field mapping and CRM configuration | Admin; Super Admin; Spectator Admin | Live | P0 | Field Mapping route | CRM | Backlog | Docs |
| Property permissions | Field mapping and CRM configuration | Admin; Super Admin | Live | P1 | Field Mapping route | CRM | Backlog | Docs |
| Create/sync CRM properties | Field mapping and CRM configuration | Admin; Super Admin | Live | P1 | Field Mapping route | CRM | Backlog | Docs |
| Pipelines | Field mapping and CRM configuration | Admin; Super Admin | Live | P1 | Field Mapping route | CRM | Backlog | Docs |
| Stage definitions and AI descriptions | Field mapping and CRM configuration | Admin; Super Admin | Live | P1 | Field Mapping route | CRM | Backlog | Docs |
| Default stages | Field mapping and CRM configuration | Admin; Super Admin | Live | P2 | Field Mapping route | CRM | Backlog | Docs |
| Reorder/delete stages | Field mapping and CRM configuration | Admin; Super Admin | Live | P2 | Field Mapping route | CRM | Backlog | Docs |
| Stage drift resolution | Field mapping and CRM configuration | Admin; Super Admin | Live | P0 | Field Mapping route | CRM | Backlog | Docs |
| Stage controls | Field mapping and CRM configuration | Admin; Super Admin | Live | P1 | Field Mapping route | CRM | Backlog | Docs |
| Restrict to pipeline | Field mapping and CRM configuration | Admin; Super Admin | Live | P2 | Field Mapping route | CRM | Backlog | Docs |
| Company info | Field mapping and CRM configuration | Admin; Super Admin | Live | P2 | Field Mapping route | CRM | Backlog | Docs |
| Alternate domains/emails | Field mapping and CRM configuration | Admin; Super Admin | Live | P2 | Field Mapping route | CRM | Backlog | Docs |
| Partnership domains | Field mapping and CRM configuration | Admin; Super Admin | Live | P3 | Field Mapping route | CRM | Backlog | Docs |
| Meeting-title AI boost | Field mapping and CRM configuration | Admin; Super Admin | Live | P1 | Field Mapping route | CRM; Calendar | Backlog | Docs |
| Advanced CRM toggles | Field mapping and CRM configuration | Admin; Super Admin | Live | P2 | Field Mapping route | CRM | Backlog | Docs |
| Deal qualification | Field mapping and CRM configuration | Admin; Super Admin | Live | P1 | Field Mapping route | CRM | Backlog | Docs |
| Backfill CRM fields from historical meetings | Field mapping and CRM configuration | Admin; Super Admin | Live | P1 | Field Mapping route | CRM; Notetaker | Backlog | Docs |
| Drafts inbox | Drafts, email, and templates | User; Admin; Super Admin | Live | P1 | Drafts route; hidden for spectators | Google Workspace or Microsoft 365 | Backlog | Docs |
| Draft tabs and queues | Drafts, email, and templates | User; Admin; Super Admin | Live | P1 | Drafts route; hidden for spectators | Google Workspace or Microsoft 365 | Backlog | Docs |
| Draft email logic: when drafts are created and how to dismiss | Drafts, email, and templates | User; Admin; Super Admin | Live | P1 | Drafts route | Google Workspace or Microsoft 365; Notetaker | Backlog | Docs |
| Turn post-call drafts on or off | Drafts, email, and templates | User; Admin; Super Admin | Live | P0 | Drafts route; Post-call instructions | Google Workspace or Microsoft 365; Notetaker | Backlog | Docs |
| Compose a new email | Drafts, email, and templates | User; Admin; Super Admin | Live | P2 | Drafts route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Review/edit AI drafts | Drafts, email, and templates | User; Admin; Super Admin | Live | P1 | Drafts route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Reprompt drafts with AI | Drafts, email, and templates | User; Admin; Super Admin | Live | P2 | Drafts route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Thread history and related threads | Drafts, email, and templates | User; Admin; Super Admin | Live | P2 | Drafts route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Send/schedule/unschedule/undo | Drafts, email, and templates | User; Admin; Super Admin | Live | P1 | Drafts route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Attachments, images, and links | Drafts, email, and templates | User; Admin; Super Admin | Live | P2 | Drafts route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Dismiss/disqualify drafts | Drafts, email, and templates | User; Admin; Super Admin | Live | P1 | Drafts route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Failed drafts retry/report | Drafts, email, and templates | User; Admin; Super Admin | Live | P0 | useFailedDraftsAlert | Google Workspace or Microsoft 365 | Backlog | Docs |
| Go Mode and bulk sending | Drafts, email, and templates | User; Admin; Super Admin | Live | P1 | Drafts route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Open tracking and sent flow | Drafts, email, and templates | User; Admin; Super Admin | Live | P2 | Drafts route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Team access to email drafts | Drafts, email, and templates | User; Admin; Super Admin | Live | P1 | Drafts route; AdminRoute | Google Workspace or Microsoft 365 | Backlog | Docs |
| Email signatures and draft footers | Drafts, email, and templates | User; Admin; Super Admin | Live | P1 | Drafts route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Templates overview | Drafts, email, and templates | User; Admin; Super Admin | Live | P1 | Templates route; hidden for spectators | Google Workspace or Microsoft 365 | Backlog | Docs |
| Create/edit templates | Drafts, email, and templates | User; Admin; Super Admin | Live | P1 | Templates route | Google Workspace or Microsoft 365 | Backlog | Docs |
| AI template builder | Drafts, email, and templates | User; Admin; Super Admin | Live | P2 | Templates route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Sent email browser | Drafts, email, and templates | User; Admin; Super Admin | Live | P2 | Drafts route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Auto-send settings | Drafts, email, and templates | Admin; Super Admin | Live | P1 | Drafts route | Google Workspace or Microsoft 365 | Backlog | Docs |
| Upload user/org Knowledge Base docs | Knowledge base and generated docs | User; Admin; Super Admin | Live | P1 | Docs route | Docs | Backlog | Docs |
| Document scopes/status/retry/delete/download | Knowledge base and generated docs | User; Admin; Super Admin | Live | P1 | Docs route | Docs | Backlog | Docs |
| Generated documents | Knowledge base and generated docs | User; Admin; Super Admin | Live | P1 | Docs route | Docs | Backlog | Docs |
| Link documents to deals | Knowledge base and generated docs | User; Admin; Super Admin | Beta/Gated | P2 | ff-deal-view | Docs; CRM | Backlog | Docs |
| Share/revoke documents | Knowledge base and generated docs | User; Admin; Super Admin | Shared link | P1 | Shared docs route | Docs | Backlog | Docs |
| Post-call custom instructions | Knowledge base and generated docs | Admin; Super Admin | Live | P1 | Post-call instructions | Notetaker | Backlog | Docs |
| Team/user post-call instructions | Knowledge base and generated docs | Admin; Super Admin | Live | P1 | Post-call instructions | Notetaker | Backlog | Docs |
| Post-call reference docs and summaries | Knowledge base and generated docs | User; Admin; Super Admin | Live | P2 | Docs route | Docs; Notetaker | Backlog | Docs |
| Chat with Ergo | Ergo AI, search, and automation | User; Admin; Super Admin | Beta/Gated | P1 | ff-new-chat | None | Backlog | Docs |
| Understanding sources/actions in chat | Ergo AI, search, and automation | User; Admin; Super Admin | Beta/Gated | P1 | ff-new-chat | None | Backlog | Docs |
| Floating agent panel | Ergo AI, search, and automation | User; Admin; Super Admin | Beta/Gated | P2 | ff-new-chat | None | Backlog | Docs |
| Using deal and meeting context | Ergo AI, search, and automation | User; Admin; Super Admin | Beta/Gated | P1 | ff-new-chat; ff-deal-view | CRM; Notetaker | Backlog | Docs |
| Scheduled agent runs | Ergo AI, search, and automation | User; Admin; Super Admin | Beta/Gated | P1 | SCHEDULED_AGENT_RUNS_FEATURE_FLAG | None | Backlog | Docs |
| Email/Slack delivery for scheduled runs | Ergo AI, search, and automation | User; Admin; Super Admin | Beta/Gated | P1 | SCHEDULED_AGENT_RUNS_FEATURE_FLAG | Google Workspace or Microsoft 365; Slack | Backlog | Docs |
| Scheduled run history and health | Ergo AI, search, and automation | User; Admin; Super Admin | Beta/Gated | P2 | SCHEDULED_AGENT_RUNS_FEATURE_FLAG | None | Backlog | Docs |
| Search across meetings, emails, and documents | Ergo AI, search, and automation | User; Admin; Super Admin | Beta/Gated | P1 | ff-rag-search | Notetaker; Email; Docs | Backlog | Docs |
| Search filters/modes/results | Ergo AI, search, and automation | User; Admin; Super Admin | Beta/Gated | P1 | ff-rag-search | Notetaker; Email; Docs | Backlog | Docs |
| Follow-ups panel | Ergo AI, search, and automation | User; Admin; Super Admin | Beta/Gated | P1 | ff-followups-whitelist | Email; Calendar | Backlog | Docs |
| Reporting overview | Reporting | User; Admin; Super Admin | Reporting access | P1 | ReportingProtectedRoute | Reporting | Backlog | Docs |
| Default dashboards | Reporting | User; Admin; Super Admin | Reporting access | P1 | ReportingProtectedRoute | Reporting | Backlog | Docs |
| Create/edit reports | Reporting | Admin; Super Admin | Reporting access | P1 | ReportingProtectedRoute | Reporting | Backlog | Docs |
| Chart builder | Reporting | Admin; Super Admin | Reporting access | P1 | ReportingProtectedRoute | Reporting | Backlog | Docs |
| Filters, time ranges, and drilldowns | Reporting | User; Admin; Super Admin | Reporting access | P1 | ReportingProtectedRoute | Reporting | Backlog | Docs |
| Save widgets to dashboards | Reporting | Admin; Super Admin | Reporting access | P1 | ReportingProtectedRoute | Reporting | Backlog | Docs |
| Share charts/dashboards | Reporting | User; Admin; Super Admin | Shared link; Reporting access | P1 | Reporting shared routes | Reporting | Backlog | Docs |
| Reporting dashboard sharing and embedding troubleshooting | Reporting | User; Admin; Super Admin | Shared link; Reporting access | P1 | Reporting shared routes | Reporting | Backlog | Docs |
| Custom reporting fields | Reporting | Admin; Super Admin | Reporting access | P1 | ReportingProtectedRoute | Reporting | Backlog | Docs |
| Picklist and numerical buckets | Reporting | Admin; Super Admin | Reporting access | P2 | ReportingProtectedRoute | Reporting | Backlog | Docs |
| Call grading rubrics | Reporting | Admin; Super Admin | Reporting access | P2 | ReportingProtectedRoute | Reporting | Backlog | Docs |
| Reporting: competitors, custom fields, and backfill | Reporting | Admin; Super Admin | Reporting access | P1 | ReportingProtectedRoute | Reporting | Backlog | Docs |
| Reporting email cadences | Reporting | Admin; Super Admin | Reporting access | P1 | ReportingProtectedRoute | Reporting; Email | Backlog | Docs |
| Preview/run history | Reporting | Admin; Super Admin | Reporting access | P2 | ReportingProtectedRoute | Reporting; Email | Backlog | Docs |
| Notetaker adoption dashboard: reading edge cases | Reporting | Admin; Super Admin | Reporting access | P1 | ReportingProtectedRoute | Reporting; Notetaker | Backlog | Docs |
| Cross-org analytics | Reporting | Super Admin | Beta/Gated | P3 | devOnlyLazy CrossOrgAnalytics | Reporting | Backlog | Docs |
| Admin dashboard overview | Admin | Admin; Super Admin | Admin-only | P1 | AdminRoute | None | Backlog | Docs |
| Organization and team hierarchy | Admin | Admin; Super Admin | Admin-only | P1 | AdminRoute | None | Backlog | Docs |
| Create/edit/delete teams | Admin | Admin; Super Admin | Admin-only | P1 | AdminRoute | None | Backlog | Docs |
| Provision accounts | Admin | Admin; Super Admin | Admin-only | P1 | AdminRoute | None | Backlog | Docs |
| Add/remove/move members | Admin | Admin; Super Admin | Admin-only | P1 | AdminRoute | None | Backlog | Docs |
| Promote/demote/convert roles | Admin | Admin; Super Admin | Admin-only | P0 | AdminRoute | None | Backlog | Docs |
| Spectator management | Admin | Admin; Super Admin | Admin-only | P0 | AdminRoute; Spectator role | None | Backlog | Docs |
| Grant meeting/reporting access | Admin | Admin; Super Admin | Admin-only | P0 | AdminRoute; ReportingProtectedRoute | Reporting | Backlog | Docs |
| Sync CRM/settings to team members | Admin | Admin; Super Admin | Admin-only | P1 | AdminRoute | CRM | Backlog | Docs |
| Global meeting access | Admin | Admin; Super Admin | Admin-only | P0 | AdminRoute | Notetaker | Backlog | Docs |
| Default meeting summary settings | Admin | Admin; Super Admin | Admin-only | P1 | AdminRoute | Notetaker | Backlog | Docs |
| Recording disclaimer defaults | Admin | Admin; Super Admin | Admin-only | P1 | AdminRoute | Notetaker | Backlog | Docs |
| Agent persona | Admin | Admin; Super Admin | Admin-only | P2 | AdminRoute | None | Backlog | Docs |
| Ergo enabled/status | Admin | Admin; Super Admin | Admin-only | P1 | AdminRoute | None | Backlog | Docs |
| Agent usage and billing | Admin | Admin; Super Admin | Admin-only | P2 | AdminRoute | None | Backlog | Docs |
| Impersonation | Admin | Super Admin | Admin-only | P3 | ImpersonationBanner | None | Backlog | Docs |
| Sign-in and desktop callback issues | Troubleshooting | User; Admin; Super Admin; Spectator; Desktop | Live; Desktop-only variant | P1 | WorkOS auth; DesktopAuthCallback | None | Backlog | Docs |
| Dashboard setup errors | Troubleshooting | User; Admin; Super Admin; Spectator | Live | P1 | None | None | Backlog | Docs |
| CRM sync issues | Troubleshooting | Admin; Super Admin | Live | P0 | Field Mapping route | CRM | Backlog | Docs |
| Stage drift conflicts | Troubleshooting | Admin; Super Admin | Live | P0 | Field Mapping route | CRM | Backlog | Docs |
| Google/Microsoft/Slack reconnects | Troubleshooting | User; Admin; Super Admin; Spectator | Live | P0 | Expired grants | Google Workspace; Microsoft 365; Slack | Backlog | Docs |
| Slack Enterprise Grid channel listing issues | Troubleshooting | Admin; Super Admin | Live | P1 | None | Slack | Backlog | Docs |
| Slack disconnect/reconnect and stale channel mappings | Troubleshooting | Admin; Super Admin | Live | P1 | None | Slack | Backlog | Docs |
| Add Ergo to new Slack customer channels | Troubleshooting | Admin; Super Admin | Live | P1 | None | Slack | Backlog | Docs |
| Pylon delivery failures, duplicate deliveries, and queue health | Troubleshooting | Admin; Super Admin | Live | P1 | None | Pylon | Backlog | Docs |
| Notetaker did not join | Troubleshooting | User; Admin; Super Admin; Spectator | Live | P0 | None | Ergo Notetaker | Backlog | Docs |
| Transcript or recording missing | Troubleshooting | User; Admin; Super Admin; Spectator | Live | P0 | None | Notetaker or Desktop Notetaker | Backlog | Docs |
| Duplicate drafts from multiple notetakers | Troubleshooting | User; Admin; Super Admin; Desktop | Live | P1 | None | Ergo Notetaker; Desktop Notetaker; external notetaker | Backlog | Docs |
| Draft send failures | Troubleshooting | User; Admin; Super Admin | Live | P0 | useFailedDraftsAlert | Google Workspace or Microsoft 365 | Backlog | Docs |
| Search/reporting has no results | Troubleshooting | User; Admin; Super Admin | Beta/Gated; Reporting access | P1 | ff-rag-search; ReportingProtectedRoute | Search sources; Reporting | Backlog | Docs |
| Permission or access denied | Troubleshooting | User; Admin; Super Admin; Spectator | Live | P0 | Role-based access; AdminRoute; ReportingProtectedRoute | None | Backlog | Docs |

## Coverage Checklist

- Customer-visible routes: covered for dashboard, onboarding, meetings, shared meeting links, shared clips, manual notes, authenticated notes, integrations, deals, field mapping, activities, templates, reporting, chart builder, shared reporting, scheduled agent runs, chat, authenticated/shared docs, search, follow-ups, admin, and Electron-only settings.
- Role coverage: `User`, `Admin`, `Super Admin`, and `Spectator` are represented across setup, core use, access management, and troubleshooting.
- Gated and beta coverage: `ff-deal-view`, `ff-new-chat`, `ff-rag-search`, `ff-followups-whitelist`, `SCHEDULED_AGENT_RUNS_FEATURE_FLAG`, `ff-beeper-integration`, `ff-outreach-dialer`, `ff-nooks-dialer`, `ff-salesfinity-dialer`, reporting access, dev-only cross-org analytics, and Electron-only settings are tagged.
- Integration coverage: Salesforce, HubSpot, Attio, Pipedrive, Ergo CRM, Google Workspace, Microsoft 365, Slack, Beeper, Pylon, Ergo Notetaker, Ergo Desktop Notetaker, Gong, Fireflies, Circleback, BlueDot, Fathom, Granola, Outreach, Nooks, Salesfinity, and external agent tools are included.
- Customer-friction coverage: the highest-confidence Ergo MCP, Pylon, Linear, and supplemental Gmail research themes are explicitly represented as `P0` or `P1` docs.
- Pylon coverage: direct customer asks are represented for missing guides, external meeting links, processing time, meeting visibility, duplicate drafts, draft disablement, signatures/footers, HubSpot matching, calendar scopes, transcript failures, CRM property changes, and historical backfills.
- Linear coverage: product/support issues are represented for rescheduled meetings, duplicate Pylon deliveries, Slack reconnect/stale mappings, field mapping sync failures, duplicate pre-call briefings, and desktop notetaker stopping.
- Slack coverage: direct Slack app search is blocked by reauthentication, so Slack-specific customer themes are covered through Ergo MCP indexed Slack context and Pylon issues sourced from Slack.
