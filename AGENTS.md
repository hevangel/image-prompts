# AGENTS.md — instructions for AI assistants working in this repo

This repo is a static website (GitHub Pages, served from the repo root) that
collects image generation prompts and shows what each prompt does to sample
photos. There is no build step. `index.html` fetches `index.json` and renders
everything from it — never hardcode entries into the HTML. The page has two
tabs: Samples (left = original photos, right = generated images, filterable
by keyword, prompt, and the model recorded in each sample's `generations.json`,
which the page also fetches) and Prompts (card catalog with a keyword
search; clicking a card opens a detail view with the prompt text extracted
from its `prompt.md` — the `## The prompt` section — plus a copy button on
the left, and the post images + samples for that prompt on the right). Keep
those data flows working when editing the page: manifest-driven, plain
static files, no frameworks.

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

**Only archive posts that have an image set** (rule set by the user
2026-10-22). A style posted only as a reel/video, with no companion
photo set, is skipped — do not file an entry for it. Reels still get
frame-checked when they accompany a set, to catch set-external
examples. (Three reel-only entries were filed before this rule —
`small-illustration`, `out-of-frame`, `clean-illustration`. The first
two were later reconciled with set-bearing postings (Sep 11 and
Sep 12, 2026) and are regular set entries now. `clean-illustration`
never had a set; the user decided on 2026-10-23 to **keep it as its
own entry** — it is the catalog's one standing reel-only exception.)

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

### blue-red-risograph — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Blue-Red Risograph · 藍紅色印刷瑕疵感 (two-color Risograph
  with print-misregistration feel), posted **Oct 20, 2026**.
- **Photo post:** https://www.facebook.com/61580979040009/posts/122157723243032634/
  — multi-photo set, set ID `pcb.122157723243032634`; observed at fetch
  time: ~113 likes. Its first comment carries the full GPT prompt;
  `reference/blue-red-risograph/prompt.md` keeps a structural summary
  plus this link. **No companion reel** was found for this post (the
  same-day "Fresh energy anthem" video is a separate non-prompt post).
- **Images:** exactly **12** photos, all downloaded at 1086×1448 and
  saved as `reference/blue-red-risograph/post-01.jpg` … `post-12.jpg`.
  Subjects, in order: 1 skateboarders at sunset, 2 woman with umbrella
  on a rainy night street, 3 orange tabby cat, 4 lone tree at sunset,
  5 spiral staircase, 6 woman on a round table by a window, 7 white
  wall with blue flower pots, 8 industrial ventilation fans, 9 bearded
  man on a balcony, 10 green bicycle, 11 fisherman in a stormy sea,
  12 man reading a burning newspaper.

### impasto-oil-painting — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Impasto Oil Painting · 厚塗油畫, posted **Oct 17, 2026**.
- **Photo post:** https://www.facebook.com/61580979040009/posts/122157436305032634/
  — multi-photo set, set ID `pcb.122157436305032634`; observed at fetch
  time: ~405 likes, 61 shares. Its pinned comment (7:15 PM) carries
  the full GPT prompt; `reference/impasto-oil-painting/prompt.md`
  keeps a structural summary plus this link.
- **Reel:** https://www.facebook.com/reel/1368785928438401 (637 likes,
  89 shares) — a slideshow of the same set images; no distinct
  video-only image.
- **Images:** exactly **9** photos (the post grid suggested 10 — the
  viewer's Next cycle and a gap-free fbid run confirm 9), all
  downloaded at 1086×1448 and saved as
  `reference/impasto-oil-painting/post-01.jpg` … `post-09.jpg`.
  Subjects with their printed titles, in order: 1 alley crossing
  ("In Between"), 2 blue roadside-stall tables ("Quiet Corners"),
  3 savanna sunset ("GOLDEN HORIZON"), 4 lifeguard tower ("HORIZON"),
  5 tree-lined path ("Passage"), 6 green-door wall ("STILLNESS"),
  7 red convertible at fairy chimneys ("OPEN TERRAIN"), 8 kimono with
  red parasol ("PASSING LIGHT"), 9 black dog with a ball ("FETCH").

### Catalog reconciliation note (2026-10-22)

The profile catalog phase counted the Oct 22 "globe-amaranth /
trolley" set and an "Oct 22 hydrangeas video" as separate unarchived
posts. Both are the **notebook-hand-drawn** post/reel pair already
archived above: globe amaranth and the trolley are its set photos #2
and #3, and "hydrangeas" is the reel's audio title ("I love
hydrangeas" · BlueSKY/Suno AI). When looping the catalog, de-duplicate
by set ID / reel ID before counting a post as new.

### flat-silhouette — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Flat Silhouette · 平面剪影 ("Flat Silhouette Still Life on
  a Dark Ground"), posted **Oct 19, 2026**.
- **Photo post:** https://www.facebook.com/61580979040009/posts/122157583593032634/
  — set ID `pcb.122157583593032634`; observed: 231 likes, 11 comments,
  37 shares. First comment carries the full GPT prompt;
  `reference/flat-silhouette/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/956300350882889 ("Better
  Days · soonflow", 0:28) — mostly the same set images, but its final
  frame shows one extra poster, "BEND" (winding forest road), NOT in
  the photo set and not archived as an image here.
- **Images:** exactly **11** (grid suggested 12; viewer cycle confirms
  11), saved as `reference/flat-silhouette/post-01.jpg` … `post-11.jpg`.
  Subjects with printed titles: 1 wedding couple "VEIL", 2 portrait
  "BREATHE", 3 lighthouse "BEACON", 4 woman with camera "MOMENT",
  5 still life "PALM", 6 cabin "CABIN", 7 swans "SWANS", 8 coffee
  grinder "GRINDER", 9 dried flowers "STEMS", 10 attic room "ATTIC",
  11 waterfall "WATERFALL".

### bright-illustration — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Bright Illustration · 明亮插畫, posted **Oct 16, 2026**
  (marked AI content; example photos credited to Pexels).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122157304473032634/
  — set ID `pcb.122157304473032634`; observed: 648 likes, 28 comments,
  183 shares. First comment carries the full GPT prompt;
  `reference/bright-illustration/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1696345812014944 — cycles
  the same set images; no distinct video-only image.
- **Images:** exactly **10** (viewer cycle), saved as
  `reference/bright-illustration/post-01.jpg` … `post-10.jpg`.
  Subjects with printed titles: 1 puddle reflection "AFTER THE RAIN"
  No. 12, 2 maple leaves on windshield "AFTER THE RAIN" No. 18,
  3 skyscrapers "INDER SKY" (as printed), 4 riverside "RIVERSIDE TOWN"
  No. 34, 5 running track "AFTER RAIN" No. 07, 6 roof drips "AFTER THE
  RAIN" No. 27, 7 underpass "PASSAGE", 8 LPG inspection "INSPECTION",
  9 night-market cook "Night Craft" No. 01, 10 brick wall "SURFACE
  MEMORY".

### small-illustration — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Small Illustration · 小插畫, posted **Oct 16, 2026** as a
  **reel-only** post — https://www.facebook.com/reel/2140751013477384
  (0:14; observed: 437 likes, 15 comments, 57 shares). The author's
  comment on the reel carries the full GPT prompt;
  `reference/small-illustration/prompt.md` keeps a structural summary.
- **No photo set exists for this style** (verified by feed adjacency),
  so this entry has no `post-NN` images; the reel's frames (coastal
  city with Guishan Island, matcha tea scene, two women at a
  waterfront, a road through green hills, a coastal train) are video
  stills, not downloads.
- The creator calls this a fine-tuned variant of an earlier 插畫
  prompt style further down the feed — that earlier style is a
  separate catalog entry, still to be read.

### blueprint-cyanotype — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Blueprint · 藍圖 (cyanotype 藍曬), posted **Oct 16,
  2026** (marked AI content).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122157207279032634/
  — set ID `pcb.122157207279032634`; observed: 103 likes, 2 comments,
  13 shares. First comment (4:47 AM) carries the full GPT prompt;
  `reference/blueprint-cyanotype/prompt.md` keeps a structural summary.
- **Companion videos:** reel https://www.facebook.com/reel/1094442029872722
  ("Brew · Luminary Lofi & Jazz Cafe") cycles the set posters; a short
  "dog" video post (photo-form permalink, fbid 122157208755032634)
  shows only set photo #1's poster. No distinct video-only example.
- **Images:** exactly **10** (grid suggested 11; viewer cycle confirms
  10), saved as `reference/blueprint-cyanotype/post-01.jpg` …
  `post-10.jpg`. Subjects: 1 hands cradling a Labrador, 2 Taichung
  Station canopy, 3 rainy bench through wet glass, 4 boat on a calm
  lake, 5 angle grinder sparks, 6 scaffolding workers, 7 butterfly on
  blossoms, 8 cat on a fence, 9 bearded profile at a window,
  10 Parthenon under scaffolding. No printed titles (the prompt
  forbids lettering). Note: an earlier side reading mis-recorded this
  style as reel-only; it has a full photo set, archived here.

### woven-tapestry — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Woven Tapestry · 織 ("Visual Memory Extraction × Minimal
  Jacquard Tapestry"), photo set posted **Oct 14, 2026**, companion
  reel **Oct 15, 2026** (marked AI content; photos credited to Pexels).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122157012969032634/
  — set ID `pcb.122157012969032634`; observed: 144 likes, 10 comments,
  19 shares. First comment carries the full GPT prompt (same caption
  and prompt as the reel); `reference/woven-tapestry/prompt.md` keeps
  a structural summary.
- **Reel:** https://www.facebook.com/reel/2279102152936318 — its 4
  examples all duplicate set photos; no distinct video-only example.
- **Images:** exactly **9** (feed grid suggested 7; viewer cycle
  confirms 9), saved as `reference/woven-tapestry/post-01.jpg` …
  `post-09.jpg`. Subjects: 1 fisherman with net and coracle boat,
  2 angle grinder sparks, 3 mountain sunset behind a fence, 4 foggy
  night street from a car, 5 socket-wrench set, 6 workers painting
  steel pipes, 7 night intersection with cyclists, 8 Coca-Cola bottle
  in dry leaves, 9 vintage sofa before baled cardboard. No titles.

### rough-brushed-lines — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Rough Brushed Lines · 粗糙手抹線條, posted **Oct 14,
  2026** (marked AI content; photos credited to Pexels).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122156855169032634/
  — set ID `pcb.122156855169032634`; observed: 139 likes, 3 comments,
  22 shares. First comment carries the full GPT prompt;
  `reference/rough-brushed-lines/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1940504943576247 — its 9
  examples all appear in the set. Title variant: the aurora poster
  reads "STAY VISIBLE" in the set but "STAY FREE" in the reel.
- **Images:** exactly **12** (grid suggested 13; viewer cycle confirms
  12), saved as `reference/rough-brushed-lines/post-01.jpg` …
  `post-12.jpg`. Subjects with printed titles: 1 tape dispenser "PACK
  WITH CARE", 2 armchair "SIT LATER", 3 pink-streaked portrait "BE
  BOLD", 4 rock climber "KEEP CLIMBING", 5 tennis ball "STAY IN",
  6 iced coffee "SIP SLOW", 7 yellow Fiat 500 "PARK CAREFULLY",
  8 sailboat "KEEP SAILING", 9 rotary telephone "STAY IN TOUCH",
  10 aurora shore "STAY VISIBLE", 11 pour-over coffee "FRESH COFFEE",
  12 flower bouquet "HANDLE GENTLY". Each also has a vertical
  micro-caption on its right edge.

### woodcut-print — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Woodcut Print · 木刻版畫, posted **Oct 12, 2026**
  (marked AI content; photos credited to Pexels).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122156706693032634/
  — set ID `pcb.122156706693032634`; observed: 313 likes, 18 comments,
  58 shares. First comment carries the full GPT prompt;
  `reference/woodcut-print/prompt.md` keeps a structural summary.
- **Companion videos:** reel https://www.facebook.com/reel/2076539576310270
  and a companion permalink post whose player resolves to the same
  reel — both cycle set posters; no distinct video-only example.
- **Images:** exactly **11** (grid suggested 12; viewer cycle confirms
  11), saved as `reference/woodcut-print/post-01.jpg` … `post-11.jpg`.
  Subjects with printed titles: 1 vinyl tonearm "Vinyl Moments",
  2 screen-repair workers "Working Days", 3 sign-painting shop "Sign
  Painting", 4 cold-noodle stall 涼麵, 5 scooter alley "Alley Days",
  6 father and daughter "Together Always", 7 snowy forest "Winter
  Path", 8 street-food stall 豆簽, 9 red umbrella couple "Rainy Day",
  10 newsstand 報紙, 11 Vietnamese bookstore "Hiệu Sách".

### paper-cut — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** High-Saturation Paper-Cut · 高彩度剪紙, posted **Oct 11,
  2026** (marked AI content; photos credited to Pexels).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122156514825032634/
  — set ID `pcb.122156514825032634`; observed: 187 likes, 17 comments,
  32 shares. First comment carries the full GPT prompt;
  `reference/paper-cut/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/2615756965524682 ("Cozy ·
  Elgafar") — this style's companion reel (earlier presumed a
  non-prompt music video; it is not). Its frames duplicate set
  posters; no distinct video-only example.
- **Images:** exactly **10** (grid suggested ~11; viewer cycle
  confirms 10), saved as `reference/paper-cut/post-01.jpg` …
  `post-10.jpg`. Subjects: 1 woman with polka-dot mug, 2 bald cypress
  in water, 3 salon reader, 4 rice paddies at sunset, 5 Malaysian post
  boxes, 6 fencers, 7 saxophone busker, 8 tractor aerial, 9 forest
  stream, 10 wheel cakes on a griddle. No printed titles (the prompt
  forbids text).

### retro-film — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Retro Film · 復古膠片 (CMYK halftone editorial poster),
  posted **Oct 10, 2026** (marked AI content). **Posted twice:** the
  11:40 PM posting (set `pcb.122156406711032634`,
  https://www.facebook.com/61580979040009/posts/122156406711032634/)
  and a duplicate 11:36 PM posting (set `pcb.122156405523032634`,
  https://www.facebook.com/61580979040009/posts/122156405523032634/)
  carry the same 11 posters in different order — archived once, from
  the 11:40 PM posting.
- **Reel:** https://www.facebook.com/reel/1980843825941127 ("Warm Bowl
  · Lofi") — this style's companion reel and itself a prompt post
  (earlier presumed a non-prompt music video; it is not). Its frames
  duplicate set posters; no distinct video-only example.
- **Images:** exactly **11** (viewer cycle), 9:16 posters, saved as
  `reference/retro-film/post-01.jpg` … `post-11.jpg`. Subjects with
  printed titles: 1 mother and daughter "Brighter Days", 2 tea set
  "Tea Moments", 3 woman with cat "Same Companions", 4 family meal
  "Good Meals", 5 colorful street "COLOR ALLEY", 6 camper van "DRIFT",
  7 metro stairs "HIGHER THINGS AHEAD", 8 forest steps "HIGHER THINGS
  AHEAD", 9 boiling kettle "GOOD BOIL", 10 red-sail ship "DRIFT",
  11 tea-hill road "WINDING ROAD".

### out-of-frame — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Out of Frame · 視覺越界 (visual boundary-crossing),
  posted **Oct 10, 2026** as a **reel-only** post —
  https://www.facebook.com/reel/1089769483661199 (0:16; observed: ~2K
  likes, 121 comments, 379 shares — his most-shared post in this
  stretch). The reel's author comment ("完整 Prompt 分享") carries
  the full GPT prompt; `reference/out-of-frame/prompt.md` keeps a
  structural summary.
- **Verified no photo set exists** (surrounding feed re-rendered and
  Photos-tab scan of Oct 10–11 uploads, which are the retro-film
  posters only), so this entry has no `post-NN` images. Reel frames
  observed: rainy night window, red wet bench, Taiwan post boxes,
  feet in Crocs in surf, scooter alley, night cable-stayed bridge,
  beef noodle bowl, pour-over coffee.

### mediterranean-poster — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Mediterranean Travel Poster · 老電影裡地中海旅行海報,
  posted **Oct 9, 2026** (marked AI content).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122156273619032634/
  — set ID `pcb.122156273619032634`; observed: 213 likes, 14 comments,
  50 shares. Author comment carries the full GPT prompt;
  `reference/mediterranean-poster/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/2700576800401148 — all 10
  frames duplicate set images (shuffled); no distinct example.
- **Images:** exactly **10** (viewer cycle), saved as
  `reference/mediterranean-poster/post-01.jpg` … `post-10.jpg`.
  Subjects: 1 convertible driver in the rear-view mirror, 2 Jeep with
  a dog at the rear window, 3 VW camper van, 4 street food stall,
  5 red café chairs, 6 cliff coast road at sunset, 7 marina,
  8 colorful old houses, 9 snowy fishing village, 10 aerial tropical
  beach. No printed titles (the prompt specifies none).

### one-line-contour — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** One-Line Contour · 只用幾條線 (minimal continuous
  contour), photo set posted **Oct 9, 2026, 12:11 AM**, reel 12:23 AM
  (marked AI content).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122156100633032634/
  — set ID `pcb.122156100633032634`; observed: 110 likes, 2 comments,
  12 shares. **This set never appears in the profile feed render** —
  it was found via the profile Photos tab. Author comment carries the
  full GPT prompt (identical on set and reel);
  `reference/one-line-contour/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/4488400188140957 — the same
  9 posters shuffled; no distinct example.
- **Images:** exactly **9** (viewer cycle), saved as
  `reference/one-line-contour/post-01.jpg` … `post-09.jpg`. Subjects
  with their one spot color: 1 beach woman at sunset (soft blue),
  2 umbrella couple on a mountain road (blue), 3 fisherfolk mending
  nets (teal), 4 beach couple (pale blue), 5 stairs runner (coral
  red), 6 surfer (teal), 7 Korean street (red), 8 brick carrier
  (terracotta), 9 laundry lines (orange). No printed titles.

### clean-illustration — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Clean Illustration Poster (no coined title) — a
  **retrospective roundup** posted **Oct 8, 2026** as a reel-only
  post: https://www.facebook.com/reel/4442563715996841 (1.1K likes,
  31 comments, 240 shares). The reel's author comment carries the
  full GPT prompt (written in Chinese);
  `reference/clean-illustration/prompt.md` keeps a structural summary.
