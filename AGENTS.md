# AGENTS.md — instructions for AI assistants working in this repo

This repo is a static website (GitHub Pages, served from the repo root) that
collects image generation prompts and shows what each prompt does to sample
photos. There is no build step. `index.html` fetches `index.json` and renders
everything from it — never hardcode entries into the HTML.

## Structure

- `reference/<style-slug>/` — one folder per prompt.
  - The slug is the style's name in kebab-case, **at most 3 words**
    (e.g. `frosted-glass`, `notebook-hand-drawn`).
  - `prompt.md` — required. Must contain: style name (original language and
    English), the creator's name, a link to the source post, the date of the
    post, the original prompt text verbatim, and an English translation of any
    non-English parts.
  - `post.<ext>` — the example image from the source post, when one exists.
- `samples/<input-slug>/` — one folder per input photo.
  - `input.<ext>` — the input photo.
  - `<style-slug>.<ext>` — the generated output of applying that prompt to this
    input. One output file per prompt, named exactly after the prompt's slug.
- `index.json` — the manifest. `index.html` renders only what is listed here.

## Adding a prompt

1. Create `reference/<style-slug>/` with `prompt.md` and the post image.
2. Add an entry to `prompts` in `index.json`:
   `slug`, `name`, `name_original` (if not English), `author`, `source_url`,
   `reference_image` (path or null), `prompt_file`, `summary` (1–2 sentences).
3. If sample inputs already exist, generate an output for the new prompt for
   each input and add it to that sample's `outputs` map.

## Adding a sample input

1. Create `samples/<input-slug>/` with the photo as `input.<ext>`.
2. Generate one output per prompt in the collection, saved as
   `<style-slug>.<ext>` in the same folder.
3. Add an entry to `samples` in `index.json`: `slug`, `title`, `input`,
   and `outputs` mapping each prompt slug to its output path.

## Rules

- Keep prompt text verbatim from the source; always attribute the creator and
  link the source post in `prompt.md` and in `index.json`.
- Translate non-English prompt text and captions into English in `prompt.md`;
  keep the original alongside the translation.
- Slugs: kebab-case, max 3 words, no dates or author names.
- Commit images in web-friendly formats (jpg/png/webp); keep individual files
  under ~1 MB where practical.
- The site must keep working as plain static files: no build tools, no external
  assets, no frameworks.
