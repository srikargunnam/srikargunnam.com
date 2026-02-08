const fs = require('fs');
const path = require('path');

const cnamePath = path.join(__dirname, '..', 'CNAME');
const outPath = path.join(__dirname, '..', 'out', 'CNAME');

// Create out directory if it doesn't exist
const outDir = path.join(__dirname, '..', 'out');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Copy CNAME if it exists
if (fs.existsSync(cnamePath)) {
  fs.copyFileSync(cnamePath, outPath);
  console.log('CNAME copied to out directory');
} else {
  console.log('CNAME not found, skipping copy');
}