- **No photo set was posted with this reel** (feed segment and
  Photos-tab scan of Oct 8 uploads checked), so this entry has no
  `post-NN` images. Reel examples: street-food vendor, Taipei alley
  corner, fabric shop, beef soup, set meal, Taipei 101 sunset,
  tandoori chicken, shaved ice. **Open question:** the caption says
  the method is an earlier favorite — if the loop finds its original
  posting further down the feed, reconcile it with this entry.
- **Reconciliation (2026-10-23, at the user's request to download the
  reel's pictures):** frame-by-frame seeking verified the reel holds
  **9** posters, in this order: STREET KITCHEN No. 09, TAIPEI STREET
  CORNER No. 01, CHICKEN RICE No. 07, FABRIC STORY No. 01, BEEF SOUP
  No. 01, BRAISED PORK SET No. 37, TAIPEI CITY SUNSET, TANDOORI
  CHICKEN No. 07 (not No. 02 as first sampled), PEANUT ICE No. 08.
  Six of them (all but Street Corner, Fabric Story and City Sunset)
  are the identical image files of the Aug 31, 2026
  `comparison-poster` set — downloaded and md5-verified byte-identical
  to `reference/comparison-poster/post-01.jpg` … `post-06.jpg` — so
  the roundup re-presents that style and nothing was duplicated into
  this entry. The other three exist only as video frames; the reel
  offers no download and frames cannot be saved as files with the
  browser tools. **User decision (2026-10-23): keep
  `clean-illustration` as its own entry** — the catalog's one
  standing reel-only exception to the set-only rule.

### dynamic-field-print — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Dynamic Field Print · 砂紙顆粒 (the prompt's lower half
  is a "surreal, minimalist printmaking composition"), photo set
  posted **Oct 6, 2026**, reel **Oct 7, 2026** (marked AI content).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122155818213032634/
  — set ID `pcb.122155818213032634`; observed: 204 likes, 10 comments,
  34 shares. Author comment carries the full GPT prompt;
  `reference/dynamic-field-print/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1842071343643150 （冷萃） —
  identical prompt in its author comment (verified); its frames are
  the set's 10 distinct posters, shuffled.
- **Images:** **11 slots, 10 distinct posters** (viewer cycle), saved
  as `reference/dynamic-field-print/post-01.jpg` … `post-11.jpg`.
  Positions 3 and 9 are the same "AHEAD" poster uploaded twice inside
  the set (byte-identical, md5-verified). Titles: 1 "DAILY",
  2 "WAIT", 3 "AHEAD", 4 "FLOW", 5 "STILL", 6 "WALK", 7 "SPAN",
  8 "PLATFORM", 9 "AHEAD" (duplicate), 10 "JUNCTION", 11 "ONWARD".

### ink-starved-geometry — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Ink-Starved Geometry · 缺墨幾何, photo set posted
  **Oct 8, 2026, 12:47 AM**, reel 1:27 AM (marked AI content).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122155961667032634/
  — set ID `pcb.122155961667032634`; observed: 309 likes, 14 comments,
  82 shares. **This set never appears in the feed render** — found via
  the Photos tab. Author comments on set and reel carry the identical
  full GPT prompt (verified);
  `reference/ink-starved-geometry/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/2311854202993771 — sampled
  frames all duplicate set posters.
- **Images:** exactly **10** (viewer cycle), saved as
  `reference/ink-starved-geometry/post-01.jpg` … `post-10.jpg`.
  Subjects with titles in each photo's own language: 1 pink salt flat
  "Sessizlikte", 2 Vietnamese flower sellers, 3 rubble walker (Arabic
  title), 4 Taipei scooters "CITY LANE", 5 Issyk-Kul larch and cattle,
  6 Shinjuku alley 「新宿」, 7 Pamukkale terraces, 8 snowy mountain
  road, 9 Moldovan rock monastery, 10 Manhattan through a fence.

### asymmetric-enlargement — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Asymmetric Enlargement · 不對稱放大 (the prompt's lower
  half is an "Editorial Character Poster"), photo set posted
  **Oct 6, 2026, 12:32 AM**, reel 12:42 AM (marked AI content).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122155657089032634/
  — set ID `pcb.122155657089032634`; observed: 1.4K likes, 73 comments,
  323 shares. Author comment carries the full GPT prompt;
  `reference/asymmetric-enlargement/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/964276616156274 — identical
  prompt in its author comment (verified); its 10 segments are exactly
  the set's 10 posters.
- **Images:** exactly **10** (viewer cycle), saved as
  `reference/asymmetric-enlargement/post-01.jpg` … `post-10.jpg`.
  Titles: 1 "JUST SHOOT", 2 "HIGHER PERSPECTIVE", 3 "AFTER THE RAIN",
  4 "SAME ROADS" (night road), 5 "NEXT JOURNEY", 6 "WAIT FOR THE
  WAVE", 7 "SAME ROADS" (platform — same title, different poster),
  8 "QUIET WALK", 9 "SAME GROUND", 10 "DRIFT INTO MORNING".

### fine-line-poster — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Fine-Line Poster · 簡單線條 (no coined style title;
  distinct from `one-line-contour` — fragile broken fine lines, tiny
  subject in vast warm-white space, one handwritten phrase per
  poster), photo set posted **Oct 5, 2026, 12:20 AM**, reel ~12:28 AM
  (marked AI content).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122155501629032634/
  — set ID `pcb.122155501629032634`; observed: 568 likes, 34 comments,
  103 shares. Located via the Photos tab. Author comment carries the
  full GPT prompt; `reference/fine-line-poster/prompt.md` keeps a
  structural summary.
- **Reel:** https://www.facebook.com/reel/2512770495865794 — identical
  prompt in its author comment (verified); sampled frames all
  duplicate set posters.
- **Images:** exactly **11** (viewer cycle), saved as
  `reference/fine-line-poster/post-01.jpg` … `post-11.jpg`. Subjects:
  Hualien coast road, mother and child, basketball hoop, sunset ship,
  "NO BALL GAMES" seats, laundromat, myna birds, American diner, park
  bicycle, night market, harbor fisherman — each with its handwritten
  phrase quoted in prompt.md.

### vintage-lines — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Vintage Lines · 復古線條 (set caption) = 老廣告插圖
  (reel caption; same style, two labels), photo set posted
  **Oct 3, 2026, 10:54 PM**, reel 11:02 PM (marked AI content).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122155318635032634/
  — set ID `pcb.122155318635032634`; observed: 197 likes, 21 comments,
  46 shares. Author comment carries the full GPT prompt;
  `reference/vintage-lines/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1701480021983673 — identical
  prompt in its author comment (verified); sampled frames all
  duplicate set posters.
- **Images:** exactly **10** (viewer cycle), saved as
  `reference/vintage-lines/post-01.jpg` … `post-10.jpg`. Subjects:
  dog in a car window, gelato cart, Amsterdam canal bicycle,
  Taiwanese breakfast shop, salt-and-pepper chicken stall, São Paulo
  bus stop, fruit-cup stall, espresso machine, mango sticky rice
  stall, auto repair workshop. No printed poster titles.

### storytelling-collage — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Storytelling Collage (no coined title; the prompt's
  lower half is an abstract architectural illustration / geometric
  collage), photo set posted **Oct 2, 2026, 9:58 PM**, reel 10:17 PM
  (marked AI content). **Never surfaced in any feed render — found
  via the Photos tab.**
- **Photo post:** https://www.facebook.com/61580979040009/posts/122155110993032634/
  — set ID `pcb.122155110993032634`; observed: 407 likes, 29 comments,
  119 shares. Author comment carries the full GPT prompt;
  `reference/storytelling-collage/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1614528670210408 — identical
  prompt in its author comment (verified); every example sampled is
  one of the 10 set posters.
- **Images:** exactly **10** (viewer cycle), saved as
  `reference/storytelling-collage/post-01.jpg` … `post-10.jpg`.
  Titles/numbers: 1 "EVERYDAY TAIWAN" No. 09 (laundry), 2 "TAIWAN
  ALLEY STORIES" No. 02, 3 "TAIWAN CITY SCENES" No. 10 (gas station),
  4 "EVERYDAY TAIWAN" No. 03 (noodle boys), 5 "TAIWAN DAILY SCENES"
  No. 08 (staircase), 6 "TAIWAN STREET MEMORIES" No. 05, 7 "GOOD
  DAYS" No. 14 (newspaper), 8 "TAIWAN NEIGHBORHOOD SHOP" No. 01,
  9 "TAIWAN DAILY SCENES" No. 13 (harbor bench), 10 "TRAVEL FURTHER"
  No. 07 (Maya temple).
- **Relation to `clean-illustration`:** closest relative yet (same
  editorial family, numbered posters, off-white grounds) but the
  prompts are NOT identical — the Oct 8 original-posting question
  stays open; do not merge.

### pixel-art — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Atmospheric Pixel Art · 像素, photo set posted
  **Oct 2, 2026, 12:11 AM**, reel 12:17 AM (marked AI content).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122154914817032634/
  — set ID `pcb.122154914817032634`; observed: 218 likes, 12 comments,
  39 shares. Author comment carries the full GPT prompt;
  `reference/pixel-art/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1481680150675928 — identical
  prompt in its author comment (verified); its 10 segments are the
  set's posters, shuffled.
- **Images:** exactly **10** (viewer cycle), saved as
  `reference/pixel-art/post-01.jpg` … `post-10.jpg`. Subjects:
  basketball hoop, child washing dishes, coastal path, sea-wall cart
  ("PRINCE" boat), central market entrance, waterfront fisherman,
  red sedan, snowy Korean temple, ramen cook, traffic cones at
  sunset — each with its printed English title/tagline.

### patchwork-embroidery — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Patchwork Embroidery · 拼布＋手縫刺繡, photo set posted
  **Sep 30, 2026, 11:50 PM**, reel 11:56 PM (marked AI content).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122154715113032634/
  — set ID `pcb.122154715113032634`; observed: 112 likes, 9 comments,
  20 shares. Author comment carries the full GPT prompt;
  `reference/patchwork-embroidery/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1614923620129429 — identical
  prompt in its author comment (verified); every frame sampled
  duplicates a set photo.
- **Images:** exactly **9** (viewer cycle), saved as
  `reference/patchwork-embroidery/post-01.jpg` … `post-09.jpg`.
  Subjects: welder, cardboard cart, scooter crowd, two broken
  iPhones, four children holding hands, autumn lake, hot-air
  balloons, autumn road, towed airliner. No printed titles (tiny
  fabric labels only).

### ink-rubbing — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Ink Rubbing · 拓印， photo set posted **Sep 29, 2026,
  11:28 PM**, reel 11:37 PM (marked AI content). Found via the
  Photos tab.
- **Photo post:** https://www.facebook.com/61580979040009/posts/122154490767032634/
  — set ID `pcb.122154490767032634`; observed: 186 likes, 8 comments,
  46 shares. Unusually, the author comments on both posts are the
  full English prompt alone, with no Chinese introduction;
  `reference/ink-rubbing/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/4427798114201466 — identical
  prompt in its author comment (verified); all 8 set posters appear
  in the reel, shuffled.
- **Images:** exactly **8** (viewer cycle; the grid estimate of 9
  overcounted by one), saved as `reference/ink-rubbing/post-01.jpg`
  … `post-08.jpg`. Titles: 1 「仰望」 "GAZE AT THE SKY", 2 「旅途之光」
  (train cleaner), 3 mother and baby 「ふれる、のこる」, 4 shrine bench
  「やすらぎ」, 5 market worker 「市井煙火」, 6 autumn road (same source
  photo as patchwork-embroidery #8), 7 Korean guard child
  「궁궐의 아이」, 8 "HEART TRACE" (heart hands).
- **Fetch note:** the set's individual photo pages repeatedly tripped
  a platform safety check (the pages embed the prompt text as image
  descriptions). Photos 4–8 were downloaded through the set post's
  photo viewer instead; no description text was read or acted on.

### paper-collage-lines — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Paper Collage Lines · 紙張拼貼＆手繪線條 (mixed-media
  paper collage), photo set posted **Sep 28, 2026, 9:32 PM**, reel
  9:42 PM (marked AI content).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122154214911032634/
  — set ID `pcb.122154214911032634`; observed: 227 likes, 16 comments,
  67 shares. Author comment carries the full GPT prompt;
  `reference/paper-collage-lines/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1092024906635150 — identical
  prompt in its author comment (verified). Reel check: the
  camera-and-roses frame in the reel is set photo #9 (which never
  rendered in the viewer during the fetch; verified from the
  downloaded file) — the reel adds no distinct example.
- **Images:** exactly **11** (viewer cycle), saved as
  `reference/paper-collage-lines/post-01.jpg` … `post-11.jpg`.
  Subjects: café window, coffee glasses + Shin-chan, melon truck,
  woman + Shiba, Yufuin street, rainy-night crossing, cheese hot-dog
  stall, red boat among icebergs, film camera + Kodak Gold 200 +
  roses, hay bales, fireworks. No printed titles.

### white-model — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** White Model · 白色模型, photo set posted **Sep 27, 2026,
  8:28 PM**, reel 8:39 PM (marked AI content). **Posted twice:** an
  earlier set the same evening (8:18 PM, `pcb.122154006729032634`,
  Chinese-language prompt) holds 10 photos, all duplicates of this
  set's posters — archived once, from the 8:28 PM posting.
- **Photo post:** https://www.facebook.com/61580979040009/posts/122154009501032634/
  — set ID `pcb.122154009501032634`; observed: 106 likes, 13 comments,
  24 shares. Author comment carries the full GPT prompt;
  `reference/white-model/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/2175547223391268 — identical
  prompt in its author comment (verified); sampled frames all
  duplicate set posters.
- **Images:** exactly **12** (viewer cycle), saved as
  `reference/white-model/post-01.jpg` … `post-12.jpg`. Titles:
  1 "A SINGLE TREE", 2 "A QUIET MELODY", 3 "CONNECTIONS IN THE SKY",
  4 "TRACE", 5 "PASSAGE", 6 "A LONGER SHORE", 7 "ARCHITECTURE IN
  TIME", 8 "BRANCH", 9 "THE RIDGE", 10 "MOVING HAPPINESS" (Coca-Cola
  truck), 11 "BLOOM", 12 "STILL HERE".

