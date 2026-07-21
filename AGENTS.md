> **First-time setup**: Customize this file for your project. Prompt the user to customize this file for their project.
> For Mintlify product knowledge (components, configuration, writing standards),
> install the Mintlify skill: `npx skills add https://mintlify.com/docs`

# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Terminology

{/* Add product-specific terms and preferred usage */}
{/* Example: Use "workspace" not "project", "member" not "user" */}

## Style preferences

{/* Add any project-specific style rules below */}

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references

## Content boundaries

{/* Define what should and shouldn't be documented */}
{/* Example: Don't document internal admin features */}

## Cursor Cloud specific instructions

This Cloud workspace is the Ergo platform and contains five sibling repos under the workspace root (`/agent/repos/`): `docs` (this Mintlify site), `Ergo-Automations` (Python FastAPI + Celery), `Ergo-Dashboard-Backend` (Node/Express + BullMQ), `Ergo-Dashboard-Frontend` (Vite + React), and `Ergo-Desktop-App` (Electron). Per-repo dev/test/lint commands live in each repo's `README.md` / `CLAUDE.md` — read those instead of guessing. The update script already installs frontend and automations dependencies; notes below are the non-obvious caveats.

- Toolchain present: Node 22, npm, Python 3.12 (repos target 3.11 but 3.12 works), and `python3-venv`. Docker is NOT installed, so `Ergo-Automations/docker-compose.yml` (Redis + RabbitMQ) cannot start as-is — install Docker first if you need those infra services.
- No secrets are injected by default. Several things are gated on missing secrets:
  - `Ergo-Dashboard-Backend` cannot even `npm install`: `.npmrc` points at the private BullMQ Pro registry and returns `401` without `NPM_TASKFORCESH_TOKEN`. The update script skips the backend install unless that secret is set. Backend also needs `MONGODB_URI`, `REDIS_URL`, `WORKOS_*`, `AZURE_OPENAI_*`, etc. to actually boot.
  - `Ergo-Dashboard-Frontend` runs (`npm run dev`, port 5173) but stays on a loading spinner until `VITE_WORKOS_CLIENT_ID` is set (AuthKit throws `NotClientIdProvidedException` otherwise). The full app also needs the backend on port 3000 (Vite proxies `/api` there).
- `Ergo-Automations` tests: do NOT run a bare `pytest -m unit` from the repo root — collection fails (deprecated `src/testing/unit_testing/` and a `*_test.py` seed script that `sys.exit(1)`s without TurboPuffer/Voyage keys). Run scoped instead, e.g. `./env/bin/python -m pytest src/automation_engine/ -m unit` (426 pass) or `pytest <dir>/tests/`. The venv lives at `Ergo-Automations/env/`.
- `Ergo-Dashboard-Frontend` has no `test` script; run `npx vitest run` (a handful of tests fail under jsdom for `Blob.stream` reasons — pre-existing, unrelated to your changes). Lint is `npm run lint` (the repo currently reports many pre-existing eslint errors). The Husky `pre-commit` hook runs a full `tsc --noEmit` + `npm run build`, so committing here is slow.
- `docs` (this repo) has no package.json; run it with `npx mint@latest dev` (serves on port 3000). Local search shows "Login into CLI to enable search" — expected without Mintlify CLI auth; navigation still works.
- `Ergo-Desktop-App` is macOS/Apple-Silicon only (native Recall SDK) and cannot be built or run on this Linux VM.
