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
    post, a summary of the prompt, and an English translation of any
    non-English introduction. Link to the source for the prompt's full text
    rather than transcribing another creator's long prompt wholesale.
  - `post-NN.<ext>` — **all** of the source post's example images, numbered
    in post/set order (`post-01.jpg`, `post-02.jpg`, …), not just the first.
- `samples/<input-slug>/` — one folder per input photo.
  - `input.<ext>` — the input photo.
  - `<style-slug>.<ext>` — the generated output of applying that prompt to
    this input. One output file per prompt, named exactly after the
    prompt's slug.
  - `generations.json` — required. Records every generation for this
    sample (see schema below).
- `index.json` — the manifest. `index.html` renders only what is listed here.

## Fetching a source post — use the browser

Source posts live on creator profiles (e.g. Emerson post on Facebook) that
the Facebook connector/CLI **cannot read**: profile reads return 403
("only readable for the viewer or the viewer's friends") and post reads
return 404, even for public posts. Do not conclude a post is deleted from
those errors, and do not keep retrying the connector for it.

Instead:

1. Use the **live browser signed in to the user's Facebook account**
   (read-only: never post, like, comment, or follow). The user approves
   any sign-in card if one appears.
2. Open the post's photo/set link. For a multi-photo set, step through the
   photo viewer with **Next until it cycles back to the first photo** —
   that count is the set size. Download **every** image, at the highest
   resolution the viewer serves, in set order.
3. Check any companion reel/video for the same style: scrub through it and
   compare its frames with the set images before downloading anything
   extra — reels are often slideshows of the same set (duplicates are
   not downloaded again).
4. Check the creator's feed for the same day for any other post in the
   same style; ignore neighbouring posts in other styles.
5. Save the images as `reference/<style-slug>/post-NN.<ext>` in set order,
   list them all in `prompt.md` and in `index.json` (`reference_images`),
   and **write the post down in the Source post log below** (URLs, set
   ID, image count and order, titles, fetch date, where the prompt text
   lives).

## Source post log

### frosted-glass — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post, Taipei-based creator profile
  (`facebook.com/profile.php?id=61580979040009`, 13K followers; also on
  Threads as @emersonigpost). He shares AI photo-transformation prompts
  and puts the full prompt in a pinned comment for followers to copy.
- **Style:** Frosted Glass · 磨砂玻璃, posted **Oct 21, 2026**.
- **Photo post:** multi-photo set, set ID `122157741747032634`, entry
  photo https://www.facebook.com/photo/?fbid=122157740547032634&set=pcb.122157741747032634
  — observed at fetch time: 1.1K likes, 274 shares. Its pinned comment
  announces (in Chinese) that the complete frosted-glass GPT prompt is
  in the comment below; the full prompt text lives there and in
  `reference/frosted-glass/prompt.md` we keep a structural summary plus
  this link.
- **Reel:** https://www.facebook.com/reel/1129000273148479 — a 0:24
  slideshow of the same set images (verified at several playback
  positions); no distinct cover image, nothing extra to download.
