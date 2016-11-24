'use strict';

const ObjectID = require('bson').ObjectID;

class DataModel {
  constructor(data, fields, autoGenerateId) {
    Object.assign(this, this.convertToDataModel(data, fields));
    if (autoGenerateId !== false) {
      this.id = this.id || (new ObjectID()).toString();
    }
  }

  convertToDataModel(data, fields) {
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
