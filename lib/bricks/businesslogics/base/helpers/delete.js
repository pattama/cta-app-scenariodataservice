/**
 * This source code is provided under the Apache 2.0 license and is provided
 * AS IS with no warranty or guarantee of fit for purpose. See the project's
 * LICENSE.md for details.
 * Copyright 2017 Thomson Reuters. All rights reserved.
 */

'use strict';

const BaseHelper = require('./basehelper.js');
const validate = require('cta-common').validate;

/**
 * Business Logic Scenario Helper Delete class
 *
 * @augments BaseHelper
 * @property {CementHelper} cementHelper - cementHelper instance
 * @property {Logger} logger - logger instance
 */
class Delete extends BaseHelper {

  /**
   * Validates Context properties specific to this Helper
   * Validates Query Scenario Model fields
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
    const data = {
      nature: {
        type: 'dbInterface',
        quality: 'deleteOne',
      },
      payload: {
        type: this.dataType,
        id: context.data.payload.id,
      },
    };
    const output = this.cementHelper.createContext(data);
    output.on('done', (brickname, response) => {
      context.emit('done', this.cementHelper.brickName, response);
      if (response.scheduled) {
        this._unschedule(response.id);
      }
    });
    output.on('reject', function(brickname, error) {
      context.emit('reject', brickname, error);
    });
    output.on('error', function(brickname, error) {
      context.emit('error', brickname, error);
    });
    output.publish();
  }

  _unschedule(id) {
    const that = this;
    const data = {
      nature: {
        type: that.dataType,
        quality: 'schedule',
      },
      payload: {
        action: 'unschedule',
        id: id,
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

module.exports = Delete;
