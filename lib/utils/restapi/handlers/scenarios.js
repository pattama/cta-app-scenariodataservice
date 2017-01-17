'use strict';

const RestCRUD = require('./restcrud');
const os = require('os');
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
    let uid = req.headers['uid'];
    let user;

    if (uid  === '587c9be41466b02983630ff5') {
      user = {
        id: uid,
        first: this.name,
        last: os.hostname,
        uid,
      };
    } else {
      user = {
        id: req.params['user_id'] || req.headers['user-id'],
        first: req.params['user_first'] || req.headers['user-first'],
        last: req.params['user_last'] || req.headers['user_last'],
        uid: req.params['uid'] || req.headers['uid'],
      };
    };

    const data = {
      nature: {
        type: this.dataType,
        quality: 'run',
      },
      payload: {
        id: req.params.id,
        requestTimestamp: req.headers.timeStamp || new Date().getTime(),
        user,
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
