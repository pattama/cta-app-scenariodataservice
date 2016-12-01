'use strict';

const appRootPath = require('cta-common').root('cta-app-scenariodataservice');
const mockrequire = require('mock-require');
const nodepath = require('path');
const sinon = require('sinon');

const Logger = require('cta-logger');
const Context = require('cta-flowcontrol').Context;
const pathToHelper = nodepath.join(appRootPath,
  '/lib/bricks/businesslogics/base/helpers/', 'findbyid.js');
const Helper = require(pathToHelper);

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
  executionApiUrl: 'http://localhost:3010/',
  schedulerApiUrl: 'http://localhost:3011/',
  jobManagerApiUrl: 'http://localhost:3012/',
};
const SAMPLE = require('./mockdata.testdata.js');

describe('BusinessLogics - Execution - FindById - _process', function() {
  let helper;
  context('when everything ok', function() {
    const inputJOB = {
      nature: {
        type: DEFAULTTYPE,
        quality: Helper.name.toLowerCase(),
      },
      payload: {
        id: SAMPLE.data.id,
      },
    };
    const mockInputContext = new Context(DEFAULTCEMENTHELPER, inputJOB);
    let findByIdContext;
    let findByIdJob;
    let mockData;
    before(function() {
      sinon.stub(mockInputContext, 'emit');

      mockData = SAMPLE.data;
      const mockDataModel = (function() {
        function Foobar() {
          return mockData;
        }
        return Foobar;
      }());
      const dataModelPath = nodepath.join(appRootPath,
        '/lib/utils/datamodels/', `${DEFAULTTYPE}.js`);
      mockrequire(dataModelPath, mockDataModel);
      helper = new Helper(DEFAULTCEMENTHELPER, DEFAULTLOGGER, DEFAULTTYPE, DEFAULTAPIURLS);

      findByIdJob = {
        nature: {
          type: 'dbInterface',
          quality: 'findById',
        },
        payload: {
          type: DEFAULTTYPE,
          id: inputJOB.payload.id,
        },
      };
      findByIdContext = new Context(DEFAULTCEMENTHELPER, findByIdJob);
      findByIdContext.publish = sinon.stub();

      sinon.stub(helper.cementHelper, 'createContext')
        .withArgs(findByIdJob)
        .returns(findByIdContext);
      helper._process(mockInputContext);
    });
    after(function() {
      helper.cementHelper.createContext.restore();
    });

    it('should send a new findByIdContext', function() {
      sinon.assert.calledWith(helper.cementHelper.createContext, findByIdJob);
      sinon.assert.called(findByIdContext.publish);
    });

    context('when findByIdContext emits done event', function() {
      before(function() {
        findByIdContext.emit('done', 'dblayer', mockData);
      });

      it('should emit done event on inputContext', function() {
        sinon.assert.calledWith(mockInputContext.emit,
          'done', helper.cementHelper.brickName, mockData);
      });
    });

    context('when outputContext emits reject event', function() {
      it('should emit reject event on inputContext', function() {
        const error = new Error('mockError');
        const brickName = 'dbInterface';
        findByIdContext.emit('reject', brickName, error);
        sinon.assert.calledWith(mockInputContext.emit,
          'reject', brickName, error);
      });
    });

    context('when outputContext emits error event', function() {
      it('should emit error event on inputContext', function() {
        const error = new Error('mockError');
        const brickName = 'dbInterface';
        findByIdContext.emit('error', brickName, error);
        sinon.assert.calledWith(mockInputContext.emit,
          'error', brickName, error);
      });
    });
  });
});
