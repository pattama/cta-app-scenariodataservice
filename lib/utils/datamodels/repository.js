/**
 * This source code is provided under the Apache 2.0 license and is provided
 * AS IS with no warranty or guarantee of fit for purpose. See the project's
 * LICENSE.md for details.
 * Copyright 2017 Thomson Reuters. All rights reserved.
 */

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
 * Repository Data Model class
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
