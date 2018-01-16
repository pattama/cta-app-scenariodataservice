/**
 * This source code is provided under the Apache 2.0 license and is provided
 * AS IS with no warranty or guarantee of fit for purpose. See the project's
 * LICENSE.md for details.
 * Copyright 2017 Thomson Reuters. All rights reserved.
 */

'use strict';

const BaseDBInterfaceHelper = require('../../basedbinterface/basehelper.js');

/**
 * Database Interface MongoDB Helper Base class
 *
 * @augments BaseMongoDBHelper
 * @property {CementHelper} cementHelper - cementHelper instance
 * @property {Logger} logger - logger instance
 */
class BaseMongoDBHelper extends BaseDBInterfaceHelper {
  constructor(cementHelper, logger) {
    super(cementHelper, logger);
    this.schemas = {
      scenarios: require('../schemas/scenarios.js'),
    };
  }
}

module.exports = BaseMongoDBHelper;
