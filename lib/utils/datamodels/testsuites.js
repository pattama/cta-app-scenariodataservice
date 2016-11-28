'use strict';

const DataModel = require('./datamodel');

/**
 * Scenario Data Model fields
 * @type{{
 * id: {type: string},
 * name: {type: string},
 * tests: {type: array}
 * enabled: {type: boolean},
 * applicationTested: {type: string},
 * inputRepositories: {type: array, optional: boolean},
 * outputRepositories: {type: array, optional: boolean},
 * }}
 */
const fields = {
  id: { type: 'identifier' },
  name: { type: 'string' },
  tests: { type: 'array' },
  enabled: { type: 'boolean' },
  applicationTested: { type: 'string', optional: true },
  inputRepositories: { type: 'array', optional: true },
  outputRepositories: { type: 'array', optional: true },
};

/**
 * TestSuite Data Model class
 */
class TestSuite extends DataModel {
  /**
   *
   * @param data - The data to create
   * @param autoGenerateId
   */
  constructor(data, autoGenerateId) {
    super(data, fields, autoGenerateId);
  }
}

module.exports = TestSuite;
