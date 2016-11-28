'use strict';

const _ = require('lodash');

/**
 * Handler class for RESTAPI handlers
 */
class RestCRUD {
  /**
   * Create
   * @param cementHelper, a cementHelper
   * @param dataType, type of data the handle
   * @param DataModel, a Data Model
   */
  constructor(cementHelper, dataType, DataModel) {
    this.cementHelper = cementHelper;
    this.dataType = dataType;
    this.DataModel = DataModel;
  }

  /**
   * Publishes request body in create Context
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
   * Publishes request body in update Context
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
   * Publishes request params (Query) id in findbyid Context
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

  /**
   * Publishes request params (Query) in find Context
   * @param req
   * @param res
   * @param next
   */
  find(req, res) {
    // computing filters
    const filter = {};
    // computing limit filter Number
    filter.limit = req.query.limit ? parseInt(req.query.limit, 10) : 20;
    // computing offset filter Number
    filter.offset = req.query.offset ? parseInt(req.query.offset, 10) : 0;
    // computing sort filter Object
    // Note: sort Object fields must be preserved in the right order
    // theorically, the JS standard defines Object as an unordered collection of properties
    // practically, v8 engine (and hence nodejs) preserves the order
    // so the following code is suitable
    if ('sort' in req.query) {
      filter.sort = {};
      const split = req.query.sort.split(',')
        .filter(str => str.length > 0);
      split.forEach((sortValue) => {
        if (sortValue.startsWith('-')) {
          filter.sort[sortValue.substr(1)] = -1;
        } else {
          filter.sort[sortValue] = 1;
        }
      });
    }
    const query = new this.DataModel(_.omit(req.query, Object.keys(filter)), false);
    const data = {
      nature: {
        type: this.dataType,
        quality: 'find',
      },
      payload: {
        filter,
        query,
      },
    };
    const context = this.cementHelper.createContext(data);

    context.once('done', (brickname, response) => {
      res.send(response);
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
   * Publishes request params (Query) id in delete Context
   * @param req
   * @param res
   * @param next
   */
  delete(req, res) {
    const data = {
      nature: {
        type: this.dataType,
        quality: 'delete',
      },
      payload: {
        id: req.params.id,
      },
    };
    const context = this.cementHelper.createContext(data);
    const that = this;
    context.once('done', function(brickname, response) {
      if (response) {
        res.send(response);
      } else {
        res.status(404).send(`${that.dataType} not found.`);
      }
    });
    context.once('reject', function(brickname, error) {
      res.status(400).send(error.message);
    });
    context.once('error', function(brickname, error) {
      res.status(400).send(error.message);
    });
    context.publish();
  }
}

module.exports = RestCRUD;