### paper-carving — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Paper Carving · 紙雕 (layered paper-cut relief —
  distinct from `paper-cut`'s flat collage and from
  `paper-collage-lines`), photo set posted **Sep 26, 2026, 8:17 PM**;
  companion video posted 8:07 PM, ten minutes BEFORE the set (first
  such case in this archive).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122153853081032634/
  — set ID `pcb.122153853081032634`; observed: 322 likes, 30 comments,
  65 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/paper-carving/prompt.md` keeps a structural summary.
- **Video:** https://www.facebook.com/reel/1380790400755034 —
  identical prompt in its author comment (verified); sampled frames
  all duplicate set posters.
- **Images:** exactly **12** (viewer cycle), saved as
  `reference/paper-carving/post-01.jpg` … `post-12.jpg`. Titles:
  1 "COASTAL SERENITY", 2 "MOUNTAIN RAILWAY", 3 "ISLAND LIGHT",
  4 "THE SEA AHEAD", 5 "OFFSHORE HORIZON", 6 "POSITANO",
  7 "MALDIVES", 8 "VIENNA", 9 "A WALK IN LIGHT", 10 "OCEAN
  MEMORIES", 11 "RADIANT HORIZON", 12 "RURAL HORIZON".

### bento-box — Emerson post (fetched 2026-10-22 via signed-in browser; catch-up from the Sep 26–29 range)

- **Creator:** Emerson post (same profile as above).
- **Style:** Japanese Bento · 日式便當 (Bento-fication ／飯盒化）, photo
  set posted **Sep 28, 2026, 10:21 PM** (marked AI content). No
  companion reel observed. **Correction to the batch 9 record:** the
  Sep 26–29 "high-end design poster" family is FOUR distinct styles
  (ink-rubbing, paper-collage-lines, white-model, paper-carving) plus
  this one — it was missed by that batch and caught up here.
- **Photo post:** https://www.facebook.com/61580979040009/posts/122154223575032634/
  — set ID `pcb.122154223575032634`; observed: 28 likes, 1 comment,
  5 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/bento-box/prompt.md` keeps a structural summary.
- **Images:** exactly **6** (viewer cycle), saved as
  `reference/bento-box/post-01.jpg` … `post-06.jpg`. All six examples
  apply the treatment to company logos / products: 1 NVIDIA,
  2 TSMC, 3 Cathay Financial Holdings, 4 Samsung 990 SSD,
  5 MediaTek, 6 Novo Nordisk.

### perler-beads — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Perler Beads · 拼豆， photo set posted **Sep 25, 2026,
  7:13 PM in the public group 快樂學習AI** (no profile-timeline twin
  posting exists); reel on the profile Sep 25, 7:36 PM. The set-only
  rule's first application: the video alone would have been skipped,
  but a companion set exists (in a group), so it is archived.
- **Photo set:** https://www.facebook.com/groups/346855692144727/?multi_permalinks=3526097814220483
  — set ID `pcb.3526097814220483`; observed: 48 likes, 4 comments,
  14 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/perler-beads/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1065929642975962 — frame
  check: the reel ADDS ONE distinct example not in the set (a vintage
  train-window poster titled 「舊窗」); 9 of 11 set posters also
  sighted.
- **Layout:** this style's posters are LEFT/RIGHT panels (photo left,
  bead version right), not top/bottom.
- **Images:** exactly **11** (viewer cycle), saved as
  `reference/perler-beads/post-01.jpg` … `post-11.jpg`. Titles:
  1「窗邊閱讀」, 2「柔色步調」, 3「城市節奏」, 4「午后片刻」,
  5「剛好的日常」, 6「夕照逐浪」, 7「暖光相伴」, 8「復古慢行」,
  9「窗邊橘貓」, 10「雨中亮色」, 11「紅色身影」.

### soft-focus — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Blurry Soft Focus · 模糊柔焦， photo set posted **Sep 24,
  2026, 7:51 PM** (marked AI content); the set never rendered in any
  feed pass and was found via a profile search for 模糊柔焦. The same
  set was cross-posted the same evening to several public AI groups
  (noted, not processed). Its reel 2318064765624333 was posted TWICE
  on the profile: Sep 24, 7:54 PM and again 11:53 PM.
- **Photo post:** https://www.facebook.com/61580979040009/posts/122153440779032634/
  — set ID `pcb.122153440779032634`; observed: 80 likes, 3 comments,
  8 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/soft-focus/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/2318064765624333 — sampled
  frames all duplicate set posters.
- **Images:** exactly **9** (viewer cycle), saved as
  `reference/soft-focus/post-01.jpg` … `post-09.jpg`.

### colored-paper-collage — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Colored-Paper Collage · 色紙拼接， photo set posted
  **Sep 24, 2026, 2:06 AM** (marked AI content), reel 2:09 AM.
- **Photo post:** https://www.facebook.com/61580979040009/posts/122153271177032634/
  — set ID `pcb.122153271177032634`; observed: 145 likes, 5 comments,
  28 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/colored-paper-collage/prompt.md` keeps a structural
  summary.
- **Reel:** https://www.facebook.com/reel/1090167963421267 — plays
  the 11 set posters in set order; no distinct example.
- **Images:** exactly **11** (viewer cycle), saved as
  `reference/colored-paper-collage/post-01.jpg` … `post-11.jpg`.
  Every poster carries the tagline "SAME PLACES DIFFERENT STORIES."
  Titles: 1 "City Moments", 2 "Everyday Routes", 3 "Colors Bring
  Closer", 4 "On the Move", 5 "Hot Pot", 6 "On New Roads",
  7 "Coffee Moments", 8 "Everyday Journeys", 9 "Urban Geometry",
  10 "Waiting Moments", 11 "Plants Brighten Days".
- **Set-check note:** nothing in this batch was skipped under the
  set-only rule — every candidate checked (perler video, both
  "Espresso at 2:17" posts, the "August Through the Arcade" video,
  the Sep 22 videos) turned out to have an image set. The batch-9
  "watercolor-travel posters" sighting is resolved: it is the
  already-archived impasto-oil-painting set.

### lingering-afterglow — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Lingering Afterglow · 餘韻， photo set posted **Sep 22,
  2026, 11:10 PM** (marked AI content), reel 11:13 PM. The same set
  was cross-posted the same evening to 快樂學習AI and Gemini AI
  Google groups (noted, not downloaded).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122153104767032634/
  — set ID `pcb.122153104767032634`; observed: 81 likes, 1 comment,
  26 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/lingering-afterglow/prompt.md` keeps a structural
  summary.
- **Reel:** https://www.facebook.com/reel/2475457529645335 — plays
  the 11 set posters in set order; no distinct example.
- **Images:** exactly **11** (viewer cycle), saved as
  `reference/lingering-afterglow/post-01.jpg` … `post-11.jpg`.

### photocopier-print — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Photocopier Print · 影印機版畫， photo set posted
  **Sep 22, 2026, 3:20 AM** (marked AI content); companion video is
  the "Floral breeze sessions" post (651 likes) — the batch-10
  set-check that found this set. The set was cross-posted to several
  public groups (noted, not downloaded).
- **Photo post:** https://www.facebook.com/61580979040009/posts/122152964481032634/
  — set ID `pcb.122152964481032634`; observed: 139 likes, 3 comments,
  53 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/photocopier-print/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1584016793522458 — plays
  set posters in shuffled order; no distinct example.
- **Set quirk:** photos #4 and #8 are two different posters from the
  SAME autumn-park source photo (different print text); both are
  distinct uploads and both are archived.
- **Images:** exactly **11** (viewer cycle), saved as
  `reference/photocopier-print/post-01.jpg` … `post-11.jpg`.

### food-poster — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Food Poster · 美食海報 — a **templated** prompt (Brand /
  Food / Headline / Physical Interaction 纏繞・斷裂・滴流・剝離 /
  Accent Color / Product Name / Price; 9:16 standalone posters, no
  source-photo half), photo set posted **Sep 21, 2026**. A group
  duplicate of the set was noted, not downloaded.
- **Photo post:** https://www.facebook.com/61580979040009/posts/122152798947032634/
  — set ID `pcb.122152798947032634`; observed: 83 likes, 5 comments,
  37 shares. Author comment carries the full templated prompt (in
  Chinese); `reference/food-poster/prompt.md` keeps a structural
  summary.
- **Video:** https://www.facebook.com/reel/4532912850308323 — one
  asset posted twice on Sep 21 (reel post + 简单的幸福 video post);
  plays set posters shuffled and ADDS two distinct examples not in
  the set （海月 SUSHI KAIGETSU nigiri poster; ONIGIRIYA "RICE"
  onigiri poster) — noted in the entry, not archived.
- **Images:** exactly **18** (viewer cycle), saved as
  `reference/food-poster/post-01.jpg` … `post-18.jpg`. Prices in the
  entry are as printed in the archived files (verified at full
  resolution for #10 $8.90 and #11 $3.50).

### porcelain-collage — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Porcelain Collage · 青花碎瓷拼貼， set posted **Sep 20,
  2026 in the 快樂學習AI group** — the style exists only as group
  sets (no profile set); profile companions are a reel and a video
  post the same day. A duplicate set in the AI好好用 group was noted,
  not downloaded.
- **Photo set:** https://www.facebook.com/groups/346855692144727/permalink/3519543661542565
  — set ID `pcb.3519543661542565`; observed: 34 likes, 3 comments,
  2 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/porcelain-collage/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/908654098734089 — plays set
  posters shuffled; ADDS at least one distinct example (aerial
  night-city poster in dark shards with gold marbling), plus an
  apparently distinct skyline cover frame — noted, not archived.
- **Resolution of the batch-11 lead:** the Sep 20 video is this NEW
  style, not a companion of lingering-afterglow / photocopier-print.
- **Images:** exactly **10** (viewer cycle), saved as
  `reference/porcelain-collage/post-01.jpg` … `post-10.jpg`.

### black-line-drawing — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Black Line Drawing · 手繪黑色線條， photo set posted
  **Sep 18, 2026**; a two-zone-family sibling of lingering-afterglow,
  drawn in black lines + wash on xuan paper with an ice-blue accent.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0zrgcVuTDY4yRBeGmF1B74YHycdkHVR46FWYvcASnqdzJdZjtNWmJXb1ieuJjjBkil&id=61580979040009
  — set ID `pcb.122152432701032634`; observed: 108 likes, 14 comments,
  34 shares. The prompt is in the companion reel's author comment;
  `reference/black-line-drawing/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1110466301373525 — plays
  the 11 set posters in set order; no distinct example.
- **Images:** exactly **11** (viewer cycle), saved as
  `reference/black-line-drawing/post-01.jpg` … `post-11.jpg`.

### geometric-poster — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Geometric Poster · 抽象幾何 (no style name in the
  caption), set posted **Aug 19, 2026 in the 快樂學習AI group**;
  presented by a profile reel on Sep 18, 2026. A duplicate set in the
  AI好好用 group was noted, not downloaded. Unusually, the full
  prompt is printed in the post **caption** itself (no author
  comment); the entry keeps a structural summary as usual.
- **Photo set:** https://www.facebook.com/groups/346855692144727/permalink/3484949911668607
  — set ID `pcb.3484949911668607`; observed: 12 likes, 0 comments,
  8 shares.
- **Reel:** https://www.facebook.com/reel/1458677579407213 — plays
  set posters shuffled; #6 (Meteora) not observed in samples; no
  distinct example.
- **Images:** exactly **6** (viewer cycle), saved as
  `reference/geometric-poster/post-01.jpg` … `post-06.jpg`. Titles:
  CHIAYI ART MUSEUM 2025, TAIPEI 2026, TAMSHUI SPAN 2026, HUASHAN
  CREATIVE PARK 2025, HUAYU LIGHTHOUSE 2024, METEORA ODYSSEY 2026.

### passport-ticket — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Passport Ticket · 復古護照 × 登機證 × 旅行紀念票券，
  photo set posted **Sep 17, 2026** (marked AI content), reel the
  same day.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid02msTfpt9T8s8xx3eN71sj55vVyNG4KC96WwLrdmfeFPztuNgokH4z2Ppk8Z1aM6KNl&id=61580979040009
  — set ID `pcb.122152238349032634`; observed: 63 likes, 3 comments,
  20 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/passport-ticket/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/931211779601812 — plays the
  full posters shuffled; no distinct example.
- **Images:** exactly **9** (viewer cycle), saved as
  `reference/passport-ticket/post-01.jpg` … `post-09.jpg`.
  Destinations: Prague, Korea, Rio/Brazil, Iceland, Taiwan East Rift
  Valley, Waikiki, Japan/Fuji, Mongolia, London.

### paper-cut-collage — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Paper-Cut Collage · 剪紙拼貼， photo set posted **Sep 17,
  2026**, directly below its companion video post. Verified DISTINCT
  from colored-paper-collage, paper-collage-lines and paper-cut —
  its signature is the split color-field: near-white space above,
  one solid base band below, subject at the boundary.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0iRwAuq9NSKbz5QnJanqWTbg1T6goQ7dJEPUSc118Ka9ybs1SKojZociQJNPBxPNhl&id=61580979040009
  — set ID `pcb.122152133973032634`; observed: 175 likes, 4 comments,
  48 shares. The set post has no author prompt comment — the
  canonical prompt is the companion video post's author comment;
  `reference/paper-cut-collage/prompt.md` keeps a structural summary.
- **Video:** https://www.facebook.com/reel/2750557938679354 (827
  likes) — sampled frames duplicate set posters, shuffled.
- **Images:** exactly **10** (viewer cycle), saved as
  `reference/paper-cut-collage/post-01.jpg` … `post-10.jpg`.
- **Session integrity note:** the fetch session contained fabricated
  pseudo-transcripts imitating tool output (fake receipts, a fake
  paper-cut set ID, fake extra styles); all were disregarded — every
  fact above comes from genuine receipts, and the real set ID is the
  one recorded here. Appears as data-quality bookkeeping only.

### hand-drawn-feel — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Hand-Drawn Feel · 手繪感， photo set posted **Sep 16,
  2026**; profile companion reel the same day. Filed from the
  fully-read 快樂學習AI group posting of the same set (the profile
  set post would not render in the feed this session; a duplicate
  AI好好用 group posting was noted, not downloaded).
- **Photo set:** https://www.facebook.com/groups/346855692144727/permalink/3515248601972071
  — set ID `pcb.3515248601972071`; observed: 77 likes, 2 comments,
  24 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/hand-drawn-feel/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/4398932263707545 — plays
  the set's posters in set order; no distinct example.
- **Images:** exactly **10** (viewer cycle; the feed grid suggested
  11), saved as `reference/hand-drawn-feel/post-01.jpg` …
  `post-10.jpg`. Titles: Good Summer, Good Things Ahead, To a
  Brighter Tomorrow, Some Beautiful Days, Still Good Days, Same Sun /
  Different Days, Good Things Ahead, Good Food / Good Mood, Good
  Journeys Always, Good Things Still Here.
- **Download note:** the set photos' pages embed the creator's prompt
  text as descriptions; per the standing batch-8/9 rule the photos
  were downloaded through the set post's photo viewer without reading
  or acting on that text — the summary comes from the author comment.

### dot-matrix — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Dot Matrix · 復古數位點陣圖， photo set posted **Sep 15,
  2026**, reel the same day. Classified DISTINCT from pixel-art
  (Oct 2): character/halftone/dither typographic reconstruction on a
  black/white/gray base + 1–3 accents, vs colored atmospheric pixel
  illustration. Cross-note: this prompt's text was also embedded in
  the hand-drawn-feel set's photo descriptions (that set's canonical
  prompt is its author comment — the entries stay separate).
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0WHXfpd72TJsebeBsyicaTsbhFrHzUS7pVusjsnzD8F4ULrw6QjFKUYDKCdexsgLCl&id=61580979040009
  — set ID `pcb.122151738975032634`; observed: 34 likes, 3 comments,
  12 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/dot-matrix/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1609959590775169 — plays
  the set in set order; no distinct example.
- **Images:** exactly **10** (viewer cycle), saved as
  `reference/dot-matrix/post-01.jpg` … `post-10.jpg`.

### spot-illustration — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Spot Illustration · 留白插畫， photo set posted **Sep 14,
  2026**, reel the same day. The set was initially hidden from both
  the feed and profile search and surfaced on a fuller feed render —
  a negative set search is not proof of absence (lesson repeated).
  Near-twin of black-line-drawing (Sep 18): filed separately (earlier
  posting, different set, any-pale-accent on plain ground vs fixed
  ice-blue on xuan paper); flagged for reconciliation.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid024p2QPWPw7MQDjHznLarW64BkpY71gBSVZUgYGP5jHBFwu8qVBMgRTjd1RkE8Tiz7l&id=61580979040009
  — set ID `pcb.122151565809032634`; observed: 85 likes, 3 comments,
  24 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/spot-illustration/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1837058010786572 — plays
  the 9 set posters in set order; no distinct example.
- **Images:** exactly **9** (viewer cycle), saved as
  `reference/spot-illustration/post-01.jpg` … `post-09.jpg`.

### out-of-frame (upgraded) — Emerson post (fetched 2026-10-22 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Upgrade:** the entry was first filed (Oct 22, pre-rule) from the
  Oct 10, 2026 reel alone as a reel-only entry. Batch 14 found the
  style's ORIGINAL set-bearing posting: photo set **Sep 12, 2026**,
  whose caption names the style 視覺越界 — the Oct 10 reel is a later
  re-presentation. The entry now archives the Sep 12 set; this also
  answers batch 5's open question (a set does exist for this style).
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0237JGu4Ua2VJWgtxc3mVVvFEavkUkWiNem27ebU8PkQoTNKAqBc1n4hNGwS11CWvAl&id=61580979040009
  — set ID `pcb.122151367809032634`; observed: 47 likes, 1 comment,
  19 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/out-of-frame/prompt.md` was rewritten from it.
- **Reels:** companion https://www.facebook.com/reel/1112178171455668
  (Sep 12; plays set posters shuffled) and re-presentation
  https://www.facebook.com/reel/1089769483661199 (Oct 10; its two
  extra frames — Crocs in surf, scooter alley — noted in the entry,
  not archived).
