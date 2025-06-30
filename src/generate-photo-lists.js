// generate-photo-lists.js
// Scans each child folder in public/images, preserves existing note, and updates photos.json without overwriting it

const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "../public/images");

// Read all child folders
const folders = fs.readdirSync(IMAGES_DIR);

folders.forEach((childFolder) => {
  const fullPath = path.join(IMAGES_DIR, childFolder);

  if (childFolder !== "erzieher") {
          console.log(`skipping ${childFolder}`);
          return;
        }

  if (fs.lstatSync(fullPath).isDirectory()) {
    const jsonPath = path.join(fullPath, "photos.json");

    // Skip if photos.json does not exist
    if (!fs.existsSync(jsonPath)) {
      console.error(`${childFolder}/photos.json fehlt, überspringe.`);
      return;
    }

    // Read existing note (assumed to exist)
    const existingData = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    const existingNote = existingData.note;

    // Find image files in folder
    const files = fs
      .readdirSync(fullPath)
      .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    // Build new data object preserving note only
    const photoData = {
      note: existingNote,
      photos: files.map((file) => ({ file, wm: "Y" }))
    };

    // Overwrite photos.json with updated photos array and preserved note
    fs.writeFileSync(jsonPath, JSON.stringify(photoData, null, 2), "utf8");
    console.log(`✅ ${childFolder}/photos.json aktualisiert mit ${files.length} Bildern (Note bleibt erhalten)`);
  }
});
