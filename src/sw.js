importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

if (workbox) {
  const {precaching} = workbox;
  precaching.precacheAndRoute([]);
}