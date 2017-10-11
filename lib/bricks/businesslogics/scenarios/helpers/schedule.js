'use strict';

const nodeUrl = require('url');
const BaseHelper = require('../../base/helpers/basehelper.js');
const validate = require('cta-common').validate;

/**
 * Business Logic Scenario Helper Schedule class
 *
 * @augments BaseHelper
 * @property {CementHelper} cementHelper - cementHelper instance
 * @property {Logger} logger - logger instance
 */
class Schedule extends BaseHelper {

  /**
   * Validates Context properties specific to this Helper
   * Validates Query Scenario Model fields
   * @param {Context} context - a Context
   * @abstract
   * @returns {Promise}
   */
  _validate(context) {
    const job = context.data;
    const actions = ['initial', 'schedule', 'unschedule'];
    return new Promise((resolve, reject) => {
      if (actions.indexOf(job.payload.action) >= 0) {
        if (job.payload.action === 'initial') {
          resolve({ ok: 1 });
        } else if (!validate(job.payload.id, { type: 'identifier' }).isValid) {
          reject(new Error('missing/incorrect \'id\' String value of ObjectID in job payload'));
        }
      } else {
        reject(new Error(`missing/incorrect \'action: ${job.payload.action}\' in job payload `));
      }
      resolve({ ok: 1 });
    });
  }

  /**
   * Process the context
   * @param {Context} context - a Context
   */
  _process(context) {
    const action = context.data.payload.action;
    switch (action) {
      case 'initial':
        this._initial(context);
        break;
      case 'schedule':
        this._schedule(context);
        break;
      case 'unschedule':
        this._unchedule(context);
        break;
      default:
        break;
    }
  }

  _initial(context) {
    this.getScheduledScenario().then((scenarios) => {
      context.emit('done', this.cementHelper.brickName, scenarios);
      scenarios.forEach((scenario) => {
        Object.assign(context.data.payload,scenario);
        this._schedule(context);
      });
    }).catch((err) => {
      context.emit('error', this.cementHelper.brickName, err);
    });
  }

  _schedule(context) {
    const that = this;
    const scenario = context.data.payload;
    const scheduleContract = {
      nature: {
        type: 'schedules',
        quality: 'upsertbyobjidtype',
      },
      payload: {
        objId: scenario.id,
        type: 'scenarios',
        schedule: scenario.schedule,
        rest: {
          method: 'GET',
          url: `${nodeUrl.resolve(that.scenarioApiUrl, 'scenarios')}/${scenario.id}/run`,
          headers: {
            'content-type': 'application/json',
            uid: that.cementHelper.cement.configuration.properties.uid,
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
      context.emit('reject', this.cementHelper.brickName, error);
      that.logger.error(brickName, error);
    });
    output.on('error', function (brickName, error) {
      context.emit('error', this.cementHelper.brickName, error);
      that.logger.error(brickName, error);
    });
    output.publish();
  }

  _unchedule(context) {
    const that = this;
    const scenario = context.data.payload;
    const scheduleContract = {
      nature: {
        type: 'schedules',
        quality: 'deletebyobjidtype',
      },
      payload: {
        objId: scenario.id,
        type: 'scenarios',
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
      context.emit('reject', this.cementHelper.brickName, error);
      that.logger.error(brickName, error);
    });
    output.on('error', function (brickName, error) {
      context.emit('error', this.cementHelper.brickName, error);
      that.logger.error(brickName, error);
    });
    output.publish();
  }

  getScheduledScenario() {
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
}

module.exports = Schedule;
