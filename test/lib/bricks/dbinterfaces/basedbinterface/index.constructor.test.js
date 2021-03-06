'use strict';

const appRootPath = require('cta-common').root('cta-app-scenariodataservice');
const chai = require('chai');
const expect = chai.expect;
const nodepath = require('path');

const Brick = require('cta-brick');
const Logger = require('cta-logger');
const Interface = require(nodepath.join(appRootPath,
  '/lib/bricks/dbinterfaces/basedbinterface/', 'index.js'));

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
};

describe('DatabaseInterfaces - BaseDBInterface - constructor', function() {
  context('when everything ok', function() {
    let dbInterface;
    before(function() {
      dbInterface = new Interface(DEFAULTCEMENTHELPER, DEFAULTCONFIG);
    });

    after(function() {
    });

    it('should extend Brick', function() {
      expect(Object.getPrototypeOf(Interface)).to.equal(Brick);
    });

    it('should return a Logic object', function() {
      expect(dbInterface).to.be.an.instanceof(Interface);
      expect(dbInterface).to.have.property('helpers').and.to.be.a('Map');
    });
  });
});
