/**
 * Automated Google Ecosystem Sync Engine
 * Fetches official Google Developer, Cloud, and Firebase RSS/Atom feeds,
 * parses recent releases, maps them to Google Toolverse catalog items,
 * and updates src/data/liveUpdates.ts.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const liveUpdatesPath = path.join(rootDir, 'src', 'data', 'liveUpdates.ts');

const OFFICIAL_FEEDS = [
  {
    name: 'Google Developers Blog',
    url: 'https://developers.googleblog.com/feeds/posts/default?alt=rss',
    defaultCategory: 'AI & ML'
  },
  {
    name: 'Google Cloud Blog',
    url: 'https://cloud.google.com/blog/rss',
    defaultCategory: 'Cloud'
  },
  {
    name: 'Firebase Blog',
    url: 'https://firebase.blog/rss.xml',
    defaultCategory: 'Cloud'
  }
];

// Keyword to Tool ID mapping
const TOOL_KEYWORDS = {
  gemini: ['gemini', 'gemini 1.5', 'multimodal', 'gemma'],
  'google-ai-studio': ['ai studio', 'google ai studio', 'prompt', 'api key'],
  'vertex-ai': ['vertex ai', 'model garden', 'automl', 'mlops'],
  firebase: ['firebase', 'firestore', 'genkit', 'crashlytics'],
  'cloud-run': ['cloud run', 'serverless container', 'knative'],
  bigquery: ['bigquery', 'data warehouse', 'dremel'],
  flutter: ['flutter', 'dart', 'impeller', 'wasm'],
  'android-studio': ['android studio', 'jetpack compose', 'android 15'],
  notebooklm: ['notebooklm', 'audio overview'],
  'google-workspace': ['google workspace', 'docs', 'sheets']
};

function determineToolId(title, snippet) {
  const text = `${title} ${snippet}`.toLowerCase();
  for (const [toolId, keywords] of Object.entries(TOOL_KEYWORDS)) {
    for (const kw of keywords) {
      if (text.includes(kw)) {
        return toolId;
      }
    }
  }
  return null;
}

function cleanXmlText(text) {
  if (!text) return '';
  return text
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchFeed(feed) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(feed.url, { 
      signal: controller.signal,
      headers: { 'User-Agent': 'GoogleToolverseSync/1.0' }
    });
    clearTimeout(timeout);
    if (!res.ok) return [];

    const xml = await res.text();
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/gi;
    let match;

    while ((match = itemRegex.exec(xml)) !== null && items.length < 5) {
      const itemContent = match[1];
      const titleMatch = /<title>([\s\S]*?)<\/title>/i.exec(itemContent);
      const linkMatch = /<link>([\s\S]*?)<\/link>/i.exec(itemContent);
      const descMatch = /<description>([\s\S]*?)<\/description>/i.exec(itemContent);
      const dateMatch = /<pubDate>([\s\S]*?)<\/pubDate>/i.exec(itemContent);

      const title = cleanXmlText(titleMatch ? titleMatch[1] : '');
      const link = cleanXmlText(linkMatch ? linkMatch[1] : '');
      const desc = cleanXmlText(descMatch ? descMatch[1] : '').slice(0, 180);
      const pubDate = dateMatch ? new Date(dateMatch[1]).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

      if (title && link) {
        const matchedToolId = determineToolId(title, desc);
        if (matchedToolId) {
          items.push({
            id: `up-${matchedToolId}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
            toolId: matchedToolId,
            toolName: matchedToolId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            category: feed.defaultCategory,
            title: title.slice(0, 95),
            summary: desc || `Official update published on ${feed.name}.`,
            pubDate,
            badge: 'Feature Drop',
            officialUrl: link,
            isRecent: true
          });
        }
      }
    }
    return items;
  } catch (err) {
    console.warn(`[Sync] Note: Feed fetch for ${feed.name} skipped: ${err.message}`);
    return [];
  }
}

async function runSync() {
  console.log('[Sync] Starting Google Ecosystem Live Sync...');
  const newUpdates = [];

  for (const feed of OFFICIAL_FEEDS) {
    console.log(`[Sync] Fetching ${feed.name}...`);
    const items = await fetchFeed(feed);
    console.log(`[Sync] Extracted ${items.length} relevant tool updates from ${feed.name}`);
    newUpdates.push(...items);
  }

  // Load existing file or default data
  let existingUpdates = [];
  if (fs.existsSync(liveUpdatesPath)) {
    const fileContent = fs.readFileSync(liveUpdatesPath, 'utf-8');
    const jsonMatch = fileContent.match(/export const LIVE_UPDATES_DATA: GoogleLiveUpdate\[\] = (\[[\s\S]*?\]);/);
    if (jsonMatch) {
      try {
        existingUpdates = eval(jsonMatch[1]);
      } catch {
        existingUpdates = [];
      }
    }
  }

  // Combine and deduplicate by title
  const existingTitles = new Set(existingUpdates.map(u => u.title.toLowerCase().trim()));
  const freshItems = newUpdates.filter(u => !existingTitles.has(u.title.toLowerCase().trim()));
  
  const merged = [...freshItems, ...existingUpdates].slice(0, 20);

  const updatedFileContent = `export interface GoogleLiveUpdate {
  id: string;
  toolId: string;
  toolName: string;
  category: string;
  title: string;
  summary: string;
  pubDate: string;
  badge: 'Model Release' | 'Feature Drop' | 'Architecture' | 'SDK Update' | 'Security';
  officialUrl: string;
  isRecent?: boolean;
}

export const LAST_SYNCED_TIMESTAMP = '${new Date().toISOString()}';
export const SYNC_STATUS: 'ONLINE' | 'SYNCING' | 'MAINTENANCE' = 'ONLINE';

export const LIVE_UPDATES_DATA: GoogleLiveUpdate[] = ${JSON.stringify(merged, null, 2)};
`;

  fs.writeFileSync(liveUpdatesPath, updatedFileContent, 'utf-8');
  console.log(`[Sync] Successfully synced ${merged.length} verified updates into liveUpdates.ts`);
}

runSync().catch(err => {
  console.error('[Sync] Sync failed:', err);
  process.exit(1);
});
