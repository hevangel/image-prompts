# Split Poster · 雙面海報

- **Style slug:** `split-poster`
- **Creator:** Emerson post (Facebook)
- **Source posts (one style, three postings, all Aug 30, 2026):**
  - Video https://www.facebook.com/reel/1077688844743551 — its author comment (dated Sep 18, 2026) carries the canonical prompt; plays SET A's posters in set order
  - SET A (English caption) https://www.facebook.com/permalink.php?story_fbid=pfbid0WMF1QH8GBNR5NmW4Nj2KgNtpPscMCefxVw1zTk16ikfx96q69NJQ5kXxsn4DYjKNl&id=61580979040009 — set ID `pcb.122149032573032634`, 6 photos
  - SET B (Chinese caption) https://www.facebook.com/permalink.php?story_fbid=pfbid02JZFwRkKcNJwp4Pf81S76DNTPLt1hr69QkJ5u8T1e83SVSXJGJS5n63yMJfw641N3l&id=61580979040009 — set ID `pcb.122149029231032634`, 6 photos of which 4 duplicate SET A examples as separate uploads and 2 are unique
- **Reference images:** 8 distinct examples, each archived once — `post-01.jpg` … `post-06.jpg` are SET A in set order; `post-07.jpg` and `post-08.jpg` are the two examples unique to SET B. Fetched 2026-10-23 via a signed-in browser — see the Source post log in [AGENTS.md](../../AGENTS.md).
- **Collected:** Oct 23, 2026
- **Format break:** this style abandons the family's vertical template — the posters are **7:6 landscape, left/right side-by-side**.

## The 8 archived examples (with printed text)

SET A:
1. `post-01.jpg` — ornate temple front with red doors and lanterns — 「門前一片清風，抬頭便見好天光。」 with red seals
2. `post-02.jpg` — 東區阿婆甜不辣 shop front with scooters — 「老味道，東區日常。一份甜不辣，一桌人情味。」
3. `post-03.jpg` — bearded man in a dark overcoat on classical stone steps — photo side "KEEP MOVING. STAY CURIOUS. BUILD YOUR OWN LIFE.", illustration side "take your time. / the best view comes after the climb."
4. `post-04.jpg` — woman with a bob haircut in profile indoors — "some mornings are for quiet observations."
5. `post-05.jpg` — lone bare tree in a meadow under a dramatic sunset sky — "one tree under changing skies."
6. `post-06.jpg` — Great Sphinx of Giza with the pyramid — "STONE REMEMBERS. WE JUST PASS THROUGH."

Unique to SET B:
7. `post-07.jpg` — Amsterdam canal-corner café "CAFE HANS en GRIETJE" — "Zaterdagmiddag in de stad."
8. `post-08.jpg` — Prague Castle / St. Vitus towers through an archway crowd — "WONDER IS JUST AROUND THE CORNER.", "PRAGUE NOTE" stamp

## The prompt

The companion video's author comment carries the creator's full GPT
prompt (written in Chinese, with a Chinese introduction). The creator
publishes it for followers to copy. The full text lives in that
comment, linked above; what follows is a structural summary.

Each uploaded photo becomes its own independent high-end design
poster, no multi-photo collage. The format is **7:6 LANDSCAPE with
LEFT/RIGHT side-by-side zones of strictly equal width (1:1, 50%
each), explicitly never a top/bottom layout**; the seam is a clean
straight vertical line with no overlap, shadow, gradient, frame or
decorative divider, and both zones are complete rectangles of equal
height. The LEFT zone preserves the original photo in full — identity
features, structure, pose, proportions, real texture, natural light,
original color atmosphere — with only slight professional high-end
grading toward an art-magazine / indie-publication / exhibition feel;
the environment may extend naturally to fit the 7:6 frame, but the
subject is never stretched, distorted, redrawn or replaced. The RIGHT
zone is a naïve folk narrative illustration reinterpreting the left
photo: extract the most recognizable subject, contours, structure,
pose and narrative relationships and recompose them in flat, primitive,
symbolic forms; delete secondary detail; keep only the visual cues
that preserve identity and story so the subject reads at a glance,
with a clumsy, humorous, lived-in folk feel; moderate compression and
generalization allowed, exaggerating the most recognizable features
without strict perspective. Drawing: fully flat 2D with visible
crayon / oil-pastel / colored-pencil / charcoal dry-media grain rubbed
on paper — fiber, smudge, layering, broken strokes, show-through to
the paper base; dark areas unevenly filled; contours keep slight
hand-drawn wobble; no realistic light/shadow, 3D volume, gloss or
smooth vector finish. Color: a concise bright limited palette sampled
from the photo's most vivid, memorable, identity-bearing colors; warm
white / rice white / natural paper as the illustration base; deep
black, charcoal and dark-gray silhouettes carry structure; small spot
colors sampled from the original placed on clothing, sky, plants,
food, building details, signs, vehicles or story focal points; vivid
and clean but not over-saturated; strong light-dark contrast with
small color jumps; avoid grayness, murk, Morandi muting, fluorescent
colors, cheap candy colors and over-powdery pastels. Composition: a
clear narrative center and visual weight via positive/negative shapes,
size rhythm and white space; the subject may sit off-center, be
partly cropped or enlarged, or form a loose triangle with a few
auxiliary elements; generous warm-white breathing room in the right
zone. Text: minimal intervention only — no preset title, place, year,
number or language; one to a few short lines freely distilled from the
photo, set mainly in the right zone in a light, naïve, slightly
print-offset folk editorial type, possibly with a little natural
handwriting; never a neat commercial headline block, information frame
or templated layout. Exclusions: children's-cartoon feel, cute-sticker
feel, chibi figures, photoreal painting, complete tracing of the
photo, smooth vector feel, complex perspective, refined facial
features, over-fine detail, 3D rendering, e-commerce illustration,
infographic style, templated posters.

> Full prompt text: see the source video's author comment (linked above).

## English translation of the introduction

The captions (Chinese and English versions carry the same content) say
there are always a few photos on his phone that make him stop
scrolling — no time to organize them, but he can't delete them either,
because each holds a piece of life. He makes them into a "split-poster"
（雙面海報） for direct comparison: the left side keeps the original
photo, the right side becomes a slightly clumsy, very cute crayon
illustration. Ideal subjects: a window view, unposed family/friend
moments, pets, children, a comforting corner of home, a tree or a side
profile — any photo where you instantly remember what was happening
that day. Life doesn't have to be photographed perfectly for a photo
to become a picture worth keeping.

## Samples in this repo

- Generated outputs for all five sample photos live in the sample
  folders — `samples/howe-sound/`, `samples/book-fair/`,
  `samples/millennium-falcon/`, `samples/concert-stage/` and
  `samples/taco-truck-dog/` — one output file per folder, named after
  this style. Note: our sample outputs are generated **full-frame** —
  the site shows the original separately, on top of the output.
  Generation details (model, timestamp, tokens) are in each folder's
  `generations.json`.
