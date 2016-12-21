'use strict';

const appRootPath = require('cta-common').root('cta-app-scenariodataservice');
const chai = require('chai');
const expect = chai.expect;
const mockrequire = require('mock-require');
const nodepath = require('path');
const sinon = require('sinon');

const Logger = require('cta-logger');
const Base = require(nodepath.join(appRootPath,
  '/lib/bricks/dbinterfaces/basedbinterface/', 'basehelper.js'));
const Helper = require(nodepath.join(appRootPath,
  '/lib/bricks/dbinterfaces/mongodbinterface/helpers/', 'base.js'));

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

describe('DatabaseInterfaces - MongoDB - Base - constructor', function() {
  context('when everything ok', function() {
    let helper;
    const mockSchemas = new Map();
    const schemasNames = {
      'scenarios.js': 'scenarios',
    };
    before(function() {
      // stubs all helpers available in the helpers directory
      const schemasDirectory = nodepath.join(appRootPath,
        '/lib/bricks/dbinterfaces/mongodbinterface/schemas');
      Object.keys(schemasNames).forEach(function(schemaFileName) {
        mockSchemas.set(schemaFileName, {
          MockConstructor: function() {
            return {
              ok: 1,
            };
          },
          path: nodepath.join(schemasDirectory, schemaFileName),
        });
        sinon.spy(mockSchemas.get(schemaFileName), 'MockConstructor');
        mockrequire(mockSchemas.get(schemaFileName).path,
          mockSchemas.get(schemaFileName).MockConstructor);
      });

      helper = new Helper(DEFAULTCEMENTHELPER, DEFAULTLOGGER);
    });

    it('should extend BaseHelper', function() {
      expect(Object.getPrototypeOf(Helper)).to.equal(Base);
    });

    it('should return a handler instance', function() {
      expect(helper).to.be.an.instanceof(Helper);
    });

    it('should add all Schemas in schemas porperty', function() {
      expect(helper).to.have.property('schemas');
      mockSchemas.forEach((value, key) => {
        const schemaName = schemasNames[key];
        expect(helper.schemas).to.have.property(schemaName, value.MockConstructor);
      });
    });
  });
});
