'use strict';

module.exports = {
  name: 'sender.jms',
  module: 'cta-io',
  dependencies: {
    messaging: 'messaging.jms',
  },
  properties: {
    output: {
      queue: 'cta.jms',
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
      topic: 'sender.jms.message.produce',
      data: [
        {
          nature: {
            type: 'messages',
            quality: 'produce',
          },
        },
      ],
    },
  ],
};
