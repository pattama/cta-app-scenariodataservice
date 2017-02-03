'use strict';

const BaseDBInterface = require('../basedbinterface');
const DeleteOneHelper = require('./helpers/deleteone');
const Find = require('./helpers/find');
const FindByIdHelper = require('./helpers/findbyid');
const InsertOneHelper = require('./helpers/insertone');
const UpdateOneHelper = require('./helpers/updateone');

/**
 * Database Interface MongoDB class
 *
 * @augments BaseDBInterface
 * @property {CementHelper} cementHelper - cementHelper instance
 * @property {BrickConfig} configuration - cement configuration of the brick
 * @property {Map<String, Helper>} helpers - Map of Helpers
 */
class MongoDBInterface extends BaseDBInterface {
  constructor(cementHelper, configuration) {
    super(cementHelper, configuration);
    this.helpers.set('deleteOne', new DeleteOneHelper(this.cementHelper, this.logger));
    this.helpers.set('find', new Find(this.cementHelper, this.logger));
    this.helpers.set('findById', new FindByIdHelper(this.cementHelper, this.logger));
    this.helpers.set('insertOne', new InsertOneHelper(this.cementHelper, this.logger));
    this.helpers.set('updateOne', new UpdateOneHelper(this.cementHelper, this.logger));
  }
}

module.exports = MongoDBInterface;
