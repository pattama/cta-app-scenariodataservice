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
 * Based Class for all DataModels
 */

class DataModel {
  /**
   * Crate a DataModel
   * @param data - The data for construct the DataModel
   * @param fields - The DataModel fields
   * @param autoGenerateId - The flag to enable or disable the auto generate the id to the DataModel
   */
  constructor(data, fields, autoGenerateId) {
    Object.assign(this, this.convertDataFields(data, fields));
    if (autoGenerateId !== false && 'id' in fields) {
      this.id = this.id || (new ObjectID()).toString();
    }
  }

  /**
   * Convert a string to the DataModel fields type
   * @param data - The data given to be converted
   * @param fields - The DataModel fields
   * @returns {{}} - The converted Data
   */
  convertDataFields(data, fields) {
    const converted = {};
    const dataFields = Object.keys(data);
    dataFields.forEach((dataField) => {
      if (dataField in fields) {
        if (typeof data[dataField] === 'string') {
          switch (fields[dataField].type) {
            case 'number':
              converted[dataField] = parseInt(data[dataField], 10);
              break;
            case 'boolean':
              converted[dataField] = (data[dataField].toLowerCase() === 'true');
              break;
            default:
              converted[dataField] = data[dataField];
          }
        } else if (fields[dataField].type === 'object' && fields[dataField].datamodel) {
          const Model = require(`./${fields[dataField].datamodel}`);
          const fieldObj = new Model(data[dataField]);
          converted[dataField] = fieldObj;
        } else {
          converted[dataField] = data[dataField];
        }
      }
    });
    return converted;
  }

  static keys(fields) {
    return _.cloneDeep(fields);
  }

  static queryKeys(fields) {
    const queryKeys = _.cloneDeep(fields);
    const keysArray = Object.keys(queryKeys);
    keysArray.forEach(function(key) {
      queryKeys[key].optional = true;
    });
    return queryKeys;
  }
}

module.exports = DataModel;
