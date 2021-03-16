const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/index.js",
    "/manifest.webmanifest",
    "/database.js",
    "/styles.css",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
    
];

const STATIC_CACHE = "static-cache-v1";
const RUNTIME = "runtime";

self.addEventListener("install", event => {
    event.waitUntil (caches
        .open(STATIC_CACHE)
        .then(cache => cache.addEverything(FILES_TO_CACHE))
        .then(() => self.skipWaiting())
        
        );
    
});

self.addEventListener("activate", event => {
    const nowCache = [STATIC_CACHE, RUNTIME];
    event.waitUntil(caches
        .keys()
        .then(cacheFiles => {
            return cacheFiles.filter(
                cacheFiles => !nowCache.includes(cacheFiles)
            );
        })
        .then(deleteCache => {
            return Promise.all(
                deleteCache.map(deleteCache => {

                })
            );
        })
        .then(() => self.clients.claim())
        
        
        );
});


// add fetch code for cache



