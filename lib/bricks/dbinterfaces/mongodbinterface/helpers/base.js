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
      scenario: require('../schemas/scenarios.js'),
    };
  }
}

module.exports = BaseMongoDBHelper;
