"""Encode GPT PNG outputs for the static gallery, without resizing."""
import hashlib
import os
import json
from pathlib import Path
from PIL import Image

converted = {}
for source in Path("samples").glob("*/*.gpt.png"):
    target = source.with_suffix(".webp")
    with Image.open(source) as image:
        image.save(target, "WEBP", quality=95, method=6)
        width, height = image.size
    png_payload = source.read_bytes()
    raw_sha = hashlib.sha1(f"blob {len(png_payload)}\0".encode() + png_payload).hexdigest()
    with Image.open(target) as check:
        assert check.size == (width, height), f"Unexpected resize: {target}"
    payload = target.read_bytes()
    sha = hashlib.sha1(f"blob {len(payload)}\0".encode() + payload).hexdigest()
    converted[str(source)] = {"output": target.name, "sha": sha, "bytes": len(payload), "width": width, "height": height, "source_png_sha": raw_sha}
    source.unlink()
for ledger_path in Path("samples").glob("*/generations.json"):
    ledger = json.loads(ledger_path.read_text())
    changed = False
    for generation in ledger.get("generations", []):
        filename = generation.get("output")
        if not filename:
            continue
        key = str(ledger_path.parent / filename)
        if key in converted:
            generation.update(converted[key])
            generation["encoding"] = "WebP quality 95, method 6, no resizing"
            changed = True
    if changed:
        ledger_path.write_text(json.dumps(ledger, ensure_ascii=False, indent=2) + "\n")
for report in Path("runs").glob("gpt-*.json"):
    run = json.loads(report.read_text())
    for job in run.get("jobs", []):
        key = job.get("output")
        if key in converted:
            row = converted[key]
            job["raw_output"] = key
            job["source_png_sha"] = row["source_png_sha"]
            job["width"] = row["width"]
            job["height"] = row["height"]
            job["output"] = str(Path(key).with_suffix(".webp"))
            job["sha"] = row["sha"]
            job["bytes"] = row["bytes"]
    run["encoding"] = "WebP quality 95, method 6, no resizing"
    if converted:
        run["raw_png_commit"] = os.environ.get("GITHUB_SHA")
    report.write_text(json.dumps(run, ensure_ascii=False, indent=2) + "\n")
print(f"Encoded {len(converted)} GPT images")

# Contact sheets allow a visual check of all model outputs and source photos.
from PIL import ImageDraw, ImageFont, ImageOps
font = ImageFont.load_default(size=12)
Path("runs").mkdir(exist_ok=True)
for ledger_path in Path("samples").glob("*/generations.json"):
    ledger = json.loads(ledger_path.read_text())
    generations = [g for g in ledger.get("generations", []) if g.get("comparison")]
    if not generations:
        continue
    items = [("ORIGINAL", ledger.get("input", "input.jpg"))] + [
        (g["prompt_slug"], g["output"]) for g in sorted(generations, key=lambda g: g["prompt_slug"])
    ]
    tile_w, tile_h, columns = 220, 190, 8
    rows = (len(items) + columns - 1) // columns
    sheet = Image.new("RGB", (columns * tile_w, rows * tile_h), "white")
    draw = ImageDraw.Draw(sheet)
    for index, (label, filename) in enumerate(items):
        with Image.open(ledger_path.parent / filename) as image:
            thumbnail = ImageOps.contain(image.convert("RGB"), (tile_w - 8, tile_h - 32))
        x, y = index % columns * tile_w, index // columns * tile_h
        sheet.paste(thumbnail, (x + (tile_w - thumbnail.width) // 2, y + 4))
        draw.text((x + 4, y + tile_h - 26), label[:27], fill="black", font=font)
    sheet.save(Path("runs") / f"gpt-2026-11-06-{ledger_path.parent.name}.jpg", quality=80, optimize=True)
