'use strict';

const DataModel = require('./datamodel');

const fields = {
  id: { type: 'identifier' },
  name: { type: 'string' },
  description: { type: 'string' },
  scopetested: { type: 'string', optional: true },
  testsuiteId: { type: 'identifier' },
  configurationId: { type: 'identifier' },
  pendingtimeout: { type: 'number' },
  runningtimeout: { type: 'number' },
  schedule: { type: 'string', optional: true },
  scheduled: { type: 'boolean', optional: true },
  afterhandlers: { type: 'array', optional: true },
};

/**
 * Scenario Data Model class
 *
 * @property {ObjectID} id - unique identifier
 * @property {ObjectID} scenario - unique identifier of a Scenario
 * @property {ObjectID} configuration - unique identifier of a Configuration
 * @property {ObjectID} user - unique identifier of an User
 */
class Scenario extends DataModel {
  /**
   *
   * @param {Object} data - params
   * @param {ObjectID} data.id - unique identifier
   * @param {ObjectID} data.scenario - unique identifier of a Scenario
   * @param {ObjectID} data.configuration - unique identifier of a Configuration
   * @param {ObjectID} data.user - unique identifier of an User
   */
  constructor(data, autoGenerateId) {
    super(data, fields, autoGenerateId);
  }
}

module.exports = Scenario;
