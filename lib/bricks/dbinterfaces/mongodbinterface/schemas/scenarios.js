/**
 * This source code is provided under the Apache 2.0 license and is provided
 * AS IS with no warranty or guarantee of fit for purpose. See the project's
 * LICENSE.md for details.
 * Copyright 2017 Thomson Reuters. All rights reserved.
 */

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
