'use strict';

const appRootPath = process.cwd();
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const nodepath = require('path');
const Logger = require('cta-logger');
const EventEmitter = require('events');
const logicPath = nodepath.join(appRootPath,
  '/lib/bricks/businesslogics/scenarios/', 'index.js');
const Logic = require(logicPath);
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

chai.use(chaiAsPromised);

describe('BusinessLogics - Schedule - setup schedules', function() {
  let logic;
  before(() => {
    logic = new Logic(DEFAULTCEMENTHELPER, DEFAULTCONFIG);
  });

  context('when everything ok', () => {
    let data;
    let mockContext;
    before(() => {
      // action can be _initial|schedule|unschedule
      data = {
        nature: {
          type: 'scenarios',
          quality: 'schedule',
        },
        payload: {
          action: '_initial',
        },
      };

      mockContext = new EventEmitter();
      mockContext.publish = sinon.stub();
      sinon.stub(logic.cementHelper, 'createContext')
        .withArgs(data)
        .returns(mockContext);
    });

    after(() => {
      logic.cementHelper.createContext.restore();
    });

    it('should publish a context', () => {
      logic.setupSchedules();
      sinon.assert.calledWith(logic.cementHelper.createContext, data);
      sinon.assert.called(mockContext.publish);
    });

    context('when context emits a done event', () => {
      it('should resolve with a response information', () => {
        const response = 5;
        const promise = logic.setupSchedules();
        mockContext.emit('done', 'subscriber', response);
        return expect(promise).to.eventually.equal(response);
      });
    });

    context('when context emits an reject event', () => {
      it('should reject with an reject information', () => {
        const returnCode = 105;
        const response = 'invalid';
        const brickName = 'subscriber';
        const reject = {
          returnCode,
          response,
        };
        const promise = logic.setupSchedules();
        mockContext.emit('reject', brickName, reject);
        return expect(promise).to.be.rejectedWith({ returnCode, response, brickName });
      });
    });

    context('when context emits an error event', () => {
      it('should reject with a error information', () => {
        const promise = logic.setupSchedules();
        const error = new Error('error');
        const bricName = 'subscriber';
        mockContext.emit('error', bricName, error);
        return expect(promise).to.be.rejectedWith(error);
      });
    });
  });
});
