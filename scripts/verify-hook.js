#!/usr/bin/env node
/**
 * Harness Stop-Hook & Verification Gate
 * Prevents declaring completion when contract validation or tests fail.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const rootDir = process.cwd();
const contractPath = path.join(rootDir, 'game.contract.json');

console.log('[Harness Hook] 1/3 Checking game.contract.json...');
if (!fs.existsSync(contractPath)) {
  console.error('[Harness Hook] FAIL: Missing game.contract.json');
  process.exit(1);
}

const contract = JSON.parse(fs.readFileSync(contractPath, 'utf8'));
if (
  !['1.0', '1.1', '1.2', '1.3'].includes(contract.contract_version) ||
  !contract.tuning ||
  !contract.headless_cmd ||
  !contract.bench_cmd ||
  !contract.soak_cmd
) {
  console.error('[Harness Hook] FAIL: Invalid game.contract.json schema');
  process.exit(1);
}

console.log('[Harness Hook] 2/3 Running automated test suite (npm test)...');
try {
  execSync('npm test', { stdio: 'inherit' });
} catch (err) {
  console.error('[Harness Hook] FAIL: Tests are red. Blocking completion.');
  process.exit(1);
}

console.log('[Harness Hook] 3/3 Checking for leaked secrets (.env)...');
if (fs.existsSync(path.join(rootDir, '.env'))) {
  const tracked = execSync('git ls-files .env', { encoding: 'utf8' }).trim();
  if (tracked) {
    console.error('[Harness Hook] FAIL: .env is tracked by git!');
    process.exit(1);
  }
}

console.log('[Harness Hook] PASS: All contract & test gates green.');
