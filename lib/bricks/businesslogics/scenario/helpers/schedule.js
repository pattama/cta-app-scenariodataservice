'use strict';

const nodeUrl = require('url');
const BaseHelper = require('../../base/helpers/basehelper.js');
const validate = require('cta-common').validate;

/**
 * Business Logic Execution Helper Schedule class
 *
 * @augments BaseHelper
 * @property {CementHelper} cementHelper - cementHelper instance
 * @property {Logger} logger - logger instance
 */
class Schedule extends BaseHelper {

  /**
   * Validates Context properties specific to this Helper
   * Validates Query Execution Model fields
   * @param {Context} context - a Context
   * @abstract
   * @returns {Promise}
   */
  _validate(context) {
    const job = context.data;
    return new Promise((resolve, reject) => {
      if (!validate(job.payload.id, { type: 'identifier' }).isValid) {
        reject(new Error('missing/incorrect \'id\' String value of ObjectID in job payload'));
      }
      resolve({ ok: 1 });
    });
  }

  /**
   * Process the context
   * @param {Context} context - a Context
   */
  _process(context) {
    const that = this;
    that.publishSchedule(context);
  }

  publishSchedule(context) {
    const that = this;
    const s = context.data.payload;
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
          url: `${nodeUrl.resolve(that.scenarioApiUrl, 'scenarios')}/${s.id}/run`,
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
      that.logger.error(brickName, error);
    });
    output.on('error', function (brickName, error) {
      that.logger.error(brickName, error);
    });
    output.publish();
  }
}

module.exports = Schedule;
