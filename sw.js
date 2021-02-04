self.addEventListener("install",e =>{
    e.waitUntil(
        Cache.open('static'),then(Cache =>{
            return caches.addAll("./","Main.css","images/logo/192.png")
        })
    )
});
self.addEventListener("fetch",e =>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request)
        })
    );    
});