// Validate real gallery files and generation provenance after image encoding.
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const read = file => JSON.parse(fs.readFileSync(file, "utf8"));
const hash = file => {
  const bytes = fs.readFileSync(file);
  return crypto.createHash("sha1").update(Buffer.from("blob " + bytes.length + "\0")).update(bytes).digest("hex");
};
const assert = (condition, message) => { if (!condition) throw Error(message); };
const manifest = read("index.json");
const report = read("runs/gpt-2026-11-06.json");
const expected = manifest.samples.length * manifest.prompts.filter(p => p.slug !== "gif-animation").length;
assert(report.expected_still_outputs === expected, "Stale expected output count");
const jobs = report.jobs.filter(j => j.status === "completed");
assert(jobs.length === report.registered_outputs, "Report count mismatch");
assert(new Set(jobs.map(j => j.output)).size === jobs.length, "Duplicate completed output");
let canonical = 0, comparisons = 0, gpt = 0;
for (const sample of manifest.samples) {
  const ledger = read(sample.generations_file);
  const folder = path.posix.dirname(sample.input);
  const current = ledger.generations.filter(g => g.current);
  assert(new Set(current.map(g => g.prompt_slug)).size === current.length, "Duplicate canonical record: " + sample.slug);
  for (const [slug, file] of Object.entries(sample.outputs)) {
    assert(fs.existsSync(file), "Missing canonical output: " + file);
    assert(current.some(g => g.prompt_slug === slug && path.posix.join(folder,g.output) === file), "Missing canonical metadata: " + file);
    canonical++;
  }
  for (const gen of ledger.generations.filter(g => g.comparison && g.output)) {
    const file = path.posix.join(folder, gen.output);
    assert(fs.existsSync(file), "Missing comparison: " + file);
    comparisons++;
    if (gen.run_id !== report.run_id) continue;
    gpt++;
    const prompt = manifest.prompts.find(p => p.slug === gen.prompt_slug);
    assert(prompt, "Unknown style: " + gen.prompt_slug);
    assert(gen.prompt_sha === hash(prompt.prompt_file), "Prompt source hash mismatch: " + file);
    assert(gen.input_sha === hash(sample.input), "Input hash mismatch: " + file);
    assert(gen.sha === hash(file), "Image hash mismatch: " + file);
    assert(gen.prompt_text && gen.prompt_text.length > 30, "Missing exact prompt: " + file);
    assert(gen.width > 0 && gen.height > 0 && gen.bytes > 0, "Missing dimensions or size: " + file);
    const job = jobs.find(j => j.output === file);
    assert(job && job.sha === gen.sha, "Report/ledger mismatch: " + file);
    assert(gen.current === false, "Comparison replaced canonical output: " + file);
  }
}
assert(gpt === jobs.length, "Completed job missing from ledgers");
if (report.status.startsWith("completed")) {
  assert(gpt === expected, "Incomplete finished report");
  for (const sample of manifest.samples) for (const p of manifest.prompts.filter(p => p.slug !== "gif-animation"))
    assert(jobs.some(j => j.sample === sample.slug && j.prompt_slug === p.slug), "Missing sample/style pair");
}
console.log(JSON.stringify({canonical, comparisons, gpt, expected, checks:"files, metadata, exact prompts, hashes, coverage and canonical uniqueness passed"}));
