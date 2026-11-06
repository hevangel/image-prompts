# image-prompts

A collection of image generation prompts — each with its original reference and
generated samples — presented as a static website.

**Live site:** https://hevangel.github.io/image-prompts/

## What this is

Every prompt in this collection started as a social-media post where a creator
shared a prompt that transforms a photo into a particular style. This repo keeps,
for each prompt:

- the original prompt text, with a link back to the source post,
- the source post's example image,
- samples: our own input photos with the prompt applied, generated fresh.

## Layout

```
index.html                  the website (repo root, served by GitHub Pages)
index.json                  manifest the website renders from
reference/<style-slug>/     one folder per prompt
    prompt.md               source, attribution, the prompt, English translation
    post-01.<ext> …         ALL of the source post's example images, in set order
samples/<input-slug>/       one folder per input photo
    input.<ext>             the input photo
    <style-slug>.<ext>      the generated output for each prompt applied to it
    generations.json        model, timestamp and tokens for every generation
```

Sample outputs are generated full-frame — the original photo is shown
separately on the site, stacked on top of the outputs, not baked into the
generated image as a split poster.

Style slugs are kebab-case, at most three words (e.g. `frosted-glass`,
`notebook-hand-drawn`).

## Adding a prompt or a sample

See [AGENTS.md](AGENTS.md) — it documents the conventions precisely enough for a
person or an AI assistant to extend the collection without breaking the site.

## Credits

Prompts belong to their original creators; each entry links to its source post.
Sample outputs are generated locally from our own photos using those prompts.

## Comparing image models

Additional model outputs use `<style-slug>.gpt.webp` (or another provider suffix)
and are recorded in `generations.json` with `current: false` and
`comparison: true`. The gallery displays these beside the canonical output,
including in prompt detail and model filters. `current` retains its existing
meaning: exactly one canonical generation per prompt. Failed attempts are kept
with `comparison: false` and a reason in `notes`.

GPT outputs in this run use the repository's structural prompt summaries with
a full-frame override, not the creator's unarchived verbatim prompt. Each
ledger record includes the exact `prompt_text` sent. Model version, seed and
token usage are not exposed by the ChatGPT image tool, so no specific API model
version or token usage is claimed. These are qualitative comparisons; the
historical Muse prompts and settings may differ. The GIF prompt requires an
animation generator and is excluded from the still-image run.

Comparison images are encoded as WebP quality 95 without resizing. This is a
high-quality lossy encoding, not pixel-identical preservation of the PNG output.

These are qualitative, uncurated model comparisons. Some first-pass outputs may
ignore the full-frame override or add typography; retain and inspect those
instruction-following failures rather than interpreting every image as a
validated rendition. Ledger `review_status` distinguishes unreviewed outputs
from explicitly rejected attempts. The original Muse/Grok prompts and settings
may differ; use `prompt_text` when comparing adherence.

The run report in `runs/gpt-2026-11-06.json` records output dimensions,
image hashes, and the commit containing the original generator PNG files.
Contact sheets in `runs/` support a quick visual review of each sample.

The book-fair ledger omitted 56 existing images. Their original records were
restored from commit `37e2167a37357224876ff328000e3938c4d6fc64` after confirming
that each current image blob matches that historical commit. The two Grok
outputs retain their existing attribution.

The two historical Muse book-fair images were also restored under `.muse.webp`
filenames, using their original image blobs, so the two existing Grok samples
can be compared directly with Muse and GPT on the same input photo.

## GPT run status — 2026-11-06

This run is paused at the image service's Plus usage limit: **150 of 384**
still-image comparisons are saved. The service reported a reset at
**2026-11-07 16:21 UTC**. The remaining **234** sample/style pairs are listed
in `runs/gpt-2026-11-06.json`; none are presented as completed.

| Sample | GPT images saved | Still styles targeted |
| --- | ---: | ---: |
| Howe Sound | 64 | 64 |
| Book fair | 64 | 64 |
| Millennium Falcon | 22 | 64 |
| Concert stage | 0 | 64 |
| Taco truck dog | 0 | 64 |
| Jensen Huang | 0 | 64 |

The Millennium Falcon minimalist-simplification attempt was separately rejected
by the image service's output safety check and returned no image. The other
41 attempted-but-unfinished Millennium Falcon jobs hit the usage limit; the
remaining three samples have not been attempted in the checkpointed run.

New results are committed individually on `gpt-generation-checkpoints` before
batch processing, so resuming can skip every completed sample/style pair. Raw
PNG provenance and visual-review findings are recorded with the run. Earlier
interrupted or incorrect-reference experiments are excluded from comparisons.
