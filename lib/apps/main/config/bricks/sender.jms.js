/**
 * This source code is provided under the Apache 2.0 license and is provided
 * AS IS with no warranty or guarantee of fit for purpose. See the project's
 * LICENSE.md for details.
 * Copyright 2017 Thomson Reuters. All rights reserved.
 */

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
      topic: 'scenario.messages.produce',
      data: [{
        nature: {
          quality: 'produce',
        },
      }],
    },
  ],
};
