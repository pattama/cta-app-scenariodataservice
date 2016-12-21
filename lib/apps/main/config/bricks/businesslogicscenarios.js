'use strict';

module.exports = {
  name: 'businesslogic-scenarios',
  module: './bricks/businesslogics/scenario/index.js', // relative to Cement.dirname value (process.cwd() by default, i.e. where the app was launched)
  properties: {
    executionApiUrl: 'http://localhost:3010/',
    schedulerApiUrl: 'http://localhost:3011/',
    jobManagerApiUrl: 'http://localhost:3012/',
  },
  publish: [

    {
      topic: 'io.message.acknowledge',
      data: [
        {
          nature: {
            type: 'message',
            quality: 'acknowledge',
          },
        },
      ],
    },

    {
      topic: 'dbInterface',
      data: [
        {
          nature: {
            type: 'dbInterface',
          },
        },
      ],
    },

    {
      topic: 'sender.message.produce',
      data: [
        {
          nature: {
            type: 'message',
          },
        },
      ],
    },

    {
      topic: 'requests.com',
      data: [
        {
          nature: {
            type: 'request',
            quality: 'exec',
          },
        },
        {
          nature: {
            type: 'request',
            quality: 'get',
          },
        },
        {
          nature: {
            type: 'request',
            quality: 'delete',
          },
        },
        {
          nature: {
            type: 'request',
            quality: 'post',
          },
        },
        {
          nature: {
            type: 'request',
            quality: 'put',
          },
        },
      ],
    },

  ],
  subscribe: [
    {
      topic: 'bl.scenario',
      data: [
        {
          nature: {
            type: 'scenario',
            quality: 'create',
          },
        },
        {
          nature: {
            type: 'scenario',
            quality: 'findById',
          },
        },
        {
          nature: {
            type: 'scenario',
            quality: 'update',
          },
        },
        {
          nature: {
            type: 'scenario',
            quality: 'delete',
          },
        },
        {
          nature: {
            type: 'scenario',
            quality: 'find',
          },
        },
        {
          nature: {
            type: 'scenario',
            quality: 'run',
          },
        },
      ],
    },
  ],
};
