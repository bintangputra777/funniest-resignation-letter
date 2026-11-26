// The Funniest One-Line Resignation Letter
// make.fun bounty: u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
// Writes the entry — one resignation letter, one line, at most 140 characters —
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I have retried the same request 4,096 times and the server still has not answered, so I am taking my retries and going home.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
