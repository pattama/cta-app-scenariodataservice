'use strict';

const BaseMongoDBHelper = require('./base.js');
const validate = require('cta-common').validate;

/**
 * Database Interface MongoDB Helper Find class
 *
 * @augments BaseMongoDBHelper
 * @property {CementHelper} cementHelper - cementHelper instance
 * @property {Logger} logger - logger instance
 */
class Find extends BaseMongoDBHelper {

  /**
   * Validates Context properties specific to this Helper
   * Validates abstract query fields
   * @param {Context} context - a Context
   * @abstract
   * @returns {Promise}
   */
  _validate(context) { // eslint-disable-line no-unused-vars
    const job = context.data;
    return new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
      const pattern = {
        type: 'object',
        items: {
          type: 'string',
          query: { type: 'object', optional: true },
          fields: { type: 'object', optional: true },
          options: {
            type: 'object',
            items: {
              limit: 'number',
              offset: 'number',
              sort: { type: 'object', optional: true },
            },
          },
        },
      };
      const validation = validate(job.payload, pattern);

      if (!validation.results.type.isValid) {
        reject(new Error('missing/incorrect \'type\' String in job payload'));
      }

      const optionsResult = validation.results.options;
      if (!optionsResult.isValid) {
        if (typeof optionsResult.results === 'object'
          && Object.keys(optionsResult.results).length > 0) {
          if (!optionsResult.results.limit.isValid) {
            reject(new Error('missing/incorrect \'limit\' Number in job payload.options'));
          }

          if (!optionsResult.results.offset.isValid) {
            reject(new Error('missing/incorrect \'offset\' Number in job payload.options'));
          }

          if (!optionsResult.results.sort.isValid) {
            reject(new Error('incorrect \'sort\' Object in job payload.options'));
          }
        } else {
          reject(new Error('missing/incorrect \'options\' Object in job payload'));
        }
      }

      // const queryValidation = validate(job.payload.query, {
      //   type: 'object',
      //   items: schemas[job.payload.type].dataQueryKeys(),
      // });
      // if (!queryValidation.isValid) {
      //   const resultsKeysArray = Object.keys(queryValidation.results);
      //   if (typeof queryValidation.results === 'object'
      //     && resultsKeysArray.length > 0) {
      //     for (let i = 0; i < resultsKeysArray.length; i++) {
      //       const key = resultsKeysArray[i];
      //       if (!queryValidation.results[key].isValid) {
      //         const error = queryValidation.results[key].error;
      //         reject(new Error(`incorrect '${key}' in job payload.query: ${error}`));
      //         break;
      //       }
      //     }
      //   } else {
      //     reject(new Error('missing/incorrect \'query\' Object in job payload'));
      //   }
      // }

      resolve({ ok: 1 });
    });
  }

  /**
   * Process the context
   * @param {Context} context - a Context
   */
  _process(context) {
    const that = this;
    const payload = context.data.payload;
    const collection = payload.type;
    const query = new that.schemas[collection](payload.query);

    const args = [];
    const options = {
      limit: payload.options.limit,
      skip: payload.options.offset,
    };
    if (payload.options.hasOwnProperty('sort')) {
      options.sort = payload.options.sort;
    }

    args.push(query);
    if (payload.fields && typeof payload.fields === 'object') args.push(payload.fields);
    args.push(options);

    const data = {
      nature: {
        type: 'database',
        quality: 'query',
      },
      payload: {
        collection,
        action: 'find',
        args,
      },
    };
    const output = this.cementHelper.createContext(data);
    output.on('done', function(brickname, response) {
      const objects = [];
      response.forEach(function(doc) {
        objects.push(that.schemas[collection].toCTAData(doc));
      });
      context.emit('done', that.cementHelper.brickName, objects);
    });
    output.on('reject', function(brickname, error) {
      context.emit('reject', brickname, error);
    });
    output.on('error', function(brickname, error) {
      context.emit('error', brickname, error);
    });
    output.publish();
  }
}

module.exports = Find;
