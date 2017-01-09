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
