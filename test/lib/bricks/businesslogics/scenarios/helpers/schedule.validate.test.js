'use strict';

const appRootPath = process.cwd();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const ObjectID = require('bson').ObjectID;
const nodepath = require('path');

const Logger = require('cta-logger');
const Context = require('cta-flowcontrol').Context;
const Helper = require(nodepath.join(appRootPath,
  '/lib/bricks/businesslogics/scenarios/helpers', 'schedule.js'));

const DEFAULTCONFIG = require('../index.config.testdata.js');
const DEFAULTLOGGER = new Logger(null, null, DEFAULTCONFIG.name);
const DEFAULTTYPE = 'foobar';
const DEFAULTAPIURLS = {
  schedulerApiUrl: 'http://localhost:3011/sch/',
  scenarioApiUrl: 'http://localhost:3005/sds/',
};
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


/**
 * Test schedule in scenarios helper _validation function
 * It should accept a context with
 * id
 * action in ['initial', 'schedule', 'unschedule']
 */

describe('Validate in scenarios schedule helper', () => {
  const mockId = new ObjectID();
  let helper;
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

  before(() => {
    helper = new Helper(DEFAULTCEMENTHELPER, DEFAULTLOGGER, DEFAULTTYPE, DEFAULTAPIURLS);
  });

  context('when payload is valid', () => {
    const mockInputContext = new Context(DEFAULTCEMENTHELPER, DEFAULTINPUTJOB);
    let promise;
    before(() => {
      promise = helper._validate(mockInputContext);
    });

    it('should resolve with ok', function() {
      return expect(promise).to.eventually.have.property('ok', 1);
    });
  });
});
