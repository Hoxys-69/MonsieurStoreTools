self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("volets-cache").then(cache => cache.addAll(["/", "/index.html", "/data.js", "/manifest.json"]))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});