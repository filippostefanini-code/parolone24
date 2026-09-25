const CACHE="parolone24-v1";
const ASSETS=["./","./index.html","./manifest.webmanifest","./icon-180.png","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
));
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET") return;
  e.respondWith(
    fetch(req).then(r=>{
      const clone=r.clone();
      if(new URL(req.url).origin===location.origin){
        caches.open(CACHE).then(c=>c.put(req,clone));
      }
      return r;
    }).catch(()=>caches.match(req).then(r=>r||caches.match("./index.html")))
  );
});
