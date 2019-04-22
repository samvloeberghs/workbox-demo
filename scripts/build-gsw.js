// Inside of build.js:
const {generateSW} = require('workbox-build');
const config = require('../workbox-config-gsw');

generateSW(config).then(({count, size}) => {
  console.log(`Generated ${config.swDest}, which will precache ${count} files, totaling ${size} bytes.`);
});
