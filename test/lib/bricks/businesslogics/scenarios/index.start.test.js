'use strict';

const appRootPath = process.cwd();
const sinon = require('sinon');
const nodepath = require('path');
const Logger = require('cta-logger');
const logicPath = nodepath.join(appRootPath,
  '/lib/bricks/businesslogics/scenarios/', 'index.js');
const DEFAULTCONFIG = require('./index.config.testdata.js');
const DEFAULTLOGGER = new Logger(null, null, DEFAULTCONFIG.name);
const DEFAULTCEMENTHELPER = {
  constructor: {
    name: 'CementHelper',
  },
  brickName: DEFAULTCONFIG.name,
  dependencies: {
    logger: DEFAULTLOGGER,
  },
  cement: {
    configuration: {
      properties: {
        uid: '587c9be41466b02983630ff5',
      },
    },
  },
  createContext() {},
};

describe('BusinessLogics - Schedule - start', function() {
  let logic;
  let stubSetupSchedules;
  let spyLoggerError;
  const scheduledScenario = ['scenario'];

  before(function() {
    // eslint-disable-next-line global-require
    const Logic = require(logicPath);
    logic = new Logic(DEFAULTCEMENTHELPER, DEFAULTCONFIG);

    spyLoggerError = sinon.spy(logic.logger, 'error');
    stubSetupSchedules = sinon.stub(logic, 'setupSchedules');
  });

  afterEach(function() {
    stubSetupSchedules.reset();
  });

  context('when everything ok', function() {
    it('should call to setup scheduled scenarios', () => {
      stubSetupSchedules.returns(Promise.resolve(scheduledScenario));
      return logic.start().then(() => {
        sinon.assert.calledOnce(stubSetupSchedules);
      });
    });
  });

  context('when setup scheduled reject with information', function() {
    it('should log information', () => {
      const reject = {
        returnCode: 'reject',
        brickName: 'foo',
        response: 'reject',
      };
      stubSetupSchedules.returns(Promise.reject(reject));
      return logic.start().then(() => {
        sinon.assert.calledOnce(stubSetupSchedules);
        sinon.assert.calledWith(spyLoggerError, `Cannot setup scheduled scenarios. ${reject.returnCode}:` +
          `${reject.brickName} ${reject.response}`);
      });
    });
  });

  context('when setup scheduled reject with information', function() {
    it('should log information', () => {
      const error = new Error('foo');
      stubSetupSchedules.returns(Promise.reject(error));
      return logic.start().then(() => {
        sinon.assert.calledOnce(stubSetupSchedules);
        sinon.assert.calledWith(spyLoggerError, `Cannot setup scheduled scenarios. ${error}`);
      });
    });
  });
});
