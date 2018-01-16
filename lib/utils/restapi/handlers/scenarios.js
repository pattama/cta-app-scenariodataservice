/**
 * This source code is provided under the Apache 2.0 license and is provided
 * AS IS with no warranty or guarantee of fit for purpose. See the project's
 * LICENSE.md for details.
 * Copyright 2017 Thomson Reuters. All rights reserved.
 */

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
    const user = {};
    const uid = req.query.uid || req.headers.uid;

    if (uid === this.cementHelper.cement.configuration.properties.uid) {
      user.uid = uid;
    } else {
      user.id = req.query.user_id || req.headers.user_id;
      user.first = req.query.user_first || req.headers.user_first;
      user.last = req.query.user_last || req.headers.user_last;
      user.uid = uid;
    }

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
