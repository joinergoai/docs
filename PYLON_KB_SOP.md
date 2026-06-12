# Pylon Knowledge Base SOP

This repo is the source of truth for the Ergo customer-facing knowledge base at:

https://ergo-knowledge-base.help.usepylon.com/

Pylon KB ID:

```text
f94940fa-04c5-4757-90fa-511ec1342002
```

## Operating Model

- `customer-docs/<section>/index.mdx` is a Pylon collection header. It provides the collection title and description, but is not published as an article.
- Sibling `.mdx` files inside each section are published as Pylon articles.
- `docs.json` controls collection order and article order.
- `customer-docs/index.mdx` is the Mintlify/homepage source, not a Pylon article.
- Images are uploaded to Pylon-hosted assets during publish. SVGs are converted to PNG before upload because Pylon blocks SVG attachment uploads.

## Routine Update Workflow

1. Make docs changes in this repo.
2. Preview locally with Mintlify if the change is non-trivial.

```bash
mint dev
```

3. Run a dry run from `/Users/ishansheth/Desktop/workspace`.

```bash
node scripts/publish-pylon-docs.mjs \
  --source docs \
  --manifest outputs/pylon-kb-dry-run.json
```

4. Review the dry-run summary.

Expected shape:

- Collections should match the top-level navigation groups in `docs.json`.
- Section/home pages should be skipped as articles.
- Only intentional unreferenced files should appear in the unreferenced list.
- Image placeholder warnings are expected in the default dry run.

5. Publish to Pylon.

```bash
node scripts/publish-pylon-docs.mjs \
  --source docs \
  --publish \
  --kb-id f94940fa-04c5-4757-90fa-511ec1342002 \
  --author-email ishan@joinergo.com \
  --image-mode pylon-attachment \
  --delete-skipped-roots \
  --delete-empty-home \
  --manifest outputs/pylon-kb-live.json
```

Required secret:

```text
PYLON_KEY
```

Do not commit API keys. In local runs, either export `PYLON_KEY` in the shell or use `--key-stdin`.

## Pull Request Checklist

- New pages are added to `docs.json`.
- Section landing pages stay named `index.mdx`.
- Customer-facing pages have `title` and `description` frontmatter.
- Internal planning, audits, drafts, or inventories are not added to `docs.json`.
- Image paths are relative and point to committed files under `customer-docs/images`.
- Run the dry run and paste the article/collection/skipped counts in the PR.

## Publish Checklist

- Dry run completes.
- Article count change is expected.
- Collection count change is expected.
- No unexpected unresolved-link warnings.
- Publish completes with a live manifest.
- Spot-check the live KB home page.
- Spot-check one updated collection.
- Spot-check one updated article with images.
- Search the Pylon widget for one term from the changed docs.

## Pylon Widget Setup

The Pylon Chat Widget supports embedded knowledge base search and viewing. Enable the Embedded Knowledge Base module in the Pylon Chat Widget configuration for the widget app that is installed in Ergo.

Confirm after enabling:

- The widget is enabled for the target app.
- The widget is using the correct Pylon `APP_ID`.
- The Ergo frontend initializes `window.pylon.chat_settings` after the user is known.
- The app Content Security Policy allows Pylon widget, API, and image domains.
- Public users can find public articles.
- Logged-in customers can find public articles plus any customer-visible articles that match their filters.

## Search and Visibility Rules

- Public articles are searchable by unauthenticated users.
- Customer-visible articles are searchable by logged-in users that satisfy the article visibility filters.
- Internal and unlisted articles are visible/searchable to internal users only.
- Pylon AI summaries are supported in direct KB search, but not currently in the chat widget KB module.

## Troubleshooting

If links do not work:

- Confirm publish mode used the default `pylon-url` link mode.
- Confirm the article exists in the live manifest.
- Re-run publish after the article exists so newly created article URLs can be resolved.

If images do not load:

- Publish with `--image-mode pylon-attachment`.
- Check `outputs/pylon-kb-assets.json` for the image path.
- If the image is an SVG, confirm a PNG was generated under `outputs/pylon-image-cache`.
- Check the app CSP includes `https://*.usepylon.com` for images.

If section headers show as article cards:

- Confirm publish was run without `--publish-root-articles`.
- Confirm cleanup was run with `--delete-skipped-roots`.
- Confirm the section source is `customer-docs/<section>/index.mdx`.

## CI Recommendation

On pull requests:

- Run the dry-run command.
- Store `outputs/pylon-kb-dry-run.json` as an artifact.
- Fail if the script exits non-zero.

On merge to the default branch:

- Run the publish command with `PYLON_KEY` stored as a CI secret.
- Store `outputs/pylon-kb-live.json` as an artifact.
- Post a summary of created, updated, deleted, and warning counts back to the PR or deployment log.
