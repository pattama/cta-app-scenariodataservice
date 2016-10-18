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
        port: 3005
      },
    }
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
            name: 'scenario',
            module: './utils/restapi/handlers/scenarios.js', // relative to Cement.dirname value (process.cwd() by default, i.e. where the app was launched)
            routes: [
              {
                method: 'get', // http method get|post|put|delete
                handler: 'getScenario', // name of the method in your provider
                path: '/scenario/:id', // the route path
              },
            ],
          },
        ],
      },
      publish: [
        {
          topic: 'scenario',
          data: [
            {
              nature: {
                type: 'scenario',
                quality: 'get',
              },
            },
          ],
        },
      ], // don't forget to define this property so that you are able to send jobs to the next bricks
    },
  ],
};

module.exports = config;
