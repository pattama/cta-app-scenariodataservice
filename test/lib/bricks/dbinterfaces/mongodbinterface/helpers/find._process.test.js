'use strict';

const appRootPath = require('cta-common').root('cta-app-scenariodataservice');
const sinon = require('sinon');
const ObjectID = require('bson').ObjectID;
const nodepath = require('path');

const Logger = require('cta-logger');
const Context = require('cta-flowcontrol').Context;
const pathToHelper = nodepath.join(appRootPath,
  '/lib/bricks/dbinterfaces/mongodbinterface/helpers/', 'find.js');
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

describe('DatabaseInterfaces - MongoDB - Find - _process', function() {
  let helper;
  const mockId = new ObjectID();
  const inputJOB = {
    nature: {
      type: 'dbInterface',
      quality: 'findById',
    },
    payload: {
      type: 'foobar',
      options: {
        limit: 10,
        offset: 0,
        sort: {
          requestTimestamp: -1,
          resultsCount: 1,
        },
      },
      query: {
        fooId: mockId.toString(),
      },
    },
  };
  const expectedSchemaQuery = {
    fooId: inputJOB.payload.query.fooId,
  };
  const mockInputContext = new Context(DEFAULTCEMENTHELPER, inputJOB);
  before(function() {
    helper = new Helper(DEFAULTCEMENTHELPER, DEFAULTLOGGER);
    helper.schemas[inputJOB.payload.type] = (function() {
      function Foobar() {
        return expectedSchemaQuery;
      }
      return Foobar;
    }());
    helper.schemas[inputJOB.payload.type].toCTAData = sinon.stub();
    helper.schemas[inputJOB.payload.type].dataQueryKeys = sinon.stub();
  });
  context('when everything ok', function() {
    let mockOutputContext;
    let outputJOB;
    before(function() {
      sinon.stub(mockInputContext, 'emit');

      outputJOB = {
        nature: {
          type: 'database',
          quality: 'query',
        },
        payload: {
          collection: inputJOB.payload.type,
          action: 'find',
          args: [
            expectedSchemaQuery,
            {
              limit: inputJOB.payload.options.limit,
              skip: inputJOB.payload.options.offset,
              sort: inputJOB.payload.options.sort,
            },
          ],
        },
      };
      mockOutputContext = new Context(DEFAULTCEMENTHELPER, outputJOB);
      mockOutputContext.publish = sinon.stub();
      sinon.stub(helper.cementHelper, 'createContext')
        // .withArgs(outputJOB)
        .returns(mockOutputContext);
      helper._process(mockInputContext);
    });
    after(function() {
      helper.cementHelper.createContext.restore();
    });
    it('should send a new Context', function() {
      sinon.assert.calledWith(helper.cementHelper.createContext, outputJOB);
      sinon.assert.called(mockOutputContext.publish);
    });

    context('when outputContext emits done event', function() {
      context('when response Array is not empty', function() {
        it('should emit done event on inputContext', function() {
          // mongodoc
          const doc = {
            fooId: mockId,
            bar: 'bar',
          };
          const response = [doc];

          mockOutputContext.emit('done', 'dblayer', response);
          sinon.assert.calledWith(mockInputContext.emit,
            'done', helper.cementHelper.brickName);
        });
      });
    });

    context('when outputContext emits reject event', function() {
      it('should emit reject event on inputContext', function() {
        const error = new Error('mockError');
        const brickName = 'dblayer';
        mockOutputContext.emit('reject', brickName, error);
        sinon.assert.calledWith(mockInputContext.emit,
          'reject', brickName, error);
      });
    });

    context('when outputContext emits error event', function() {
      it('should emit error event on inputContext', function() {
        const error = new Error('mockError');
        const brickName = 'dblayer';
        mockOutputContext.emit('error', brickName, error);
        sinon.assert.calledWith(mockInputContext.emit,
          'error', brickName, error);
      });
    });
  });
});
