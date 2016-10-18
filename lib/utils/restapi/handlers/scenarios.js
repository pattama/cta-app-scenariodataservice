'use strict';
//const _ = require('lodash');
//const Result = require('../../datamodels/result.js');
/**
 * Handler class for RESTAPI handlers : RESULTS
 * @property {CementHelper} cementHelper - cementHelper from a cta-restapi Brick
 */
class ScenariosHandler {
  /**
   *
   * @param {CementHelper} cementHelper - cementHelper from a cta-restapi Brick
   */
  constructor(cementHelper) {
    this.cementHelper = cementHelper;
    this.dataType = 'result';
  }


  /**
   *
   * @param req
   * @returns {string}
   * @param res
   */
  getScenario(req,res) {
    let ret = 'gotcha';
    console.log(req.params);
    res.end(ret);
    return req.params;
  }
}

module.exports = ScenariosHandler;
