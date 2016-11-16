'use strict';

const bson = require('bson');
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
    this.dataType = 'scenario';
  }

  /**
   * Publishes request body (Scenario) in the scenario-create Context
   * @param req
   * @param res
   */
  create(req, res) {
    const data = {
      nature: {
        type: this.dataType,
        quality: 'create',
      },
      payload: req.body,
    };

    if ('id' in req.params) {
      data.payload.id = req.params.id;
    } else {
      data.payload.id = new bson.ObjectId().toString();
    }
    const context = this.cementHelper.createContext(data);
    context.on('done', (brickname, response) => {
      res.status(201).send(response);
    });
    context.once('reject', (brickname, error) => {
      res.status(400).send(error.message);
    });
    context.once('error', (brickname, error) => {
      res.status(400).send(error.message);
    });
    context.publish();
  }

  /**
   * Publishes request body (Scenario) in the scenario-update Context
   * @param req
   * @param res
   */
  update(req, res) {
    const data = {
      nature: {
        type: this.dataType,
        quality: 'update',
      },
      payload: req.body,
    };
    data.payload.id = req.params.id;
    const context = this.cementHelper.createContext(data);
    context.on('done', (brickname, response) => {
      if (response) {
        res.send(response);
      } else {
        res.status(404).send(`Scenario ${data.payload.id} not found.`);
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

  /**
   * Publishes request params (Query) id in the scenario-findbyid Context
   * @param req
   * @param res
   */
  findById(req, res) {
    const data = {
      nature: {
        type: this.dataType,
        quality: 'findById',
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
        res.status(404).send('Execution not found.');
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
