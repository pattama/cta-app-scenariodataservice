'use strict';

const RestCRUD = require('./restcrud');
const DataModel = require('../../datamodels/test');

/**
 * Handler class for RESTAPI handlers : RESULTS
 * @property {CementHelper} cementHelper - cementHelper from a cta-restapi Brick
 */
class TestsHandler extends RestCRUD {
  /**
   *
   * @param {CementHelper} cementHelper - cementHelper from a cta-restapi Brick
   */
  constructor(cementHelper) {
    super(cementHelper, 'test', DataModel);
  }
}

module.exports = TestsHandler;
