# Cinematic Portraits · 電影級形象照

- **Style slug:** `cinematic-portraits`
- **Creator:** Emerson post (Facebook)
- **Source post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0KFELSP6PRSbCugN6YfAe8hxKNBWFF4KwLvbUNcT6cvyHcuvS3AifRvvg5t25i7gMl&id=61580979040009 — photo set posted **Oct 26, 2025** (set ID `pcb.122109597513032634`). Unlike this catalog's other entries (one style per post), this single post publishes **six complete prompts**, all printed in the caption itself. Its only comment is the author's own, linking his vocus article on the same recipes: https://vocus.cc/article/68fccd7bfd897800019e3ce6
- **Images:** exactly **6** (viewer cycle), saved as `post-01.jpg` … `post-06.jpg` (832×1248), in set order: 1 all-white studio portrait, 2 cinematic poster portrait, 3 black-and-white studio portrait, 4 profile portrait, 5 side-gaze portrait, 6 half-turn brand composition.
- **Collected:** Oct 23, 2026 (via a signed-in browser — see the Source post log in [AGENTS.md](../../AGENTS.md)). This is the Oct 26, 2025 album the loop survey had left unopened; opened at the user's direction, it proved to be a prompt post, and the user chose to archive it.

## The prompt

The caption prints all six prompts in full; the full text lives in
the source post (linked above). What follows is a structural summary.

Shared setup: all six prompts are written for **Google AI Studio
with the Nano Banana model**, and each begins by directing the model
to use the uploader's own uploaded photo as the protagonist — an
identity-preserving restyle of your own portrait, not a poster
treatment of an arbitrary photo.

1. **圖1 — All-white minimalist studio portrait （影樓人像照）:** frontal seated portrait on a pure-white studio ground; all-white outfit; elegant pose, hand on chin, holding a DSLR; soft window light falling on the wall.
2. **圖2 — Cinematic poster portrait （電影海報肖像）:** seated 3/4-angle composition in a dark suit against a dark wall lit by geometric window-light patterns in pink/purple, with rim light on hair and shoulders; deep blacks, vivid pink highlights, magazine-cover framing, subject slightly off-center; no text, logos or watermarks.
3. **圖3 — Black-and-white studio portrait （黑白工作室肖像照）:** subject standing with back to camera, head slightly bowed, side profile partly visible; one clean horizontal beam of side light across the wall; high-contrast B&W with soft gradations and light film grain; specified like a camera shot (full-frame, 85mm, f/1.8, ISO 200, 1/125s), medium waist-up framing.
4. **圖4 — Profile portrait （側臉肖像照）:** side view at a slightly low angle, head raised, eyes closed; deep-blue background and black blazer; a warm spotlight from upper right lays an orange glow on face and neck against cool blue shadow; 85mm shallow-depth portrait-lens look.
5. **圖5 — Side-gaze portrait （側身凝視）:** cinematic B&W studio portrait in profile, head bowed, one hand in a dark jacket pocket; sharp side light sculpting cheekbones, jawline and shoulders; generous negative space; the same camera-style specification as 圖3 (85mm, f/1.8, ISO 200, 1/125s), soft film grain.
6. **圖6 — Half-turn light-and-shadow （半回身光影， brand-image composition):** B&W studio portrait, body half-turned toward camera, chin lifted toward a single key light, eyes gently closed; strong-contrast minimalist composition aimed at brand/fashion advertising use; camera-style specification as in 圖3/圖5.

> Full prompt text: see the source post's caption (linked above).

## English translation of the introduction

The caption (Traditional Chinese) is headed "Six prompts for creating
cinematic profile photos!" Its introduction says magazine-cover and
brand-poster style portraits can be made without spending much: open
Google AI Studio, select the Nano Banana model, upload your own
photo, and paste in one of the six prompts printed below — each one
restyles your photo into a different cinematic studio portrait. A
longer write-up is linked in the author's comment (vocus).

## Samples in this repo

- `samples/jensen-huang/` — a studio portrait of Jensen Huang
  (uploaded by the repo owner, Oct 23, 2026). All six recipes were
  generated from it, one output each: `cinematic-portraits-1.webp`
  … `cinematic-portraits-6.webp`, numbered to match 圖1–圖6 above.
  Generation details (model, timestamp, tokens) are in that folder's
  `generations.json`. The other five sample photos are scenes and
  objects, not portraits, so this entry's samples come from this
  portrait only.
