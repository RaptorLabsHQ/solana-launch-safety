#!/usr/bin/env node
// Validates blocklist.json against the shape every entry must satisfy and
// regenerates hosts.txt (drainer + impersonation hosts only). No dependencies.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(readFileSync(join(root, 'blocklist.json'), 'utf8'));

const CATEGORIES = ['drainer', 'impersonation', 'third-party-blocklist', 'lookalike-suspended', 'lookalike-watch', 'not-affiliated'];
const REQUIRED = ['host', 'category', 'first_observed', 'last_checked', 'status', 'observed', 'also_listed_by', 'notes'];
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const HOST = /^[a-z0-9.-]+\.[a-z]{2,}$/;
const DASHES = /[\u2013\u2014]/;

const errors = [];
const seen = new Set();
for (const [i, e] of data.entries.entries()) {
  const where = `entry ${i} (${e.host ?? 'no host'})`;
  for (const k of REQUIRED) if (!(k in e)) errors.push(`${where}: missing ${k}`);
  if (!CATEGORIES.includes(e.category)) errors.push(`${where}: unknown category ${e.category}`);
  if (!HOST.test(e.host ?? '')) errors.push(`${where}: host must be a bare lowercase hostname`);
  if (seen.has(e.host)) errors.push(`${where}: duplicate host`);
  seen.add(e.host);
  for (const k of ['first_observed', 'last_checked']) if (!DATE.test(e[k] ?? '')) errors.push(`${where}: ${k} must be YYYY-MM-DD`);
  if (!Array.isArray(e.also_listed_by)) errors.push(`${where}: also_listed_by must be an array`);
  if (!e.observed || e.observed.length < 20) errors.push(`${where}: observed must describe what was seen`);
  for (const k of ['status', 'observed', 'notes']) if (DASHES.test(e[k] ?? '')) errors.push(`${where}: no em or en dashes in ${k}`);
}
if (!DATE.test(data.updated ?? '')) errors.push('top-level updated must be YYYY-MM-DD');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

const blocked = data.entries.filter((e) => e.category === 'drainer' || e.category === 'impersonation').map((e) => e.host).sort();
const header = [
  '# solana-launch-safety: hosts observed draining wallets of Solana token creators or impersonating Solmint.',
  '# Source: RaptorLabs, https://github.com/RaptorLabsHQ/solana-launch-safety (CC BY 4.0).',
  `# Generated from blocklist.json on ${data.updated}. Categories: drainer, impersonation. One host per line.`,
];
writeFileSync(join(root, 'hosts.txt'), header.concat(blocked).join('\n') + '\n');
console.log(`ok: ${data.entries.length} entries, ${blocked.length} blocked hosts written to hosts.txt`);
