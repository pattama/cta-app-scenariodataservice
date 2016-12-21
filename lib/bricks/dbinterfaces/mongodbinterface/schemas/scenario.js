'use strict';

const BaseSchema = require('./base.js');
/**
 * Execution Schema for MongoDB class
 *
 */
class ScenarioSchema extends BaseSchema {
  /**
   *
   * @param {DataModel} data - params
   */
  constructor(data) {
    super(data, 'scenario');
  }

  static toCTAData(mongodbDoc) {
    return super.toCTAData(mongodbDoc, 'scenario');
  }

  static dataQueryKeys() {
    return super.dataQueryKeys('scenario');
  }
}

module.exports = ScenarioSchema;