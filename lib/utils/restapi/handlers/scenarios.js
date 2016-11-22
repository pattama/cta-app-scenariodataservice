'use strict';

const RestCRUD = require('./restcrud');

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
    super(cementHelper, 'scenario');
  }

  /**
   * Publishes request body (Scenario) in the scenario-create Context
   * @param req
   * @param res
   */
  create(req, res) {
    super.create(req, res);
  }

  /**
   * Publishes request body (Scenario) in the scenario-update Context
   * @param req
   * @param res
   */
  update(req, res) {
    super.update(req, res);
  }

  /**
   * Publishes request params (Query) id in the scenario-findbyid Context
   * @param req
   * @param res
   */
  findById(req, res) {
    super.findById(req, res);
  }
}

module.exports = ScenariosHandler;
