importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js');

if (workbox) {
  const {precaching} = workbox;
  precaching.precacheAndRoute([]);
}
