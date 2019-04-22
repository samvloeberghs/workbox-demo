// Inside of build.js:
const {injectManifest} = require('workbox-build');
const config = require('../workbox-config-im');

injectManifest(config).then(({count, size}) => {
  console.log(`Generated ${config.swDest}, which will precache ${count} files, totaling ${size} bytes.`);
});
