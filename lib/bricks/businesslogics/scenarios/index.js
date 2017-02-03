'use strict';

const Base = require('../base');
const CreateHelper = require('../base/helpers/create');
const DeleteHelper = require('../base/helpers/delete');
const FindHelper = require('../base/helpers/find');
const FindByIdHelper = require('../base/helpers/findbyid');
const UpdateHelper = require('../base/helpers/update');
const RunHelper = require('./helpers/run');
const ScheduleHelper = require('./helpers/schedule');
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
    this.uid = this.cementHelper.cement.configuration.properties.uid;
    this.apiURLs.schedulerApiUrl =
      configuration.properties.schedulerApiUrl;
    this.apiURLs.scenarioApiUrl =
      configuration.properties.scenarioApiUrl;
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
    this.helpers.set('schedule',
      new ScheduleHelper(this.cementHelper, this.logger, 'scenarios', this.apiURLs));
  }

  start() {
    this.logger.info(`starting brick ${this.name}...`);
    return this.setupSchedules().then((schedules) => {
      this.logger.info(`Scheduled [${schedules.length}] scenarios`);
    }).catch((err) => {
      if (err instanceof Error) {
        this.logger.error(`Cannot setup scheduled scenarios. ${err}`);
      } else {
        this.logger.error(`Cannot setup scheduled scenarios. ${err.returnCode}:` +
          `${err.brickName} ${err.response}`);
      }
    });
  }

  setupSchedules() {
    return new Promise((resolve, reject) => {
      const data = {
        nature: {
          type: 'scenarios',
          quality: 'schedule',
        },
        payload: {
          action: '_initial',
        },
      };
      const scheduleContext = this.cementHelper.createContext(data);
      scheduleContext.publish();
      scheduleContext.on('done', (brickName, response) => {
        resolve(response);
      });

      scheduleContext.on('reject', function (brickName, reason) {
        reject({
          returnCode: reason.returnCode,
          brickName: brickName,
          response: reason.response,
        });
      });

      scheduleContext.on('error', function (brickName, error) {
        reject(error);
      });
    });
  }
}

module.exports = Scenarios;
