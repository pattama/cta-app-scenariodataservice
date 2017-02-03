'use strict';

const DataModel = require('./datamodel');

/**
 * Repository Data Model fields
 * @type{{
 * id: {type: string},
 * name: {type: string},
 * type: {type: string},
 * enabled: {type: boolean}
 * }}
 */
const fields = {
  id: { type: 'identifier' },
  name: { type: 'string' },
  type: { type: 'string' },
  url: { type: 'string' },
  enabled: { type: 'boolean' },
};

/**
 * Repository Data Model class
 */
class AfterHandler extends DataModel {
  /**
   *
   * @param data - The data to create
   * @param autoGenerateId
   */
  constructor(data, autoGenerateId) {
    super(data, fields, autoGenerateId);
  }
}

module.exports = AfterHandler;
