/**
 * convert-to-webp.mjs
 * Converts all JPG/PNG images in /public to WebP using sharp.
 * Skips files that already have a .webp counterpart.
 * Run: node scripts/convert-to-webp.mjs
 */

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../public");
const QUALITY = 82; // 80-85 is a sweet spot for quality vs size

const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

async function convert() {
  let converted = 0;
  let skipped = 0;
  let totalSavedBytes = 0;

  for await (const filePath of walk(PUBLIC_DIR)) {
    const ext = path.extname(filePath).toLowerCase();
    if (!EXTENSIONS.has(ext)) continue;

    const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

    // Skip if webp already exists
    try {
      await stat(webpPath);
      console.log(`⏭  Skip (exists): ${path.relative(PUBLIC_DIR, webpPath)}`);
      skipped++;
      continue;
    } catch {
      // webp doesn't exist yet — proceed
    }

    try {
      await sharp(filePath)
        .webp({ quality: QUALITY, effort: 4 })
        .toFile(webpPath);

      const [origSize, newSize] = await Promise.all([
        stat(filePath).then((s) => s.size),
        stat(webpPath).then((s) => s.size),
      ]);

      const saved = origSize - newSize;
      totalSavedBytes += saved;
      const pct = ((saved / origSize) * 100).toFixed(1);
      console.log(
        `✅ ${path.relative(PUBLIC_DIR, filePath)} → .webp  ` +
          `${(origSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB  (-${pct}%)`
      );
      converted++;
    } catch (err) {
      console.error(`❌ Error converting ${filePath}:`, err.message);
    }
  }

  console.log("\n─────────────────────────────────────────");
  console.log(`✅ Converted : ${converted} files`);
  console.log(`⏭  Skipped   : ${skipped} files (already had .webp)`);
  console.log(
    `💾 Total saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`
  );
}

convert();
