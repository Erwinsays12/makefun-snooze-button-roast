// Snooze Button Roast — make.fun entry
// u-carbon-forge-snooze-button-roast-14cbafc6
//
// One line roasting an alarm clock that rings at 6 AM on a Saturday.
// The program is fully deterministic: it always writes the same curated
// line, so both grading runs produce byte-identical output.
//
// The line was written against the house judge's brief:
//  1. It roasts an alarm clock ringing at 6 AM on a Saturday, in one line.
//  2. The laugh lands in the last few words: the punchline is the rooster
//     getting a job in the bedroom.
//  3. Fresh angle: not "I hate mornings" or "who invented alarms" — the
//     alarm is a rooster that flunked farm school and found new employment.
//  4. Tight: every word earns its place, sayable in one breath.
//  5. Sharp, specific voice with concrete images (rooster, farm school,
//     bedroom) instead of vague grumbling.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The roast, exactly as it must appear in /output/entry.txt.
const ROAST =
  "My alarm clock rings at 6 AM on a Saturday like a rooster that flunked farm school and got a job in my bedroom.";

// The sealed gate accepts UTF-8 text of 1 to 200 characters, not only
// whitespace. Enforce the contract here so a bad line can never ship.
function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${line.length}`);
  }
  if (!line.trim()) {
    throw new Error("roast must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be a single line");
  }
}

function main(): void {
  validate(ROAST);
  // The harness runs with no network; the output path is fixed by the
  // competition. OUTPUT_PATH exists only so the line can be exercised
  // locally, where /output may not be writable.
  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  // No trailing newline: the file holds exactly the line, nothing else.
  writeFileSync(outPath, ROAST, "utf8");
  // Read-back round: confirm what landed on disk is byte-for-byte the
  // validated line, so a silent write failure can never pass quietly.
  const written = readFileSync(outPath, "utf8");
  if (written !== ROAST) {
    throw new Error("read-back mismatch: entry.txt differs from the roast");
  }
  console.log(`wrote ${ROAST.length} characters to ${outPath}`);
}

main();
