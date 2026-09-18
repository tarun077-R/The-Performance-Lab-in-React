const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "../src/assets");
const outputDir = path.join(inputDir, "optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const files = fs
  .readdirSync(inputDir)
  .filter(
    (file) =>
      /^i[1-6]\.webp$/i.test(file)
  );

async function optimizeImages() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    await sharp(inputPath)
      .resize({
        width: 800,
        height: 800,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: 75,
      })
      .toFile(outputPath);

    console.log(`Optimized: ${file}`);
  }

  console.log("Done!");
}

optimizeImages();