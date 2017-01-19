'use strict';

module.exports = {
  name: 'sender.sch',
  module: 'cta-io',
  dependencies: {
    messaging: 'messaging.sch',
  },
  properties: {
    output: {
      queue: 'cta.sch.schedules',
    },
  },
  publish: [
    {
      topic: 'silo',
      data: [
        {
          nature: {
            type: 'documents',
            quality: 'backup',
          },
        },
        {
          nature: {
            type: 'documents',
            quality: 'restore',
          },
        },
      ],
    },
  ],
  subscribe: [
    {
      topic: 'schedule.messages.produce',
      data: [{
        nature: {
          quality: 'produce',
        },
      }],
    },
  ],
};
