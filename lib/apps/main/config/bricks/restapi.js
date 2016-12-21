'use strict';

module.exports = {
  name: 'restapi',
  module: 'cta-restapi',
  dependencies: {
    express: 'my-express',
  },
  properties: {
    providers: [
      {
        name: 'scenarios',
        module: './utils/restapi/handlers/scenarios.js', // relative to Cement.dirname value (process.cwd() by default, i.e. where the app was launched)
        routes: [
          {
            method: 'post', // http method get|post|put|delete
            handler: 'create', // name of the method in your provider
            path: '/scenarios', // the route path
          },
          {
            method: 'put', // http method get|post|put|delete
            handler: 'create', // name of the method in your provider
            path: '/scenarios/:id', // the route path
          },
          {
            method: 'patch', // http method get|post|put|delete
            handler: 'update', // name of the method in your provider
            path: '/scenarios/:id', // the route path
          },
          {
            method: 'get', // http method get|post|put|delete
            handler: 'findById', // name of the method in your provider
            path: '/scenarios/:id', // the route path
          },
          {
            method: 'delete', // http method get|post|put|delete
            handler: 'delete', // name of the method in your provider
            path: '/scenarios/:id', // the route path
          },
          {
            method: 'get', // http method get|post|put|delete
            handler: 'find', // name of the method in your provider
            path: '/scenarios', // the route path
          },
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
      topic: 'bl.scenario',
      data: [
        {
          nature: {
            type: 'scenario',
          },
        },
      ],
    },
  ], // don't forget to define this property so that you are able to send jobs to the next bricks
};
