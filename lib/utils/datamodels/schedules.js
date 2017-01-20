'use strict';

const DataModel = require('./datamodel');

/**
 * Test Data Model fields
 * @type{{
 * id: {type: string},
 * schedule: {type: string},
 * }}
 */
const fields = {
  id: { type: 'identifier' },
  schedule: { type: 'string' },
};

/**
 * Tests Data Model class
 */
class Schedule extends DataModel {
  /**
   *
   * @param data - The data to create
   * @param autoGenerateId
   */
  constructor(data, autoGenerateId) {
    super(data, fields, autoGenerateId);
  }
}

module.exports = Schedule;
