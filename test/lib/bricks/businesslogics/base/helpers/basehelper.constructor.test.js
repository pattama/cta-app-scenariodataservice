'use strict';

const appRootPath = require('cta-common').root('cta-app-scenariodataservice');
const chai = require('chai');
const expect = chai.expect;
const mockrequire = require('mock-require');
const nodepath = require('path');
const sinon = require('sinon');
const _ = require('lodash');

const Logger = require('cta-logger');
const Helper = require(nodepath.join(appRootPath,
  '/lib/bricks/businesslogics/base/helpers', 'basehelper.js'));

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
};
const DEFAULTTYPE = 'foobar';
const DEFAULTAPIURLS = {
  schedulerApiUrl: 'http://localhost:3011/sch/',
  scenarioApiUrl: 'http://localhost:3005/sds/',
};

describe('BusinessLogics - Base Helper - constructor', function() {
  context('when everything ok', function() {
    let helper;
    const mockDataModel = sinon.stub();
    before(function() {
      const dataModelPath = nodepath.join(appRootPath,
        '/lib/utils/datamodels/', `${DEFAULTTYPE}.js`);
      mockrequire(dataModelPath, mockDataModel);
      helper = new Helper(DEFAULTCEMENTHELPER, DEFAULTLOGGER, DEFAULTTYPE, DEFAULTAPIURLS);
    });
    it('should return a handler instance', function() {
      expect(helper).to.be.an.instanceof(Helper);
    });
    it('should have cementHelper property', function() {
      expect(helper).to.have.property('cementHelper', DEFAULTCEMENTHELPER);
    });
    it('should have DataModel property', function() {
      expect(helper).to.have.property('DataModel', mockDataModel);
    });
  });

  context('when missing \'cementHelper\' argument', function() {
    it('should throw an Error', function() {
      return expect(function() {
        return new Helper(null, DEFAULTLOGGER, DEFAULTTYPE, DEFAULTAPIURLS);
      }).to.throw(Error, 'missing/incorrect \'cementHelper\' CementHelper argument');
    });
  });

  context('when missing \'logger\' argument', function() {
    it('should throw an Error', function() {
      return expect(function() {
        return new Helper(DEFAULTCEMENTHELPER, null, DEFAULTTYPE, DEFAULTAPIURLS);
      }).to.throw(Error, 'missing/incorrect \'logger\' Logger argument');
    });
  });

  context('when missing \'dataType\' argument', function() {
    it('should throw an Error', function() {
      return expect(function() {
        return new Helper(DEFAULTCEMENTHELPER, DEFAULTLOGGER, null, DEFAULTAPIURLS);
      }).to.throw(Error, 'missing/incorrect \'dataType\' String argument');
    });
  });

  context('when missing/incorrect scenarioApiUrl', function() {
    const apiURLS = _.cloneDeep(DEFAULTAPIURLS);
    before(function() {
      delete apiURLS.scenarioApiUrl;
    });

    it('should throw an Error', function() {
      return expect(function() {
        return new Helper(DEFAULTCEMENTHELPER, DEFAULTLOGGER, DEFAULTTYPE, apiURLS);
      }).to.throw(Error,
        'missing/incorrect \'scenarioApiUrl\' string in application global properties');
    });
  });

  context('when missing/incorrect schedulerApiUrl', function() {
    const apiURLS = _.cloneDeep(DEFAULTAPIURLS);
    before(function() {
      delete apiURLS.schedulerApiUrl;
    });

    it('should throw an Error', function() {
      return expect(function() {
        return new Helper(DEFAULTCEMENTHELPER, DEFAULTLOGGER, DEFAULTTYPE, apiURLS);
      }).to.throw(Error,
        'missing/incorrect \'schedulerApiUrl\' string in application global properties');
    });
  });
});
