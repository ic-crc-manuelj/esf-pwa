self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('esf-pwa').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/index.js',
        '/index.css',
        '/favicon.svg'
      ]);
    })
  );
 });
 
 self.addEventListener('fetch', function(e) {
   console.log(e.request.url);
   e.respondWith(
     caches.match(e.request).then(function(response) {
       return response || fetch(e.request);
     })
   );
 });