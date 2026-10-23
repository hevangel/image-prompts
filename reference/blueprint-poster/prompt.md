# Blueprint Poster · 建築藍圖

- **Style slug:** `blueprint-poster`
- **Creator:** Emerson post (Facebook)
- **Source posts:** photo post https://www.facebook.com/permalink.php?story_fbid=pfbid02XfMskKH1pXf3p4T6pwBCKU3uHrNgfi7EwS4jpqJoiwTdRHjvPyhQmBrzRPuMyoU8l&id=61580979040009 (set ID `pcb.122148906435032634`, posted Aug 29, 2026; the full prompt is printed in the caption itself) and companion reel https://www.facebook.com/reel/1647555846944280 (Aug 29, 2026; plays set posters shuffled and **adds two distinct examples** — "RIVERSIDE CHAPEL" 2026 and "BARCELONA SKYLINE" 2026 — noted here, not archived; its comment thread also carries the same prompt in the author's reply to a reader)
- **Reference images:** all 6 images from the photo post, `post-01.jpg` … `post-06.jpg` in this folder. Fetched 2026-10-23 via a signed-in browser — see the Source post log in [AGENTS.md](../../AGENTS.md).
- **Collected:** Oct 23, 2026
- **Lineage:** the creator explicitly frames this as the architecture-oriented successor to `geometric-poster` （抽象幾何， Aug 19 group set): same split skeleton and title/year variables, but the graphic half is an architectural drafting drawing — callouts, axes, scale/elevation notations, a drawing-number label — instead of geometric color-block abstraction. Filed as its own style with this cross-reference. Also distinct from `blueprint-cyanotype` （藍圖， Oct 16), which is a handmade cyanotype re-exposure, not a drafting layout.

## The 6 post images, in set order (with printed titles)

1. `post-01.jpg` — Havana street corner with a blue classic car — "HAVANA CORNER", 2026; drafting half with numbered callouts and a 1:200 scale bar
2. `post-02.jpg` — Japanese engawa corridor interior (left/right split) — "ENGAWA CORRIDOR STUDY", 2026, with scale bar and north arrow
3. `post-03.jpg` — yurts and grazing horses in a mountain pasture — "MOUNTAIN PASTURES — HARMONY OF NATURE AND NOMADIC LIFE", 2024
4. `post-04.jpg` — Dubai Marina towers at night with light trails — "DUBAI MARINA", 2026, axonometric-study note
5. `post-05.jpg` — overwater villa at sunset on a lagoon — "LAGOON SUNSET RETREAT", 2026
6. `post-06.jpg` — aurora over a snow-covered waterfall — "AURORA FALLS", 2026, axonometric-section site study

Each poster pairs the photo with an architectural-drawing reinterpretation
of the same scene, plus a minimal English title, year and drawing number.

## The prompt

The set post's caption prints the creator's full GPT prompt (in
Chinese, with a Chinese introduction; an English version was later
posted in the companion reel's comments). The creator publishes it for
followers to copy. The full text lives in that caption, linked above;
what follows is a structural summary.

From the uploaded photo, create a high-end minimalist architectural
exhibition poster in 3:4 vertical format. The split adapts to the
photo: landscape photos divide horizontally into two equal 50:50
sections; portrait photos divide vertically into roughly equal
left/right sections; photos with people prioritize a left-right split,
with the dividing line avoiding facial features and the main
architecture's core outline. The PHOTO section preserves the original
— form, proportions, realistic texture, natural light and shadow,
original colors, perspective and atmosphere — with only subtle
professional color correction toward a refined contemporary
architectural-photography and exhibition-poster look; any extension is
limited to sky, ground or surrounding environment, done naturally;
never distort, move or alter the subject. The GRAPHIC section
reinterprets the same scene's most recognizable structures as an
architectural drawing — fine drafting lines, semi-transparent flat
color planes, axes, openings, paths, tiny numbering and a large amount
of negative space; extremely restrained scale marks, drawing numbers
or elevation notations are allowed, but it must not look like a real
construction drawing and must not carry too many annotations; abstract
yet immediately recognizable, with building mass, roads, windows and
terrain transitions corresponding clearly to the photo. Colors are
extracted only from the original image. Background: a light neutral
color set by variable (default beige or ivory), with generous margins
and a balanced central composition. Typography is minimal: a short
English title (variable), the year (variable) and a tiny
drawing-number label (variable, defaulting to a "PLAN 01"-type label).
Adjustable variables: background color, English title, year, drawing
number, plus additional requirements such as title position, line
density, level of abstraction and whether to add a subtitle. Overall
direction: international architectural offices, contemporary
architectural exhibition posters, museum-level art direction,
understated luxury, refined typography, abundant negative space.
Exclusions: realistic illustration in the graphic section, overly
complex detail, cartoon line art, 3D-model-like rendering,
template-like layouts, low-quality commercial design, cartoon styling,
3D rendering, excessive decoration, gradient and neon effects, overly
complex illustration, and any distortion of the subject.

> Full prompt text: see the source post's caption (linked above).

## English translation of the introduction

The caption (Traditional Chinese) says that in his last post he used
"real photos × abstract geometry" to turn travel photos into
exhibition-style posters; readers asked whether street scenes,
architecture or window views had a better-fitting version — this is
it: instead of color blocks it uses an architectural studio's visual
language, "real photo × architectural blueprint × minimalist editorial
design." No redrawing or layout work is needed — upload one photo and
it becomes an exhibition visual. The original's lighting, texture,
perspective and subject are kept; its outlines, structure, paths and
openings are extracted and extended into the other half as an
architectural drawing composition; add a vertical poster format, a
beige or ivory background, a minimal English title, a year, a drawing
number and small drafting elements, with colors sampled from the
original photo. What he likes most: the abstract half looks highly
designed, yet the car positions, road turns and scene rhythm still
match the photo, so it feels like one photo split into two languages —
the real scene and the drawing. Usage: upload a photo, paste the
prompt, change the title, year and drawing number, generate; choose
photos with clear architectural outlines, visible roads or strong
lines, strong perspective and an uncluttered composition.

## Samples in this repo

- `samples/howe-sound/` — a Howe Sound fjord photo; the
  blueprint-poster output for it is pending generation and will be
  logged in that folder's `generations.json` when added. Note: our
  sample outputs are generated **full-frame**, without the poster's
  split — the site shows the original separately.
