'use strict';

const RestCRUD = require('./restcrud');
const ScenariosDataModel = require('../../datamodels/scenario');

/**
 * Handler class for RESTAPI handlers : RESULTS
 * @property {CementHelper} cementHelper - cementHelper from a cta-restapi Brick
 */
class ScenariosHandler extends RestCRUD {
  /**
   *
   * @param {CementHelper} cementHelper - cementHelper from a cta-restapi Brick
   */
  constructor(cementHelper) {
    super(cementHelper, 'scenario', ScenariosDataModel);
  }
}

module.exports = ScenariosHandler;
