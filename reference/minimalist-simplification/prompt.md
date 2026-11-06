# Minimalist Simplification

- **Style slug:** `minimalist-simplification`
- **Name (original):** 細節極簡化 (simplifying a photo's details to the extreme)
- **Creator:** Emerson post (Facebook)
- **Source post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0AKh6bQZLq97P3sotX8NahNieMsPo5oD9sjHJMW94NA7nYvfSMYMdzQbgx7DSKCrXl&id=61580979040009 (photo set, posted Nov 6, 2026, 4:00 AM PST; set `pcb.122160902565032634`; 71 likes, 2 comments, 9 shares as displayed Nov 6, 2026). The full prompt is in the post text and identically in the author's first comment. Caught by the daily-update routine as the first post newer than the Nov 5 gif-animation entry.
- **Companion reel:** https://www.facebook.com/reel/1139679271791181 (0:24, "Lazy Day · LouLink", posted Nov 6, 2026, 4:09 AM PST; 40 reactions, 3 comments, 2 shares). Frame-checked 2026-11-06 by sampled seeks: all 11 set photos appear (in slightly shuffled order — the lake appears before the airplane, and the lanterns appear last), plus **one set-external example** at ~0:22–0:24: an aerial view of a large red/orange oval sports stadium with a green pitch, surrounded by city buildings (photo top, minimalist illustration bottom) — noted here, not downloaded. Note: "Lazy Day" is the reel's music-track title, not a coined style name; the style itself is named only by its descriptive phrase, 細節極簡化.
- **Reference images:** 11 (the full set, in set order), `post-01.jpg` … `post-11.jpg`, all 941×1672 (three at 941×1671 — the highest rendition the viewer serves for this set). Every poster is the same layout: top half the original photo, bottom half the same scene reworked as a minimalist flat-vector illustration, with no text. The viewer cycle confirms 11 — stepping Next from photo 11 returned to photo 1.
- **Collected:** Nov 6, 2026 (via the signed-in browser — see the Source post log in [AGENTS.md](../../AGENTS.md)).

## The 11 post images, in set order

1. `post-01.jpg` — colorful canal houses and a boat, Camogli/Burano.
2. `post-02.jpg` — rainy city street seen through a rain-speckled windshield, white car.
3. `post-03.jpg` — young woman with long dark wavy hair in a pink blouse, profile view.
4. `post-04.jpg` — grain silos painted with colorful cartoon faces.
5. `post-05.jpg` — airplane on the tarmac at sunset, passengers with luggage.
6. `post-06.jpg` — surfer riding a big turquoise barrel wave.
7. `post-07.jpg` — lake at twilight with mountains and a tree-covered point.
8. `post-08.jpg` — red paper lanterns strung across a building courtyard.
9. `post-09.jpg` — white passenger ferry approaching a pier on turquoise water.
10. `post-10.jpg` — aerial view of workers drying fish on racks.
11. `post-11.jpg` — green chameleon close-up on a branch.

## The prompt

The full prompt sits at the end of the post text and identically in the author's first comment on the set post. The creator publishes it for followers to copy. The full text lives there, linked above; what follows is a structural summary.

The prompt turns one uploaded photo into a vertical 9:16 comparison poster, processing each uploaded photo independently in upload order and never combining images or reusing subjects, colors, or compositions:

- **Layout.** The canvas is split horizontally into exactly two equal 50% halves. The top half is the original photo untouched — no AI redrawing, distortion, or unnecessary cropping (centered proportionally, padded if needed). The bottom half is the transformation. The halves are separated only by a hairline or minimal gap; no frames.
- **Bottom half — transformation.** A minimalist flat-vector fashion-editorial illustration of the same subject: identity, pose, proportions, recognizable features, essential objects, and spatial relationships preserved; clutter removed; ultra-fine consistent outlines, flowing simplified lines, clean flat color blocks, minimal 1–2-tone shadows, no gradients or realistic textures, one uniform solid background. The subject takes ~55–65% of the lower panel with generous negative space, matching the original's position, orientation, and scale.
- **Colors.** Each photo gets its own palette, analyzed from its subject, pose, key features, mood, and signature colors: 60–70% dominant color, 15–25% contrasting accent, an optional detail color under 5%, plus a separate muted light background; at most four main illustration colors.
- **Method.** Preferably generate the illustration separately and composite it with the untouched original via Python PIL, disclosing possible differences in the top image if that isn't possible.
- **Text rules.** Add nothing: no new objects, scenery, decorations, text, titles, labels, logos, watermarks, or frames. The output is one finished poster per photo, plus a brief subject analysis and HEX palette outside the poster; revisions change only the requested element.

> Full prompt text: see the source post text / author's first comment (linked above).

## English translation of the introduction

Simplifying a photo's details — who knew it could look so designed! This time I tried simplifying the complicated backgrounds, light and shadow, and details in photos, keeping only the subject, lines, and colors, and it turns into a clean, simple image. The top half keeps the original photo, and the bottom half re-presents the same scene with simple lines and soft color blocks. I especially love how simple this style feels — reducing detail appropriately and making the background a bit simpler actually makes it easier to notice the most important subject in the photo. And this prompt automatically picks suitable colors based on each photo's content — whether people, animals, architecture, or scenery, each comes out feeling different. Sometimes, fewer details can make an ordinary photo more flavourful. The complete GPT prompt is in the post text and the first comment — copy it and use it directly. Now it's your turn! If you think it's fun, forward it to the friend who loves taking photos most, and play together! Follow first, so you don't miss the next free prompt — just take it and use it. All prompts are shared for free, and I hope to keep it that way. If you had fun, tap my avatar to visit my homepage and support me with a small sponsorship. Whether or not you sponsor, you're welcome to keep following! I'm super grateful for your comments, shares, and follows all the same. Image source: Pexels.

## How this relates to neighboring entries

Filed as its own entry: it joins the comparison-poster family (see `comparison-poster`, `fresh-illustration`, `color-block-breakout`, `japanese-retro-manga`, `abstract-gouache`, `neon-thick-impasto`, `japanese-hand-drawn`, `translucent-tracing-paper`, `white-space-illustration`, `black-white-drawing`, `european-travel-film` and `reflection-protagonist`) as its minimalist branch — unlike the family's illustrated, painted, or graded branches, the lower half here is a flat-vector fashion-editorial illustration with ultra-fine outlines and at most four colors, and it is the family's first style whose defining rule is stripping the scene down to subject, lines, and color only.

## Samples in this repo

- Generated outputs for all five sample photos live in the sample folders — `samples/howe-sound/`, `samples/book-fair/`, `samples/millennium-falcon/`, `samples/concert-stage/` and `samples/taco-truck-dog/` — one output file per folder, named after this style. Note: our sample outputs are generated **full-frame** — the site shows the original separately, on top of the output, so the generated image is the minimalist flat-vector transformation only, without the source prompt's split-poster layout and without title text. Generation details (model, timestamp, tokens) are in each folder's `generations.json`.
