'use strict';

const DataModel = require('./datamodel');

/**
 * Repository Data Model fields
 * @type{{
 * id: {type: string},
 * name: {type: string},
 * type: {type: string},
 * url: {type: string},
 * mountPoint: {type: string},
 * }}
 */
const fields = {
  id: { type: 'identifier' },
  name: { type: 'string' },
  type: { type: 'string' },
  url: { type: 'string' },
  mountPoint: { type: 'string' },
};

/**
 * Tests Data Model class
 */
class Repository extends DataModel {
  /**
   *
   * @param data - The data to create
   * @param autoGenerateId
   */
  constructor(data, autoGenerateId) {
    super(data, fields, autoGenerateId);
  }
}

module.exports = Repository;
