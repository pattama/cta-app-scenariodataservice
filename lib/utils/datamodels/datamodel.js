'use strict';

const ObjectID = require('bson').ObjectID;

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
    if (autoGenerateId !== false) {
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
      }
    });
    return converted;
  }
}

module.exports = DataModel;
