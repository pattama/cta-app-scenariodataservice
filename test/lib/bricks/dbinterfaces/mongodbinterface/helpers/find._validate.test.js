'use strict';

const appRootPath = require('cta-common').root('cta-app-scenariodataservice');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const nodepath = require('path');
const _ = require('lodash');

const Logger = require('cta-logger');
const Context = require('cta-flowcontrol').Context;
const Helper = require(nodepath.join(appRootPath,
  '/lib/bricks/dbinterfaces/mongodbinterface/helpers', 'find.js'));

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

describe('DatabaseInterfaces - MongoDB - Find - _validate', function() {
  let helper;
  const DEFAULTINPUTJOB = {
    nature: {
      type: 'dbInterface',
      quality: 'findById',
    },
    payload: {
      type: 'foobar',
      options: {
        limit: 10,
        offset: 0,
      },
      query: {
      },
    },
  };
  before(function() {
    helper = new Helper(DEFAULTCEMENTHELPER, DEFAULTLOGGER);
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

  context('when payload.type is not a String', function() {
    const job = _.cloneDeep(DEFAULTINPUTJOB);
    job.payload.type = {};
    const mockInputContext = new Context(DEFAULTCEMENTHELPER, job);
    it('should reject', function() {
      const validatePromise = helper._validate(mockInputContext);
      return expect(validatePromise).to.eventually
        .be.rejectedWith(Error, 'missing/incorrect \'type\' String in job payload');
    });
  });

  context('when payload.options is not an Object', function() {
    const job = _.cloneDeep(DEFAULTINPUTJOB);
    job.payload.options = '';
    const mockInputContext = new Context(DEFAULTCEMENTHELPER, job);
    it('should reject', function() {
      const validatePromise = helper._validate(mockInputContext);
      return expect(validatePromise).to.eventually
        .be.rejectedWith(Error, 'missing/incorrect \'options\' Object in job payload');
    });
  });

  context('when payload.options.limit is not a Number', function() {
    const job = _.cloneDeep(DEFAULTINPUTJOB);
    job.payload.options.limit = '';
    const mockInputContext = new Context(DEFAULTCEMENTHELPER, job);
    it('should reject', function() {
      const validatePromise = helper._validate(mockInputContext);
      return expect(validatePromise).to.eventually
        .be.rejectedWith(Error, 'missing/incorrect \'limit\' Number in job payload.options');
    });
  });

  context('when payload.options.sort is not an Object', function() {
    const job = _.cloneDeep(DEFAULTINPUTJOB);
    job.payload.options.sort = '';
    const mockInputContext = new Context(DEFAULTCEMENTHELPER, job);
    it('should reject', function() {
      const validatePromise = helper._validate(mockInputContext);
      return expect(validatePromise).to.eventually
        .be.rejectedWith(Error, 'incorrect \'sort\' Object in job payload.options');
    });
  });

  context('when payload.options.offset is not a Number', function() {
    const job = _.cloneDeep(DEFAULTINPUTJOB);
    job.payload.options.offset = '';
    const mockInputContext = new Context(DEFAULTCEMENTHELPER, job);
    it('should reject', function() {
      const validatePromise = helper._validate(mockInputContext);
      return expect(validatePromise).to.eventually
        .be.rejectedWith(Error, 'missing/incorrect \'offset\' Number in job payload.options');
    });
  });

  context.skip('when payload.query is not an Object', function() {
    const job = _.cloneDeep(DEFAULTINPUTJOB);
    job.payload.query = '';
    const mockInputContext = new Context(DEFAULTCEMENTHELPER, job);
    it('should reject', function() {
      const validatePromise = helper._validate(mockInputContext);
      return expect(validatePromise).to.eventually
        .be.rejectedWith(Error, 'missing/incorrect \'query\' Object in job payload');
    });
  });

  context.skip('when payload.query has an invalid parameter', function() {
    const job = _.cloneDeep(DEFAULTINPUTJOB);
    job.payload.query.scenarioId = 'plop';
    const mockInputContext = new Context(DEFAULTCEMENTHELPER, job);
    it('should reject', function() {
      const validatePromise = helper._validate(mockInputContext);
      return expect(validatePromise).to.eventually
        .be.rejectedWith(Error, 'incorrect \'scenarioId\' in job payload.query');
    });
  });
});
