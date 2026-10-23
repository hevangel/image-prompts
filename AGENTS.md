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
examples. (Three reel-only entries filed before this rule —
`small-illustration`, `out-of-frame`, `clean-illustration` — remain in
the repo pending the user's keep/remove decision.)

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