- **Images:** the set contains exactly **12** photos (viewer cycled back
  to the first after #12), all downloaded at 1086×1448 and saved as
  `reference/frosted-glass/post-01.jpg` … `post-12.jpg`. Set order
  (fbids): 122157740547032634, 122157740325032634, 122157741009032634,
  122157740295032634, 122157740589032634, 122157740649032634,
  122157741219032634, 122157740379032634, 122157740775032634,
  122157741195032634, 122157740883032634, 122157740949032634.
  Poster titles, in order: 1 "Wishes in the Sunlight" (wooden prayer
  plaques), 2 "Global Connections" (stacked shipping containers),
  3 "A Quieter Day" (café interior), 4 "Everyday Journeys" (fuel
  nozzle), 5 "City Contrast" (old houses vs. towers), 6 "Foundation"
  (construction site), 7 "Daily Archive" (apothecary drawers), 8 "Lost
  Summer" (empty pool), 9 "Night Market" (food stall), 10 "Daily Space"
  (café tables), 11 "BBQ Moments" (grill), 12 "Temple Gathering"
  (temple banquet).
- **No other Oct 21 frosted-glass post exists** on the creator's feed —
  that day carried only this photo set and the reel.

### notebook-hand-drawn — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as frosted-glass above).
- **Style:** Notebook Hand-Drawn · 筆記本手繪感, posted **Oct 22, 2026**.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid029Kh69s6qeKzC6MRYN6JPtJUQMFHiP7cY5xE4obf2hWXU1yBzRN1zHDEMqWm2AtfTl&id=61580979040009
  — multi-photo set, set ID `pcb.122158056891032634`; observed at fetch
  time: 187 likes, 14 comments, 31 shares. Its pinned first comment
  (Oct 22, 1:09 AM) carries the full GPT prompt in English with a
  Chinese intro/outro; `reference/notebook-hand-drawn/prompt.md` keeps a
  structural summary plus this link. Example photos credited to Pexels
  in the post.
- **Reel:** https://www.facebook.com/reel/791805547361304 — opens on the
  fishing-boat example, then cycles the same set images; the fishing
  boat is set photo #11, so there is no distinct video-only image.
- **Images:** the set contains exactly **11** photos (the feed preview
  suggested 10 — stepping Next through the viewer cycled back only
  after 11), all downloaded at 1086×1448 and saved as
  `reference/notebook-hand-drawn/post-01.jpg` … `post-11.jpg`.
  Subjects, in order: 1 girl in a wheat field at sunset, 2 path between
  rice fields, 3 red tram by the National Theatre (Prague), 4 koi fish,
  5 spiral staircase from above, 6 produce market stall, 7 woman in red
  through a brick archway, 8 galloping horse, 9 toucan, 10 lemons on
  the branch, 11 fishing boat at sea.

## Adding a prompt

1. Fetch the post with the browser (see above) and create
   `reference/<style-slug>/` with `prompt.md` and **all** post images.
2. Log the post in the Source post log above.
3. Add an entry to `prompts` in `index.json`:
   `slug`, `name`, `name_original` (if not English), `author`,
   `source_url`, `reference_image` (first post image), `reference_images`
   (all post images, in order), `prompt_file`, `summary` (1–2 sentences).
4. If sample inputs already exist, generate an output for the new prompt
   for each input, add it to that sample's `outputs` map, and record it
   in that sample's `generations.json`.

## Adding a sample input

1. Create `samples/<input-slug>/` with the photo as `input.<ext>`.
2. Generate one output per prompt in the collection, saved as
   `<style-slug>.<ext>` in the same folder.
3. Create `generations.json` in the same folder (schema below).
4. Add an entry to `samples` in `index.json`: `slug`, `title`, `input`,
   `generations_file`, and `outputs` mapping each prompt slug to its
   output path.

## Sample generation rules

- Generated outputs are **full-frame transformations** of the input.
  Do **not** bake the original photo into the generated image as a panel
  (no top/bottom split poster, no embedded original, no title text the
  site does not ask for) — the site displays the original separately,
  stacked **on top of** the outputs, so an embedded copy is a duplicate.
  (This overrides the source prompt's own poster layout when it asks
  for one; keep the style, drop the split.)
- Record **every** generation, including superseded ones, in the
  sample's `generations.json`:

```json
{
  "input": "input.jpg",
  "generations": [
    {
      "prompt_slug": "frosted-glass",
      "output": "frosted-glass.webp",
      "model": "Muse Image (Meta)",
      "generated_at": "2026-10-22T09:19:29-07:00",
      "tokens_used": null,
      "current": true,
      "notes": "What this version is; why it superseded an earlier one."
    }
  ]
}
```

  - `model`: the image model/tool that generated the picture.
  - `generated_at`: ISO 8601 timestamp with timezone.
  - `tokens_used`: a number when the generator reports one, otherwise
    `null` (the Muse image pipeline does not report token counts).
  - `current`: exactly one generation per `prompt_slug` is current —
    the file on disk / in `index.json`.

## Rules

- Attribute the creator and link the source post in `prompt.md` and in
  `index.json`; summarize long prompt text and link to its source rather
  than copying it wholesale.
- Translate non-English introductions/captions into English in
  `prompt.md`; keep the original alongside the translation where short.
- Slugs: kebab-case, max 3 words, no dates or author names.
- Commit images in web-friendly formats (jpg/png/webp); keep individual
  files under ~1 MB where practical.
- The site must keep working as plain static files: no build tools, no
  external assets, no frameworks.
