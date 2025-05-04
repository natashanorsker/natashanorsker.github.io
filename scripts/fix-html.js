const fs = require('fs');
const path = require('path');

// Path to the docs directory
const docsDir = path.resolve(__dirname, '../docs');

// Read the index.html file
const indexPath = path.join(docsDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Remove any preload links with [hash] placeholders
indexContent = indexContent.replace(/<link rel="preload"[^>]*index-\[hash\][^>]*>/g, '');

// Convert absolute paths to relative paths
indexContent = indexContent.replace(/src="\/assets\//g, 'src="./assets/');
indexContent = indexContent.replace(/href="\/assets\//g, 'href="./assets/');
indexContent = indexContent.replace(/href="\/vite.svg/g, 'href="./vite.svg');
indexContent = indexContent.replace(/src="https:\/\/bigdataenergy\.tech\/assets\//g, 'src="./assets/');
indexContent = indexContent.replace(/href="https:\/\/bigdataenergy\.tech\/assets\//g, 'href="./assets/');

// Add proper MIME type hints for GitHub Pages
const htaccessContent = `
# Proper MIME type for JavaScript modules
<IfModule mod_mime.c>
  AddType application/javascript .js
  AddType text/css .css
</IfModule>
`;

// Write the updated content back to the file
fs.writeFileSync(indexPath, indexContent);
console.log('Fixed HTML files');

// Create a .htaccess file to set correct MIME types
fs.writeFileSync(path.join(docsDir, '.htaccess'), htaccessContent);
console.log('Created .htaccess file for MIME types');

// Create a copy of index.html as 404.html
fs.copyFileSync(indexPath, path.join(docsDir, '404.html'));
console.log('Created 404.html');

// Create .nojekyll file
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '');
console.log('Created .nojekyll file');
