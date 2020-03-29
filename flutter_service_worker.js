'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "e91f26690f8d53355ea1505d98aaa148",
"/assets/LICENSE": "a57147636ef8f07e3fd52d754c5d2bec",
"/assets/AssetManifest.json": "12c25c925dce6f3b1748f33c391f8829",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/coffee_shop_4.jpg": "f5ce9e78d0dc241419e8ba8a8e06e26b",
"/assets/assets/images/coffee_shop_5.jpg": "c3d665010d0241802c332ab62571f723",
"/assets/assets/images/coffee_shop_2.jpg": "39a40300aa7a341dc830aefdb7a168f9",
"/assets/assets/images/coffee_shop_3.jpg": "d51e9cc6483e88b9f24ce9ba83c05975",
"/assets/assets/images/coffee_shop_1.jpg": "52dab579d342ed314bdd7b9a5d8228c9",
"/assets/assets/images/coffee_milk.png": "51450b5523219c254394d3b47da626e8",
"/assets/assets/images/espresso_coffee.png": "98d73786e874df5f4050a6b13e4c37d7",
"/assets/assets/images/americano.png": "b9f3a62900a6d735d74ebf19283f6e02",
"/assets/assets/images/stretch.png": "6269de96c7b42eabbad4227ebb828e5a",
"/assets/assets/images/amaretto_macchiato.png": "970135858df6db5eae3235386374b201",
"/assets/assets/images/first_page.jpg": "0c02fefad25eeeeed97aa5a25047047a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
