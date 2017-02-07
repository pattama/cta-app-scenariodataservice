'use strict';

const appRootPath = process.cwd();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const mockrequire = require('mock-require');
const ObjectID = require('bson').ObjectID;
const sinon = require('sinon');
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
  let helper;
  before(() => {
    const dataModelPath = nodepath.join(appRootPath,
      '/lib/utils/datamodels/', `${DEFAULTTYPE}.js`);
    mockrequire(dataModelPath, sinon.stub());
    helper = new Helper(DEFAULTCEMENTHELPER, DEFAULTLOGGER, DEFAULTTYPE, DEFAULTAPIURLS);
  });

  context('when payload is valid', () => {
    context('action is initial', () => {

      const initial = {
        nature: {
          type: DEFAULTTYPE,
          quality: 'schedule',
        },
        payload: {
          action: 'initial',
        },
      };

      const mockInputContext = new Context(DEFAULTCEMENTHELPER, initial);
      let promise;
      before(() => {
        promise = helper._validate(mockInputContext);
      });

      it('should resolve with ok', function() {
        return expect(promise).to.eventually.have.property('ok', 1);
      });
    });


    context('action is schedule with an id', () => {
      const schedule = {
        nature: {
          type: DEFAULTTYPE,
          quality: 'schedule',
        },
        payload: {
          action: 'schedule',
          id: new ObjectID().toString(),
        },
      };

      const mockInputContext = new Context(DEFAULTCEMENTHELPER, schedule);
      let promise;
      before(() => {
        promise = helper._validate(mockInputContext);
      });

      it('should resolve with ok', function() {
        return expect(promise).to.eventually.have.property('ok', 1);
      });
    });

  });

  context('when payload is invalid', () => {
    context('when action is incorrect', () => {
      const foo = {
        nature: {
          type: DEFAULTTYPE,
          quality: 'schedule',
        },
        payload: {
          action: 'foo',
        },
      };

      const mockInputContext = new Context(DEFAULTCEMENTHELPER, foo);
      let promise;
      before(() => {
        promise = helper._validate(mockInputContext);
      });

      it('should reject with error', () => {
        return expect(promise).to.eventually
          .be.rejectedWith(Error, `missing/incorrect \'action: ${foo.payload.action}\' in job payload `);

      })
    })


    context('when id is missing', () => {
      const foo = {
        nature: {
          type: DEFAULTTYPE,
          quality: 'schedule',
        },
        payload: {
          action: 'schedule',
        },
      };

      const mockInputContext = new Context(DEFAULTCEMENTHELPER, foo);
      let promise;
      before(() => {
        promise = helper._validate(mockInputContext);
      });

      it('should reject with error', () => {
        return expect(promise).to.eventually
          .be.rejectedWith(Error, 'missing/incorrect \'id\' String value of ObjectID in job payload');

      })
    })

  })
});
