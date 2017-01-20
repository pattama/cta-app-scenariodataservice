'use strict';

const load = require('cta-common').loader;

module.exports = {
  name: 'scenario-dataservice',
  tools: load.asArray('tools', __dirname),
  bricks: load.asArray('bricks', __dirname),
  properties: {
    schedulerApiUrl: 'http://localhost:3011/sch/',
    scenarioApiUrl: 'http://localhost:3005/sds/',
    uid: '587c9be41466b02983630ff5',
  },
};
