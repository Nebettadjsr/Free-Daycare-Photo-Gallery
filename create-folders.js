// create-folders.js
const fs = require('fs');
const path = require('path');

// Load credentials.json
const credentials = require(path.join(__dirname, 'public', 'credentials.json'));

// Base directory for child image folders
const baseDir = path.join(__dirname, 'public', 'images');

// Ensure baseDir exists
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Create one subfolder per username
Object.keys(credentials).forEach((username) => {
  const userDir = path.join(baseDir, username);
  if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir);
    console.log(`✔ Created: public/images/${username}`);
  } else {
    console.log(`ℹ️  Already exists: public/images/${username}`);
  }
});

