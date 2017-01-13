'use strict';

const load = require('cta-common').loader;

module.exports = {
  name: 'scenario-dataservice',
  tools: load.asArray('tools', __dirname),
  bricks: load.asArray('bricks', __dirname),
  properties: {
    executionApiUrl: 'http://localhost:3010/eds/',
    schedulerApiUrl: 'http://localhost:3011/sch/',
    jobManagerApiUrl: 'http://localhost:3012/jms/',
    scenarioApiUrl: 'http://localhost:3005/sds/',
  },
};
