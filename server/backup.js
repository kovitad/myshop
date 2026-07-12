// Automated SQLite backups. Uses `VACUUM INTO` for a consistent, WAL-safe
// snapshot on a schedule, keeping the most recent N copies. Snapshots live in
// /data/backups (persisted in the Docker volume); copy them off-box for real
// disaster recovery (see DEPLOY.md).

import { existsSync, mkdirSync, readdirSync, statSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { db } from './db.js';

const dbPath = process.env.DB_PATH || '/data/kovitad.db';
const backupDir = process.env.BACKUP_DIR || join(dirname(dbPath), 'backups');
const keep = Number(process.env.BACKUP_KEEP) || 7;
const intervalHours = Number(process.env.BACKUP_INTERVAL_HOURS) || 24;

function prune() {
  const files = readdirSync(backupDir)
    .filter((f) => f.startsWith('kovitad-') && f.endsWith('.db'))
    .map((f) => ({ f, t: statSync(join(backupDir, f)).mtimeMs }))
    .sort((a, b) => b.t - a.t);
  for (const x of files.slice(keep)) {
    try { unlinkSync(join(backupDir, x.f)); } catch { /* ignore */ }
  }
}

function runBackup() {
  if (dbPath === ':memory:') return;
  try {
    if (!existsSync(backupDir)) mkdirSync(backupDir, { recursive: true });
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const dest = join(backupDir, `kovitad-${ts}.db`);
    db.exec(`VACUUM INTO '${dest.replace(/'/g, "''")}'`);
    prune();
    console.log('[backup] wrote', dest);
  } catch (err) {
    console.error('[backup] failed:', err.message);
  }
}

export function scheduleBackups() {
  runBackup(); // one snapshot at startup
  const timer = setInterval(runBackup, intervalHours * 60 * 60 * 1000);
  timer.unref?.();
}
