// One Line, One Chill — a single-sentence horror line.
// Offline and deterministic: no network, no clock, no randomness.
// Writes the line to /output/entry.txt (or $OUTPUT_DIR/entry.txt).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The baby monitor showed me leaning over the crib, whispering, 'Daddy's home,' while I was still downstairs.";

// Gate check, mirroring the sealed scorer: UTF-8 text, 1-200 characters,
// not only whitespace. Plain ASCII, so characters and bytes agree.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the 1-200 character gate (${chars} chars)`);
}
if (!/^[\x20-\x7e]*$/.test(LINE)) {
  throw new Error("entry line must be plain printable ASCII");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Round-trip check: what was written must read back byte-identical.
if (readFileSync(outPath, "utf8") !== LINE) {
  throw new Error("entry.txt round-trip mismatch");
}
