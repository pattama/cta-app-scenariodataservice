'use strict';

const Base = require('../base');
const CreateHelper = require('../base/helpers/create');
const DeleteHelper = require('../base/helpers/delete');
const FindHelper = require('../base/helpers/find');
const FindByIdHelper = require('../base/helpers/findbyid');
const UpdateHelper = require('../base/helpers/update');
const RunHelper = require('./helpers/run');

/**
 * Business Logic Scenario class
 *
 * @augments Base
 * @property {CementHelper} cementHelper - cementHelper instance
 * @property {BrickConfig} configuration - cement configuration of the brick
 * @property {Object} apiURLs - list of URLs to other components APIs
 * @property {Map<String, Helper>} helpers - Map of Helpers
 */
class Scenarios extends Base {
  constructor(cementHelper, configuration) {
    super(cementHelper, configuration);
    this.dataType = 'scenarios';
    this.apiURLs = {};
    this.uid = configuration.properties.uid;
    this.apiURLs.executionApiUrl =
      configuration.properties.executionApiUrl || cementHelper.appProperties.executionApiUrl;
    this.apiURLs.schedulerApiUrl =
      configuration.properties.schedulerApiUrl || cementHelper.appProperties.schedulerApiUrl;
    this.apiURLs.jobManagerApiUrl =
      configuration.properties.jobManagerApiUrl || cementHelper.appProperties.jobManagerApiUrl;
    this.apiURLs.scenarioApiUrl =
      configuration.properties.scenarioApiUrl || cementHelper.appProperties.scenarioApiUrl;

    this.helpers.set('create',
      new CreateHelper(this.cementHelper, this.logger, 'scenarios', this.apiURLs));
    this.helpers.set('delete',
      new DeleteHelper(this.cementHelper, this.logger, 'scenarios', this.apiURLs));
    this.helpers.set('find',
      new FindHelper(this.cementHelper, this.logger, 'scenarios', this.apiURLs));
    this.helpers.set('findById',
      new FindByIdHelper(this.cementHelper, this.logger, 'scenarios', this.apiURLs));
    this.helpers.set('update',
      new UpdateHelper(this.cementHelper, this.logger, 'scenarios', this.apiURLs));
    this.helpers.set('run',
      new RunHelper(this.cementHelper, this.logger, 'scenarios', this.apiURLs));
  }

  start() {
    this.logger.info(`starting brick ${this.name}...`);
    this.getFindScheduleScenario().then((schedules) => {
      this.setupAllSchedules(schedules);
    }).catch((err) => {
      if (err instanceof Error) {
        this.logger.error(`Cannot schedules the scenario. ${err}`);
      } else {
        this.logger.error(`Cannot schedules the scenario. ${err.returnCode}:` +
          `${err.brickName} ${err.response}`);
      }
    });
  }

  getFindScheduleScenario() {
    const that = this;
    return new Promise((resolve, reject) => {
      const query = { scheduled: true };
      const options = { limit: 0, offset: 0 };
      const fields = { schedule: 1, _id: 1 };

      const data = {
        nature: {
          type: 'dbInterface',
          quality: 'find',
        },
        payload: {
          type: that.dataType,
          options,
          query,
          fields,
        },
      };

      const output = this.cementHelper.createContext(data);
      output.on('done', function (brickName, response) {
        resolve(response);
      });
      output.on('reject', function (brickName, error) {
        reject({
          returnCode: 'reject',
          brickName: brickName,
          response: error,
        });
      });
      output.on('error', function (brickName, error) {
        reject({
          returnCode: 'error',
          brickName: brickName,
          response: error,
        });
      });
      output.publish();
    });
  }

  setupAllSchedules(scenarios) {
    const that = this;
    scenarios.forEach((s) => {
      const scheduleContract = {
        nature: {
          type: 'schedules',
          quality: 'upsertbyobjidtype',
        },
        payload: {
          objId: s.id,
          type: 'scenarios',
          schedule: s.schedule,
          rest: {
            method: 'GET',
            url: `${that.apiURLs.scenarioApiUrl}scenarios/${s.id}/run`,
            headers: {
              'content-type': 'application/json',
              uid: this.uid,
            },
          },
        },
      };

      const data = {
        nature: {
          type: 'schedule.messages',
          quality: 'produce',
        },
        payload: scheduleContract,
      };
      const output = this.cementHelper.createContext(data);
      output.on('done', function (brickName, response) {
        that.logger.info(brickName, response);
      });
      output.on('reject', function (brickName, error) {
        that.logger.error(brickName, error);
      });
      output.on('error', function (brickName, error) {
        that.logger.error(brickName, error);
      });
      output.publish();
    });
  }
}

module.exports = Scenarios;
