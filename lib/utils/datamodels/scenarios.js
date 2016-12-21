'use strict';

const DataModel = require('./datamodel');

/**
 * Scenario Data Model fields
 * @type {{
 * id: {type: string},
 * name: {type: string},
 * description: {type: string},
 * scopetested: {type: string, optional: boolean},
 * testSuiteId: {type: string},
 * testSuite: {type: object},
 * configuration: {type: object},
 * pendingTimeout: {type: string},
 * runningTimeout: {type: string},
 * schedule: {type: string, optional: boolean},
 * scheduled: {type: boolean, optional: boolean},
 * afterHandlers: {type: array, optional: boolean}
 * }}
 */
const fields = {
  id: { type: 'identifier' },
  name: { type: 'string' },
  description: { type: 'string' },
  scopeTested: { type: 'string', optional: true },
  testSuiteId: { type: 'identifier' },
  testSuite: { type: 'object' },
  configuration: { type: 'object', datamodel: 'configuration' },
  pendingTimeout: { type: 'number' },
  runningTimeout: { type: 'number' },
  schedule: { type: 'string', optional: true },
  scheduled: { type: 'boolean', optional: true },
  afterHandlers: { type: 'array', optional: true },
};

/**
 * Scenario Data Model class
 */
class Scenarios extends DataModel {
  /**
   *
   * @param data - The data to create
   * @param autoGenerateId
   */
  constructor(data, autoGenerateId) {
    super(data, fields, autoGenerateId);
  }

  static keys() {
    return super.keys(fields);
  }

  static queryKeys() {
    return super.queryKeys(fields);
  }
}

module.exports = Scenarios;
