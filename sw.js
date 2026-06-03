/* sw.js — The Great Pennington Migration (Arizona)
   Network-first for pages, cache-first for assets/fonts. Installable + offline. */

const CACHE = 'pennington-az-v2';

const PRECACHE = [
  './',
  'index.html',
  'music.html',
  'food.html',
  'recreation.html',
  'motorsports.html',
  'trails.html',
  'assets/site.css',
  'assets/trails.css',
  'assets/site.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png',
];

const CACHE_FIRST_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(PRECACHE.map(u => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Local images + fonts: cache-first (they don't change)
  if (CACHE_FIRST_HOSTS.includes(url.hostname) || url.pathname.includes('/assets/img/')) {
    e.respondWith(cacheFirst(e.request));
    return;
  }
  // Pages + everything else: network-first, fall back to cache offline
  e.respondWith(networkFirst(e.request));
});

async function cacheFirst(req) {
  const c = await caches.open(CACHE);
  const hit = await c.match(req);
  if (hit) return hit;
  try {
    const res = await fetch(req);
    if (res.ok) c.put(req, res.clone());
    return res;
  } catch {
    return new Response('', { status: 503 });
  }
}

async function networkFirst(req) {
  const c = await caches.open(CACHE);
  try {
    const res = await fetch(req);
    if (res.ok) c.put(req, res.clone());
    return res;
  } catch {
    const hit = await c.match(req) || await c.match('index.html');
    return hit || new Response('Offline and not cached yet.', { headers: { 'Content-Type': 'text/plain' } });
  }
}
