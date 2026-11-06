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

Additional model outputs use `<style-slug>.gpt.png` (or another provider suffix)
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
