/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "bitcoin-1.png",
    "revision": "a815898a5eb98745792f44108721b18a"
  },
  {
    "url": "cssBitcoin.css",
    "revision": "520914d11c1f02d634f5b938643aa93e"
  },
  {
    "url": "imagem.png",
    "revision": "897737f517c02a7e3e65f0bc97b0b385"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "7652f8ef16c8110583b9ce293b7d883c"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "1cceb8482bd3515b3c732cf9a92e6de2"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "d56d329c1aaa4a3c6e3a7097da0e6360"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "8e06b47e862ba14c6a07e008e780b5fa"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "3d911ea34b27eed1c00b311832fcbcf0"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "68a85621ebdd8e645a62806104724a11"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "66cdd7634bc554786f4d2c7abeada8e5"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "acc47deba985f4d2a58d0c76f2175712"
  },
  {
    "url": "index.html",
    "revision": "3c87591a3502181e0192587c8bb31971"
  },
  {
    "url": "manifest.json",
    "revision": "ced81e3e9f7c34dfde787d6369d1a732"
  },
  {
    "url": "README.md",
    "revision": "59023b92a917be5ca4eae488e3fd5b3e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
