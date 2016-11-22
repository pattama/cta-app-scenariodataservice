'use strict';

/**
 * Handler class for RESTAPI handlers : RESULTS
 * @property {CementHelper} cementHelper - cementHelper from a cta-restapi Brick
 */
class RestCRUD {
  /**
   *
   * @param {CementHelper} cementHelper - cementHelper from a cta-restapi Brick
   */
  constructor(cementHelper, dataType) {
    this.cementHelper = cementHelper;
    this.dataType = dataType;
  }

  /**
   * Publishes request body in the create Context
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
    } else if (req.method.toLowerCase() === 'put') {
      res.status(400).send('Missing \'id\' property');
      return;
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
   * Publishes request body in the update Context
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

  /**
   * Publishes request params (Query) id in the findbyid Context
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

module.exports = RestCRUD;
