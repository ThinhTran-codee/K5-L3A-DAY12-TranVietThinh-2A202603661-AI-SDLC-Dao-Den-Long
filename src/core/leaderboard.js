/**
 * Local Leaderboard Logic (TICKET-04 Part 3)
 * Validates names (3-12 chars [A-Za-z0-9_] + optional Vietnamese accented letters),
 * sorts descending by score (tie-break by earlier achieved_at), and retains Top 10.
 */

const NAME_REGEX = /^[A-Za-z0-9_\p{L}]{3,12}$/u;

export function isValidPlayerName(name) {
  if (typeof name !== 'string') return false;
  return NAME_REGEX.test(name.trim());
}

export function formatIsoWithTimezone(date = new Date()) {
  const tzOffsetMin = -date.getTimezoneOffset();
  const sign = tzOffsetMin >= 0 ? '+' : '-';
  const absMin = Math.abs(tzOffsetMin);
  const hh = String(Math.floor(absMin / 60)).padStart(2, '0');
  const mm = String(absMin % 60).padStart(2, '0');

  const pad = (n) => String(n).padStart(2, '0');
  const yyyy = date.getFullYear();
  const mo = pad(date.getMonth() + 1);
  const dd = pad(date.getDate());
  const h = pad(date.getHours());
  const m = pad(date.getMinutes());
  const s = pad(date.getSeconds());
  return `${yyyy}-${mo}-${dd}T${h}:${m}:${s}${sign}${hh}:${mm}`;
}

export function sortAndTrimLeaderboard(entries = []) {
  const valid = entries
    .filter(
      (e) =>
        e &&
        typeof e.name === 'string' &&
        typeof e.score === 'number' &&
        typeof e.nights_won === 'number' &&
        typeof e.achieved_at === 'string'
    )
    .map((e, idx) => ({
      entry: {
        name: e.name.trim(),
        score: Math.round(e.score),
        nights_won: Math.max(0, Math.min(3, Math.round(e.nights_won))),
        achieved_at: e.achieved_at,
        seed: Number(e.seed) || 1
      },
      idx,
      ts: Date.parse(e.achieved_at) || idx
    }));

  valid.sort((a, b) => {
    if (b.entry.score !== a.entry.score) {
      return b.entry.score - a.entry.score;
    }
    if (a.ts !== b.ts) {
      return a.ts - b.ts;
    }
    return a.idx - b.idx;
  });

  return valid.slice(0, 10).map((x) => x.entry);
}

export function addLeaderboardEntry(existingEntries, newEntry) {
  const name = String(newEntry.name || '').trim();
  if (!isValidPlayerName(name)) {
    throw new Error('Tên người chơi phải từ 3–12 ký tự (chữ cái, số hoặc dấu gạch dưới _)');
  }
  const entry = {
    name,
    score: Math.max(0, Math.round(Number(newEntry.score) || 0)),
    nights_won: Math.max(0, Math.min(3, Math.round(Number(newEntry.nights_won) || 0))),
    achieved_at: newEntry.achieved_at || formatIsoWithTimezone(new Date()),
    seed: Number(newEntry.seed) || 1
  };
  return sortAndTrimLeaderboard([...(existingEntries || []), entry]);
}
