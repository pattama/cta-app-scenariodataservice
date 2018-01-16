/**
 * This source code is provided under the Apache 2.0 license and is provided
 * AS IS with no warranty or guarantee of fit for purpose. See the project's
 * LICENSE.md for details.
 * Copyright 2017 Thomson Reuters. All rights reserved.
 */

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
  scheduled: { type: 'boolean' },
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
