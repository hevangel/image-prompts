# Fresh Illustration Poster

- **Style slug:** `fresh-illustration`
- **Name (original):** 清爽插畫
- **Creator:** Emerson post (Facebook)
- **Source post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0274e7f8hVH9kfxfU3LWAZ9BwqgrXbe3MSnDpQDp13aURPDK94926MjqKbhZAUnKYXl&id=61580979040009 (photo set, posted Oct 23, 2026; 105 likes, 10 comments, 19 shares as displayed Oct 24, 2026; set `pcb.122158339647032634`). The caption credits the example photos to Pexels.
- **Companion reel:** https://www.facebook.com/reel/1408925374553840 (posted Oct 23, 2026, ~7 minutes after the set; 97 likes, 8 comments, 18 shares). Same caption and the same prompt in its pinned comment. Frame-checked 2026-10-24: the reel plays all 12 set posters in a shuffled order — **no reel-only examples**.
- **Reference images:** 12 (the full set, in set order), `post-01.jpg` … `post-12.jpg`, all 1086×1448. Every poster is the same layout: top half the original photo, bottom half the simplified pastel illustration; none carries a printed title.
- **Collected:** Oct 24, 2026 (via a signed-in browser — see the Source post log in [AGENTS.md](../../AGENTS.md)). This was the first catch of the daily-update routine; the morning's scheduled run had been blocked on a Facebook sign-in, so the update was completed interactively the same day.

## The prompt

The full GPT prompt (in English) sits in the author's pinned first
comment on both the set post and the reel — in each place it is pasted
twice in a row, identical. The creator publishes it for followers to
copy. The full text lives in that comment, linked above; what follows
is a structural summary.

The prompt turns one uploaded photo into a standalone "premium
editorial comparison poster":

- **Layout.** Strict 3:4 vertical; the canvas splits into two exactly
  equal horizontal halves (50/50) — never side-by-side, never a third
  section. No borders, arrows, Before/After labels, logos, watermarks
  or decorative extras.
- **Top half.** The original photo preserved as a photograph:
  identity, pose, proportions, expression, clothing, lighting and
  color atmosphere kept; only a very subtle editorial color grade
  (art-magazine feel). The surroundings may be extended to fill 3:4
  but never stretched, distorted, repainted or rearranged. No text.
- **Bottom half — selection.** Do not redraw the whole scene. First
  find the photo's 3 visual memory points: (1) the main subject,
  (2) its key action / pose / relationship, (3) the most recognizable
  environmental cue or silhouette. Only those are reinterpreted as a
  clean hand-drawn 2D cartoon illustration.
- **Bottom half — reduction.** Remove 70–85% of secondary visual
  information; keep 50–75% of the half as negative space. The focus
  stays concentrated; the environment is not recreated.
- **Bottom half — style.** Refined editorial cartoon — explicitly not
  a childish picture-book or toy-cute look. Clean black outlines with
  slight hand-drawn line-weight variation, flat soft pastel color
  fields, only minimal cel shading. Subjects may be simplified but
  keep their recognizable identity, pose and expression; textures are
  simplified into clean shapes. Fully 2D — no photorealism, no 3D,
  no collage.
- **Bottom half — palette.** The photo's 2–5 most memorable key colors,
  reorganized into a soft, low-saturation pastel palette (light sky
  blue, soft green, warm skin tones, gentle pink, cream, off-white,
  pale beige, light yellow…). Bright, fresh and calm, never harsh;
  the negative space stays clean and airy.
- **Bottom half — must preserve.** The main subject's identity, the
  number of people and their main interactions, the main pose/action,
  and the key building / object / landscape silhouette. Clothing,
  poses and faces must not be redesigned.
- **Avoid list.** 3D rendering, photorealism, heavy or painterly or
  watercolor texture, blurry lines, crowded backgrounds, excessive
  detail, childlike styling, distorted faces, extra fingers/limbs,
  wrong anatomy, changed clothing or poses, missing main subjects —
  and any text, logos, watermarks, borders or labels. The final check
  repeats the numbers: 50/50 halves, strict 3:4, 70–85% removed,
  50–75% negative space, palette from the photo's own key colors.

> Full prompt text: see the source post's pinned comment (linked
> above).

## English translation of the introduction

The caption (Traditional Chinese) introduces a "clean/fresh
illustration" prompt set that reworks a photo into a 2D illustration:
the top half keeps the original photo, the bottom half keeps only the
key protagonist, action and scene, recomposed with clean black lines
and soft pastel color blocks into a design-led 2D illustration. What
he likes about it: it keeps the original's emotion and story, with
fewer details and more white space, so the whole image breathes. It
suits portraits, travel photos, street scenes — any photo that is
visually rich but has one clear subject. The full prompt is in the
first comment, ready to copy; readers are invited to say which photo
they most want to try, share it with friends, and follow for the next
prompt. Example photos are credited to Pexels.

## How this relates to neighboring entries

This is the third pass at the same comparison-poster family, filed
separately because its prompt differs on points that change the
output: `comparison-poster` (Aug 31, 2026) prints a numbered title
and an element legend on each poster and its examples are food and
shops; `clean-illustration` (Oct 8, 2026 reel roundup) asks for
simple color blocks that are "neither realistic nor cartoon", with a
short title/number/place/date allowed. This prompt instead specifies
an editorial **cartoon** with clean black outlines and minimal cel
shading, forbids text outright, and pins down the reduction
(70–85%) and negative-space (50–75%) numbers. Its 12 examples are
people and landscapes (stock photos), none with titles.

## Samples in this repo

- Generated outputs for all five sample photos live in the sample
  folders — `samples/howe-sound/`, `samples/book-fair/`,
  `samples/millennium-falcon/`, `samples/concert-stage/` and
  `samples/taco-truck-dog/` — one output file per folder, named after
  this style. Note: our sample outputs are generated **full-frame** —
  the site shows the original separately, on top of the output, so
  the generated image is the illustration treatment only, without
  the source prompt's split-poster layout. Generation details
  (model, timestamp, tokens) are in each folder's
  `generations.json`.
