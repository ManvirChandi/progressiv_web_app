/*
const cacheNames = 'pwa_cache_v1';
const cacheFiles = [
    './index.html',
    './css/bs.css',
    './css/style.css',
    './js/jq.js',
    './js/bs.js',
    './app.js',
    './images/duck_1.jpg',
    './images/duck_2.jpg',
    './images/duck_3.jpg',
    './audio/duck.wav'
];

//install event
self.addEventListener('install', (e) => {
    console.log('ServiceWorker: Installed');

    e.waitUntil(
        caches
        .open(cacheNames)
        .then(cache => {
            console.log('ServiceWorker: Cache opend');
            cache.addAll(cacheFiles);
        })
        .then(() => self.skipWaiting())
    );
});

//activate event
self.addEventListener('activate', (e) => {
    console.log('ServiceWorker: Aktivated');

    //alte caches entfernen
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache != cacheNames){
                        console.log('ServiceWorker: clearing');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );

});


//fetch event
self.addEventListener('fetch', e => {
    console.log('ServiceWorker: fetching');
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});
*/
