const cacheNames = 'pwa_cache_v2';

//install event
self.addEventListener('install', (e) => {
    console.log('ServiceWorker: Installed');
});

//activate event
self.addEventListener('activate', (e) => {
    console.log('ServiceWorker: Aktivated');

    //alte caches entfernen
    e.waitUntil( 
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache != cacheNames) {
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
        fetch(e.request)
        .then(res => {
            //clone response
            const res_clone = res.clone();
            //open caches
            caches.open(cacheNames).then(cache => {
                //add response to cache
                cache.put(e.request, res_clone);
            });
            return res;
        }).catch(err => caches.match(e.request).then(res => res))
    );
});