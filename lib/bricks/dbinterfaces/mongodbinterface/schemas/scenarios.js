'use strict';

const BaseSchema = require('./base.js');
/**
 * Scenario Schema for MongoDB class
 *
 */
class ScenarioSchema extends BaseSchema {
  /**
   *
   * @param {DataModel} data - params
   */
  constructor(data) {
    super(data, 'scenarios');
  }

  static toCTAData(mongodbDoc) {
    return super.toCTAData(mongodbDoc, 'scenarios');
  }

  static dataQueryKeys() {
    return super.dataQueryKeys('scenarios');
  }
}

module.exports = ScenarioSchema;
