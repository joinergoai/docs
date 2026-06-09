# Ergo Customer Docs Operating Plan

Generated: 2026-06-07

Purpose: turn the researched docs inventory into a Mintlify-ready customer help center. This plan governs information architecture, launch sequencing, issue handling, and image usage for customer-facing docs.

## Goal

Create docs that help customers set up Ergo, understand what each product surface does, resolve common issues without support, and know when to contact Ergo. These docs are user/admin docs, not API docs or engineering incident writeups.

## Mintlify Root

Use `customer-docs/` as the content root because `/docs/` is ignored by the current repo. The root-level `docs.json` should reference `customer-docs/**/*.mdx` pages so the work stays tracked and can still be published by Mintlify.

## Current Build Status

The current Mintlify build includes the full inventory-derived corpus:

- 209 customer-facing article pages
- 14 top-level navigation groups, including a curated By role layer
- Home page plus section index pages
- 13 customer-facing diagram assets in `customer-docs/images/`
- Navigation generated from `customer-docs/ergo-customer-user-docs-inventory.md`
- Generation script: `customer-docs/scripts/generate-docs.mjs`

The P0 articles should be treated as the launch-critical layer. P1-P3 articles are present as customer-facing drafts and should be refined with product screenshots, exact UI labels, and owner review as the docs program matures.

## Top-Level Collections

1. Start here
2. By role
3. Setup
4. Integrations
5. Meetings and notetaker
6. Desktop
7. Deals and CRM
8. Field mapping
9. Drafts, email, and templates
10. Knowledge base and documents
11. Ergo AI, search, and automation
12. Reporting
13. Admin
14. Troubleshooting

## Section Pattern

Each major section should include:

1. Overview
2. Setup or prerequisites
3. Core workflows
4. Admin or configuration articles, when relevant
5. Sharing, access, or permissions, when relevant
6. Common issues links
7. Related articles

The section-level common issues should point to focused troubleshooting articles. The central Troubleshooting collection should remain the symptom index for customers who arrive in "something is broken" mode.

## Article Template

Use this shape for most articles:

```md
---
title: "Article title"
description: "What the customer will learn or fix."
---

## Who can use this

## Before you start

## Steps

## What to expect

## Common issues

## Related articles
```

For troubleshooting articles, use:

```md
---
title: "Symptom title"
description: "How to diagnose and resolve the symptom."
---

## Symptoms

## Most common causes

## What to check

## Resolution steps

## When to contact support

## Related articles
```

## Issue Inclusion Rules

Docs should cover durable customer action, durable product behavior, or recurring expectation gaps. Docs should not become a changelog of resolved bugs or internal incidents.

| issue type | include in docs? | how to write it |
|---|---|---|
| User can fix or verify it | Yes | Symptom, checks, resolution steps |
| Product behavior is expected but confusing | Yes | Explain the behavior and what to expect |
| Feature limitation still exists | Yes | State the limitation plainly and provide a workaround |
| Bug is resolved and no user action remains | No | Omit it |
| Bug is resolved but left a common misconception | Yes | Include the misconception, not the bug history |
| Temporary vendor outage or one-off incident | No | Omit unless it reveals a durable failure state |
| Internal root cause only | No | Use customer-facing symptoms and next steps instead |

Example: if duplicate Pylon deliveries were resolved by engineering, docs should not explain webhook-worker task duplication. If users may still receive duplicate notifications, docs should say what to check and when to contact support.

## Common Resolution Playbooks

