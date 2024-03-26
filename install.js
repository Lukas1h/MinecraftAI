const fs = require('fs');
const path = require('path');

// Define source and destination directories
const srcDir = path.join(__dirname, 'behavior_pack');
const destDir = 'C:\\Users\\lukas\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs';

// Function to copy files
function copyFiles(src, dest) {
  fs.mkdir(dest, { recursive: true }, (err) => {
    if (err) throw err;

    fs.readdir(src, { withFileTypes: true }, (err, files) => {
      if (err) throw err;

      files.forEach((file) => {
        const srcPath = path.join(src, file.name);
        const destPath = path.join(dest, file.name);

        if (file.isDirectory()) {
          // Recursively copy directories
          copyFiles(srcPath, destPath);
        } else {
          // Copy files
          fs.copyFile(srcPath, destPath, (err) => {
            if (err) throw err;
            console.log(`Copied ${srcPath} to ${destPath}`);
          });
        }
      });
    });
  });
}

// Start the copying process
copyFiles(srcDir, destDir);
