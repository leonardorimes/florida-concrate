/**
 * convert-to-webp.mjs
 * Converts all JPG/PNG in /public to WebP using sharp.
 * - Resizes to max 1400px wide (preserves aspect ratio) — no upscaling
 * - Quality 90 — visually lossless for web
 * - Applies EXIF rotation automatically
 * - Pass --force to reconvert files that already have a .webp
 *
 * Run:          node scripts/convert-to-webp.mjs
 * Reconvert all: node scripts/convert-to-webp.mjs --force
 */

import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, "../public");

const QUALITY   = 90;    // high quality — visually lossless for photos
const MAX_WIDTH = 1400;  // max display width on any screen
const FORCE     = process.argv.includes("--force");
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

async function convert() {
  let converted = 0;
  let skipped   = 0;
  let totalSavedBytes = 0;

  for await (const filePath of walk(PUBLIC_DIR)) {
    const ext = path.extname(filePath).toLowerCase();
    if (!EXTENSIONS.has(ext)) continue;

    const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

    // Skip unless --force
    if (!FORCE) {
      try {
        await stat(webpPath);
        console.log(`⏭  Skip (exists): ${path.relative(PUBLIC_DIR, webpPath)}`);
        skipped++;
        continue;
      } catch { /* doesn't exist yet — proceed */ }
    } else {
      // remove old file so we always re-create
      try { await unlink(webpPath); } catch { /* ignore */ }
    }

    try {
      const meta = await sharp(filePath).rotate().metadata();
      const w    = meta.width  ?? 9999;
      const h    = meta.height ?? 9999;

      await sharp(filePath)
        .rotate()                                    // apply EXIF orientation
        .resize({
          width:     Math.min(w, MAX_WIDTH),         // cap at 1400px wide
          withoutEnlargement: true,                  // never upscale
          fit: "inside",
        })
        .webp({ quality: QUALITY, effort: 4 })
        .toFile(webpPath);

      const [origSize, newSize] = await Promise.all([
        stat(filePath).then((s) => s.size),
        stat(webpPath).then((s) => s.size),
      ]);

      const saved = origSize - newSize;
      totalSavedBytes += saved;
      const pct = ((saved / origSize) * 100).toFixed(1);
      const arrow = saved >= 0 ? `(-${pct}%)` : `(+${Math.abs(Number(pct))}% larger)`;
      console.log(
        `✅ ${path.relative(PUBLIC_DIR, filePath)} → .webp  ` +
        `${(origSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB  ${arrow}`
      );
      converted++;
    } catch (err) {
      console.error(`❌ Error: ${filePath}:`, err.message);
    }
  }

  console.log("\n─────────────────────────────────────────");
  console.log(`✅ Converted : ${converted} files`);
  console.log(`⏭  Skipped   : ${skipped} files (already had .webp)`);
  console.log(`💾 Total saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);
}

convert();
