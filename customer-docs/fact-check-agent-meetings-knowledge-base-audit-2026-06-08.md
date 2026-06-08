# Meetings and knowledge-base fact-check audit - 2026-06-08

Worker scope: `customer-docs/meetings/**/*.mdx` and `customer-docs/knowledge-base/**/*.mdx`.

## MCP and connector status

- CLI preflight from docs repo: `/Applications/Codex.app/Contents/Resources/codex mcp list` showed `ergo` enabled over `https://api.joinergo.com/api/mcp`; `/Applications/Codex.app/Contents/Resources/codex mcp get ergo` showed enabled OAuth streamable HTTP config.
- Ergo MCP meeting run: `runId=5b400e17-bf1b-4b96-8e81-da586213d46a`, `threadId=59a90172-cfa0-4d98-8f72-517e7b9a029a`, final status `answered`.
- Ergo MCP knowledge-base run: `runId=38de8826-817c-4ece-a5c3-064740b99a16`, `threadId=64ef6e9b-020d-4268-946f-cec41f1386e2`, final status `answered`.
- Pylon tools were exposed, but available read-only tools did not include a general issue search; no customer-specific Pylon content was used.
- Linear was queried read-only for generalized demand signals. Signal used only at generalized level: recurring meetings, add-new-meeting validation, duplicate capture sources, post-call gating, desktop notetaker friction, and knowledge-base S3/storage work. No issue IDs or private details were added to public docs.

## Approved repo evidence used

- `Ergo-Dashboard-Frontend/src/components/UpcomingMeetings/UpcomingMeetings.tsx`
- `Ergo-Dashboard-Frontend/src/components/UpcomingMeetings/MeetingCard.tsx`
- `Ergo-Dashboard-Frontend/src/hooks/useUpcomingMeetings.ts`
- `Ergo-Dashboard-Frontend/src/api/notetaker.ts`
- `Ergo-Dashboard-Frontend/src/components/UpcomingMeetings/CalendarSettingsMenu.tsx`
- `Ergo-Dashboard-Frontend/src/components/Meetings/MeetingDetail.tsx`
- `Ergo-Dashboard-Frontend/src/components/Meetings/MeetingCard.tsx`
- `Ergo-Dashboard-Frontend/src/components/Meetings/ShareMeetingButton.tsx`
- `Ergo-Dashboard-Frontend/src/components/Meetings/ClipShareButton.tsx`
- `Ergo-Dashboard-Frontend/src/components/ManualMeeting/*`
- `Ergo-Dashboard-Frontend/src/api/documents.ts`
- `Ergo-Dashboard-Frontend/src/api/docs/api.ts`
- `Ergo-Dashboard-Frontend/src/api/docs/types.ts`
- `Ergo-Dashboard-Frontend/src/components/DocumentUpload/*`
- `Ergo-Dashboard-Frontend/src/components/PostCall/*`
- `Ergo-Dashboard-Frontend/src/api/postCallConfig/*`
- `Ergo-Dashboard-Backend/src/routes/calendar/events.js`
- `Ergo-Dashboard-Backend/src/routes/dashboard/notetaker.js`
- `Ergo-Dashboard-Backend/src/routes/dashboard/meetings.js`
- `Ergo-Dashboard-Backend/src/routes/dashboard/clips/router.ts`
- `Ergo-Dashboard-Backend/src/services/clips/service.ts`
- `Ergo-Dashboard-Backend/src/models/NotetakerMeeting.js`
- `Ergo-Dashboard-Backend/src/models/MeetingNote.js`
- `Ergo-Dashboard-Backend/src/models/UserDocument.js`
- `Ergo-Dashboard-Backend/src/routes/dashboard/documents/router.js`
- `Ergo-Dashboard-Backend/src/services/user-documents/uploadService.js`
- `Ergo-Dashboard-Backend/src/workers/customMeetingUploadWorker.js`
- `Ergo-Dashboard-Backend/src/timeBasedDeletionCron.js`

## Pages completed

Meetings:

