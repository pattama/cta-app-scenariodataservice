'use strict';

const Base = require('../base');
const CreateHelper = require('../base/helpers/create');
const DeleteHelper = require('../base/helpers/delete');
const FindHelper = require('../base/helpers/find');
const FindByIdHelper = require('../base/helpers/findbyid');
const UpdateHelper = require('../base/helpers/update');

/**
 * Business Logic Scenario class
 *
 * @augments Base
 * @property {CementHelper} cementHelper - cementHelper instance
 * @property {BrickConfig} configuration - cement configuration of the brick
 * @property {Object} apiURLs - list of URLs to other components APIs
 * @property {Map<String, Helper>} helpers - Map of Helpers
 */
class Scenario extends Base {
  constructor(cementHelper, configuration) {
    super(cementHelper, configuration);

    this.apiURLs = {};
    this.apiURLs.executionApiUrl =
      configuration.properties.executionApiUrl || cementHelper.appProperties.executionApiUrl;
    this.apiURLs.schedulerApiUrl =
      configuration.properties.schedulerApiUrl || cementHelper.appProperties.schedulerApiUrl;
    this.apiURLs.jobManagerApiUrl =
      configuration.properties.jobManagerApiUrl || cementHelper.appProperties.jobManagerApiUrl;

    this.helpers.set('create',
      new CreateHelper(this.cementHelper, this.logger, 'scenario', this.apiURLs));
    this.helpers.set('delete',
      new DeleteHelper(this.cementHelper, this.logger, 'scenario', this.apiURLs));
    this.helpers.set('find',
      new FindHelper(this.cementHelper, this.logger, 'scenario', this.apiURLs));
    this.helpers.set('findById',
      new FindByIdHelper(this.cementHelper, this.logger, 'scenario', this.apiURLs));
    this.helpers.set('update',
      new UpdateHelper(this.cementHelper, this.logger, 'scenario', this.apiURLs));
  }
}

module.exports = Scenario;
