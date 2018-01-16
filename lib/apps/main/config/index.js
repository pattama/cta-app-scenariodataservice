/**
 * This source code is provided under the Apache 2.0 license and is provided
 * AS IS with no warranty or guarantee of fit for purpose. See the project's
 * LICENSE.md for details.
 * Copyright 2017 Thomson Reuters. All rights reserved.
 */

'use strict';

const load = require('cta-common').loader;

module.exports = {
  name: 'scenario-dataservice',
  tools: load.asArray('tools', __dirname),
  bricks: load.asArray('bricks', __dirname),
  properties: {
    schedulerApiUrl: 'http://localhost:3011/sch/',
    scenarioApiUrl: 'http://localhost:3005/sds/',
    uid: '587c9be41466b02983630ff5',
  },
};
