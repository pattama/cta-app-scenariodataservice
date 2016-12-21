'use strict';

const BaseHelper = require('../../base/helpers/basehelper.js');
const validate = require('cta-common').validate;

/**
 * Business Logic Execution Helper FindById class
 *
 * @augments BaseHelper
 * @property {CementHelper} cementHelper - cementHelper instance
 * @property {Logger} logger - logger instance
 */
class Run extends BaseHelper {

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
    that.runScenario(context);
  }

  runScenario(context) {
    const that = this;
    const data = {
      nature: {
        type: 'dbInterface',
        quality: 'findById',
      },
      payload: {
        type: that.dataType,
        id: context.data.payload.id,
      },
    };
    const getScenarioContext = this.cementHelper.createContext(data);
    getScenarioContext.on('done', function(brickName, scenario) {
      that._publishScenario(context, scenario);
      // that._getTestSuite(context, scenario);
      // context.emit('done', that.cementHelper.brickName, response);
    });
    getScenarioContext.on('reject', function(brickName, error) {
      context.emit('reject', brickName, error);
    });
    getScenarioContext.on('error', function(brickName, error) {
      context.emit('error', brickName, error);
    });
    getScenarioContext.publish();
  }

/*  _getTestSuite(context, scenario) {
    const that = this;
    const data = {
      nature: {
        type: 'dbInterface',
        quality: 'findById',
      },
      payload: {
        type: 'testsuite',
        id: scenario.testSuiteId,
      },
    };
    const getTestSuiteContext = this.cementHelper.createContext(data);
    getTestSuiteContext.on('done', (brickName, testSuite) => {
      if (testSuite) {
        // scenario.testSuite = testSuite;
        that._getTests(context, testSuite);
      } else {
        context.emit('reject', brickName, `Test Suites ${scenario.testSuiteId} not found`);
      }
    });
    getTestSuiteContext.on('reject', (brickName, error) => {
      context.emit('reject', brickName, error);
    });
    getTestSuiteContext.on('error', function(brickName, error) {
      context.emit('error', brickName, error);
    });
    getTestSuiteContext.publish();
  }

  _getTests(context, testSuite) {
    const that = this;
    const data = {
      nature: {
        type: 'dbInterface',
        quality: 'find',
      },
      payload: {
        type: 'tests',
        query: {
          id: {
            $in: scenario.testSuite.tests,
          },
        },
      },
    };
    const getTestsContext = this.cementHelper.createContext(data);
    getTestsContext.on('done', function(brickName, tests) {
      // scenario.testSuite.tests = tests;
      // that._publishScenarioRun(context, scenario);
      context.emit('done', that.cementHelper.brickName, scenario);
    });
    getTestsContext.on('reject', function(brickName, error) {
      context.emit('reject', brickName, error);
    });
    getTestsContext.on('error', function(brickName, error) {
      context.emit('error', brickName, error);
    });
    getTestsContext.publish();
  } */

  _publishScenario(context, scenario) {
    const that = this;
    const scenarioContract = {
      nature: {
        type: 'scenarios',
        quality: 'run',
      },
      payload: {
        requestTimestamp: context.data.payload.requestTimestamp,
        scenario,
        configuration: scenario.configuration,
        user: context.data.payload.user,
        userId: context.data.payload.userId,
      },
    };

    const data = {
      nature: {
        type: 'message',
        quality: 'produce',
      },
      payload: scenarioContract,
    };
    const output = this.cementHelper.createContext(data);
    output.on('done', function(brickName, response) {
      context.emit('done', that.cementHelper.brickName, response);
    });
    output.on('reject', function(brickName, error) {
      context.emit('reject', brickName, error);
    });
    output.on('error', function(brickName, error) {
      context.emit('error', brickName, error);
    });
    output.publish();
  }
}

module.exports = Run;
