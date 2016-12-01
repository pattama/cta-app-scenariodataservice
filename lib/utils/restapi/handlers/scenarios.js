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

  /**
   * Publishes request params (Query) id in scenarion run Context
   * @param req
   * @param res
   */
  run(req, res) {
    const data = {
      nature: {
        type: this.dataType,
        quality: 'run',
      },
      payload: {
        id: req.params.id,
      },
    };
    const context = this.cementHelper.createContext(data);
    context.once('done', (brickname, response) => {
      if (response) {
        res.send(response);
      } else {
        res.status(404).send(`${this.dataType} '${data.payload.id}' not found.`);
      }
    });
    context.once('reject', (brickname, error) => {
      res.status(400).send(error.message);
    });
    context.once('error', (brickname, error) => {
      res.status(400).send(error.message);
    });
    context.publish();
  }
}

module.exports = ScenariosHandler;
