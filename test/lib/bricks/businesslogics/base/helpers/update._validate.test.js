'use strict';

const appRootPath = require('cta-common').root('cta-app-scenariodataservice');
const chai = require('chai');
const expect = chai.expect;
const mockrequire = require('mock-require');
const nodepath = require('path');
const ObjectID = require('bson').ObjectID;
const sinon = require('sinon');
const _ = require('lodash');

const Logger = require('cta-logger');
const Context = require('cta-flowcontrol').Context;
const Helper = require(nodepath.join(appRootPath,
  '/lib/bricks/businesslogics/base/helpers', 'update.js'));

const DEFAULTCONFIG = require('../index.config.testdata.js');
const DEFAULTLOGGER = new Logger(null, null, DEFAULTCONFIG.name);
const DEFAULTCEMENTHELPER = {
  constructor: {
    name: 'CementHelper',
  },
  brickName: DEFAULTCONFIG.name,
  dependencies: {
    logger: DEFAULTLOGGER,
  },
  createContext: function() {},
};
const DEFAULTTYPE = 'foobar';
const DEFAULTAPIURLS = {
  schedulerApiUrl: 'http://localhost:3011/sch/',
  scenarioApiUrl: 'http://localhost:3005/sds/',
};
const SAMPLE = require('./mockdata.testdata.js');

describe('BusinessLogics - Execution - Update - _validate', function() {
  let helper;
  const mockId = new ObjectID();
  const DEFAULTINPUTJOB = {
    nature: {
      type: DEFAULTTYPE,
      quality: 'update',
    },
    payload: {
      id: mockId.toString(),
      bar: 'barupdated',
    },
  };
  const mockDataModel = (function() {
    function Foobar() {
      return {};
    }
    return Foobar;
  }());
  mockDataModel.queryKeys = sinon.stub().returns(SAMPLE.queryKeys);
  before(function() {
    const dataModelPath = nodepath.join(appRootPath,
      '/lib/utils/datamodels/', `${DEFAULTTYPE}.js`);
    mockrequire(dataModelPath, mockDataModel);
    helper = new Helper(DEFAULTCEMENTHELPER, DEFAULTLOGGER, DEFAULTTYPE, DEFAULTAPIURLS);
  });
  context('when everything ok', function() {
    const mockInputContext = new Context(DEFAULTCEMENTHELPER, DEFAULTINPUTJOB);
    let promise;
    before(function() {
      promise = helper._validate(mockInputContext);
    });
    after(function() {
    });
    it('should resolve', function() {
      return expect(promise).to.eventually.have.property('ok', 1);
    });
  });

  context('when payload is not an object', function() {
    const job = _.cloneDeep(DEFAULTINPUTJOB);
    job.payload = 'not-an-object';
    const mockInputContext = new Context(DEFAULTCEMENTHELPER, job);
    it('should reject', function() {
      const validatePromise = helper._validate(mockInputContext);
      return expect(validatePromise).to.eventually.be.rejected;
    });
  });

  context('when payload has an invalid argument', function() {
    const job = _.cloneDeep(DEFAULTINPUTJOB);
    job.payload.bar = {};
    const mockInputContext = new Context(DEFAULTCEMENTHELPER, job);
    it('should reject', function() {
      const validatePromise = helper._validate(mockInputContext);
      return expect(validatePromise).to.eventually.be.rejected;
    });
  });
});
