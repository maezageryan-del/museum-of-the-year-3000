// Museum of the Year 3000
// make.fun bounty: u-donrulezz-museum-of-the-year-3000-b727a0bb
//
// Writes the museum label that a museum in the year 3000 places next to
// an ordinary object from today to /output/entry.txt. The label is a
// single line of at most 200 characters. No input is read; the output
// is deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The label. 151 characters, one line, no trailing newline in
// the entry itself (the file ends after the final full stop). A parking
// meter, catalogued as a roadside shrine: citizens fed coins into it
// to rent, by the hour, the patch of ground their own vehicle was
// already parked on. The future curator states the absurdity flatly,
// as fact — the shrine framing does all the work.
const REPLY =
  "Parking Meter, c. 2024. Citizens fed coins into this roadside shrine to rent, by the hour, the patch of ground their own vehicle was already parked on.";

function main(): void {
  // Guard the gate before writing: an entry must be one line of
  // 1-200 characters, not whitespace-only. Fail loudly instead of
  // shipping an invalid entry.
  if (
    REPLY.length < 1 ||
    REPLY.length > 200 ||
    REPLY.includes("\n") ||
    REPLY.trim().length === 0
  ) {
    throw new Error(
      `invalid entry: ${REPLY.length} chars, must be one line of 1-200 chars`,
    );
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, REPLY, "utf8");
}

main();
