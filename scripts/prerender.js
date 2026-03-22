import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsDir = path.resolve(__dirname, '../docs');

function createStaticServer(dir) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.json': 'application/json',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
  };

  return http.createServer((req, res) => {
    let filePath = path.join(dir, req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath);

    if (!ext) {
      filePath = path.join(dir, 'index.html');
    }

    if (!fs.existsSync(filePath)) {
      filePath = path.join(dir, 'index.html');
    }

    const contentType = mimeTypes[path.extname(filePath)] || 'application/octet-stream';
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
}

async function prerender() {
  console.log('Starting pre-render...');

  const server = createStaticServer(docsDir);
  const port = 9123;

  await new Promise((resolve) => server.listen(port, resolve));
  console.log(`Static server running on http://localhost:${port}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait for React to render content inside #root
    await page.waitForSelector('#root > *', { timeout: 10000 });
    // Give animations/lazy content a moment to settle
    await new Promise((r) => setTimeout(r, 2000));

    const renderedHTML = await page.evaluate(() => {
      return document.getElementById('root').innerHTML;
    });

    const indexPath = path.join(docsDir, 'index.html');
    let html = fs.readFileSync(indexPath, 'utf8');

    html = html.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${renderedHTML}</div>`
    );

    fs.writeFileSync(indexPath, html);
    console.log('Pre-rendered index.html');

    fs.copyFileSync(indexPath, path.join(docsDir, '404.html'));
    console.log('Copied pre-rendered index.html to 404.html');
  } finally {
    await browser.close();
    server.close();
  }

  console.log('Pre-render complete.');
}

prerender().catch((err) => {
  console.error('Pre-render failed:', err);
  process.exit(1);
});