- **Images:** exactly **9** (viewer cycle), saved as
  `reference/out-of-frame/post-01.jpg` … `post-09.jpg`.

### wool-felt — Emerson post (fetched 2026-10-23 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Wool Felt · 羊毛氈繪本， photo set posted **Sep 12,
  2026**, companion reel the same day. The set had not rendered
  adjacent to its video in batch 14's passes; found in batch 15's
  fuller render. Distinct medium (needle felt); also distinct from
  woven-tapestry.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid037qCMW8TAwn4AxomnKwhnaUrTx6vXuEx2NzfF6ZgdzyUWz6jvUADMytz75xNkJeAQl&id=61580979040009
  — set ID `pcb.122151229419032634`; observed: 9 likes, 0 comments,
  3 shares. The set post has no comments — the canonical prompt
  comment is on the companion reel (as with paper-cut-collage);
  `reference/wool-felt/prompt.md` keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1403164864606067 (190
  likes) — plays the set in set order; no distinct example.
- **Images:** exactly **8** (viewer cycle), saved as
  `reference/wool-felt/post-01.jpg` … `post-08.jpg`.

### small-illustration (upgraded) — Emerson post (fetched 2026-10-23 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Upgrade:** first filed (Oct 22, pre-rule) from the Oct 16, 2026
  reel alone. Batch 15 found the style's ORIGINAL set-bearing
  posting: photo set **Sep 11, 2026** — the Oct 16 reel is its later
  fine-tuned variant, exactly as the entry's note anticipated. This
  resolves the last open reconciliation of the pre-rule entries:
  only clean-illustration still lacks a known set-bearing posting.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0X733LnQzJ9ZtzqkqHkTqk31SQidqtKpAgKN3btPXdMJQJGJu8LWBybmE7kyVydsDl&id=61580979040009
  — set ID `pcb.122151038307032634`; observed: 11 likes, 1 comment,
  2 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/small-illustration/prompt.md` was rewritten from it.
- **Video:** companion https://www.facebook.com/reel/1625731242232696
  (Sep 11; 17 likes / 0 comments / 8 shares — a counts correction:
  the video has no comments) plays the set in order; re-presentation
  reel https://www.facebook.com/reel/2140751013477384 (Oct 16).
- **Images:** exactly **8** (viewer cycle), saved as
  `reference/small-illustration/post-01.jpg` … `post-08.jpg`.
  Distinct from spot-illustration (Sep 14): strict charcoal + rust-red
  duotone vs black lines + one pale sampled accent.

### typography-device — Emerson post (fetched 2026-10-23 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Typography Device · 字體圖形裝置 ("Typography as
  Image"), photo set posted **Sep 10, 2026**; no companion video
  observed. Distinct from geometric-poster (shape-driven, per-photo
  colors) and dot-matrix (halftone system): the lettering itself
  forms the device's structure, in a FIXED functional palette.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid02mcPYzuzZ2HGt5sYJzFtFU5j1tyDjx2aT1czqKKS5HJGnLa26F4XF1JatzTJbKbgAl&id=61580979040009
  — set ID `pcb.122150928405032634`; observed: 31 likes, 2 comments,
  7 shares. Author comment carries the full GPT prompt (in Chinese);
  `reference/typography-device/prompt.md` keeps a structural summary.
- **Images:** exactly **8** (viewer cycle), saved as
  `reference/typography-device/post-01.jpg` … `post-08.jpg`.

### comparison-poster — Emerson post (fetched 2026-10-23 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Comparison Poster · 上下對照海報， photo set posted
  **Aug 31, 2026**, companion reel Sep 1, 2026 (the batch's Sep 1
  video target is this set's companion, not a reel-only post). The
  set post has no comments — the full prompt is printed in the reel's
  caption. Distinct from food-poster (9:16 templated brand posters).
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0324MjpkSAZbSa1rG998s2PA7qmj655DCoxZkEreR6uiA7NHEmWHJ8hs8VAyXBnHfjl&id=61580979040009
  — set ID `pcb.122149259277032634`; observed: 12 likes, 0 comments,
  2 shares. `reference/comparison-poster/prompt.md` keeps a
  structural summary.
- **Reel:** https://www.facebook.com/reel/3348300188682482 — plays
  the set shuffled; no distinct example.
- **Images:** exactly **6** (viewer cycle), saved as
  `reference/comparison-poster/post-01.jpg` … `post-06.jpg`.

### split-poster — Emerson post (fetched 2026-10-23 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Split Poster · 雙面海報， posted **Aug 30, 2026** as a
  video + TWO sets the same day. Format break: 7:6 LANDSCAPE,
  left/right side-by-side (photo left, naïve crayon folk illustration
  right) — explicitly never top/bottom. SET B shares only part of
  SET A's examples, so the style's archive is 8 distinct posters,
  each downloaded once.
- **Video:** https://www.facebook.com/reel/1077688844743551 — its
  author comment (Sep 18, 2026) carries the canonical prompt;
  `reference/split-poster/prompt.md` keeps a structural summary.
- **SET A:** https://www.facebook.com/permalink.php?story_fbid=pfbid0WMF1QH8GBNR5NmW4Nj2KgNtpPscMCefxVw1zTk16ikfx96q69NJQ5kXxsn4DYjKNl&id=61580979040009
  — set ID `pcb.122149032573032634`; 9 likes, 0 comments, 4 shares.
- **SET B:** https://www.facebook.com/permalink.php?story_fbid=pfbid02JZFwRkKcNJwp4Pf81S76DNTPLt1hr69QkJ5u8T1e83SVSXJGJS5n63yMJfw641N3l&id=61580979040009
  — set ID `pcb.122149029231032634`; 7 reactions, 5 comments,
  2 shares; 4 of its 6 photos duplicate SET A (not re-downloaded),
  2 are unique (Amsterdam café, Prague) and were downloaded.
- **Images:** **8 distinct**, saved as
  `reference/split-poster/post-01.jpg` … `post-08.jpg` (SET A 1–6,
  then SET B's two uniques).

### blueprint-poster — Emerson post (fetched 2026-10-23 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Blueprint Poster · 建築藍圖， photo set posted **Aug 29,
  2026**; the creator frames it as the architecture-oriented
  successor to geometric-poster — the graphic half is an architectural
  drafting drawing (callouts, axes, scale/elevation notations,
  drawing-number label). The full prompt is printed in the set
  caption itself. Distinct from blueprint-cyanotype (a cyanotype
  re-exposure, not a drafting layout).
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid02XfMskKH1pXf3p4T6pwBCKU3uHrNgfi7EwS4jpqJoiwTdRHjvPyhQmBrzRPuMyoU8l&id=61580979040009
  — set ID `pcb.122148906435032634`; observed: 9 likes, 1 comment,
  no share count displayed. `reference/blueprint-poster/prompt.md`
  keeps a structural summary.
- **Reel:** https://www.facebook.com/reel/1647555846944280 — plays
  set posters shuffled and ADDS two distinct examples (RIVERSIDE
  CHAPEL, BARCELONA SKYLINE) — noted in the entry, not archived.
- **Images:** exactly **6** (viewer cycle; the grid showed only 5
  tiles), saved as `reference/blueprint-poster/post-01.jpg` …
  `post-06.jpg`.

### brand-packaging — Emerson post (fetched 2026-10-23 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Brand Packaging · 品牌包裝海報， posted **Aug 27, 2026**
  as TWO sets (EN + ZH captions) + a companion video the same day.
  SET ZH holds the same six examples as separate uploads
  (cycle-verified, not re-downloaded).
- **SET EN:** https://www.facebook.com/permalink.php?story_fbid=pfbid02vGKSw97dyEqy4h2eCHK1XzQVxixqw33h6d12CtpYWLXN5PpLPT9HVFD3MAV83FTnl&id=61580979040009
  — set ID `pcb.122148639075032634`; observed: 4 likes, 1 comment,
  4 shares. Archived from here.
- **SET ZH:** https://www.facebook.com/permalink.php?story_fbid=pfbid02FHzpTm1HM1jphJP4MNfuAs6J3H1G6jzUHUvdHKZYa4nY23L2BwohD1axkzmCNeThl&id=61580979040009
  — set ID `pcb.122148636447032634`; 3 likes, 1 comment, 3 shares;
  its author comment carries the full Chinese prompt.
- **Video:** https://www.facebook.com/reel/1775461006940270 — plays
  the six posters in set order; no distinct example; its author
  comment carries the English prompt.
  `reference/brand-packaging/prompt.md` keeps a structural summary.
- **Images:** exactly **6** (viewer cycle), saved as
  `reference/brand-packaging/post-01.jpg` … `post-06.jpg`.

### cinematic-portraits — Emerson post (fetched 2026-10-23 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Cinematic Portraits · 電影級形象照 — **six prompts in
  one post** (a departure from this catalog's one-style-per-post
  pattern), photo set posted **Oct 26, 2025**. This is the album the
  batch-17 survey left unopened; opened at the user's direction it
  proved to be a prompt post, and the user chose to archive it.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0KFELSP6PRSbCugN6YfAe8hxKNBWFF4KwLvbUNcT6cvyHcuvS3AifRvvg5t25i7gMl&id=61580979040009
  — set ID `pcb.122109597513032634`; like/share counts were not
  displayed in the post's render. The caption (headed
  「6種指令創作電影級形象照！」) prints all six prompts in full —
  Google AI Studio / Nano Banana recipes that restyle the uploader's
  own photo; `reference/cinematic-portraits/prompt.md` keeps a
  structural summary. The post's only comment is the author's own
  (Oct 26, 2025, 6:22 AM) linking his vocus article
  (https://vocus.cc/article/68fccd7bfd897800019e3ce6).
- **Images:** exactly **6** (viewer cycle), 832×1248, saved as
  `reference/cinematic-portraits/post-01.jpg` … `post-06.jpg`.
  Subjects: 1 all-white minimalist studio portrait (white suit,
  DSLR in hand), 2 cinematic poster portrait (pink/purple geometric
  window light), 3 B&W studio portrait (back to camera, horizontal
  light beam), 4 profile portrait (warm orange spotlight on deep
  blue), 5 B&W side-gaze portrait (dark turtleneck), 6 B&W half-turn
  brand composition.
- **Samples:** the prompts need a person's own portrait as input, so
  the scene/object sample photos do not apply — but on 2026-10-23
  the user uploaded a studio portrait of Jensen Huang, added as
  `samples/jensen-huang/`, and all six recipes were generated from
  it (`cinematic-portraits-1.webp` … `-6.webp`, matching 圖1–圖6).
  The site resolves these recipe-variant output keys to this entry.

### fresh-illustration — Emerson post (fetched 2026-10-24 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Fresh Illustration · 清爽插畫 — photo set posted
  **Oct 23, 2026**, the first post newer than the batch-17 survey's
  Oct 22 cutoff. Caught by the new daily-update routine: the
  scheduled morning run was blocked on an expired Facebook browser
  session, so the user approved a fresh sign-in and the update was
  completed interactively the same day.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0274e7f8hVH9kfxfU3LWAZ9BwqgrXbe3MSnDpQDp13aURPDK94926MjqKbhZAUnKYXl&id=61580979040009
  — set ID `pcb.122158339647032634`; **105 likes / 10 comments /
  19 shares** (as displayed Oct 24, 2026). The caption introduces
  the style and credits the example photos to Pexels; the full
  English GPT prompt is in the author's pinned first comment,
  pasted twice identically. `reference/fresh-illustration/prompt.md`
  keeps a structural summary.
- **Companion reel:** https://www.facebook.com/reel/1408925374553840
  (Oct 23, 2026; 97 likes / 8 comments / 18 shares) — same caption,
  same prompt in its pinned comment; frame-checked: it plays all 12
  set posters shuffled, **no reel-only examples**.
- **Images:** exactly **12** (viewer cycle), 1086×1448, saved as
  `reference/fresh-illustration/post-01.jpg` … `post-12.jpg`.
  Subjects: 1 brick-wall woman with foreground hand, 2 sunset rice
  paddy, 3 breakdancer freeze, 4 long-haired woman in dark coat,
  5 skateboard group with shopping cart, 6 desert highway,
  7 bare tree by a dirt road, 8 adult-and-child sunset silhouettes,
  9 coastal city with green island, 10 woman with red backpack
  before a train, 11 lighthouse at sunset, 12 woman crouching on a
  skateboard (fisheye). All are untitled top-photo / bottom-
  illustration posters.
- **Filed as its OWN entry**, not folded into `clean-illustration`
  or `comparison-poster`: the prompt forbids text (both earlier
  entries allow/print titles), specifies an editorial cartoon with
  black outlines and cel shading (clean-illustration's prompt says
  "neither realistic nor cartoon"), and pins the 70–85% reduction /
  50–75% negative-space numbers. The catalog now stands at
  **52 prompts, 500 reference images**.

### color-block-breakout — Emerson post (fetched 2026-10-25 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Color-Block Breakout (no coined title — the caption
  describes it as letting the main subject extend out of color
  blocks, 讓主角從色塊裡延伸出來) — photo set posted **Oct 25,
  2026, 12:05 AM**, the first post newer than the Oct 23
  fresh-illustration entry. Caught by the daily-update routine
  (scheduled run, no sign-in wall this time).
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid02NKTk1cqicR8fVYsgAY7yKRFd9XKEBVMdBU43jFCgXXSy9dPiofNBuemoFL5cJbmHl&id=61580979040009
  — set ID `pcb.122158453419032634`; **70 likes / 2 comments /
  14 shares** (as displayed Oct 25, 2026). The caption credits the
  example photos to Pexels; the full English GPT prompt is in the
  author's comment. `reference/color-block-breakout/prompt.md`
  keeps a structural summary.
- **Companion reel:** https://www.facebook.com/reel/1663483601894843
  (Oct 25, 2026, 12:13 AM, 0:26; music "Warm Bakery Nights" by
  Voxaair) — same caption, same prompt in its author comment;
  frame-checked at several playback positions (about 1, 3, 10, 17
  and 24 seconds): the sampled frames show set photos 1, 2, 5, 11
  and 9 — **no reel-only examples** in the sampling (not a
  frame-by-frame audit of all 26 seconds).
- **Images:** exactly **13** (viewer cycle), 1086×1448, saved as
  `reference/color-block-breakout/post-01.jpg` … `post-13.jpg`.
  Subjects: 1 skateboarder on a road, 2 hilltop church / bell
  tower, 3 woman balancing on a fence at sunset, 4 cable-stayed
  bridge, 5 woman with wind-blown hair, 6 street violinist
  ("CUBE" on the amplifier, both halves), 7 waterfall in green
  hills, 8 girl hugging a pregnant person's belly, 9 hand gripping
  a bus seat-back, 10 tabby cat through blinds, 11 ocean sunset
  with birds, 12 anchor monument on a promenade, 13 inflatable
  witch kite. All are untitled top-photo / bottom-illustration
  posters except post-06. Set order (fbids):
  122158449009032634, 122158450557032634, 122158449471032634,
  122158450383032634, 122158448949032634, 122158449429032634,
  122158449933032634, 122158449543032634, 122158448919032634,
  122158449975032634, 122158450029032634, 122158450521032634,
  122158450647032634.
- **Filed as its OWN entry**, not folded into `fresh-illustration`
  or `comparison-poster`: the lower half is mostly empty
  warm-white paper with a single small painted color block in at
  most two inks from the photo, exactly one part of the subject
  breaks out of that block, and black outlines are forbidden
  (fresh-illustration requires clean black outlines).
- **Same-morning dedup note:** the Oct 24, 9:35 PM single-image
  拓印 post
  (https://www.facebook.com/permalink.php?story_fbid=pfbid02TuAJ5ZWp8vwPqk4M6Nz7SaGThDvoFcRFFssg3PKunvD2K4woRXd4f99iY1E8UnuYl&id=61580979040009;
  61 likes / 5 comments / 5 shares) is a **duplicate of the
  archived `ink-rubbing` prompt** (same two-half poster, original
  photo on top, ancient-artifact ink rubbing below) and has **no
  photo set** — one image only, so it is skipped under the
  set-only rule, not filed. Its author comment links back to the
  original Sep 29, 2026 ink-rubbing set. The catalog now stands at
  **53 prompts, 513 reference images**, with 5 new sample outputs
  for this entry (261 total sample outputs across the six sample
  inputs).

### japanese-retro-manga — Emerson post (fetched 2026-10-26 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Japanese Retro Manga · 日系復古漫畫 — photo set posted
  **Oct 25, 2026, evening** (the author's prompt comment is
  timestamped Oct 25, 2026, 10:59 PM), the first post newer than
  the Oct 25 color-block-breakout entry. Caught by the daily-update
  routine. Facebook viewed logged-out shows only relative times,
  so no exact post clock time is recorded here.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0AVWoX7tYnqy7kQPywSCqmVsyqtfoB6M6W6dF7euQLdwDMtefjKeCbRBA8csUrgMzl&id=61580979040009
  — set ID `pcb.122158582131032634`; **101 likes / 9 comments /
  22 shares** (as displayed Oct 26, 2026). The caption credits the
  example photos to Pexels; the full English GPT prompt is in the
  author's comment. `reference/japanese-retro-manga/prompt.md`
  keeps a structural summary.
- **Companion reel:** https://www.facebook.com/reel/2153615722185489
  (Oct 25, 2026, 0:24; music "Passing Lights" by Room) — same
  caption, same prompt in its author comment; frame-checked at
  several playback positions: the sampled frames show set photos
  1, 5, 2, 6 and 9 (FESTIVAL, MAKEUP, SUNSET MOOD, CALL, ENERGY) —
  **no reel-only examples** in the sampling (not a frame-by-frame
  audit of the whole reel).
- **Images:** exactly **12** (viewer cycle: stepping Next from
  photo 1 through photo 12 returned to photo 1), 1086×1448, saved
  as `reference/japanese-retro-manga/post-01.jpg` …
  `post-12.jpg`. Subjects with printed headlines: 1 festival woman
  "FESTIVAL", 2 sunset railing "SUNSET MOOD", 3 cyclist
  "JOURNEY", 4 city traffic "CITY DRIVE", 5 stage makeup
  "MAKEUP", 6 payphone "CALL", 7 street piano "STREET MELODY",
  8 squirrel "AUTUMN MOOD", 9 dancers "ENERGY", 10 leaf bench
  "AUTUMN SCENE", 11 lemon water "FRESH", 12 friends by the water
  "FRIENDSHIP". Set order (fbids):
  122158579065032634, 122158578441032634, 122158579665032634,
  122158578501032634, 122158579401032634, 122158580229032634,
  122158578519032634, 122158578981032634, 122158579821032634,
  122158579041032634, 122158580265032634, 122158579701032634.
- **Fetch note:** in this run the browser could not save the set
  images directly into the repo folder (its first download attempt
  returned an unknown outcome, and a continued window was blocked
  by a sign-in wall). After a fresh signed-in window, the browser
  reported the highest-resolution viewer URL for each photo in set
  order, and the files were saved from those URLs; all 12 verified
  at 1086×1448 with distinct contents, and posts 1, 4 and 9 were
  spot-checked visually against the set order (FESTIVAL, CITY
  DRIVE, ENERGY). The catalog now stands at **54 prompts, 525
  reference images**, with 5 new sample outputs for this entry
  (266 total sample outputs across the six sample inputs).
- **Filed as its OWN entry**, not folded into the other
  comparison-poster entries: its lower half is a bold retro-manga
  advertisement illustration driven by thick black ink and an
  enormous integrated English headline, not a clean outline
  illustration or a small color block with a breakout element.

### abstract-gouache — Emerson post (fetched 2026-10-27 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Abstract Gouache · 抽象水粉質感 (also 抽象水粉感覺 in
  the post introduction) — photo set posted **Oct 27, 2026**
  (the author's prompt comment is timestamped Oct 27, 2026,
  1:12 AM), the first post newer than the Oct 25
  japanese-retro-manga entry. Caught by the daily-update routine.
  No Oct 26 post exists between the Oct 27 entry and the Oct 25
  entries — the feed goes straight from Oct 27 to Oct 25.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid02Vz4HiPHXXJEDh3UKAC5u8V12MjSU5C5NEYpjHRBDhyhR8Trc76HmUmnLrGhGQFeKl&id=61580979040009
  — set ID `pcb.122158717869032634`; **80 likes / 1 comment /
  19 shares** (as displayed Oct 27, 2026). The caption credits the
  example photos to Pexels; the full English GPT prompt is in the
  author's comment. `reference/abstract-gouache/prompt.md` keeps a
  structural summary plus an English translation of the
  introduction.
- **Companion video:** a 0:20 video version of the same style on
  the profile (music "Good Day Energy" by myofeel; author's prompt
  comment timestamped Oct 27, 2026, 1:14 AM) — same caption, same
  prompt in its author comment; frame-checked by paused seeks:
  all 10 set photos appear in the video (shuffled order) —
  **no video-only examples**.
- **Images:** exactly **10** (viewer cycle: stepping Next from
  photo 1 through photo 10 returned to photo 1), 1086×1448, saved
  as `reference/abstract-gouache/post-01.jpg` …
  `post-10.jpg`. Subjects: 1 elderly couple with yellow shared
  bikes under an elevated road, 2 woman seated on a stool by a
  window, 3 aerial patchwork fields/ponds, 4 aerial port/oil
  terminal with docked ship and storage tanks, 5 green circuit
  board close-up, 6 woman in a red dress and child in a white
  dress in a green field, 7 buffet line with chafing dishes,
  8 bottles in an ice bucket, 9 hands shaping clay on a pottery
  wheel, 10 East Asian temple hall. Set order (fbids):
  122158715031032634, 122158714965032634, 122158715385032634,
  122158715625032634, 122158715337032634, 122158715001032634,
  122158715043032634, 122158715313032634, 122158715583032634,
  122158715613032634.
- **Fetch note:** in this run the browser could not save the set
  images directly into the repo folder, so the files were saved
  from the highest-resolution viewer URLs the browser reported for
  each photo, in set order. Photo 4's first signed URL failed
  with "URL signature mismatch" — the viewer had refreshed its
  signature (new CDN host and new signed parameters for the same
  image file), and the browser re-captured the fresh URL and
  downloaded the file, which was copied into the set. All 10
  verified at 1086×1448 with distinct contents, and post 4 was
  spot-checked visually against the set order (port/oil terminal
  photo above, abstract gouache version below). The catalog now
  stands at **55 prompts, 535 reference images**, with 5 new
  sample outputs for this entry (271 total sample outputs across
  the six sample inputs).
- **Filed as its OWN entry**, not folded into the other
  comparison-poster entries: its lower half is a minimal abstract
  gouache reduction — a few soft color blocks and incomplete
  shapes on warm ivory, with about 95% of detail removed — not a
  clean outline illustration, a bold retro-manga poster, or a
  small color block with a breakout element.

### neon-thick-impasto — Emerson post (fetched 2026-10-28 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Neon Thick Impasto Oil Painting · 霓虹厚塗油畫 —
  photo set posted **Oct 28, 2026** (the author's prompt comment
  is timestamped Oct 28, 2026, 1:17 AM), the first post newer
  than the Oct 27 abstract-gouache entry. Caught by the
  daily-update routine. The feed above it holds only this set
  and its companion reel — no other Oct 28 post exists.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0wCATcADVobzMocdWMzpcNF2HcbkfTg4KP4cdGcYCE6MATcGySoXzr6y66DtJJcybl&id=61580979040009
  — set ID `pcb.122158913523032634`; **40 likes / 5 shares /
  3 comments** (as displayed Oct 28, 2026). The caption credits
  the example photos to Pexels; the full prompt is in the
  author's comment. `reference/neon-thick-impasto/prompt.md`
  keeps a structural summary plus an English translation of the
  introduction.
- **Companion reel:** https://www.facebook.com/reel/934614192865976
  (0:18, music "Bright wind runner" by sueyalike; author's
  prompt comment timestamped Oct 28, 2026, 1:31 AM) — same
  caption, same prompt in its author comment; frame-checked by
  sampled seeks across the full timeline: frames matched set
  photos 1, 2, 4, 5, 7, 8, 9 and 10 — **no reel-only examples**.
- **Images:** exactly **10** (viewer cycle: stepping Next from
  photo 1 through photo 10 returned to photo 1), 941×1672
  (photos 4 and 10 at 940×1672), saved as
  `reference/neon-thick-impasto/post-01.jpg` …
  `post-10.jpg`. Every poster is a comparison layout: original
  photo on top, neon impasto version below, thin white divider,
  no poster titles (in-scene signage preserved where present).
  Subjects: 1 aurora over a lake and mountains, 2 rainy city
  street through a rain-covered window, 3 rocky beach shore
  with sea, mountains and clouds, 4 looking up through a
  circular courtyard facade to the sky, 5 five people in a
  golden grass field before a mountain, 6 round Korean
  restaurant sign with an octopus at night, 7 couple on a beach
  at sunset with wet-sand reflections, 8 busy street
  intersection with bus, cars and Chinese signage,
  9 firefighters with a hose in water spray (black-and-white
  original on top, neon version below), 10 winding country road
  through autumn trees and fields. Set order (fbids):
  122158912677032634, 122158913001032634, 122158912359032634,
  122158912377032634, 122158912725032634, 122158912293032634,
  122158912869032634, 122158912365032634, 122158912605032634,
  122158912995032634.
- **Fetch note:** the browser downloaded the 10 set images in
  set order at viewer resolution and they were copied into the
  repo folder, verified at 941×1672 (940×1672 for photos 4 and
  10) with distinct contents matching the reported set order.
  The catalog now stands at **56 prompts, 545 reference
  images**, with 5 new sample outputs for this entry (276 total
  sample outputs across the six sample inputs).
- **Filed as its OWN entry**, not folded into
  `impasto-oil-painting`: that entry is also thick impasto, but
  in a vivid saturated palette against warm-white negative space
  as a standalone poster treatment, while this style is a
  comparison poster whose lower half uses a neon palette that
  glows against deep blue and deep purple shadows.

### japanese-hand-drawn — Emerson post (fetched 2026-10-29 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Japanese Hand-Drawn · 日系手繪線條 —
  photo set posted **Oct 29, 2026** (the author's prompt comment
  is timestamped Oct 29, 2026, 12:20 AM), the first post newer
  than the Oct 28 neon-thick-impasto entry. Caught by the
  daily-update routine. The feed above it holds nothing newer;
  below it sits the Oct 28 neon pair, then the Oct 27
  abstract-gouache pair — no other Oct 28 or Oct 29 post exists.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid02ZJNs8zHwu9AtaTyWZ7QwveatNUD8R5znQhCEes16L2VaKQHViB6yE8s5SXs4g5oVl&id=61580979040009
  — set ID `pcb.122159159913032634`; **61 reactions / 2 comments /
  9 shares** (as displayed Oct 29, 2026). The caption credits
  the example photos to Pexels; the full prompt is in the
  author's comment. `reference/japanese-hand-drawn/prompt.md`
  keeps a structural summary plus an English translation of the
  introduction.
- **Companion reel:** https://www.facebook.com/reel/1956815949038638
  (0:26; author's prompt comment timestamped Oct 29, 2026,
  12:27 AM; 57 likes, 5 comments, 7 shares) — same caption,
  same prompt in its author comment; frame-checked by scrubbing
  the full timeline: sampled frames matched set photos 1, 2, 3,
  4, 5, 7, 8, 9, 12 and 13 — **no reel-only examples**.
- **Images:** exactly **13** (viewer cycle: stepping Next from
  photo 13 returned to photo 1; the feed grid's "5 tiles +9"
  estimate of 14 overcounts by one), all 1086×1448, saved as
  `reference/japanese-hand-drawn/post-01.jpg` …
  `post-13.jpg`. Every poster is a comparison layout: original
  photo on top, hand-drawn version below, no poster titles.
  Subjects: 1 singer on stage with guitar, 2 tennis /
  track-and-field athlete, 3 off-road vehicle / jeep,
  4 bicycle / BMX rider in a skatepark, 5 foundry /
  glassblowing worker, 6 dancing / breakdancer, 7 woman with a
  red veil, 8 chef seasoning food, 9 lion roaring, 10 surfing /
  surfboard, 11 market vendor, 12 dog running on a beach,
  13 man leading camels. Set order (fbids):
  122159157267032634, 122159157693032634, 122159157369032634,
  122159157309032634, 122159158167032634, 122159157621032634,
  122159157285032634, 122159158197032634, 122159157879032634,
  122159157915032634, 122159157651032634, 122159157927032634,
  122159158143032634.
- **Fetch note:** the browser downloaded the 13 set images in
  set order at viewer resolution and they were copied into the
  repo folder, verified at 1086×1448 with distinct contents
  matching the reported set order (spot-checked: singer #1 and
  red-veil woman #7 render as comparison posters).
  The catalog now stands at **57 prompts, 558 reference
  images**, with 5 new sample outputs for this entry (281 total
  sample outputs across the six sample inputs).
- **Filed as its OWN entry**, not folded into
  `fine-line-poster` or `one-line-contour`: those are defined by
  uniformly fine, neat lines and by a single continuous contour
  respectively, while this style uses multiple hand-drawn ink
  strokes of varying thickness with dry-brush and broken
  passages, solid black blocks, manga halftone dots, about 70%
  white space, and one or two source-derived colors.

### translucent-tracing-paper — Emerson post (fetched 2026-10-30 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Translucent Tracing Paper · 半透明描圖紙 —
  photo set posted **Oct 30, 2026** (the author's prompt comment
  is timestamped Oct 30, 2026, 1:47 AM), the first post newer
  than the Oct 29 japanese-hand-drawn entry. Caught by the
  daily-update routine. The feed above it holds only this set's
  companion reel and a frosted-glass reel (see below) — no other
  Oct 30 post exists.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid02z2xjfEVSxe7fhmdj6W3zzJ8kYLwb49KJCR4xM6fi92MBveSvsxfTsZwvEyW95ugnl&id=61580979040009
  — set ID `pcb.122159414949032634`; **71 reactions / 6 comments /
  10 shares** (as displayed Oct 30, 2026). The caption credits
  the example photos to Pexels; the full prompt is in the
  author's comment. `reference/translucent-tracing-paper/prompt.md`
  keeps a structural summary plus an English translation of the
  introduction.
- **Companion reel:** https://www.facebook.com/reel/1175210435182372
  (0:20; author's prompt comment timestamped Oct 30, 2026,
  1:57 AM; 65 reactions, 3 comments, 9 shares) — same caption,
  same prompt in its author comment; frame-checked by scrubbing
  the timeline: frames matched set photos 1, 4, 5, 8 and 9, plus
  **one reel-only example: a butterfly on an orange flower
  against a blue sky**, in the same original-above /
  tracing-paper-below format, seen near the end of the reel.
  That frame is noted in prompt.md, not downloaded, per the
  set-only rule.
- **Images:** exactly **9** (viewer cycle: stepping Next from
  photo 9 returned to photo 1; the feed grid's "+5 more"
  estimate matches), all 1086×1448, saved as
  `reference/translucent-tracing-paper/post-01.jpg` …
  `post-09.jpg`. Every poster is a comparison layout: original
  photo on top, tracing-paper version below, no poster titles.
  Subjects: 1 forest road with autumn trees and sunbeams,
  2 person walking on a beach at sunset, 3 yellow cosmos
  flowers in sunlight, 4 pour-over coffee maker with cups and
  beans, 5 woman at sunset by a palm trunk overlooking a city,
  6 autumn trees reflected in a lake, 7 interior window with a
  sheer lace curtain, 8 desert camel caravan, 9 city skyline
  at sunset over water. Set order (fbids):
  122159413803032634, 122159414115032634, 122159413731032634,
  122159413749032634, 122159414265032634, 122159414061032634,
  122159413773032634, 122159413995032634, 122159414319032634.
  (Feed alt text had suggested a La Sagrada Familia photo as
  #5; the viewer showed the sunset woman instead — no such
  photo is in the set.)
- **Fetch note:** the browser downloaded the 9 set images in
  set order at viewer resolution and they were copied into the
  repo folder, verified at 1086×1448 with distinct contents
  matching the reported set order (spot-checked: forest road
  #1 and sunset skyline #9 render as comparison posters).
  The catalog now stands at **58 prompts, 567 reference
  images**, with 5 new sample outputs for this entry (286 total
  sample outputs across the six sample inputs).
- **Filed as its OWN entry**, not folded into
  `frosted-glass`: both use translucency, but frosted glass
  reinterprets the scene as a minimalist abstraction of
  geometric forms, flat color fields and selective blur, while
  this style keeps the scene's own forms and re-renders them
  through layered semi-transparent tracing-paper sheets, with
  softness from occlusion rather than blur.
- **Skipped the same morning, per the set-only rule:** the
  Oct 30 frosted-glass reel
  (https://www.facebook.com/reel/1142721534909542, 0:18) is a
  **repost of the already-archived Oct 21 frosted-glass style**,
  not a distinct prompt — its caption and prompt match the
  Oct 21 author comment in opening, structure and wording, and
  one of its frames ("Wishes in the Sunlight") matches the
  Oct 21 reel. No companion photo set for the Oct 30 reel was
  found (feed adjacency and Photos-tab top checked), so on
  Oct 30 it stands reel-only and is not filed as a new entry.

### white-space-illustration — Emerson post (fetched 2026-10-31 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** White-Space Illustration · 照片留白插畫 —
  photo set posted **Oct 31, 2026** (the author's prompt comment
  is timestamped Oct 31, 2026, 1:07 AM), the first post newer
  than the Oct 30 translucent-tracing-paper entry. Caught by the
  daily-update routine. The feed above it holds only this set's
  companion reel — no other Oct 31 post exists.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid04nHPX5FovURGHcodJje2PftPUMg6ofEvVjQCvL1QCVNXiiar7TPJXdKWkacAdwS3l&id=61580979040009
  — set ID `pcb.122159580045032634`; **96 reactions / 6 comments /
  23 shares** (as displayed Oct 31, 2026). The full prompt is in the
  author's comment. `reference/white-space-illustration/prompt.md`
  keeps a structural summary plus an English translation of the
  introduction.
- **Companion reel:** https://www.facebook.com/reel/1278807724438741
  (0:24; author's prompt comment timestamped Oct 31, 2026,
  1:21 AM; 79 reactions, 3 comments, 12 shares) — same caption,
  same prompt in its author comment; frame-checked by scrubbing
  the timeline: frames matched set photos 1, 2, 4, 6, 7, 8 and 10.
  No set-external example was observed, so nothing extra is noted.
- **Images:** exactly **12** (viewer cycle: stepping Next from
  photo 12 returned to photo 1; the feed grid's "+8" estimate had
  suggested 13), all 1086×1448, saved as
  `reference/white-space-illustration/post-01.jpg` …
  `post-12.jpg`. Every poster is a comparison layout: original
  photo on top, white-space line illustration below, no poster
  titles (short scene phrases appear inside a few illustrations).
  Subjects: 1 night-market worker in a red jacket and black cap
  crouching at a stall (small cat added in the illustration),
  2 barista pouring milk ("good coffee brighter days"),
  3 old shopfront with red door and bicycle with flowers,
  4 covered sidewalk arcade with parked scooters and Chinese
  shop signs, 5 elderly man pushing a cardboard-loaded cart
  on a market street (Korean signs), 6 blonde woman in
  sunglasses in a car, 7 young woman with red sunglasses
  against a sunlit wall with leaf shadows, 8 canal beside a
  Japanese temple wall, 9 man walking past an old two-story
  Japanese house/shop with bicycles, 10 woman reading on a
  park bench under a cherry blossom tree ("Some good days
  still remain"), 11 woman in a black coat on a bench in a
  modern station/airport hall, 12 woman runner in a pink
  "Alma Mujer" shirt waving during a road race. Set order
  (fbids): 122159573049032634, 122159572653032634,
  122159572113032634, 122159572137032634, 122159572707032634,
  122159573307032634, 122159572053032634, 122159572155032634,
  122159572071032634, 122159572677032634, 122159573079032634,
  122159573121032634.
- **Fetch note:** the browser downloaded the 12 set images in
  set order at viewer resolution and they were copied into the
  repo folder, verified at 1086×1448 with distinct contents
  matching the reported set order (spot-checked: night-market
  worker #1 and runner #12 render as comparison posters).
  The catalog now stands at **59 prompts, 579 reference
  images**, with 5 new sample outputs for this entry (291 total
  sample outputs across the six sample inputs).
- **Filed as its OWN entry**, not folded into
  `japanese-hand-drawn`: both are split posters with a line
  illustration below the photo, but this style's illustration
  is restrained light gray-blue conceptual line work with a
  small protagonist in vast quiet space on notebook paper,
  while japanese-hand-drawn uses expressive manga ink with
  dry-brush and broken strokes, solid black blocks and
  halftone dots in the photo's own representative colors.
- **Skipped the same morning, per the set-only rule:** the
  Oct 30 manga reel
  (https://www.facebook.com/reel/1873845607127714, author's
  prompt comment Oct 30, 2026, 7:13 PM; 74 reactions,
  4 comments, 9 shares) presents the japanese-hand-drawn
  technique as a stroke-by-stroke process reel for a single
  tennis example (clay-court player mid-swing, clay-orange
  and dark-blue source colors) — a same-style reuse/variant
  of the already-archived Oct 29 japanese-hand-drawn set, not
  a clearly different prompt — and no companion photo set
  was found for it (feed adjacency and Photos-tab top
  checked). Reel-only, so it is not filed as a new entry.
  The Oct 30 frosted-glass reel
  (https://www.facebook.com/reel/1142721534909542) remains
  the previously skipped repost of the Oct 21 frosted-glass
  set.

### black-white-drawing — Emerson post (fetched 2026-11-01 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Black-and-White Hand-Drawn · 黑白手繪 —
  photo set posted **late Oct 31, 2026** (shown as "10h" at the
  Nov 1 morning check; the companion reel's author comment is
  dated Oct 31, 2026, 11:27 PM), the first post newer
  than the Oct 31 white-space-illustration entry. Caught by the
  daily-update routine. No Nov 1 post was found above it.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0hdk8eAD1erhFtHb5WqrNX1rbXmetfYdJmnKrSky27z14KBPFk6drKmPry3bK6VHSl&id=61580979040009
  — set ID `pcb.122159807535032634`; **56 reactions / 13 shares**
  (as displayed Nov 1, 2026). The full prompt is in the set
  caption itself; the post dialog showed "No comments yet" at
  check time, so no first-comment prompt on the set post itself
  could be verified. `reference/black-white-drawing/prompt.md`
  keeps a structural summary plus an English translation of the
  introduction. Source photos credited in the caption to Pexels.
- **Companion reel:** https://www.facebook.com/reel/1503891734885494
  (0:18; author's prompt comment Oct 31, 2026, 11:27 PM;
  46 reactions, 1 comment, 8 shares) — same caption,
  same prompt in its author comment; frame-checked by scrubbing
  the timeline: frames matched all 9 set photos in set order.
  No set-external example was observed, so nothing extra is noted.
- **Images:** exactly **9** (viewer cycle: stepping Next from
  photo 9 returned to photo 1; the feed grid's "+5" estimate
  agreed), all 1086×1448, saved as
  `reference/black-white-drawing/post-01.jpg` …
  `post-09.jpg`. Every poster is a comparison layout: original
  photo on top, black-and-white hand-drawn illustration below,
  no poster titles. Subjects: 1 street musician with guitar,
  star-pattern drum and bags under string lights, 2 basketball
  player dunking at an outdoor hoop, 3 black boots splashing
  through a puddle, 4 woman in a red cap and sunglasses with
  hands behind her head against a shutter door, 5 dog leaping
  toward a pink frisbee, 6 man in an orange hoodie vaulting a
  concrete wall (parkour), 7 pilot boat speeding through waves,
  8 firefighter spraying water, 9 shattered drinking glass on
  a red surface. Set order (fbids): 122159800455032634,
  122159801379032634, 122159800629032634, 122159800347032634,
  122159800269032634, 122159801289032634, 122159801523032634,
  122159800497032634, 122159800281032634.
- **Fetch note:** the browser reported the 9 viewer-resolution
  CDN URLs in set order and they were downloaded promptly
  (signed URLs expire); all 9 verified at 1086×1448 with
  distinct contents matching the reported set order
  (spot-checked: street musician #1 renders as a comparison
  poster, photo above, black-ink illustration below).
  The catalog now stands at **60 prompts, 588 reference
  images**, with 5 new sample outputs for this entry (296 total
  sample outputs across the six sample inputs).
- **Filed as its OWN entry**, not folded into
  `black-line-drawing` or `japanese-hand-drawn`: all three are
  black-line styles, but this one is a playful marker/brush
  illustration in pure black on pure white — large rounded
  heads, dot eyes, mitten hands, chunky limbs — with a warm,
  spontaneous, handcrafted editorial character, while the other
  two use finer, more restrained linework.

### european-travel-film — Emerson post (fetched 2026-11-02 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** European Travel Film · 歐洲旅行底片色調 —
  photo set posted **Nov 2, 2026** (the author's prompt
  comment is timestamped Nov 2, 2026, 2:16 AM), the first
  post newer than the Oct 31 black-white-drawing entry.
  Caught by the daily-update routine. No Nov 1
  image-prompt set was found above it (the only Nov 1 post
  is a non-prompt post about ChatGPT's December usage
  policy).
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0me2yJUAk8o3bmDRzCJ4hGgpCtUStdo9M9UTMAL4gYtUDqV54seJAEGadS7WNF8oql&id=61580979040009
  — set ID `pcb.122160079593032634`. The full prompt is
  in the author's first comment (Nov 2, 2:16 AM);
  `reference/european-travel-film/prompt.md` keeps a
  structural summary plus an English translation of the
  introduction.
- **Companion reel:** https://www.facebook.com/reel/1465352465478561
  (~20–22 seconds; also Nov 2, 2026) — same title, same
  prompt in its author comment; frame-checked by pausing
  and scrubbing: frames matched set photos 1, 2, 3, 4, 5,
  7, 8, 9, 10 and 11. Set photo 6 (Taipei Yongle Market)
  was not captured in the sampled frames — a sampling
  gap, not evidence it is absent from the reel. No
  set-external example was observed, so nothing extra is
  noted.
- **Images:** exactly **11** (viewer cycle: stepping Next
  from photo 11 returned to photo 1; the feed grid's "+7"
  on the last tile had suggested 12 — the viewer cycle
  is authoritative). Ten at 1086×1448, photo 8 at
  1183×1330 (the highest resolutions the viewer served),
  saved as `reference/european-travel-film/post-01.jpg`
  … `post-11.jpg`. Every poster is a comparison layout:
  original photo on top, the same scene re-graded with a
  vintage-film tone below, with a white English serif
  location caption in the lower half. Captions, in set
  order: 1 KAOHSIUNG / Cishan Moon World (lake in
  badlands terrain, water birds), 2 TAINAN / Sicao Green
  Tunnel (mangrove-canopied canal, boat), 3 TAIWAN /
  Liyutan Reservoir (spillway waterfall in green hills),
  4 TAINAN / Zou Malai Farm (geometric Trojan-horse
  sculpture), 5 CHIAYI / Lantan Reservoir (aerial lake
  with curving lakeside road), 6 TAIPEI / Yongle Market
  (market facade, street, scooters), 7 PENGHU / Bao'an
  Temple (temple gate, dragon pillars, banyan tree),
  8 TBILISI / Chronicle of Georgia (hilltop monument,
  city and lake — the set's only non-Taiwan caption),
  9 PINGTUNG / Coastal Scenery (lattice-canopy pavilion
  by the waterfront), 10 TAIWAN / Sunset by the Sea
  (ocean sunset over water and rocks), 11 AMSTERDAM /
  Street Piano (woman playing a street piano, crowd).
  Set order (fbids): 122160077091032634,
  122160076773032634, 122160077043032634,
  122160077277032634, 122160077073032634,
  122160077559032634, 122160077391032634,
  122160076749032634, 122160077457032634,
  122160076707032634, 122160076737032634.
- **Fetch note:** the browser downloaded all 11 at the
  viewer-served resolutions in viewer order; all 11
  verified on disk with dimensions matching the report
  (10 at 1086×1448, photo 8 at 1183×1330) and byte sizes
  matching the download receipts. The catalog now stands
  at **61 prompts, 599 reference images**, with 5 new
  sample outputs for this entry (301 total sample
  outputs across the six sample inputs).
- **Filed as its OWN entry**, not folded into
  `mediterranean-poster` or `retro-film`: this is a
  photographic re-grading (the lower half is the same
  photo, only colour-graded with film tone and grain),
  not an illustration or a halftone print.

### reflection-protagonist — Emerson post (fetched 2026-11-03 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Reflection Protagonist ·
  把照片裡最不起眼的倒影，化成了整張圖的主角 — photo set
  posted **Nov 3, 2026** (the author's prompt comment is
  timestamped Nov 3, 2026, 2:12 AM), the first post newer
  than the Nov 2 european-travel-film entry. Caught by the
  daily-update routine.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0jazjUo9W3rYJqsW5iYzrJGEgcTMGdZWA4MJWYVJ8tojvfDH3wLRuYYLzMKa7MkQtl&id=61580979040009
  — set ID `pcb.122160273177032634`; 105 likes, 8
  comments, 25 shares as displayed Nov 3, 2026. The full
  prompt is in the author's comment;
  `reference/reflection-protagonist/prompt.md` keeps a
  structural summary plus an English translation of the
  introduction.
- **Companion reel:** https://www.facebook.com/reel/1023414520154124/
  (author's prompt comment timestamped Nov 3, 2026,
  2:23 AM) — same prompt in its author comment;
  frame-checked by sampled seeks across two loops:
  frames matched set photos 1, 2, 3, 4, 6, 9 and 10
  directly, with the remaining set photos falling in the
  same slideshow sequence between the observed frames —
  **no set-external example**.
- **Images:** exactly **10** (viewer cycle: stepping Next
  from photo 10 returned to photo 1), all 1086×1448,
  saved as `reference/reflection-protagonist/post-01.jpg`
  … `post-10.jpg`. Every poster is a comparison layout:
  original photo on top, the same scene reworked as a
  dreamy naive abstract painting below, with no text.
  Subjects, in set order: 1 rainy city street (red
  umbrella, orange streetlight reflections), 2 car
  rearview mirror (round gold sunglasses, palm trees),
  3 two people on a sofa (girl whispering into an older
  girl/woman's ear), 4 motorcyclist with a red helmet in
  a tunnel/underpass with a green wave-painted wall,
  5 waterfall through a cave/arch opening over the sea
  (large orange sun in the abstract half), 6 Bryce Canyon
  (twisted tree among orange hoodoos), 7 brown dog
  looking up at the camera on a patterned floor,
  8 wedding couple back-to-back by water, 9 person
  sitting roadside with arms raised in a V at sunset
  over water and hills, 10 close-up portrait of a woman
  with a tattooed arm, yellow sleeveless top, red
  lipstick. Set order (fbids): 122160271665032634,
  122160271677032634, 122160271167032634,
  122160271155032634, 122160271227032634,
  122160271713032634, 122160271137032634,
  122160271113032634, 122160271641032634,
  122160271209032634.
- **Fetch note:** the browser downloaded all 10 at the
  viewer-served resolution in viewer order; all 10
  verified on disk at 1086×1448, and a contact sheet
  confirmed the download order matches the reported set
  order subject-for-subject. The catalog now stands at
  **62 prompts, 609 reference images**, with 5 new
  sample outputs for this entry (306 total sample
  outputs across the six sample inputs).
- **Skipped the same morning, per the set-only rule:**
  a Nov 3 reel-only post, https://www.facebook.com/reel/1684524513088971/
  (author's comment timestamped Nov 3, 2026, 3:50 AM),
  titled 霓虹厚塗油畫 / Neon Impasto Painting. It is
  **not a new style**: frame-checking across a full
  24-second loop showed only one scene — the five people
  in a golden grass field before a mountain — which is
  already archived as `neon-thick-impasto` post-05
  (Oct 28 set), re-presented here as a title card,
  original photo, close-up painted views and a
  before/after comparison. No new entry was filed, and
  no reel frames were downloaded.
- **Filed as its OWN entry**, not folded into
  `neon-thick-impasto` or any other comparison-poster
  branch: the lower half here is a naive abstract
  painting, and its defining rule — promoting the
  scene's reflections to the main subject — is new to
  the catalog.

### vintage-hatching-comic — Emerson post (fetched 2026-11-04 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Vintage Hatching Comic · 排線 (hatching) in a
  1950s–1960s European vintage comic / old picture-book
  style — photo set posted **Nov 4, 2026** (the author's
  prompt comment is timestamped Nov 4, 2026, 6:58 AM),
  the first post newer than the Nov 3
  reflection-protagonist entry. Caught by the
  daily-update routine.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid032m6qSaTuxNgWCwQFRvqEYusJsUADYSe5ARGwTXSweGK6iyXB5Xmd5qKgLJhmceDdl&id=61580979040009
  — set ID `pcb.122160576429032634`; 54 reactions,
  9 comments, 13 shares as displayed Nov 4, 2026. The
  caption invites readers to look closely at the lines
  — especially the lower half's sky and asphalt road,
  drawn stroke by stroke, and the arched canopies at
  the Cijin market — and the full prompt is in the
  author's comment; `reference/vintage-hatching-comic/prompt.md`
  keeps a structural summary plus an English
  translation of the introduction.
- **Companion reel:** https://www.facebook.com/reel/1443438337596047
  (0:22, music "What a Day" by kirinmuse; author's
  prompt comment timestamped Nov 4, 2026, 7:08 AM) —
  same caption and prompt; frame-checked by sampled
  seeks: frames matched set photos 1, 2, 8 and 11 in
  set order — **no set-external example**.
- **Images:** exactly **11** (viewer cycle: stepping
  Next from photo 11 returned to photo 1), all
  1024×1536, saved as
  `reference/vintage-hatching-comic/post-01.jpg` …
  `post-11.jpg`. Every poster is a comparison layout:
  original photo on top, the same scene redrawn as a
  vintage hatched comic illustration below, separated
  by a thin white line. Subjects, in set order:
  1 street intersection at dusk (shops, crosswalk,
  road marking), 2 market street with arched canopies
  (Cijin market), 3 corner shop / intersection with
  scooters and crosswalk under a blue sky, 4 temple
  with red lanterns and people on the steps, 5 old
  market street with an archway and banner flags,
  6 riverside European town with a bridge and
  half-timbered houses, 7 stilt fishing village /
  boathouses with boats, 8 lakeside village with a
  church spire, lake and mountains, 9 large
  church/cathedral with a rose window and spires,
  street foreground, 10 coastal breakwater /
  promenade at sunset with wind turbines on the
  horizon, 11 large temple hall with wide steps and
  an ornate roof. Set order (fbids, from the
  downloaded files): 122160575943032634,
  122160574449032634, 122160574119032634,
  122160574071032634, 122160574563032634,
  122160574341032634, 122160573723032634,
  122160573789032634, 122160573795032634,
  122160573801032634, 122160574125032634.
- **Samples:** 5 full-frame outputs (howe-sound,
  book-fair, millennium-falcon, concert-stage,
  taco-truck-dog), registered in each sample's
  `generations.json` and outputs map. The catalog now
  stands at **63 prompts, 620 reference images**,
  with 311 total sample outputs across the six sample
  inputs.

### gif-animation — Emerson post (fetched 2026-11-05 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** ChatGPT GIF Animation · GIF 動畫 — an
  8-second GIF animation prompt for ChatGPT Images 2.6
  (released Nov 4), photo set posted **Nov 5, 2026,
  ~1:45 AM**, the first post newer than the Nov 4
  vintage-hatching-comic entry. Caught by the
  daily-update routine.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0kK3SjHzw9rTebnAX1hHsdsqisSSVqSDVysQJu7kwz3dnSSxfrYovTevJzGBme3rjl&id=61580979040009
  — set ID `pcb.122160726621032634`; 36 likes,
  4 comments, 6 shares as displayed Nov 5, 2026. The
  caption announces ChatGPT can now make photos move
  and tries it on the rainy street scene shared
  before; the full GIF prompt is in the author's
  pinned comment (Nov 5, 2:02 AM), and a second author
  comment (Nov 5, 2:05 AM) links the original style
  post; `reference/gif-animation/prompt.md` keeps a
  structural summary plus an English translation of
  the introduction.
- **Companion reel:** https://www.facebook.com/reel/2141458706449895
  (0:22, music "Beautyful Day" by LouLink; author's
  prompt comment Nov 5, 6:12 AM; 38 likes, 6 comments,
  10 shares as displayed Nov 5, 2026) — unlike the set
  post, its caption carries both prompts inline, the
  GIF-animation prompt and the reused abstract-art
  prompt. Frame-checked by sampled seeks: ~0s a
  comparison poster combining set photos 1 and 2,
  ~5s the GIF animation mid-morph, ~9s a title card
  over the original photo — then a **set-external
  second example**: ~11–12s a motorcyclist with a red
  helmet riding through a concrete underpass/tunnel
  (spiral ramp visible) as a realistic photo, ~17s the
  same scene as a colorful abstract illustration, ~21s
  closing cards inviting readers to post their work.
  The motorcycle example is noted here, not
  downloaded — it exists only as reel frames.
- **Images:** the set holds exactly **3 items**
  (viewer cycle: photo 1 → photo 2 → video → back to
  photo 1, verified twice): 2 photos, saved as
  `reference/gif-animation/post-01.jpg`
  (590×393 — the highest rendition the viewer serves
  for this photo) and `post-02.jpg` (1536×1024), plus
  the 8-second GIF animation video itself
  (id 1668835008244738) as item 3 — a video, not an
  image, so not downloaded. Subjects, in set order:
  1 the original rainy-street photo (woman with a red
  umbrella crossing a wet city street at dusk, tall
  buildings, streetlights, reflections), 2 the same
  scene as a teal/red/orange abstract illustration
  with rough brushstrokes and screen-print texture.
  Set order (fbids): 122160726027032634,
  122160726489032634.
- **Relation to `reflection-protagonist`:** the
  abstract illustration here IS that Nov 3 style —
  the set post reuses the previously shared rainy
  street scene and links back to the
  reflection-protagonist post as the source of the
  style instruction. Filed as its own entry because
  the GIF-animation prompt is new, and it is the
  catalog's first video/animation prompt.
- **Samples:** none — the prompt's output is an
  8-second animated GIF, not a still image, and the
  repo's sample outputs are still images, so no
  samples were generated. The endpoint illustration
  style is already sampled under
  `reflection-protagonist`. The catalog now stands at
  **64 prompts, 622 reference images**, with 311
  total sample outputs across the six sample inputs.
- **Skipped the same morning, per the set-only rule:**
  a Nov 4 evening reel-only post,
  https://www.facebook.com/reel/1127275719883796
  (author's comment with the full prompt Nov 4, 2026,
  9:15 PM; 64 likes, 4 comments, 5 shares), titled
  極簡抽象水粉畫 / Minimal Abstract Gouache
  ("Photography × Minimal Abstract Gouache ×
  Modernist Visual Poetry × Eastern Negative Space").
  No companion photo set exists — the profile Photos
  tab shows no gouache comparison posters anywhere in
  the grid, only the Nov 5 GIF set, the Nov 4
  vintage-hatching-comic set, and Nov 3 and older
  sets. No new entry was filed, and no reel frames
  were downloaded.

### minimalist-simplification — Emerson post (fetched 2026-11-06 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Minimalist Simplification · 細節極簡化 —
  simplifying a photo's details to the extreme,
  photo set posted **Nov 6, 2026, 4:00 AM PST**,
  the first post newer than the Nov 5 gif-animation
  entry. Caught by the daily-update routine. No
  coined style name appears in the post or comments
  — the style is named by its descriptive phrase,
  細節極簡化; "Lazy Day" is the companion reel's
  music-track title, not the style name.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0AKh6bQZLq97P3sotX8NahNieMsPo5oD9sjHJMW94NA7nYvfSMYMdzQbgx7DSKCrXl&id=61580979040009
  — set ID `pcb.122160902565032634`; 71 likes,
  2 comments, 9 shares as displayed Nov 6, 2026.
  The full prompt appears identically in two places:
  at the end of the post text (after "prompt：") and
  in the author's own first comment (Nov 6, 4:00 AM),
  which also invites readers to try it, share results
  in the comments, and links a support page
  (portaly.cc/Emersonpost). The only other comment
  (Lücy Yen, 4:22 AM) is praise, no prompt.
  `reference/minimalist-simplification/prompt.md`
  keeps a structural summary plus an English
  translation of the introduction. Example photos
  credited to Pexels in the post.
- **Companion reel:** https://www.facebook.com/reel/1139679271791181
  (0:24, music "Lazy Day" by LouLink; 40 reactions,
  3 comments, 2 shares as displayed Nov 6, 2026) —
  frame-checked by sampled seeks: all 11 set photos
  appear, ~2s each, in slightly shuffled order (the
  lake appears before the airplane, and the lanterns
  appear last among the set photos) — then a
  **set-external example** at ~0:22–0:24: an aerial
  view of a large red/orange oval sports stadium with
  a green pitch, surrounded by city buildings (photo
  top, minimalist illustration bottom). Noted here,
  not downloaded — it exists only as reel frames.
- **Images:** the set holds exactly **11** photos
  (viewer cycle: photo 11 → Next → photo 1,
  verified), all downloaded at 941×1672 (three at
  941×1671 — the highest rendition the viewer serves
  for this set) and saved as
  `reference/minimalist-simplification/post-01.jpg`
  … `post-11.jpg`. Every poster is a comparison
  poster: original photo on top, minimalist
  illustration below. Set order (fbids):
  122160901149032634, 122160901191032634,
  122160900705032634, 122160900495032634,
  122160899505032634, 122160899409032634,
  122160899373032634, 122160900717032634,
  122160900201032634, 122160899961032634,
  122160899715032634. Subjects, in set order:
  1 colorful canal houses and boat (Camogli/Burano),
  2 rainy city street through a rain-speckled
  windshield, white car, 3 young woman with long
  dark wavy hair in a pink blouse, profile view,
  4 grain silos painted with colorful cartoon faces,
  5 airplane on the tarmac at sunset, passengers
  with luggage, 6 surfer riding a big turquoise
  barrel wave, 7 lake at twilight with mountains and
  a tree-covered point, 8 red paper lanterns strung
  across a building courtyard, 9 white passenger
  ferry approaching a pier on turquoise water,
  10 aerial view of workers drying fish on racks,
  11 green chameleon close-up on a branch.
- **Samples:** 5 — one full-frame output per scene/
  object sample (howe-sound, book-fair,
  millennium-falcon, concert-stage, taco-truck-dog),
  generated 2026-11-06 with Muse Image (Meta) and
  registered in each sample's `generations.json`
  (exactly one current entry per prompt slug) and in
  the sample's outputs map in `index.json`. The
  catalog now stands at **65 prompts, 633 reference
  images**, with 316 total sample outputs across the
  six sample inputs.
- **Not new, confirmed again this run:** the Nov 5,
  2:57 AM "Beautyful Day" reel
  (facebook.com/reel/2141458706449895) is the
  companion reel of the already-archived Nov 5
  GIF-animation set, already recorded in that
  entry — not a new post, not re-filed.

### cracked-palette-knife — Emerson post (fetched 2026-11-07 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Cracked Palette-Knife Oil Painting · 有裂紋感的油畫 —
  photo set posted **Nov 7, 2026** (the author's prompt comment
  is timestamped Nov 7, 2026, 2:54 AM), the first post newer than
  the Nov 6 minimalist-simplification entry. Caught by the
  daily-update routine.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0Yz345kS5bjdf1eBZUQ6HFXKPa393HEaB7JzhazpEt9kRzFhnh8RtfHY4mZgN6uJHl&id=61580979040009
  — set ID `pcb.122161139085032634`; **64 likes / 3 comments /
  9 shares** (as displayed Nov 7, 2026). The full prompt appears
  identically in the post caption and in the author's first
  comment; `reference/cracked-palette-knife/prompt.md` keeps a
  structural summary plus an English translation of the
  introduction. Example photos credited to Pexels in the post.
- **Companion reel:** https://www.facebook.com/reel/4544373369171786
  (0:18, music "Atmospheric Prelude · SigmaMusicArt"; author's
  prompt comment Nov 7, 2026, 5:01 AM; 49 likes, 2 comments,
  3 shares) — same caption, same prompt in its author comment;
  frame-checked by sampled seeks: frames matched set photos 1
  (aquarium), 3 (Times Square) and 5 (solar panels) —
  **no set-external example**; the reel cycles the set's 9 posters
  at ~2 seconds each.
- **Images:** exactly **9** (viewer cycle: stepping Next from
  photo 9 returned to photo 1), all 941×1672 (three at 941×1671 —
  the highest rendition the viewer serves for this set), saved as
  `reference/cracked-palette-knife/post-01.jpg` …
  `post-09.jpg`. Every poster is a comparison layout: original
  photo on top, cracked palette-knife oil-painting version below.
  No title text is visible on the archived posters (the prompt
  asks for one, but the examples carry none). Subjects, in set
  order: 1 woman with a backpack before a huge aquarium tank
  (rays and fish in shafts of light), 2 sunlit alley ending in a
  large colorful cat mural, 3 busy Times Square / Radio City
  street with crowds and a yellow truck, 4 desert river canyon
  with red-rock walls and snow-capped mountains, 5 solar-panel
  farm with wind turbines, 6 night city skyline dominated by One
  World Trade Center, 7 turquoise mountain lake (Blue Moon Valley,
  Lijiang) with a boardwalk, 8 snow-covered glacier with a dark
  meltwater stream, 9 black-and-white portrait of a young woman
  in profile looking upward. Set order (fbids):
  122161095801032634, 122161096461032634, 122161095291032634,
  122161095279032634, 122161096317032634, 122161096035032634,
  122161095825032634, 122161095243032634, 122161095717032634.
- **Fetch note:** the browser reported the 9 viewer-resolution CDN
  URLs in set order and they were downloaded promptly (signed
  URLs expire); all 9 verified at 941×1672/1671 with distinct
  contents matching the reported set order (spot-checked: aquarium
  #1 and B&W portrait #9 render as comparison posters, photo
  above, cracked oil painting below). The catalog now stands at
  **66 prompts, 642 reference images**, with 5 new sample outputs
  for this entry (321 total sample outputs across the six sample
  inputs).
- **Filed as its OWN entry**, not folded into
  `impasto-oil-painting`: that entry is also thick impasto, but
  in a vivid saturated palette as a standalone poster treatment,
  while this style is a comparison poster whose defining feature
  is the aged-paint craquelure crack pattern covering the whole
  painted surface, with the prompt's own title/frame/footer
  instructions.
- **Skipped the same morning, per the set-only rule:** the Nov 6,
  7:56 PM thick-impasto reel
  (https://www.facebook.com/reel/1104869662175365, 92 likes,
  2 comments, 15 shares) is a **repost of the already-archived
  Oct 17 `impasto-oil-painting` set** (`pcb.122157436305032634`,
  same 9 posters — "In Between", "Quiet Corners", "Golden
  Horizon", "Horizon", "Passage", "Stillness", "Open Terrain",
  "Passing Light", "Fetch") — its author's second comment links
  back to that Oct 17 set, and sampled reel frames show only
  that set's posters plus title cards. No new set to file.
  The Nov 4 evening Minimal Abstract Gouache reel
  (https://www.facebook.com/reel/1127275719883796) **still has no
  companion photo set** (feed adjacency and Photos-tab grid
  re-checked Nov 7) — it remains skipped under the set-only rule.

### paper-cut-fairytale — Emerson post (fetched 2026-11-08 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Paper-Cut Fairy Tale · AI 手工剪紙童話風
  ("Photography × Paper Folk Story"), photo set posted **Nov 8,
  2026** (the author's prompt comment is timestamped Nov 8, 2026,
  1:21 AM), the first post newer than the Nov 7
  cracked-palette-knife entry. Caught by the daily-update routine.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid02JLGjt3DkCnPGkeg21MiGaxNyHGXZkNAsZpCk7Rj3QUiCr3u7xxpXttLbDrmVr96wl&id=61580979040009
  — set ID `pcb.122161279155032634`; **110 likes / 7 comments /
  13 shares** (as displayed Nov 8, 2026). The full prompt appears
  identically in the post caption and in the author's first
  comment; `reference/paper-cut-fairytale/prompt.md` keeps a
  structural summary plus an English translation of the
  introduction. Example photos credited to Pexels in the post.
- **Companion reel:** https://www.facebook.com/reel/2158401081427003
  (0:22, music "Soft Deskline · Demeter Lounge"; author's
  prompt comment Nov 8, 2026, 5:38 AM; 61 likes, 1 comment,
  5 shares) — same caption, same prompt in its author comment;
  frame-checked by sampled seeks: frames matched set photos 11
  (lighthouse), 6 (city street), 3 (Notre-Dame), 7 (snowy
  riverside town), 9 (snow-covered canal) and 5 (electricity
  pylons) — **no set-external example**.
- **Images:** exactly **11** (viewer cycle: stepping Next from
  photo 11 returned to photo 1), all 1086×1448 (the highest
  rendition the viewer serves for this set), saved as
  `reference/paper-cut-fairytale/post-01.jpg` …
  `post-11.jpg`. Every poster is a comparison layout: original
  photo on top, handmade paper-cut illustration below, with
  about 70% clean negative space in the lower half. No title
  text is visible on the archived posters. Subjects, in set
  order: 1 bare leafless tree in snow (black-and-white photo),
  2 man leaning on a red VW Beetle, 3 Notre-Dame Cathedral
  on the Seine with autumn trees, 4 children and goats before
  a makeshift shack with laundry hanging, 5 electricity pylons
  in a field under a blue sky, 6 busy city street with yellow
  taxis, 7 snowy riverside town with swans/herons wading,
  8 traditional Japanese street of wooden machiya houses,
  9 snow-covered canal with a small bridge and red flowering
  bushes, 10 spice market stall, 11 lighthouse on a rocky
  point with a stone causeway. Set order (photo-page fbids):
  122161277937032634, 122161277973032634, 122161277637032634,
  122161278453032634, 122161277583032634, 122161278225032634,
  122161277661032634, 122161277907032634, 122161278165032634,
  122161278249032634, 122161277613032634. (Each CDN file's
  internal numeric ID differs by a few digits from its
  photo-page fbid; the downloaded files were verified at
  1086×1448 with distinct contents matching the reported set
  order — spot-checked: tree #1 and lighthouse #11 render as
  comparison posters, photo above, paper-cut below.)
- **Fetch note:** the browser reported the 11 viewer-resolution
  CDN URLs in set order and they were downloaded promptly
  (signed URLs expire). The catalog now stands at **67 prompts,
  653 reference images**, with 5 new sample outputs for this
  entry (326 total sample outputs across the six sample inputs).
- **Filed as its OWN entry**, not folded into
  `paper-cut` (Oct 11): that entry is a high-saturation flat
  paper-cut treatment filling the frame, while this style is a
  comparison poster whose lower half is a small paper-cut of
  only the 3–5 most distinctive elements floating in about 70%
  clean negative space, with a children's-storybook feel. It is
  likewise distinct from `paper-carving` (layered relief) and
  `paper-collage-lines` (collage plus hand-drawn lines).
- **Still skipped under the set-only rule:** the Nov 4
  "Minimal Abstract Gouache" reel
  (https://www.facebook.com/reel/1127275719883796) **still has
  no companion photo set** (timeline adjacency and Photos-tab
  re-checked Nov 8) — it remains unfiled.

### rice-paper-ink — Emerson post (fetched 2026-11-09 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Rice Paper Ink Wash · 宣紙水墨風 ("Photography ×
  Traditional Chinese Ink Wash"), photo set posted **Nov 9,
  2026** (the author's prompt comment is timestamped Nov 9,
  2026, 5:16 AM), the first post newer than the Nov 8
  paper-cut-fairytale entry. Caught by the daily-update routine.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0223PPHntmngmPL4ms2df2xShSHub53xbsVJiebTqUDcYQ7yeigxpxsDuYGCh3km5nl&id=61580979040009
  — set ID `pcb.122161418115032634`; **53 likes / 6 comments /
  7 shares** (as displayed Nov 9, 2026). The full prompt appears
  identically in the post caption and in the author's first
  comment; `reference/rice-paper-ink/prompt.md` keeps a
  structural summary plus an English translation of the
  introduction. Example photos credited to Pexels in the post.
- **Companion reel:** https://www.facebook.com/reel/997591810068582
  (0:19; author's prompt comment Nov 9, 2026, 8:42 AM; 9 likes,
  3 comments, 1 share) — same caption, same prompt in its author
  comment; frame-checked by sampled seeks at 0, 2, 3, 4, 5, 7,
  9, 10, 13, 15, 17, 18 and 19 seconds: all 10 set photos
  appear, each for ~2 seconds with a slow zoom/pan, in shuffled
  order (THE SEA, THE PIANO, THE OFFICE, THE RIVER, THE LAKE,
  THE CAMERA, SPACE LAB, THE MUSIC, LE GRIZZLI, HOI AN) —
  **no set-external example**.
- **Images:** exactly **10** (viewer cycle: stepping Next from
  photo 10 returned to photo 1), all 1086×1448 (the highest
  rendition the viewer serves for this set), saved as
  `reference/rice-paper-ink/post-01.jpg` …
  `post-10.jpg`. Every poster is a comparison layout: original
  color photo on top (labeled "ORIGINAL"), traditional Chinese
  ink-wash reinterpretation below (labeled "REIMAGINED") on
  aged, lightly yellowed rice paper, with a short English title
  centered at the very bottom and, on most posters, a small red
  seal stamp at the bottom right. Subjects with their printed
  titles, in set order: 1 "THE SEA" (woman with flowing red
  fabric on a stormy beach), 2 "THE LAKE" (person with an
  umbrella by a rainy lake), 3 "SPACE LAB" (hexagonal-mirror
  telescope in a cleanroom), 4 "THE PIANO" (hands playing piano
  keys), 5 "THE OFFICE" (woman with binders by grey lockers),
  6 "THE RIVER" (rowboat with a conical-hatted poler),
  7 "HOI AN" (old-town street café with red lanterns),
  8 "LE GRIZZLI" (Paris café with a striped awning),
  9 "THE CAMERA" (cameraman with a Sony video camera),
  10 "THE MUSIC" (hands playing a light-blue acoustic guitar).
  Set order (photo-page fbids): 122161416951032634,
  122161417047032634, 122161417479032634, 122161432671032634,
  122161432725032634, 122161432743032634, 122161417509032634,
  122161417551032634, 122161433199032634, 122161416969032634.
  (Each CDN file's internal numeric ID differs by a few digits
  from its photo-page fbid; the downloaded files were verified
  at 1086×1448 with distinct contents matching the reported set
  order — spot-checked: "THE SEA" #1 and "THE CAMERA" #9 render
  as comparison posters, photo above, ink wash below.)
- **Fetch note:** the browser reported the 10 viewer-resolution
  CDN URLs in set order and they were downloaded promptly
  (signed URLs expire). The catalog now stands at **68 prompts,
  663 reference images**, with 5 new sample outputs for this
  entry (331 total sample outputs across the six sample inputs).
- **Filed as its OWN entry**, not folded into `ink-rubbing`
  (Sep 29) or `ink-starved-geometry` (Oct 8): those are
  standalone posters with no comparison layout, while this
  style is a comparison poster whose lower half is a
  traditional Chinese ink wash on aged rice paper, essentially
  monochrome with exactly one vermilion-red accent borrowed
  from the original. It is likewise distinct from
  `black-white-drawing` (monochrome drawing, no rice paper, no
  red accent).
- **Seal discrepancy, noted:** the prompt forbids seals, yet
  most archived posters carry a small red seal stamp at the
  bottom right (all but #9 "THE CAMERA"; #5 and #6 are cropped
  below the fold in the viewer, so theirs is unconfirmed). A
  commenter asked whether the prompt always leaves red
  unprocessed; the author replied at 7:00 AM on Nov 9 that the
  vermilion red is intentional, but that the small seal had not
  been handled — and the post was updated. Photos 4, 5, 6 and 9
  show a later "2h" timestamp in the viewer while the others
  show "4h", consistent with that update; the seal is still
  visible on most posters, so the update did not remove it.
- **Sample note:** the concert-stage sample was regenerated
  once — the first attempt added a small red seal stamp, which
  the source prompt forbids; the replacement is seal-free.
- **Still skipped under the set-only rule:** the Nov 4
  "Minimal Abstract Gouache" reel
  (https://www.facebook.com/reel/1127275719883796) **still has
  no companion photo set** (timeline adjacency and Photos-tab
  re-checked Nov 9 — the post directly below it is the Nov 4
  morning line-art reel followed by that style's photo set, the
  post directly above it is the Nov 5 GIF-animation set; a few
  gouache-style before/after images deeper in the Photos grid
  are older, low-engagement standalone photos, not a Nov 4 set)
  — it remains unfiled.

### watercolor-risograph — Emerson post (fetched 2026-11-10 via signed-in browser)

- **Creator:** Emerson post (same profile as above).
- **Style:** Abstract Watercolor × Bold Risograph · 水彩暈染 × 復古印刷
  (the prompt's English header is "ABSTRACT WATERCOLOR × BOLD
  RISOGRAPH EDITORIAL V3.0"), photo set posted **Nov 10, 2026,
  7:04 AM** (marked AI content), the first post newer than the Nov 9
  rice-paper-ink entry. Caught by the daily-update routine.
- **Photo post:** https://www.facebook.com/permalink.php?story_fbid=pfbid0jpsQ1eknWYNQA9mUggEE5GH1vFrRMibTQJG5FdfbEgjFy9RD3eS4BxZGqrs53xhzl&id=61580979040009
  — set ID `pcb.122161605801032634`; **37 reactions / 1 comment /
  4 shares** (as displayed Nov 10, 2026, ~8:55 AM). The full prompt
  appears identically in the post caption and in the author's first
  comment (Nov 10, 2026, 7:05 AM), which opens by asking readers to
  save the post and share finished work in the comments, gives usage
  steps (open ChatGPT; upload a photo; copy the full English prompt
  and paste it in), and links to more of the creator's AI photo work;
  `reference/watercolor-risograph/prompt.md` keeps a structural
  summary plus an English translation of the introduction. Example
  photos credited to Pexels in the post.
- **Companion reel:** https://www.facebook.com/reel/1427722302852848
  (0:20; posted Nov 10, 2026, 7:14 AM; music "Just Go With The Flow ·
  NEZZARA"; 20 reactions, 2 comments, 3 shares) — frame-checked by
  watching it through more than once and sampling seeks at ~2–19s:
  9 of the 10 set photos appear directly (#1 tree, #2 rainy street,
  #4 makeup, #5 food alley, #6 sunset over the sea, #7 Tokyo
  crossing, #8 Paris café street, #9 highway, #10 skier), each shown
  full-frame as the diptych poster. #3 (city bridge cyclist) was not
  directly captured in ~15 sampled frames — its slot, if it has one,
  is a brief window around 6–7s, so it is unconfirmed whether it
  appears briefly or is omitted from the reel. **No set-external
  example** in any frame seen.
- **Images:** exactly **10** (viewer cycle: stepping Next from photo
  10 returned to photo 1, verified twice), all 1086×1448 (the highest
  rendition the viewer serves for this set), saved as
  `reference/watercolor-risograph/post-01.jpg` …
  `post-10.jpg`. Every poster is a vertical 3:4 diptych: the original
  photograph on top, the watercolor/risograph version below, on a
  plain white background. None of the 10 posters has a printed title
  or any text/label on it — the prompt forbids text (only in-scene
  signage inside the original photographs). Subjects, in set order:
  1 lone tree in a field at sunset, 2 couple under an umbrella on a
  wet neon-lit street at night, 3 cyclist on a bridge over a river,
  4 woman in a yellow blazer applying makeup, 5 diners in a
  lantern-lit night food alley, 6 sun setting over a calm sea,
  7 crowded Tokyo street crossing, 8 tree-lined Paris street with
  café terraces, 9 multi-lane highway with a green overpass,
  10 skier/snowboarder with an orange smoke flare. Set order
  (photo-page fbids): 122161602513032634, 122161603233032634,
  122161603845032634, 122161602915032634, 122161603599032634,
  122161603359032634, 122161603929032634, 122161602609032634,
  122161602585032634, 122161603173032634.
- **Fetch note:** the browser reported the 10 viewer-resolution CDN
  URLs in set order and they were downloaded promptly (signed URLs
  expire). The downloaded files were verified at 1086×1448 with
  distinct contents matching the reported set order — spot-checked:
  "tree at sunset" #1 and "skier with orange smoke" #10 render as
  diptych posters, photo above, watercolor version below. The catalog
  now stands at **69 prompts, 673 reference images**, with 5 new
  sample outputs for this entry (336 total sample outputs across the
  six sample inputs).
- **Filed as its OWN entry**, not folded into `blue-red-risograph`
  (Oct 20, two-color risograph with print-misregistration feel,
  standalone posters, no watercolor, no comparison layout) or
  `rice-paper-ink` (Nov 9, monochrome ink wash on aged, yellowed
  rice paper with exactly one vermilion accent — this style
  explicitly forbids aged/yellowed paper and uses 2–4 intensified
  colors drawn from the photo): this style is a comparison poster
  whose lower half is a colorful abstract watercolor with bold
  risograph grain and halftone on pure white, with no poster titles.
- **Sample note:** the book-fair sample was regenerated once — the
  first attempt dissolved the scene into unrecognizable watercolor
  blobs; the replacement keeps the round pink table, book stacks,
  red cloud sign and yellow price sign recognizable.

### Loop completion survey (2026-10-23, batch 17)

The browser surveyed the rest of the profile to its oldest posts
(Sep 23, 2025). Findings:

- The set-bearing photo-transformation prompt era runs **Aug 19,
  2026 (geometric-poster group set) → Oct 22, 2026** and is now fully
  archived: **50 prompts, 482 reference images**.
- Duplicates resolved without downloads: an **Aug 21, 2026 紙雕 set**
  (`pcb.122147928831032634`) is an earlier posting of the archived
  paper-carving style (different examples — Paris, Venice, waterfall —
  not downloaded, per the duplicate rule); an **Aug 19, 2026 profile
  posting** duplicates the geometric-poster group set.
- Below August: July layout/font-catalog posts (text-brief templates,
  not photo transformations), June–March essays and doodle explainers,
  a February product-ad post — no archivable sets.
- Prompt posts WITHOUT a multi-photo set (not archived under the
  set-only rule; flagged for a possible directed follow-up): Apr 24,
  2026 JSON style-template post (photo-graffiti-doodle, 2 photos);
  Jan 24, 2026 "Porcelain Luminous Skin prompt" (2 photos); Jan 20,
  2026 "Tea Style / No-Makeup Makeup prompt" (2 photos); Jan 19, 2026
  interior time-lapse video prompt; Jan 16, 2026 cinematic-style video
  prompt.
- **clean-illustration reconciliation closed negatively:** no earlier
  set-bearing posting of the Oct 8, 2026 reel-only style exists
  anywhere on the profile. It remains the catalog's only reel-only
  entry.
- One multi-photo post was not opened: the Oct 26, 2025 album
  (~6 photos) — no prompt indicators in any feed render; it sits
  among personal essay posts.
- **Correction (2026-10-23):** the Oct 26, 2025 album was opened at
  the user's direction and IS a prompt post — six Google AI Studio
  (Nano Banana) cinematic-portrait prompts printed in its caption,
  with a 6-photo set — and the user chose to archive it as
  `cinematic-portraits` (bringing the catalog to **51 prompts, 488
  reference images**). The survey's "no archivable sets below
  August" finding is corrected accordingly; its other findings
  stand. Prompt-sharing on this profile therefore reaches back to
  Oct 2025, ~10 months before the poster era.

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


## Model comparison outputs

Keep the existing canonical `outputs` map and `current` records intact when
adding a comparison model. Save additional images as `<style-slug>.gpt.webp`
(or the appropriate provider suffix). Append ledger records with `current: false`
and `comparison: true`; the gallery reads these alongside canonical outputs.
Archive rejected attempts with `comparison: false` and the reason in `notes`.
Record exact `prompt_text`, source `prompt_sha` and `input_sha` when available,
and report unavailable model versions, seeds and token counts honestly.
GPT comparisons use the archived structural summaries and a full-frame override,
not the creator's unarchived verbatim prompt. WebP outputs use quality 95 without
resizing; the transform is generated by the image model, then encoded for the site.
Do not chain transformations through previous generated images. Each request must
receive the original photograph. Concurrent requests may share one fixed source
attachment; do not rely on images emitted inside a still-running tool loop to
replace the image tool's conversation attachment.

Comparison records are non-canonical model observations, not approvals. Keep
first-pass instruction-following failures visible for quality comparison and
record review findings honestly. Do not silently replace a first-pass result or
claim that an unreviewed image obeys all layout rules; log every retry.

If an interrupted experiment did not retain its image or exact timestamp,
record `status: discarded`, `output: null`, `generated_at: null`,
`current: false`, `comparison: false`, and an explicit reason instead of
inventing a file path or timestamp.

When a manifest-listed legacy output lacks a current ledger entry, record its
provider as `Unknown (legacy output)` with an unavailable generation timestamp.
Do not infer a provider from other images, a filename, or surrounding entries.

Never overlap generation batches from different source photos. Withhold all
image results until every request for one fixed source has completed; progress
updates during a batch must be text-only. Review the resulting contact sheet
before admitting any output as a valid source-photo comparison.

Before treating legacy model metadata as unknown, inspect historical ledgers.
Restore an old record only when its output file's Git blob SHA still matches
the current image; record the source commit and verification hash.
