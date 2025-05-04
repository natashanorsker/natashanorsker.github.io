const fs = require('fs');
const path = require('path');

// Path to the docs directory
const docsDir = path.resolve(__dirname, '../docs');

// Read the index.html file
const indexPath = path.join(docsDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Remove any preload links with [hash] placeholders
indexContent = indexContent.replace(/<link rel="preload"[^>]*index-\[hash\][^>]*>/g, '');

// Write the updated content back to the file
fs.writeFileSync(indexPath, indexContent);

console.log('Fixed HTML files');

// Create a copy of index.html as 404.html
fs.copyFileSync(indexPath, path.join(docsDir, '404.html'));
console.log('Created 404.html');