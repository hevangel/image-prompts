# AGENTS.md — instructions for AI assistants working in this repo

This repo is a static website (GitHub Pages, served from the repo root) that
collects image generation prompts and shows what each prompt does to sample
photos. There is no build step. `index.html` fetches `index.json` and renders
everything from it — never hardcode entries into the HTML. The page has two
tabs: Samples (left = original photos, right = generated images, filterable
by keyword and by the model recorded in each sample's `generations.json`,
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
- **No samples:** the prompts need a person's own portrait as input;
  the sample set has none (same exception as `food-poster`).

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
