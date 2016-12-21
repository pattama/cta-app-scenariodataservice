'use strict';

const RestCRUD = require('./restcrud');
const ScenariosDataModel = require('../../datamodels/scenarios');

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
    super(cementHelper, 'scenarios', ScenariosDataModel);
  }

  /**
   * Publishes request params (Query) id in run Context
   * @param req
   * @param res
   */
  run(req, res) {
    // let SCENARIO = require('../../tests/utils/restapi/handlers/scenarions.run.test.data.json');
    const data = {
      nature: {
        type: this.dataType,
        quality: 'run',
      },
      payload: {
        id: req.params.id,
        requestTimestamp: req.headers.timeStamp || new Date().getTime(),
        // user: { id: '58491364f6523cbab4d2d4eb', uid: req.headers.host },
        userId: req.headers.userId,
      },
    };
    const context = this.cementHelper.createContext(data);
    context.once('done', (brickName, response) => {
      if (response) {
        res.send(response);
      } else {
        res.status(404).send(`${this.dataType} '${data.payload.id}' not found.`);
      }
    });
    context.once('reject', (brickName, error) => {
      res.status(400).send(error.message);
    });
    context.once('error', (brickName, error) => {
      res.status(400).send(error.message);
    });
    context.publish();
  }
}

module.exports = ScenariosHandler;
