# Geometric Poster · 抽象幾何

- **Style slug:** `geometric-poster`
- **Creator:** Emerson post (Facebook)
- **Source posts:** photo set posted **Aug 19, 2026** in the public group 快樂學習AI — https://www.facebook.com/groups/346855692144727/permalink/3484949911668607 (set ID `pcb.3484949911668607`; a duplicate posting in the AI好好用 group was noted, not downloaded; no profile set) and presenting profile reel https://www.facebook.com/reel/1458677579407213 (Sep 18, 2026)
- **Reference images:** all 6 images from the group photo set, `post-01.jpg` … `post-06.jpg` in this folder. Fetched 2026-10-22 via a signed-in browser — see the Source post log in [AGENTS.md](../../AGENTS.md).
- **Collected:** Oct 22, 2026
- **Prompt location:** unusually, the full prompt is printed in the post **caption itself** (both reel and set post) — there is no author prompt comment. This entry keeps a structural summary as usual.
- **Dating note:** the set predates its presenting reel by a month (Aug 19 vs Sep 18), and several posters carry earlier years (2024, 2025) in their printed titles.

## The 6 post images, in set order (with printed titles)

1. `post-01.jpg` — aerial of the Chiayi Art Museum complex — "CHIAYI ART MUSEUM", 2025
2. `post-02.jpg` — sunset aerial of Taipei 101 and towers — "TAIPEI" / "URBAN ASCENSION", 2026
3. `post-03.jpg` — Guandu Bridge over the Tamsui River at sunset — "TAMSHUI SPAN" / "TAIWAN STRAIT", 2026
4. `post-04.jpg` — Huashan Creative Park — "HUASHAN CREATIVE PARK", 2025
5. `post-05.jpg` — Huayu Lighthouse (Penghu) — "HUAYU LIGHTHOUSE", 2024
6. `post-06.jpg` — Meteora, Greece, a couple overlooking the rock pinnacles — "METEORA ODYSSEY", 2026

Each poster is one photo block plus one flat geometric reinterpretation
of the same scene, with a minimal English title and year; the posters
also carry tiny coordinate text and a minimal bilingual footer line.

## The prompt

The caption of the source posts prints the creator's full GPT prompt
(in Chinese, with a Chinese introduction). The creator publishes it
for followers to copy. The full text lives in that caption, linked
above; what follows is a structural summary.

The prompt asks for a high-end minimalist design poster from the
uploaded photo, 3:4 vertical. Split rule: for a landscape (horizontal)
photo, divide the composition horizontally into two equal 50:50
blocks; for a portrait (vertical) photo, divide it into roughly equal
left/right blocks. The PHOTO BLOCK preserves the original image —
subject form, proportions, realistic texture, natural light, original
colors, overall atmosphere — with only subtle professional color
correction for a contemporary-art-photography finish; if the frame
must be extended, only sky/ground/surroundings extend naturally; the
subject is never distorted or altered. The GRAPHIC BLOCK reinterprets
the subject's most recognizable contours and spatial structure as a
simplified abstract composition using only clean geometric shapes,
flat color blocks, thin lines and ample negative space — no realistic
illustration, no intricate detail; the result should feel abstract yet
instantly recognizable, in tones extracted from the original photo.
Layout: a light neutral background (parameter: background color;
default beige or ivory white) with generous margins and a balanced
central composition; minimal typography only — a short English title
(parameter) and a year (parameter). Overall direction: high-end
minimalist editorial design, contemporary art exhibition poster,
architectural graphic design, quiet luxury, museum-level art
direction, refined typography, lots of negative space. Excluded:
templated layout, low-quality commercial design, cartoon style, 3D
render feel, over-decoration, gradient effects, neon effects, overly
complex illustration, distortion of the subject. Parameters to fill
in: 1. background color (default beige or ivory white, or specify
another), 2. a short English title, 3. year (e.g. 2026), 4. other
requests (title position, font style, degree of abstraction, whether
to add a subtitle, etc.).

> Full prompt text: see the source posts' caption (linked above).

## English translation of the introduction

The caption (Traditional Chinese) introduces a recently found AI way
to restyle landscape photos: upload one photo and turn it into an
exhibition-poster look of "real photo × abstract geometry × minimalist
editorial design." It does not redraw the whole photo: it keeps the
photo's original light/shadow, texture and subject, pulls colors from
the photo and extends them into an abstract geometric composition in
the other half; then adds a 3:4 vertical poster ratio, a rice-white /
ivory background, a minimal English title, the year and small
typographic elements, and a palette extended from the source image. An
ordinary travel, street or portrait photo can look like something from
a contemporary art exhibition — no design skill needed; just pick a
photo you like and let AI handle "photo + abstract composition +
layout." The full prompt is printed in the caption; save it for next
time you have a favorite photo you don't know how to turn into a piece.

## Samples in this repo

- `samples/howe-sound/` — a Howe Sound fjord photo (landscape
  orientation, so this style's split would be horizontal); the
  geometric-poster output for it is pending generation and will be
  logged in that folder's `generations.json` when added. Note: our
  sample outputs are generated **full-frame**, without the poster's
  photo/graphic split — the site shows the original separately.
