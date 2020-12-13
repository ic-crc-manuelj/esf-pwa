self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('esf-pwa').then(function(cache) {
      return cache.addAll([
        '/esf-pwa/',
        '/esf-pwa/index.html',
        '/esf-pwa/index.js',
        '/esf-pwa/index.css',
        '/esf-pwa/favicon.svg'
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