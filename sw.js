self.addEventListener("install",e =>{
    console.log("Install code is running")
});
// self.addEventListener("fetch",e =>{
//     e.respondWith(
//         caches.match(e.request).then(response =>{
//             return response || fetch(e.request)
//         })
//     );    
// });