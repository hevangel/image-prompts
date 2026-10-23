# Spot Illustration · 留白插畫

- **Style slug:** `spot-illustration`
- **Creator:** Emerson post (Facebook)
- **Source posts:** photo post https://www.facebook.com/permalink.php?story_fbid=pfbid024p2QPWPw7MQDjHznLarW64BkpY71gBSVZUgYGP5jHBFwu8qVBMgRTjd1RkE8Tiz7l&id=61580979040009 (set ID `pcb.122151565809032634`, posted Sep 14, 2026) and reel https://www.facebook.com/reel/1837058010786572 (Sep 14, 2026; plays the 9 set posters in set order)
- **Reference images:** all 9 images from the photo post, `post-01.jpg` … `post-09.jpg` in this folder. The set was initially hidden from both the feed and profile search and surfaced on a fuller feed render. Fetched 2026-10-22 via a signed-in browser — see the Source post log in [AGENTS.md](../../AGENTS.md).
- **Collected:** Oct 22, 2026
- **Reconciliation flag:** this prompt system is a near-twin of `black-line-drawing` （手繪黑色線條， Sep 18). Filed as its own entry because it was posted 4 days earlier with a different example set under the "Spot Illustration / 留白插畫" framing, and the specs differ: this one renders the tiny illustration as a hand-drawn sticker-like spot graphic on a plain white/rice-white ground and allows the single pale accent to be ANY pale hue extracted from the photo (ice-blue preferred), whereas the Sep 18 spec uses a light watercolor wash on a xuan-paper-textured ground with a single ice-blue accent.

## The 9 post images, in set order (with printed text)

1. `post-01.jpg` — girl at a glowing vending machine at night — 「夜のちいさな選択 / small choices in the night」
2. `post-02.jpg` — boy riding a white balance bike through a grassy puddle — "Small puddles. Big days."
3. `post-03.jpg` — two women outside a tiled house entrance with red couplets, sorting vegetables — "Ordinary Days"
4. `post-04.jpg` — two people on a seawall facing Guanyinshan across the Tamsui River — "Same Horizon"
5. `post-05.jpg` — hand holding a floral bowl of 35mm film rolls over a scrapbook — "SMALL MEMORIES"
6. `post-06.jpg` — two older men at a terrace table, a minaret behind — "SAME MOMENTS / DIFFERENT GENERATIONS / SAME SKY"
7. `post-07.jpg` — sunlit windowsill still life with a Dec 25 calendar block — "SUNLIT DAYS"
8. `post-08.jpg` — elderly woman with a clear umbrella in a seaside bus shelter in the rain — "Somewhere by the Sea."
9. `post-09.jpg` — boy standing on beach rocks at sunset, a seagull flying — "A QUIETER TOMORROW — 2024"

Each image in the post is itself a poster in the style's original layout:
the source photo on top and a tiny spot illustration below.

## The prompt

The source post's author comment carries the creator's full GPT prompt
(written in Chinese, with a Chinese introduction; the same comment
also appears on the companion reel). The creator publishes it for
followers to copy. The full text lives in that comment, linked above;
what follows is a structural summary.

The shared two-zone template applies (3:4; zones strictly 50/50; top =
original photo fully preserved with only slight, restrained high-end
grading for an art-magazine / indie-publication / contemporary-
exhibition feel). The BOTTOM zone analyzes the photo's most memorable
core theme, subject relationships, compositional movement, action
features and visual memory points, and re-refines them into a Spot
Illustration （小型留白圖形插畫 — small white-space graphic
illustration) of restrained size. It does not copy every object or
redraw the whole scene; it actively deletes irrelevant detail, keeping
only the contours, actions, proportions, poses and identifying features
that best represent the original theme, generalized into one small
independent graphic subject recognizable at a glance. Composition =
"center small graphic + large negative space" single-point visual
logic: the subject occupies only a small proportion of the bottom zone,
centered or slightly off-center, surrounded by lots of clean white
space that is itself a compositional element. Illustration language:
minimalist, hand-warm sticker-like spot graphic — black hand-drawn line
work + white or pale solid shapes + a few simple geometric shapes;
contours clear but slightly, naturally irregular. For any subject only
its most representative "soul features" are extracted; no realism, no
complex perspective, never a full cartoon illustration. Color =
"achromatic-led + single accent": ground white, rice-white or light
warm white; core = black or deep-gray hand-drawn lines; then ONE single
color extracted from the photo above, converted into a high-brightness,
low-to-mid-saturation pale tint used only as a tiny-area, single-point
accent — pale ice-blue / sky-blue preferred, but it may flexibly become
pale pink, pale green, pale yellow, pale purple or another soft color of
the same character per the photo; never spread evenly over the frame.
Text: minimal editorial intervention only, regenerated entirely from
this photo. Strict exclusions: object-by-object redraw, full scene
redraw, complex backgrounds, filled frames, multiple subjects side by
side, even color distribution, multiple vivid colors, cartoon-element
pile-ups, over-cuteness, cheap sticker feel, stock-illustration feel,
templated poster feel.

> Full prompt text: see the source post's author comment (linked above).

## English translation of the introduction

The set post's caption (Traditional Chinese) says white-space
illustration makes photos feel more. The photo is not redrawn
wholesale; it is split into two ways of seeing for comparison. The top
keeps the photo's subject, colors and the moment's atmosphere with only
a little grading. Below, AI first understands what in the photo is most
worth presenting — a small child's gesture; two people's backs sitting
by the sea; some used film rolls one can't bear to throw away; or just
a small scene seen at a windowsill — then removes all unimportant
detail, keeping only the most recognizable contours, actions and
features, condensed into a very small illustration: black hand-drawn
lines + large white space, secretly borrowing a little color from the
original photo — pale ice-blue, sky blue, pale green, pale pink… but
only a tiny bit. The frame is not filled; the large blank makes the
small illustration in the middle feel like a memory worth treasuring.
The companion reel's caption frames it as turning an ordinary photo
into a page from an art magazine.

## Samples in this repo

- `samples/howe-sound/` — a Howe Sound fjord photo; the
  spot-illustration output for it is pending generation and will be
  logged in that folder's `generations.json` when added. Note: our
  sample outputs are generated **full-frame**, without the poster's
  top/bottom split — the site shows the original separately, on top of
  the output.
