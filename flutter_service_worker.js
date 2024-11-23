'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b92ad145cd8517dfbb1b56edb6c9104a",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "330fd5e62a91bc21e1ba0281a036df61",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44fadf3ec78f9e8aeff208fdb6608edc",
".git/logs/refs/heads/main": "c4b124496f611a05c5bcfd10bf5d3723",
".git/objects/03/864009e0da153136f7ca4f3768c2280f480896": "1596f838d203f0019e839cd688df73a7",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/89422d7f8cdde4469cf0f85424f68c1e199476": "0bee9ea0f652603055bb7f476265c0e1",
".git/objects/1b/3d7f27df2ec21ab07ddb081cd9e384c8a5ef04": "eeab7db0a0c882a8515d880865b42803",
".git/objects/1b/85f8222b15fe9296c3cbda1c9094ffd8f148ef": "1ba968793b1be69854663a491c561ef6",
".git/objects/1c/df12126e57e6fff809b18088d6d4efceaa772d": "e444bd05e63f443a5e471fc19ae7df32",
".git/objects/1e/a333a8804d2010174cb2a69628a5f5bb0f0f6e": "23ea7b43f03ffae592d5ba9a9c60a6a3",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/2f/acbcdba1f23337a52aab5eff5c8157e0e0cc4d": "382f29616f1f2e46724316f089594994",
".git/objects/38/390a8dd8a67612af45144f8a67cfa7bc7861fd": "afed8101a079f8493ba239608631ad31",
".git/objects/3d/98015cd8597e92f15f76a56b054eb5d1c8a737": "d39b80984303b1e0db0f9bfe2d1c7ce9",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/f2b5510448910dc180506df51549a9e4c9d1e5": "eed2ddd79a893f8fde3ecd8193552790",
".git/objects/51/6ee7635b7d21c9fc70c4330ec4db7bcdb7a00c": "4334ab99f077201b90ed04f13db534df",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5e/b06e13343c6b58f76b7494a743ebaa94d62a63": "bfd053f958c7d692ab593de1c51b7a0d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/b42b365e24ba14fecaecc974ea55f0a53021be": "9573303c74289e1ca2968b4d87cd5143",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/8b/b15fc7ca218c3a30d292793b59eafb5be5c08e": "c12701edbcf2b4d07fa44d12b065bca1",
".git/objects/8c/834023ae54cbbd275372a8d937a356a9d626b8": "a5652240b29ea56cccc3a28ca0f09404",
".git/objects/93/fcbd861d4ffbdb1a035979c45b6d8f20cddf88": "38058f2366ac9efefa6731638cf84ba2",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/d901045bb3642ff52d11026223e41da8aeedf1": "60a5a270050667812773daa7e3b9e5af",
".git/objects/9b/cda85f911758fa2974223f79fda9cca653dae8": "65e048fced9cecc97a0c4c9b73f69231",
".git/objects/a5/81baff8251b276ec70c400e46a4e783b284f96": "4187ab730e4534d5567b59ea75c0fb04",
".git/objects/a6/865d18ed34077eacecf3b1cc9412be1d727ea1": "39bfe71f2b0db718c00ef53503057717",
".git/objects/af/477196065c35b59120448a4dde99505ccd3b01": "c45938ed5342dced22e05793bb4a144e",
".git/objects/b2/b65039199316854371e9e5e0d97fa5d51ee36a": "54a1f7be5ca9b0000810f1f0c0d956e4",
".git/objects/b3/39511b02ea2c25722c8c975e7018e8efcaa217": "ebc7d00269e713e9c274f2b98bd052e7",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/bc/0176f4555d1b08ab6b598bb2bb034dcb51d987": "614972c6a237176b5636aa941b8854c2",
".git/objects/bd/d498505bc2000b995f4978fa539968a0ed5fbe": "1ac3cc110ede7d0abdf4327c5ba21c6e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/df/64f067b0f9ab4984dffb1ddf2382bdc85636db": "d704b61906a390ebb6bb54ed6f1f8b10",
".git/objects/e1/01cbf4b92b30155bb63b66cc7aa91cb9e15489": "025170f464d4f3ecb60fdd0a937325dc",
".git/objects/e1/2725ce5a56b2aefbd76c77d3a588de1140ff38": "37f1c2daf90d9fec5112d7dc81f794b7",
".git/objects/e2/e88dac85d9bebbe0f29c09c50d71acbdeb44e4": "a0175277da8f0d71f10c7770885c71d7",
".git/objects/e3/1b51e3e9388ae61767c692885e5d77ff7b5346": "6ed4eb6a450521a70e40d120888b347a",
".git/objects/ea/e7e87fd3da5a14f008ccf94b18a1edd1804956": "602d95e80422623115243a2ccbe8aec1",
".git/objects/ed/b4c3c81cd7f49e24b1d2003b9927cce52c680f": "2d81f9de4d4b5d2405a79f20915401c0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/eefd7d52e44de879d5d2b6d3fd790f6a04c3da": "f4c9511819f98c80d8019742f563117d",
".git/objects/fa/8713c79dfa7cf92c6c26b7b8e395af58f24d10": "336e56a4201d7a751b861e88255612e2",
".git/objects/fc/04cb113d929274659e95e5d27c4cbb085d942b": "78534acfdc5e52beff959e3674ebbb87",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "700c91b5ff39abb93f19a857c3962fad",
"assets/AssetManifest.bin": "69ee01e2eb69b11f950a7760e35a770c",
"assets/AssetManifest.bin.json": "515795d9559815a64c1ba6c648e755fd",
"assets/AssetManifest.json": "3aff36e9a8565f1673b1402c943c8483",
"assets/assets/backend.jpg": "f7934e7a99cd253215ae310c77b6c2a8",
"assets/assets/datacenter-11.webp": "cac542bec7806142fabf6b11db1c6e1f",
"assets/assets/file.png": "d72563b89232ffcee56dff3a6edbfea0",
"assets/assets/fonts/inter-VariableFont_opsz,wght.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/fonts/JetBrainsMono-VariableFont_wght.ttf": "0db4490d7d644e59cf7fd5eb5af386fb",
"assets/assets/fonts/PlusJakartaSans-VariableFont_wght.ttf": "2f5e58f99464aa2582e5ce6f75aff5f3",
"assets/assets/fonts/PoetsenOne-Regular.ttf": "70d65213731578cdde9a95a4a6cd237c",
"assets/assets/fonts/PoiretOne-Regular.ttf": "8d15f9c0d468e1de889e81fae1087b61",
"assets/assets/frontend.jpg": "023ec0ef5b36b993c179eea84ce06d5c",
"assets/assets/Icons/github.png": "023e6bc81acce6b70f7ea3b1a52913c7",
"assets/assets/Icons/instagram.png": "39934a16992aad5971aaf0787aba5524",
"assets/assets/myself.JPG": "3871f3d98df969633a29ab3f399ad29f",
"assets/assets/portfolio.riv": "4583ceb8848285e4fec61035f982b411",
"assets/assets/readRealmLogo.png": "7b8606afa832ea640a83a4c632fa8bd2",
"assets/assets/rectangle2.png": "93c8adac07e4126486aeb412df0283b9",
"assets/assets/rectangle3.png": "a8b5b10e2f978dc7c0da02cd6f674222",
"assets/assets/rectangle4.png": "5c9da5da74ccf10de77872d7c7a51c38",
"assets/assets/uiux.jpg": "2f6fabbacefcf7e5511aaa08c5afc4d1",
"assets/FontManifest.json": "27af45b4c4f2f3afda4c662d3510e89d",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "21c7f67db8be57ea0649c63855301f9f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"file.png": "d72563b89232ffcee56dff3a6edbfea0",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "81ef7e65abe89b66eb4ee3ffd4d20211",
"icons/file.png": "d72563b89232ffcee56dff3a6edbfea0",
"index.html": "aea6cd33a2dd95c3e20dd528fde21978",
"/": "aea6cd33a2dd95c3e20dd528fde21978",
"main.dart.js": "263e8ad5b41de75b0a50b34d94f48605",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "c4d9a4567327c2296f4bbaf62a21ce27"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
