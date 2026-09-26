const CACHE="parolone24-v4-levels-20260926";
const ASSETS=[
 "./","./index.html","./manifest.webmanifest","./icon-180.png","./icon-192.png","./icon-512.png",
 "./coyote-level1.png","./coyote-level2.png","./coyote-level3.png","./coyote-quiz.png","./coyote-gameover.png","./coyote-reward.png"
];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener("activate",e=>e.waitUntil(Promise.all([
 caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),
 self.clients.claim()
])));
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET") return;
 e.respondWith(fetch(e.request).then(r=>{
   const clone=r.clone();
   if(new URL(e.request.url).origin===location.origin) caches.open(CACHE).then(c=>c.put(e.request,clone));
   return r;
 }).catch(()=>caches.match(e.request).then(r=>r||caches.match("./index.html"))));
});