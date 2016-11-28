'use strict';

const RestCRUD = require('./restcrud');
const DataModel = require('../../datamodels/testsuite');

/**
 * Handler class for RESTAPI handlers : RESULTS
 * @property {CementHelper} cementHelper - cementHelper from a cta-restapi Brick
 */
class TestSuitesHandler extends RestCRUD {
  /**
   *
   * @param {CementHelper} cementHelper - cementHelper from a cta-restapi Brick
   */
  constructor(cementHelper) {
    super(cementHelper, 'testsuite', DataModel);
  }
}

module.exports = TestSuitesHandler;
