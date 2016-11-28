'use strict';

const DataModel = require('./datamodel');

/**
 * Scenario Data Model fields
 * @type {{
 * id: {type: string},
 * name: {type: string},
 * description: {type: string},
 * scopetested: {type: string,
 * optional: boolean},
 * testsuiteId: {type: string},
 * configurationId: {type: string},
 * pendingtimeout: {type: string},
 * runningtimeout: {type: string},
 * schedule: {type: string, optional: boolean},
 * scheduled: {type: string, optional: boolean},
 * afterhandlers: {type: string, optional: boolean}
 * }}
 */
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
 */
class Scenario extends DataModel {
  /**
   *
   * @param data - The data to create
   * @param autoGenerateId
   */
  constructor(data, autoGenerateId) {
    super(data, fields, autoGenerateId);
  }
}

module.exports = Scenario;