- `customer-docs/meetings/index.mdx`
- `customer-docs/meetings/dashboard-upcoming-meetings.mdx`
- `customer-docs/meetings/schedule-or-cancel-the-notetaker.mdx`
- `customer-docs/meetings/notetaker-waiting-room-admission-guide.mdx`
- `customer-docs/meetings/one-bot-per-org-shared-notetaking-behavior.mdx`
- `customer-docs/meetings/what-happens-when-a-meeting-is-rescheduled.mdx`
- `customer-docs/meetings/recurring-meetings.mdx`
- `customer-docs/meetings/add-the-bot-to-a-live-or-ad-hoc-meeting.mdx`
- `customer-docs/meetings/skip-internal-meetings.mdx`
- `customer-docs/meetings/meeting-filter-what-sales-only-processing-means.mdx`
- `customer-docs/meetings/meeting-processing-time-and-status-states.mdx`
- `customer-docs/meetings/why-some-meetings-do-not-generate-insights-or-drafts.mdx`
- `customer-docs/meetings/summary-emails-and-recording-links.mdx`
- `customer-docs/meetings/recording-disclaimer.mdx`
- `customer-docs/meetings/auto-delete-meetings.mdx`
- `customer-docs/meetings/meeting-history-and-folders.mdx`
- `customer-docs/meetings/meeting-availability-and-visibility.mdx`
- `customer-docs/meetings/meeting-detail-page.mdx`
- `customer-docs/meetings/video-transcript-and-action-items.mdx`
- `customer-docs/meetings/ask-ai-about-a-meeting.mdx`
- `customer-docs/meetings/share-revoke-password-protect-meetings.mdx`
- `customer-docs/meetings/create-and-share-clips.mdx`
- `customer-docs/meetings/upload-external-recordings.mdx`
- `customer-docs/meetings/manual-notes.mdx`
- `customer-docs/meetings/push-notes-or-meetings-to-automations.mdx`
- `customer-docs/meetings/delete-retry-processing.mdx`
- `customer-docs/meetings/using-multiple-notetakers-with-ergo.mdx`

Knowledge base:

- `customer-docs/knowledge-base/index.mdx`
- `customer-docs/knowledge-base/upload-user-org-knowledge-base-docs.mdx`
- `customer-docs/knowledge-base/document-scopes-status-retry-delete-download.mdx`
- `customer-docs/knowledge-base/generated-documents.mdx`
- `customer-docs/knowledge-base/link-documents-to-deals.mdx`
- `customer-docs/knowledge-base/share-revoke-documents.mdx`
- `customer-docs/knowledge-base/post-call-custom-instructions.mdx`
- `customer-docs/knowledge-base/team-user-post-call-instructions.mdx`
- `customer-docs/knowledge-base/post-call-reference-docs-and-summaries.mdx`

## Major corrections and consolidations

- Replaced template filler with action-oriented pages that separate calendar state, notetaker schedule, live bot state, recording/transcript state, processing state, draft/reporting state, and visibility/share state.
- Narrowed "automatic" notetaker language: calendar events, notetaker schedule, and live bot status are separate and can update at different times.
- Added recurring-meeting nuance for one occurrence vs future series and user-unscheduled markers.
- Added waiting-room and remove-bot state language grounded in frontend bot status handling.
- Clarified duplicate capture risks when Ergo and other notetakers or uploads/manual notes represent the same call.
- Clarified meeting visibility vs shared links, including private meeting behavior and password-protected shared links.
- Added auto-delete as super-admin time-based deletion with configurable retention, without promising exact deletion timing.
- Corrected knowledge-base upload details to the checked backend allowlist: PDF, DOCX, DOC, TXT, MD, 25 MB max, statuses `pending`, `indexed`, `failed`.
- Clarified that retry uses stored extracted text and is only for failed indexed documents.
- Clarified generated documents as separate from uploaded knowledge base documents.
- Clarified generated-document share/revoke and deal-linking behavior without claiming uploaded KB files are structured deal attachments.
- Clarified post-call reference docs, summary states, and instruction layering.

## Validation

- Frontmatter, local links, and image paths checked with a Node validation script over `customer-docs/meetings` and `customer-docs/knowledge-base`: `VALIDATION_OK`.
- Private/customer-source scan over assigned pages found no matches for ticket IDs, connector names, private names, or future-roadmap phrasing.
- `git diff --check -- customer-docs/meetings customer-docs/knowledge-base customer-docs/fact-check-agent-meetings-knowledge-base-audit-2026-06-08.md customer-docs/fact-check-agent-meetings-knowledge-base-unverified-2026-06-08.md` passed with no output.
- Image paths referenced by assigned pages exist.

## Pages not completed

- None in assigned scope.

## Supplemental page-level MCP audit

This section supersedes the earlier category-level MCP limitation for the supplemental pass. Each assigned page was checked in docs.json order after the public rewrites.

### Supplemental preflight and connectors

