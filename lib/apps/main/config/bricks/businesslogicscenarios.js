'use strict';

module.exports = {
  name: 'businesslogic-scenarios',
  module: './bricks/businesslogics/scenario/index.js', // relative to Cement.dirname value (process.cwd() by default, i.e. where the app was launched)
  properties: {
    executionApiUrl: 'http://localhost:3010/eds/',
    schedulerApiUrl: 'http://localhost:3011/sch/',
    jobManagerApiUrl: 'http://localhost:3012/jms/',
    scenarioApiUrl: 'http://localhost:3005/sds/',
  },
  publish: [
    {
      topic: 'io.message.acknowledge',
      data: [
        {
          nature: {
            type: 'messages',
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
      topic: 'scenario.messages.produce',
      data: [
        {
          nature: {
            type: 'scenario.messages',
          },
        },
      ],
    },
    {
      topic: 'schedule.messages.produce',
      data: [
        {
          nature: {
            type: 'schedule.messages',
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
    {
      topic: 'bl.scenarios.scheduled',
      data: [
        {
          nature: {
            type: 'scenarios',
            quality: 'scheduled',
          },
        },
      ],
    },
  ],
  subscribe: [
    {
      topic: 'bl.scenarios',
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
            quality: 'findById',
          },
        },
        {
          nature: {
            type: 'scenarios',
            quality: 'update',
          },
        },
        {
          nature: {
            type: 'scenarios',
            quality: 'delete',
          },
        },
        {
          nature: {
            type: 'scenarios',
            quality: 'find',
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
    {
      topic: 'bl.scenarios.scheduled',
      data: [
        {
          nature: {
            type: 'scenarios',
            quality: 'scheduled',
          },
        },
      ],
    },
  ],
};
