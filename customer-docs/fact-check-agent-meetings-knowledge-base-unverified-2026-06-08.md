# Meetings and knowledge-base unverified or softened notes - 2026-06-08

## Public wording softened

- Knowledge-base org scope: frontend components expose user/org document areas, but the checked backend `UserDocument` model and `/dashboard/documents/upload` route do not expose a matching persisted `scope` field. Public copy now says some UI surfaces show user/org areas and avoids promising org-wide availability from the checked upload route.
- Knowledge-base frontend accepted types vs backend accepted types: frontend accepts a wider list, but backend upload route and model support PDF, DOCX, DOC, TXT, and MD. Public copy uses the backend-confirmed list.
- Generated documents backend routes: frontend API exposes `/dashboard/docs` actions for generated documents, sharing, revoke, download, and deal linking. I did not find a matching backend implementation in the checked backend route tree during this pass, so public copy stays workflow-level and avoids low-level route guarantees.
- Post-call reference docs backend: frontend post-call configuration supports upload, delete, summary edit, and retry. I did not find the matching backend route in the checked backend route tree during this pass, so public copy describes the UI-supported workflow and summary states without adding implementation details.
- Add-bot timing: MCP/customer signal mentioned a near-start edge case. Public copy softened this to "too close to the start time" instead of promising an exact cutoff.
- Desktop recorder: MCP/customer signal mentioned beta/alpha language. Public meetings copy distinguishes desktop processing state and bot behavior but avoids release-status claims.
- External integrations such as Google Drive or Notion for knowledge base were mentioned by MCP/customer signal but were not verified in approved repos. Public copy does not mention them.

## Internal-only customer/planning signals not published

- Linear signal showed demand around recurring meetings, add-new-meeting validation, duplicate capture sources, post-call gating, desktop notetaker friction, and knowledge-base file storage. No issue IDs, private details, or customer examples were published.
- Pylon was not used because no general issue-search tool was exposed in this session.

## MCP limitation

- Ergo MCP was callable and answered two category-specific runs. I did not create a separate MCP run for every individual page; page edits were verified primarily against approved repo evidence plus the two MCP category runs.

## Supplemental page-level MCP unresolved notes

- The supplemental pass created fresh page-specific Ergo MCP runs for every assigned page. The earlier category-level MCP limitation is therefore resolved for this pass.
- Pylon issue search was exposed during the supplemental pass, but the available search schema had no free-text keyword parameter. It was not useful for page-specific docs checks and no Pylon issue content was used.
- Some MCP answers relied on older customer/demo context and conflicted with approved code. Code-confirmed behavior was preferred for recurring `this-only`/`all-future` actions, time-based meeting deletion, meeting/clip/document revoke routes, knowledge-base upload status/retry/delete/download behavior, and org/team/user post-call configuration.
- Exact waiting-room and inactive-call timeout numbers remain unpublished because they were not code-confirmed in the approved repo checks.
- External recorder and third-party integration behavior remains intentionally generalized. Public docs avoid promising equivalence between native bot capture, desktop capture, direct uploads, and connected third-party notetakers.
