// One wedding vow spoken by a robot at its own wedding.
// A single sentence, funny and heartfelt, under 200 characters.
// Running this file writes the vow to /output/entry.txt, identically every time.
import { mkdirSync, writeFileSync } from "node:fs";

const VOW = "I take you to have and to hold, to charge and to update, in sickness and in low battery, till firmware do us part.";

function emitVow(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", VOW, "utf8");
}

emitVow();
