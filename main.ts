// The Painfully Honest Out-of-Office — make.fun bounty entry.
// Writes a single out-of-office auto-reply (<= 200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm away until Monday and, honestly, relieved to be offline — my inbox holds 1,400 unread emails and I read none of them with enthusiasm. I'll reply when I'm back. Thank you for your patience.";

const chars = [...REPLY].length;
if (chars < 1 || chars > 200 || REPLY.trim().length === 0) {
  throw new Error(`Gate failed: reply is ${chars} chars, must be 1-200 non-blank chars`);
}
if (REPLY.includes("\n")) throw new Error("Gate failed: reply must be a single line");

const outPath = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(outPath, REPLY, "utf8");
console.log(`Wrote ${[...REPLY].length} chars to ${outPath}`);
