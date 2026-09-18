const sharp = require("sharp");

sharp("src/assets/runner.webp")
  .webp({
    quality: 60,
  })
  .toFile("src/assets/runner-optimized.webp")
  .then(() => {
    console.log("Runner optimized!");
  })
  .catch((err) => {
    console.error(err);
  });