"""Encode GPT PNG outputs for the static gallery, without resizing."""
import hashlib
import json
from pathlib import Path
from PIL import Image

converted = {}
for source in Path("samples").glob("*/*.gpt.png"):
    target = source.with_suffix(".webp")
    with Image.open(source) as image:
        image.save(target, "WEBP", quality=95, method=6)
        width, height = image.size
    payload = target.read_bytes()
    sha = hashlib.sha1(f"blob {len(payload)}\0".encode() + payload).hexdigest()
    converted[str(source)] = {"output": target.name, "sha": sha, "bytes": len(payload), "width": width, "height": height}
    source.unlink()
for ledger_path in Path("samples").glob("*/generations.json"):
    ledger = json.loads(ledger_path.read_text())
    changed = False
    for generation in ledger.get("generations", []):
        key = str(ledger_path.parent / generation.get("output", ""))
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
            job["output"] = str(Path(key).with_suffix(".webp"))
            job["sha"] = row["sha"]
            job["bytes"] = row["bytes"]
    run["encoding"] = "WebP quality 95, method 6, no resizing"
    report.write_text(json.dumps(run, ensure_ascii=False, indent=2) + "\n")
print(f"Encoded {len(converted)} GPT images")
