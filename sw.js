self.addEventListener("install",e =>{
    e.waitUntil(
        Cache.open('static'),then(Cache =>{
            return caches.addAll("./","Main.css","images/logo192.png")
        })
    );
});
self.addEventListener("fetch",e =>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request)
        })
    );    
});