'use strict';
const appRootPath = require('app-root-path').path;
const sinon = require('sinon');
const _ = require('lodash');
const nodepath = require('path');
const EventEmitter = require('events');
const Logger = require('cta-logger');

const Handler = require(nodepath.join(appRootPath, '/lib/utils/restapi/handlers/', 'scenarios.js'));

const DEFAULTLOGGER = new Logger();
const DEFAULTCEMENTHELPER = {
  constructor: {
    name: 'CementHelper',
  },
  brickName: 'restapi',
  logger: DEFAULTLOGGER,
  dependencies: {
  },
  createContext: () => {},
};
const SCENARIO = require('./scenarios.create.test.data.json');

describe('Utils - RESTAPI - Handlers - Scenarios - create', () => {
  let handler;
  before(() => {
    handler = new Handler(DEFAULTCEMENTHELPER);
  });
  context('when everything ok', () => {
    const req = {};
    const res = {
      status() {
        return this;
      },
      send() {},
    };
    let data;
    let mockContext;
    before(() => {
      req.method = 'POST';
      req.params = {};
      req.body = _.cloneDeep(SCENARIO);
      data = {
        nature: {
          type: 'scenario',
          quality: 'create',
        },
        payload: req.body,
      };
      mockContext = new EventEmitter();
      mockContext.publish = sinon.stub();
      sinon.stub(handler.cementHelper, 'createContext')
        .withArgs(data)
        .returns(mockContext);
    });
    after(() => {
      handler.cementHelper.createContext.restore();
    });
    it('should publish a new Context', () => {
      handler.create(req, res, null);
      sinon.assert.calledWith(handler.cementHelper.createContext, data);
      sinon.assert.called(mockContext.publish);
    });

    context('when Context emits done event', () => {
      before(() => {
        sinon.spy(res, 'status');
        sinon.spy(res, 'send');
        handler.create(req, res, null);
      });
      after(() => {
        res.status.restore();
        res.send.restore();
      });
      it('should send the response (res.send())', () => {
        const mockBrickname = 'businesslogic';
        const response = { ok: 1 };
        mockContext.emit('done', mockBrickname, response);
        sinon.assert.calledWith(res.status, 201);
        sinon.assert.calledWith(res.send, response);
      });
    });

    context('when Context emits error event', () => {
      before(() => {
        sinon.spy(res, 'status');
        sinon.spy(res, 'send');
        handler.create(req, res, null);
      });
      after(() => {
        res.status.restore();
        res.send.restore();
      });
      it('should send the error message', () => {
        const error = new Error('mockError');
        const mockBrickname = 'businesslogic';
        mockContext.emit('error', mockBrickname, error);
        sinon.assert.calledWith(res.status, 400);
        sinon.assert.calledWith(res.send, error.message);
      });
    });

    context('when Context emits reject event', () => {
      before(() => {
        sinon.spy(res, 'status');
        sinon.spy(res, 'send');
        handler.create(req, res, null);
      });
      after(() => {
        res.status.restore();
        res.send.restore();
      });
      it('should send the error message', () => {
        const error = new Error('mockError');
        const mockBrickname = 'businesslogic';
        mockContext.emit('reject', mockBrickname, error);
        sinon.assert.calledWith(res.status, 400);
        sinon.assert.calledWith(res.send, error.message);
      });
    });
  });

  context('when method is PUT and id is not provided', () => {
    context('when id is provided', () => {
      const req = {};
      const res = {
        status() {
          return this;
        },
        send() {},
      };
      let data;
      let mockContext;
      before(() => {
        req.method = 'PUT';
        req.params = {
          id: 'foobar',
        };
        req.body = _.cloneDeep(SCENARIO);
        data = {
          nature: {
            type: 'scenario',
            quality: 'create',
          },
          payload: req.body,
        };
        data.payload.id = req.params.id;
        mockContext = new EventEmitter();
        mockContext.publish = sinon.stub();
        sinon.stub(handler.cementHelper, 'createContext')
          .withArgs(data)
          .returns(mockContext);
      });
      after(() => {
        handler.cementHelper.createContext.restore();
      });
      it('should publish a new Context', () => {
        handler.create(req, res, null);
        sinon.assert.calledWith(handler.cementHelper.createContext, data);
        sinon.assert.called(mockContext.publish);
      });
    });

    context('when id is not provided', () => {
      const req = {};
      const res = {
        status() {
          return this;
        },
        send() {},
      };
      let data;
      let mockContext;
      before(() => {
        req.method = 'PUT';
        req.body = _.cloneDeep(SCENARIO);
        req.params = {};
        data = {
          nature: {
            type: 'scenario',
            quality: 'create',
          },
          payload: req.body,
        };
        mockContext = new EventEmitter();
        mockContext.publish = sinon.stub();
        sinon.stub(handler.cementHelper, 'createContext')
          .withArgs(data)
          .returns(mockContext);
      });
      after(() => {
        handler.cementHelper.createContext.restore();
      });
      it('should generate an id as string and publish a new Context', () => {
        handler.create(req, res, null);
        sinon.assert.match(typeof data.payload.id, 'string');
        sinon.assert.calledWith(handler.cementHelper.createContext, data);
        sinon.assert.called(mockContext.publish);
      });
    });
  });
});
