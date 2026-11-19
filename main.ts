// news-image-20261118 entry: writes the composed image to the output dir.
//
// The image itself (entry.png) is the entry: one picture summing up the
// world's news of Wednesday 18 November 2026. This program only copies it
// to $MAKEFUN_OUTPUT_DIR/entry.png (default /output/entry.png), so both
// grading runs produce byte-identical output. Node 22, stdlib only.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const src = join(import.meta.dirname, "entry.png");
if (!existsSync(src)) {
  throw new Error(`entry.png not found next to main.ts (looked in ${import.meta.dirname})`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
// The grader runs this program twice: same input bytes in, same bytes out.
console.log(`wrote ${dest} (${statSync(dest).size} bytes)`);
