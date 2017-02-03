'use strict';

const BaseHelper = require('./basehelper.js');
const validate = require('cta-common').validate;

/**
 * Business Logic Scenario Helper Create class
 *
 * @augments BaseHelper
 * @property {CementHelper} cementHelper - cementHelper instance
 * @property {Logger} logger - logger instance
 */
class Create extends BaseHelper {
  /**
   * Validates Context properties specific to this Helper
   * Validates Scenario Model fields
   * @param {Context} context - a Context
   * @abstract
   * @returns {Promise}
   */
  _validate(context) {
    const that = this;
    return new Promise((resolve, reject) => {
      const pattern = {
        type: 'object',
        items: that.DataModel.keys(),
      };
      pattern.items.id.optional = true;
      const validation = validate(context.data.payload, pattern);

      if (!validation.isValid) {
        const resultsKeysArray = Object.keys(validation.results);
        if (typeof validation.results === 'object'
          && resultsKeysArray.length > 0) {
          for (let i = 0; i < resultsKeysArray.length; i++) {
            const key = resultsKeysArray[i];
            if (!validation.results[key].isValid) {
              const error = validation.results[key].error;
              reject(new Error(`incorrect '${key}' in job payload: ${error}`));
              break;
            }
          }
        } else {
          reject(new Error('missing/incorrect \'payload\' Object in job'));
        }
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
    const data = new that.DataModel(context.data.payload);
    const insertJob = {
      nature: {
        type: 'dbInterface',
        quality: 'insertOne',
      },
      payload: {
        type: that.dataType,
        content: data,
      },
    };
    const insertContext = this.cementHelper.createContext(insertJob);
    insertContext.on('done', function(brickname, insertedData) {
      context.emit('done', that.cementHelper.brickName, insertedData);
      if (insertedData.scheduled) {
        that._publishScheduleUpdate(insertedData);
      }
    });
    insertContext.on('reject', function(brickname, error) {
      context.emit('reject', brickname, error);
    });
    insertContext.on('error', function(brickname, error) {
      context.emit('error', brickname, error);
    });
    insertContext.publish();
  }

  _publishScheduleUpdate(scenario) {
    const that = this;
    const data = {
      nature: {
        type: that.dataType,
        quality: 'schedule',
      },
      payload: {
        action: 'schedule',
        id: scenario.id,
        schedule: scenario.schedule,
      },
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

module.exports = Create;
