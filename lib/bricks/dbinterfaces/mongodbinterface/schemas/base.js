/**
 * This source code is provided under the Apache 2.0 license and is provided
 * AS IS with no warranty or guarantee of fit for purpose. See the project's
 * LICENSE.md for details.
 * Copyright 2017 Thomson Reuters. All rights reserved.
 */

'use strict';

const ObjectID = require('bson').ObjectID;
const _ = require('lodash');
/**
 * Base Schema for MongoDB class
 *
 */
class BaseSchema {
  /**
   *
   * @param {Object} data - the data
   * @param {String} type - the type of data
   */
  constructor(data, type) {
    const DataModel = require(`../../../../utils/datamodels/${type}.js`);
    const keys = DataModel.keys();
    const schema = _.pick(data, Object.keys(keys));
    Object.keys(schema).forEach(function(key) {
      if (keys[key].type === 'identifier') {
        schema[key] = new ObjectID(data[key]);
      }
    });
    if ('id' in schema) {
      schema._id = schema.id;
      delete schema.id;
    }
    return schema;
  }

  static toCTAData(mongodbDoc, type) {
    const DataModel = require(`../../../../utils/datamodels/${type}.js`);
    const keys = DataModel.keys();
    const data = _.pick(mongodbDoc, Object.keys(keys));
    Object.keys(data).forEach(function(key) {
      if (keys[key].type === 'identifier') {
        data[key] = mongodbDoc[key].toString();
      }
    });
    if ('_id' in mongodbDoc) {
      data.id = mongodbDoc._id.toString();
    }
    return new DataModel(data);
  }

  static dataQueryKeys(type) {
    const DataModel = require(`../../../../utils/datamodels/${type}.js`);
    return DataModel.queryKeys();
  }
}

module.exports = BaseSchema;
