self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-temposync-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "icon-192.png",
                "icon-512.png",
                "manha.jpg",
                "tarde.jpg",
                "noite.jpg",
                "madrugada.jpg"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWidth(
        caches.match(event.request). then (response => response || fetch(event.request))
    );

});