| symptom | durable customer-facing response |
|---|---|
| Notetaker did not join | Check calendar connection, meeting invite/source calendar, waiting-room admission, reschedule status, and manual dispatch through Add Bot to Meeting. |
| Meeting is processing | Most meetings process in a few minutes. If it remains stuck, check source, recording/transcript state, and support escalation path. |
| Summary exists but insights or drafts are missing | Explain sales-meeting classification, meeting filters, and source differences such as Ergo Notetaker vs external notetakers. |
| Duplicate drafts | Check whether more than one notetaker source is connected to Ergo. Recommend one connected source when possible. |
| Calendar or email disconnected | Reconnect Google Workspace or Microsoft 365 and confirm required calendar/email scopes. |
| CRM fields or stages are not updating | Check CRM connection, field mapping, property permissions, pipeline/stage mapping, and stage drift. |
| HubSpot deal or company is hard to find | Explain naming and matching behavior; check company name, meeting title, pipeline, and CRM associations. |
| Recording exists but transcript or notes are missing | Explain that recording, transcript, summary, insights, and drafts are separate outputs. Provide retry/report path. |
| Slack or Pylon delivery issue | Keep docs to setup, reconnects, channel/account mapping, and user-verifiable checks. Escalate suspected internal delivery bugs. |
| Permission or access denied | Check role, spectator status, admin-only access, reporting access, shared-link settings, and global meeting access. |

## Launch Sequence

### P0 Launch Docs

Prioritize setup, access, meetings, CRM mapping, drafts, reconnects, and troubleshooting:

- Welcome to Ergo
- Roles and permissions
- Spectator access
- Security, data retention, and LLM usage
- Recording/privacy basics
- Getting support
- First-time setup checklist
- Setup by role
- Connect your CRM
- Connect email and calendar
- Notetaker setup
- CRM properties setup
- Pipeline stages
- Google Workspace
- Calendar scopes and meeting auto-join
- Microsoft 365
- Expired grants and reconnecting
- Slack
- Ergo Notetaker
- Schedule or cancel the notetaker
- Notetaker waiting-room admission guide
- What happens when a meeting is rescheduled
- Add the bot to a live or ad hoc meeting
- Meeting processing time and status states
- Why some meetings do not generate insights or drafts
- Recording disclaimer
- Meeting availability and visibility
- Install and sign in to Ergo Desktop
- macOS permissions
- Troubleshoot missed detection or upload failures
- Field Mapping overview
- Field mapping setup: required before CRM updates work
- CRM properties
- Stage drift resolution
- Turn post-call drafts on or off
- Failed drafts retry/report
- Promote/demote/convert roles
- Spectator management
- Grant meeting/reporting access
- Global meeting access
- CRM sync issues
- Stage drift conflicts
- Google/Microsoft/Slack reconnects
- Notetaker did not join
- Transcript or recording missing
- Draft send failures
- Permission or access denied

### P1 Follow-Up Docs

Draft next after P0: dashboards, detailed integration pages, HubSpot recording links, Slack monitoring, multiple notetakers, desktop settings, deal matching, CRM backfills, email signatures, scheduled runs, reporting sharing, and Pylon delivery troubleshooting.

## Image And Screenshot Policy

Use images where they reduce support load or make setup safer. Do not add broken image references or decorative screenshots.

### Include Images When

- A setup screen has multiple options or scopes.
- A button or control is hard to find, such as Add Bot to Meeting.
- The customer must distinguish similar states, such as processing vs failed vs missing transcript.
- Admin configuration has irreversible or high-impact choices.
- A permissions flow differs between Google, Microsoft, Slack, or macOS.

### Avoid Images When

- The UI is likely to change before publication.
- The steps are simple text-only instructions.
- The image would expose customer data or internal-only controls.
- The article is a conceptual overview.

### Asset Rules

- Store images under `customer-docs/images/`.
- Use descriptive filenames, for example `meetings-add-bot-to-meeting.png`.
- Every image must have useful alt text.
- Do not publish placeholder image links.
- If an article needs a screenshot but the asset is unavailable, leave an internal note in the draft plan, not in the customer-facing page.

## Customer-Facing Tone

- Use product names and user-visible labels instead of route names.
- Prefer "what to do" over "why engineering does this."
- Avoid internal ticket IDs in published articles.
- Be explicit about roles, prerequisites, connected integrations, and expected timing.
- Say "contact support" only after giving the customer checks they can perform.
