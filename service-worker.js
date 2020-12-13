self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('esf-pwa').then(function(cache) {
      return cache.addAll([
        '/esf-pwa/',
        '/esf-pwa/index.html',
        '/esf-pwa/index.js',
        '/esf-pwa/index.css',
        '/esf-pwa/icon.svg',
        '/esf-pwa/icons/icon-48x48.png',
        '/esf-pwa/icons/icon-12x128.png',
        '/esf-pwa/icons/icon-144x144.png',
        '/esf-pwa/icons/icon-152x152.png',
        '/esf-pwa/icons/icon-196x196.png',
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