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
    post.<ext>              the source post's example image
samples/<input-slug>/       one folder per input photo
    input.<ext>             the input photo
    <style-slug>.<ext>      the generated output for each prompt applied to it
```

Style slugs are kebab-case, at most three words (e.g. `frosted-glass`,
`notebook-hand-drawn`).

## Adding a prompt or a sample

See [AGENTS.md](AGENTS.md) — it documents the conventions precisely enough for a
person or an AI assistant to extend the collection without breaking the site.

## Credits

Prompts belong to their original creators; each entry links to its source post.
Sample outputs are generated locally from our own photos using those prompts.
