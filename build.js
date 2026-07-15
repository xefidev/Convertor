const fs = require('fs');
const path = require('path');
require('dotenv').config();

const ROOT = __dirname;
const SCRIPT_PATH = path.join(ROOT, 'script.js');
const OUTPUT_DIR = path.join(ROOT, 'dist');

function loadEnv() {
  const envPath = path.join(ROOT, '.env');
  const envContent = fs.readFileSync(envPath, 'utf8');
  const env = {};
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const [key, ...valueParts] = trimmed.split('=');
    if (key && valueParts.length) {
      env[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
    }
  });
  return env;
}

function build() {
  const env = loadEnv();
  const apiKey = env.COINGECKO_API_KEY;

  if (!apiKey) {
    console.error('COINGECKO_API_KEY is not set in .env');
    process.exit(1);
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let script = fs.readFileSync(SCRIPT_PATH, 'utf8');
  script = script.replace("const API_KEY = '__API_KEY__';", `const API_KEY = '${apiKey}';`);

  fs.writeFileSync(path.join(OUTPUT_DIR, 'script.js'), script, 'utf8');

  ['index.html', 'styles.css'].forEach(file => {
    const src = path.join(ROOT, file);
    const dest = path.join(OUTPUT_DIR, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  });

  console.log('Build complete. Output:', OUTPUT_DIR);
}

build();
