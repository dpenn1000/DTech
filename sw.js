/* sw.js — The Great Pennington Migration (Arizona)
   Network-first for pages, cache-first for assets/fonts. Installable + offline. */

const CACHE = 'pennington-az-v10';

const PRECACHE = [
  './',
  'index.html',
  'schedule.html',
  'music.html',
  'food.html',
  'recreation.html',
  'motorsports.html',
  'trails.html',
  'bucketlist.html',
  'assets/site.css?v=8',
  'assets/trails.css?v=8',
  'assets/site.js?v=8',
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

  // Local images: stale-while-revalidate so a replaced photo (same filename)
  // updates itself on the next visit instead of sticking forever.
  if (url.pathname.includes('/assets/img/')) {
    e.respondWith(staleWhileRevalidate(e.request));
    return;
  }
  // Fonts: cache-first (they don't change)
  if (CACHE_FIRST_HOSTS.includes(url.hostname)) {
    e.respondWith(cacheFirst(e.request));
    return;
  }
  // Pages + everything else: network-first, fall back to cache offline
  e.respondWith(networkFirst(e.request));
});

async function staleWhileRevalidate(req) {
  const c = await caches.open(CACHE);
  const cached = await c.match(req);
  const network = fetch(req).then(res => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => null);
  return cached || (await network) || new Response('', { status: 503 });
}

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
    const res = await fetch(req, { cache: 'reload' });   // bypass HTTP cache, always pull fresh HTML
    if (res.ok) c.put(req, res.clone());
    return res;
  } catch {
    const hit = await c.match(req) || await c.match('index.html');
    return hit || new Response('Offline and not cached yet.', { headers: { 'Content-Type': 'text/plain' } });
  }
}
