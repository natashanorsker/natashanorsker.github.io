const fs = require('fs');
const path = require('path');

// Check if logo files exist in public folder
const publicLogoDir = path.resolve(__dirname, '../public/logo-animation');
const distLogoDir = path.resolve(__dirname, '../dist/logo-animation');

console.log('Checking assets...');

// Create the directory if it doesn't exist
if (!fs.existsSync(distLogoDir)) {
  fs.mkdirSync(distLogoDir, { recursive: true });
  console.log(`Created directory: ${distLogoDir}`);
}

// Copy logo files if they don't exist in dist
if (fs.existsSync(publicLogoDir)) {
  const files = fs.readdirSync(publicLogoDir);
  
  files.forEach(file => {
    const sourcePath = path.join(publicLogoDir, file);
    const destPath = path.join(distLogoDir, file);
    
    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied: ${file} to ${distLogoDir}`);
    }
  });
} else {
  console.error(`Source directory not found: ${publicLogoDir}`);
}

console.log('Asset verification complete!');