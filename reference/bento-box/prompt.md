# Japanese Bento · 日式便當

- **Style slug:** `bento-box`
- **Creator:** Emerson post (Facebook)
- **Source post:** photo post https://www.facebook.com/61580979040009/posts/122154223575032634/ (set ID `pcb.122154223575032634`, marked AI content, posted Sep 28, 2026, 10:21 PM). No companion reel/video observed.
- **Reference images:** all 6 images from the photo post, `post-01.jpg` … `post-06.jpg` in this folder. Fetched 2026-10-22 via a signed-in browser — see the Source post log in [AGENTS.md](../../AGENTS.md).
- **Collected:** Oct 22, 2026 (catch-up: this set sits in the Sep 26–29 range and was missed by the batch that covered it; the "high-end design poster" family of that range is four distinct styles, not three)
- **Subject note:** every example in this set applies the treatment to a **company logo or product photo** rather than a life photo.

## The 6 post images, in set order

1. `post-01.jpg` — NVIDIA logo → "Green Power Bento" (¥698, 420 g)
2. `post-02.jpg` — TSMC logo → "Semiconductor Energy Bento" (520 g)
3. `post-03.jpg` — Cathay Financial Holdings 國泰金控 logo → "Cathay Happiness Bento" 國泰幸福便當 (NT$99, 420 g)
4. `post-04.jpg` — Samsung 990 SSD product photo → "SAMSUNG 990 SSD Bento" (¥990, 320 g)
5. `post-05.jpg` — MediaTek 聯發科技 logo → "Orange Egg Bento" (¥598, 450 g)
6. `post-06.jpg` — Novo Nordisk logo → "Balanced Meal for a Better Tomorrow" (¥598, 420 g)

Each image in the post is itself a poster in the style's original layout:
the source image on top and its bento version below, in a clear
convenience-store deli box with a printed product label.

## The prompt

The source post's author comment carries the creator's full GPT prompt
(written in Chinese, with a Chinese introduction). The creator
publishes it for followers to copy. The full text lives in that
comment, linked above; what follows is a structural summary.

The prompt asks for each uploaded photo to become its own independent
high-end design poster, never combining photos, on a 3:4 canvas in two
equal halves. The top half preserves the original photo faithfully
with slight high-end grading. The bottom half extracts the most
recognizable subject, contours, structure, pose and narrative
relationships and reconstructs them as "Bento-fication" （飯盒化）
convenience-store deli packaging — not copying object-by-object, but
understanding the core visual relationships and performing ingredient
semantic mapping + material substitution on people, buildings,
plants, sky, water and objects (rice, vegetables, egg, fruit, nori,
cheese, sauce, jelly, fish roe, herbs), so the first glance still
recognizes the original scene's soul and the second reveals
everything is food. Everything must live inside one clear transparent
konbini deli box / bento tray / compartmented container, keeping the
original's key compositional hierarchy while re-direction is allowed
(removing irrelevant background, cropping, adjusting proportions,
rearranging, modularizing ingredients, container zoning). The
viewpoint is top-view product / packaged-food photography: real
transparent-box material, food grains, cut surfaces, moistness,
freshness, natural light — a real product on a premium
convenience-store shelf, with a clear package and generous whitespace,
not a crowded platter. Color: the photo's most recognizable vivid
colors converted to natural food colors, bright, fresh and appetizing
(green → vegetables/herbs, yellow → egg/corn/fruit, warm red →
tomato/roe/sauce, cold colors via jelly/packaging/tray liner);
avoiding gray, greasy, dirty colors and a cheap food-ad feel. A small
product-label system may be added (product name, short phrases, price,
weight, barcode, storage info, micro-notes; any language, no fixed
fields), styled like real Japanese konbini / premium food packaging,
naturally integrated. The core principle: not drawing the photo AS
food, but keeping the original scene's visual soul and re-directing it
once with ingredients, a container and product packaging.

> Full prompt text: see the source post's author comment (linked above).

## English translation of the introduction

The caption (Traditional Chinese) shares an instruction that turns
photos into Japanese bento. His personal takes: the NVIDIA-logo bento
is the most nutritionally balanced; the TSMC-logo bento looks tasty
too (topped with what looks like sweet dates or sweet ginger); the
Cathay Financial Holdings one is probably turmeric rice with a big
broccoli; the Samsung SSD one must be a purple/black-rice bento; and
the MediaTek one a tamagoyaki bento. He asks readers which company
logo makes the tastiest bento. The instruction is in the comments.

## Samples in this repo

- Generated outputs for all five sample photos live in the sample
  folders — `samples/howe-sound/`, `samples/book-fair/`,
  `samples/millennium-falcon/`, `samples/concert-stage/` and
  `samples/taco-truck-dog/` — one output file per folder, named after
  this style. Note: our sample outputs are generated **full-frame** —
  the site shows the original separately, on top of the output.
  Generation details (model, timestamp, tokens) are in each folder's
  `generations.json`.
