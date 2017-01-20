'use strict';

const config = {
  name: 'base-businesslogic',
  module: './bricks/businesslogics/execution/index.js',
  properties: {
    schedulerApiUrl: 'http://localhost:3011/sch/',
    scenarioApiUrl: 'http://localhost:3005/sds/',
  },
  publish: [],
  subscribe: [
    {
      topic: 'bl.base',
      data: [
        {},
      ],
    },
  ],
};

module.exports = config;