- CLI preflight was run from the docs repo for every assigned page: `/Applications/Codex.app/Contents/Resources/codex mcp list` and `/Applications/Codex.app/Contents/Resources/codex mcp get ergo`. Result for all pages: `list=ok`, `get=ok`.
- In-thread Ergo MCP was exposed via `ask_ergo_agent` and `get_ergo_agent_result`; every page below has a fresh page-specific run.
- Pylon read-only tools were exposed, including issue search, but the exposed issue-search schema did not include a free-text keyword query. It was not useful for page-specific topic lookup; no Pylon data was used.
- Linear was used read-only for generalized planning/customer-demand signal. No issue IDs, private details, customer names, or quotes were published.

### Supplemental page results

| Page | Ergo MCP run/thread/status | Result |
| --- | --- | --- |
| `customer-docs/meetings/index.mdx` | `runId=26da01d3-a262-401d-94c9-963fc5a097ea`; `threadId=7cc7e7bd-fb2d-46eb-8594-cab05770fbbb`; `answered` | Section index already pointed to the right concepts. No patch. |
| `customer-docs/meetings/dashboard-upcoming-meetings.mdx` | `runId=cea2843a-5064-4ff6-9676-8bbaa0c1539f`; `threadId=988f2030-f8b8-45b4-9f43-18ded1facafd`; `answered` | MCP flagged status/default nuances; code confirmed current selected-calendar and visible bot statuses. No supplemental patch. |
| `customer-docs/meetings/schedule-or-cancel-the-notetaker.mdx` | `runId=024df302-7e2a-4b7f-b4e4-2390e3c42c69`; `threadId=a5efdaec-1d37-4a7f-8223-f089807accd1`; `answered` | Patched fallback language for failed redispatch and safer dashboard removal. |
| `customer-docs/meetings/notetaker-waiting-room-admission-guide.mdx` | `runId=9ecda1b0-b419-4cda-905d-545de825e883`; `threadId=a4dcdd50-f4c1-402c-aba9-a70dbdd69c38`; `answered` | Patched Add Bot fallback and softened timeout/reschedule wording without exact unsupported timing. |
| `customer-docs/meetings/one-bot-per-org-shared-notetaking-behavior.mdx` | `runId=4ffe0a1d-b60a-4705-aa28-a128731ffb6c`; `threadId=0b6784f2-7824-4662-8bd1-350e6534ae90`; `answered` | Patched from "should avoid" to one-notetaker-per-org behavior and separated duplicate capture-source risk. |
| `customer-docs/meetings/what-happens-when-a-meeting-is-rescheduled.mdx` | `runId=9c4437b0-95fd-438c-9ea0-bb6432794c64`; `threadId=33090ab2-e1b3-4c1e-ae9a-d98d831e3b36`; `answered` | Patched calendar-sync timing, close-to-start fallback, and live-call rebooking caveat. |
| `customer-docs/meetings/recurring-meetings.mdx` | `runId=eab1056c-f6d2-4338-8e2c-11b34cff81ab`; `threadId=df6340f0-18fc-4344-aa77-609133ad11f4`; `answered` | MCP could not verify this-only/all-future, but approved backend code confirms recurring actions. No patch. |
| `customer-docs/meetings/add-the-bot-to-a-live-or-ad-hoc-meeting.mdx` | `runId=435938cf-17f7-4dc6-bd08-47bc3cb740aa`; `threadId=887c602a-a88f-4054-9b79-23428a80bcd7`; `answered` | Current page already scoped to Zoom/Meet/Teams links, host admission, and ad hoc capture. No patch. |
| `customer-docs/meetings/skip-internal-meetings.mdx` | `runId=4129b58d-8ecb-4159-94e2-d1014d95a064`; `threadId=ede96ccf-cba4-4a66-b0f9-9f429a271fea`; `answered` | Patched domain-based internal detection and generic/missing-attendee caveat. |
| `customer-docs/meetings/meeting-filter-what-sales-only-processing-means.mdx` | `runId=de18f0cb-e282-4f20-aec8-ce7df8a4f6af`; `threadId=77cbf28f-c128-44fe-bcf6-1523edd8a417`; `answered` | Patched to keep filter separate from bot scheduling/removal and transcript availability. |
| `customer-docs/meetings/meeting-processing-time-and-status-states.mdx` | `runId=862fc144-b17c-4ed2-80c0-7880a5c0e4f0`; `threadId=d2064929-5731-4343-a77e-3cc01eb1578b`; `answered` | Current page already separates output states and avoids exact timing. No patch. |
| `customer-docs/meetings/why-some-meetings-do-not-generate-insights-or-drafts.mdx` | `runId=f7741743-09ae-4a21-b51e-a4a5757d6968`; `threadId=18fcfb1c-a660-4d9b-b902-1a439039a93c`; `answered` | Patched to clarify filtered meetings can still have summaries/transcripts while sales outputs are suppressed. |
| `customer-docs/meetings/summary-emails-and-recording-links.mdx` | `runId=2abb4028-156d-4f4b-98b8-a8206130d4af`; `threadId=c81baab6-27ea-42ed-b8d8-d97c056537de`; `answered` | Current page avoids fixed defaults and separates email settings from share access. No patch. |
| `customer-docs/meetings/recording-disclaimer.mdx` | `runId=d3905c2b-b441-49ca-bfe6-2abe216f827d`; `threadId=bfe95609-dbae-4410-b975-22f67ea02d29`; `answered` | Patched to describe a fixed notice and clarify it does not collect attendee acknowledgment. |
| `customer-docs/meetings/auto-delete-meetings.mdx` | `runId=fd9c440f-e319-4b01-8576-65e3504400ce`; `threadId=68536027-c9eb-4a34-a2aa-f2faff7d4e37`; `answered` | MCP appeared stale; approved frontend/backend/cron code confirms time-based deletion. No patch. |
| `customer-docs/meetings/meeting-history-and-folders.mdx` | `runId=bf859c69-ff55-48bd-8df3-547550e9bc46`; `threadId=4c2755e9-e3ca-43a9-a405-3af69d1a9cca`; `answered` | Patched to avoid treating private folders as an access-control construct. |
| `customer-docs/meetings/meeting-availability-and-visibility.mdx` | `runId=53c07fe5-1c3e-46d9-9941-0e294b7a6d0b`; `threadId=034ef7b9-f858-4c0f-8a8f-1c4d446de54c`; `answered` | Current page already separates internal visibility, sharing, privacy, and access failures. No patch. |
| `customer-docs/meetings/meeting-detail-page.mdx` | `runId=726741ca-d711-4321-ae37-aab306a29733`; `threadId=ab87c324-ed9b-4b20-84f9-27f36c7852be`; `answered` | Current page remains high-level and avoids language/timing/default overclaims. No patch. |
| `customer-docs/meetings/video-transcript-and-action-items.mdx` | `runId=652039d9-16c8-4a12-8ecc-0a491b5db5e6`; `threadId=874cbb68-fa1c-42af-aa85-430c4e5fe4e7`; `answered` | Current page already separates video, transcript, and action-item readiness. No patch. |
| `customer-docs/meetings/ask-ai-about-a-meeting.mdx` | `runId=fb1114a5-ba41-429d-8a7f-a0643bbafc75`; `threadId=637df4f2-61f7-4403-b30b-7debfedb3c65`; `answered` | Patched Ask AI scope to include available linked context while not replacing global search/reporting. |
| `customer-docs/meetings/share-revoke-password-protect-meetings.mdx` | `runId=ae44f664-2e99-45ff-a7e0-c940df42e579`; `threadId=716cfcd3-804e-4df3-a8d9-5acba0b3960e`; `answered` | MCP was incomplete on revoke/email verification; approved code confirms unshare and shared auth flows. No patch. |
| `customer-docs/meetings/create-and-share-clips.mdx` | `runId=7e058d54-fe5e-41a2-8748-f3be4f1a3558`; `threadId=0a74ea3b-5dac-4504-b3de-d675f5d2e5a8`; `answered` | Approved code confirms clip share/unshare. Current page avoids duration/download/agent-clip overclaims. No patch. |
| `customer-docs/meetings/upload-external-recordings.mdx` | `runId=7b9d1030-dd64-43bc-a795-c8a3f76b8e35`; `threadId=f5443ce4-6041-4fa0-8dcf-34a8423589a7`; `answered` | Patched attribution/context caveat for attendees, calendar, CRM, and deal context. |
| `customer-docs/meetings/manual-notes.mdx` | `runId=020313dc-1e86-4205-97c2-3bc823e917f4`; `threadId=7e93e4ab-910d-4647-af8b-b80dfd1483db`; `answered` | Current page avoids claiming all manual/ad hoc notes lack recording. No patch. |
| `customer-docs/meetings/push-notes-or-meetings-to-automations.mdx` | `runId=0280df52-66fc-4403-b9e0-499c76766f1c`; `threadId=8add1baa-ea8b-4068-a6b6-6ae0ede75833`; `answered` | Patched attendee-context and few-minutes processing caveats. |
| `customer-docs/meetings/delete-retry-processing.mdx` | `runId=35162891-5e2f-4052-ab30-88c9b3eb4c41`; `threadId=2a1cf95c-c467-457d-bb0e-5750292a5ef3`; `answered` | Patched retry-vs-live-bot and delete-vs-CRM-undo distinctions. |
| `customer-docs/meetings/using-multiple-notetakers-with-ergo.mdx` | `runId=1873692c-b85c-4730-8ba4-437a46153a85`; `threadId=e8f8cfa4-97df-474e-bb61-c3b8b649f990`; `answered` | Current page already frames duplicate risk by capture source. No patch. |
| `customer-docs/knowledge-base/index.mdx` | `runId=55321c84-c330-4179-998c-a7c07fc8b4f4`; `threadId=747fd0f7-b48b-4e59-9627-3ed78c8a6fe4`; `answered` | Index remains high-level and route-preserving. No patch. |
| `customer-docs/knowledge-base/upload-user-org-knowledge-base-docs.mdx` | `runId=d194217b-079d-4b75-b0f1-03eb5af34a86`; `threadId=724b547c-61d1-4db3-977d-6c41e83b877c`; `answered` | Approved upload route confirms current file/status details; scope remains softened. No patch. |
| `customer-docs/knowledge-base/document-scopes-status-retry-delete-download.mdx` | `runId=fb6b0f02-925a-43e2-88b3-a3581f64b863`; `threadId=a0cd7132-1af5-4a89-81fa-7165bfa24f94`; `answered` | Approved document upload service confirms retry/delete/download behavior. No patch. |
| `customer-docs/knowledge-base/generated-documents.mdx` | `runId=bad61df7-27a9-42ac-b75c-654a755f348a`; `threadId=6dd7971e-bf4f-4e9d-9847-564a5fbcb659`; `answered` | Current page distinguishes generated documents from uploaded KB files. No patch. |
| `customer-docs/knowledge-base/link-documents-to-deals.mdx` | `runId=9d074bbd-d29b-44df-b97f-91351a45c818`; `threadId=d3a4c584-a02e-4b4d-8781-caee473081a9`; `answered` | Current page already limits deal linking to generated documents and avoids arbitrary upload-to-deal claims. No patch. |
| `customer-docs/knowledge-base/share-revoke-documents.mdx` | `runId=66b5201f-575e-45ff-ba29-28bf2317d7e6`; `threadId=b22aa596-39af-4576-a049-ea29d71fc21c`; `answered` | MCP did not find revoke evidence, but approved frontend docs API confirms `shareDoc` and `revokeShare`. No patch. |
| `customer-docs/knowledge-base/post-call-custom-instructions.mdx` | `runId=39e5ad43-17dc-492c-a715-8f89dc337ee3`; `threadId=495b2b11-d486-48f7-a0ed-329ca6df44d6`; `answered` | MCP was stale on team/org scope; approved frontend PostCall config supports org/team/user layers. No patch. |
| `customer-docs/knowledge-base/team-user-post-call-instructions.mdx` | `runId=be53af6b-b052-41bb-abf4-ed1d02ee9abd`; `threadId=90a537fa-2cdd-4eed-8753-a38042754db2`; `answered` | Approved frontend PostCall section confirms team/user surfaces and autosave behavior. No patch. |
| `customer-docs/knowledge-base/post-call-reference-docs-and-summaries.mdx` | `runId=09cc0472-b31a-4b96-b13c-dd14fe904ccc`; `threadId=b01c1bee-5da5-4563-83e6-0f239de7f3d1`; `answered` | Current page says docs are context and not a replacement for review. No patch. |

### Supplemental patches

- `customer-docs/meetings/schedule-or-cancel-the-notetaker.mdx`
- `customer-docs/meetings/notetaker-waiting-room-admission-guide.mdx`
- `customer-docs/meetings/one-bot-per-org-shared-notetaking-behavior.mdx`
- `customer-docs/meetings/what-happens-when-a-meeting-is-rescheduled.mdx`
- `customer-docs/meetings/skip-internal-meetings.mdx`
- `customer-docs/meetings/meeting-filter-what-sales-only-processing-means.mdx`
- `customer-docs/meetings/why-some-meetings-do-not-generate-insights-or-drafts.mdx`
- `customer-docs/meetings/recording-disclaimer.mdx`
- `customer-docs/meetings/meeting-history-and-folders.mdx`
- `customer-docs/meetings/ask-ai-about-a-meeting.mdx`
- `customer-docs/meetings/upload-external-recordings.mdx`
- `customer-docs/meetings/push-notes-or-meetings-to-automations.mdx`
- `customer-docs/meetings/delete-retry-processing.mdx`
