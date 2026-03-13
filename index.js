// SIGT Novomatic — Service Worker
// Automáticos Canarios · v1.1

const CACHE_NAME = 'sigt-novomatic-v1';
const ASSETS = [
  '/sigt-novomatic/',
  '/sigt-novomatic/index.html',
  '/sigt-novomatic/manifest.json',
  '/sigt-novomatic/icons/icon-192.png',
  '/sigt-novomatic/icons/icon-512.png'
];

// Install: cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for local assets, network-first for external (fonts, etc.)
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // External requests (Google Fonts, etc.) — network first, fallback cache
  if (url.origin !== self.location.origin) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
    return;
  }

  // Local assets — cache first
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
