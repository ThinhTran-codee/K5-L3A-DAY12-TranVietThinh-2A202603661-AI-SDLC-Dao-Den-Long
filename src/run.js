#!/usr/bin/env node
/**
 * Game Launcher & Local Leaderboard Server / Exporter (`run_cmd`)
 * - `<run_cmd> --export-leaderboard out.json` -> exports {"entries": [...]} in Top-10 order and exits 0.
 * - `<run_cmd>` (no export flag) -> serves the 3D Web Game + local disk Leaderboard API on http://localhost:5173.
 */
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import {
  sortAndTrimLeaderboard,
  addLeaderboardEntry,
  formatIsoWithTimezone
} from './core/leaderboard.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const dataDir = path.join(rootDir, 'data');
const lbFilePath = path.join(dataDir, 'leaderboard.json');

const DEFAULT_SEED_ENTRIES = [
  {
    name: 'May_DaoBen',
    score: 1420,
    nights_won: 3,
    achieved_at: '2026-11-20T14:55:00+07:00',
    seed: 2026
  },
  {
    name: 'Ong_Dang',
    score: 980,
    nights_won: 2,
    achieved_at: '2026-11-20T15:30:00+07:00',
    seed: 42
  },
  {
    name: 'Rua_Da',
    score: 540,
    nights_won: 1,
    achieved_at: '2026-11-20T16:05:00+07:00',
    seed: 101
  }
];

export function loadDiskLeaderboard() {
  fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(lbFilePath)) {
    const initial = { entries: sortAndTrimLeaderboard(DEFAULT_SEED_ENTRIES) };
    fs.writeFileSync(lbFilePath, JSON.stringify(initial, null, 2) + '\n', 'utf8');
    return initial.entries;
  }
  try {
    const raw = JSON.parse(fs.readFileSync(lbFilePath, 'utf8'));
    const entries = Array.isArray(raw?.entries) ? raw.entries : Array.isArray(raw) ? raw : [];
    return sortAndTrimLeaderboard(entries);
  } catch {
    return sortAndTrimLeaderboard(DEFAULT_SEED_ENTRIES);
  }
}

export function saveDiskLeaderboard(entries) {
  fs.mkdirSync(dataDir, { recursive: true });
  const sorted = sortAndTrimLeaderboard(entries);
  fs.writeFileSync(lbFilePath, JSON.stringify({ entries: sorted }, null, 2) + '\n', 'utf8');
  return sorted;
}

const argv = process.argv.slice(2);
const exportIdx = argv.indexOf('--export-leaderboard');

if (exportIdx !== -1) {
  const outPath = argv[exportIdx + 1];
  if (!outPath) {
    process.stderr.write('Error: Missing output file path after --export-leaderboard\n');
    process.exit(1);
  }
  const entries = loadDiskLeaderboard();
  const absOut = path.resolve(outPath);
  fs.mkdirSync(path.dirname(absOut), { recursive: true });
  fs.writeFileSync(absOut, JSON.stringify({ entries }, null, 2) + '\n', 'utf8');
  process.exit(0);
}

// Normal game launch: ensure dist/ exists, then serve dist/ + /api/leaderboard
const distDir = path.join(rootDir, 'dist');
if (!fs.existsSync(path.join(distDir, 'index.html'))) {
  console.log('[Đảo Đèn Lồng] Building production 3D bundle (npm run build)...');
  execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const port = Number(process.env.PORT) || 5173;

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url || '/', `http://localhost:${port}`);

  if (parsedUrl.pathname === '/api/leaderboard') {
    if (req.method === 'GET') {
      const entries = loadDiskLeaderboard();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ entries }));
      return;
    }
    if (req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body || '{}');
          const current = loadDiskLeaderboard();
          const updated = addLeaderboardEntry(current, {
            ...payload,
            achieved_at: payload.achieved_at || formatIsoWithTimezone(new Date())
          });
          saveDiskLeaderboard(updated);
          res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ entries: updated }));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ error: err.message }));
        }
      });
      return;
    }
  }

  let filePath = path.join(
    distDir,
    parsedUrl.pathname === '/' ? 'index.html' : parsedUrl.pathname
  );
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, 'index.html');
  }

  try {
    const ext = path.extname(filePath).toLowerCase();
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(content);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(port, () => {
  console.log(`🏮 Đảo Đèn Lồng v1.0.0 đang chạy tại: http://localhost:${port}`);
});
