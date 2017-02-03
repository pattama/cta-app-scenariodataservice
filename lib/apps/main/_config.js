'use strict';

const config = {
  name: 'cta-app-scenariodataservice',
  /**
   * Tools
   */
  tools: [
    {
      name: 'logger',
      module: 'cta-logger',
      properties: {},
      scope: 'all',
    },
    {
      name: 'expresswrapper',
      module: 'cta-expresswrapper',
      properties: {
        port: 3005,
      },
    },
  ],
  /**
   * Bricks
   */
  bricks: [
    {
      name: 'restapi',
      module: 'cta-restapi',
      dependencies: {
        express: 'expresswrapper',
      },
      properties: {
        providers: [
          {
            name: 'scenarios',
            module: './utils/restapi/handlers/scenarios.js',
            routes: [
              {
                method: 'put', // http method get|post|put|delete
                handler: 'create', // name of the method in your provider
                path: '/scenario/create/:id', // the route path
              },
            ],
          },
          {
            name: 'scenarios',
            module: './utils/restapi/handlers/scenarios.js',
            routes: [
              {
                method: 'get', // http method get|post|put|delete
                handler: 'run', // name of the method in your provider
                path: '/scenarios/:id/run', // the route path
              },
            ],
          },
        ],
      },
      publish: [
        {
          topic: 'scenarios',
          data: [
            {
              nature: {
                type: 'scenarios',
                quality: 'create',
              },
            },
            {
              nature: {
                type: 'scenarios',
                quality: 'run',
              },
            },
          ],
        },
      ],
    },
  ],
};

module.exports = config;
