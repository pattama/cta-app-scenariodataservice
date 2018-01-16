/**
 * This source code is provided under the Apache 2.0 license and is provided
 * AS IS with no warranty or guarantee of fit for purpose. See the project's
 * LICENSE.md for details.
 * Copyright 2017 Thomson Reuters. All rights reserved.
 */

'use strict';

const DataModel = require('./datamodel');

/**
 * Configuration Data Model fields
 * @type {{
 * targetMode: {type: string},
 * runMode: {type: string},
 * type: {type: string},
 * properties: {type: array},
 * instanceTemplate: {type: string}
 * }}
 */
const fields = {
  name: { type: 'string' },
  targetMode: { type: 'string' },
  runMode: { type: 'string' },
  type: { type: 'string' },
  properties: { type: 'array' },
  instanceTemplate: { type: 'string', optional: true },
};

/**
 * Configuration Data Model class
 */
class Configuration extends DataModel {
  /**
   *
   * @param data - The data to create
   * @param autoGenerateId
   */
  constructor(data) {
    super(data, fields);
  }
}

module.exports = Configuration;
