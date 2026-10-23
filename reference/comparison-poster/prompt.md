# Comparison Poster · 上下對照海報

- **Style slug:** `comparison-poster`
- **Creator:** Emerson post (Facebook)
- **Source posts:** photo post https://www.facebook.com/permalink.php?story_fbid=pfbid0324MjpkSAZbSa1rG998s2PA7qmj655DCoxZkEreR6uiA7NHEmWHJ8hs8VAyXBnHfjl&id=61580979040009 (set ID `pcb.122149259277032634`, marked AI content, posted Aug 31, 2026) and companion reel https://www.facebook.com/reel/3348300188682482 (Sep 1, 2026; plays the set shuffled; the full prompt is printed in the reel's caption — the set post has no comments)
- **Reference images:** all 6 images from the photo post, `post-01.jpg` … `post-06.jpg` in this folder. Fetched 2026-10-23 via a signed-in browser — see the Source post log in [AGENTS.md](../../AGENTS.md).
- **Collected:** Oct 23, 2026
- **Distinctions:** distinct from `food-poster` （美食海報， Sep 21) — that style is 9:16, photorealistic food physically interacting with oversized Chinese characters, driven by templated brand variables; this one is the shared two-zone poster template with a flat illustration + numbered element-legend treatment, and its subject range is general even though all six set examples are food.

## The 6 post images, in set order (with printed titles)

1. `post-01.jpg` — street-stall cook stir-frying on a large griddle — "NO. 09 STREET KITCHEN — TAIWANESE MARKET SCENE", with a color-dot element legend
2. `post-02.jpg` — beef soup bowl on an orange table — "BEEF SOUP 牛肉湯"
3. `post-03.jpg` — Japanese set-meal tray with braised pork and a sunny-side egg — "No. 37 BRAISED PORK SET 豚の角煮定食", with element legend
4. `post-04.jpg` — tandoori chicken platter — "INDIAN FLAVOR COLLECTION — TANDOORI CHICKEN No. 07"
5. `post-05.jpg` — chicken rice bowl with braised-tofu side — "NO. 07 CHICKEN RICE — TAIWANESE CLASSIC", with legend
6. `post-06.jpg` — peanut shaved-ice bowl — "NO. 08 PEANUT ICE — TAIWANESE SHAVED ICE", with legend

Each image in the post is itself a poster in the style's original layout:
the source photo on top and a flat simplified illustration below.

## The prompt

The companion reel's caption prints the creator's full GPT prompt
(written in Chinese, with an introduction). The creator publishes it
for followers to copy. The full text lives in that caption, linked
above; what follows is a structural summary.

Each uploaded photo becomes its own independent 3:4 vertical poster,
no collage, split into top/bottom halves of exactly 50% each. The TOP
keeps the original photo with its real feel — people, food, buildings,
objects unchanged; only slight brightness/color/texture cleanup for a
magazine feel; background may extend naturally to fill the frame, but
the subject is never stretched or altered. The BOTTOM redraws only the
most memorable subject as a simple illustration, keeping only the most
important contours, shapes, actions and signature features (for food:
plate, main dish, main garnish, most obvious colors; for people: pose,
clothing outline, main action; for buildings: exterior, windows, roof,
signature structure) — simple color blocks, geometric shapes and clean
lines; not too realistic, not cartoon characters. The background is
off-white, cream white or a very pale color taken from the photo, with
generous white space. Colors are the photo's prettiest, most vital
colors reorganized, brightness slightly raised for warmth and freshness
— never over-saturated, no fluorescent colors, no cheap candy feel.
Minimal text only (a short title, a number, a place, a date, one small
line) that never steals focus. Reference points: travel magazines,
indie publications, art-exhibition posters, quality brand visuals. The
top must read as the original photo and the bottom must be recognizable
at a glance as the same subject, simpler and cleaner — explicitly not
a cartoon-filter version.

> Full prompt text: see the source reel's caption (linked above).

## English translation of the introduction

The captions present turning phone photos that just sit there into a
top-bottom comparison poster: the top keeps the original photo; the
bottom reorganizes the photo's most memorable elements into a simple,
clean illustration — like a travel magazine, exhibition poster or
keepsake card. Suited to travel meals, cafés and restaurants, home
cooking, pets, plants, buildings, street scenes and family meals; pick
a photo with one unmistakable subject and the AI strips the clutter
down to the memorable contours, shapes and colors. His closing tip:
the bottom must not become a cartoon version of the photo.

## Samples in this repo

- Generated outputs for all five sample photos live in the sample
  folders — `samples/howe-sound/`, `samples/book-fair/`,
  `samples/millennium-falcon/`, `samples/concert-stage/` and
  `samples/taco-truck-dog/` — one output file per folder, named after
  this style. Note: our sample outputs are generated **full-frame** —
  the site shows the original separately, on top of the output.
  Generation details (model, timestamp, tokens) are in each folder's
  `generations.json`.
