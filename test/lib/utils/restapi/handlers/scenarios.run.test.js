'use strict';

const sinon = require('sinon');
const ObjectID = require('bson').ObjectID;
const EventEmitter = require('events');

const Handler = require('../../../../../lib/utils/restapi/handlers/scenarios.js');

const DEFAULTCEMENTHELPER = {
  constructor: {
    name: 'CementHelper',
  },
  brickName: 'restapi',
  createContext() {},
};

describe('Utils - RESTAPI - Handlers - Scenarios - run', () => {
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
      req.params = {
        id: (new ObjectID()).toString(),
      };
      req.headers = {
        userId: (new ObjectID()).toString(),
        timeStamp: new Date().getTime(),
      };
      data = {
        nature: {
          type: 'scenarios',
          quality: 'run',
        },
        payload: {
          id: req.params.id,
          requestTimestamp: req.headers.timeStamp,
          userId: req.headers.userId,
        },
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
    it('should send a new Context', () => {
      handler.run(req, res, null);
      sinon.assert.calledWith(handler.cementHelper.createContext, data);
      sinon.assert.called(mockContext.publish);
    });

    context('when Context emits done event', () => {
      context('when document is found', () => {
        before(() => {
          sinon.spy(res, 'send');
          handler.run(req, res, null);
        });
        after(() => {
          res.send.restore();
        });
        it('should send the found Object (res.send())', () => {
          const mockBrickname = 'businesslogic';
          const response = { id: req.params.id };
          mockContext.emit('done', mockBrickname, response);
          sinon.assert.calledWith(res.send, response);
        });
      });

      context('when document is not found', () => {
        before(() => {
          sinon.spy(res, 'status');
          sinon.spy(res, 'send');
          handler.run(req, res, null);
        });
        after(() => {
          res.status.restore();
          res.send.restore();
        });
        it('should send 404', () => {
          const mockBrickname = 'businesslogic';
          const response = null;
          mockContext.emit('done', mockBrickname, response);
          sinon.assert.calledWith(res.status, 404);
          sinon.assert.calledWith(res.send, `scenarios '${req.params.id}' not found.`);
        });
      });
    });

    context('when Context emits error event', () => {
      before(() => {
        sinon.spy(res, 'status');
        sinon.spy(res, 'send');
        handler.run(req, res, null);
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
        handler.run(req, res, null);
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
});
