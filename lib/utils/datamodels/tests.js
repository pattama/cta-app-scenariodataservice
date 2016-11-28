'use strict';

const DataModel = require('./datamodel');

/**
 * Test Data Model fields
 * @type{{
 * id: {type: string},
 * name: {type: string},
 * description: {type: string},
 * featureTested: {type: string},
 * type: {type: string},
 * parentTestSuite: {type: string},
 * enabled: {type: boolean},
 * inputRepositories: {type: array, optional: boolean},
 * stages: {type: array},
 * }}
 */
const fields = {
  id: { type: 'identifier' },
  parentTestSuite: { type: 'identifier' },
  name: { type: 'string' },
  description: { type: 'string' },
  featureTested: { type: 'string' },
  type: { type: 'string' },
  enabled: { type: 'boolean' },
  stages: { type: 'array' },
};

/**
 * TestSuite Data Model class
 */
class Test extends DataModel {
  /**
   *
   * @param data - The data to create
   * @param autoGenerateId
   */
  constructor(data, autoGenerateId) {
    super(data, fields, autoGenerateId);
  }
}

module.exports = Test;
