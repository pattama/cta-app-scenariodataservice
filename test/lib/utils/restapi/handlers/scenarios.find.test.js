'use strict';

const sinon = require('sinon');
const EventEmitter = require('events');

const Handler = require('../../../../../lib/utils/restapi/handlers/scenarios.js');

const DEFAULTCEMENTHELPER = {
  constructor: {
    name: 'CementHelper',
  },
  brickName: 'restapi',
  dependencies: {
  },
  createContext() {},
};

describe('Utils - RESTAPI - Handlers - Scenarions - find', () => {
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
      req.query = {
        name: 'scenarios.find.test.data',
      };

      const defaultFilter = {
        limit: 20,
        offset: 0,
      };

      const query = { name: 'scenarios.find.test.data' };

      data = {
        nature: {
          type: 'scenario',
          quality: 'find',
        },
        payload: {
          filter: defaultFilter,
          query,
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
      handler.find(req, res, null);
      sinon.assert.calledWith(handler.cementHelper.createContext, data);
      sinon.assert.called(mockContext.publish);
    });

    context('when Context emits done event', () => {
      context('when document is found', () => {
        before(() => {
          sinon.spy(res, 'send');
          handler.find(req, res, null);
        });
        after(() => {
          res.send.restore();
        });
        it('should send the found Object (res.send())', () => {
          const mockBrickname = 'businesslogic';
          const response = {};
          mockContext.emit('done', mockBrickname, response);
          sinon.assert.calledWith(res.send, response);
        });
      });
    });

    context('when Context emits error event', () => {
      before(() => {
        sinon.spy(res, 'status');
        sinon.spy(res, 'send');
        handler.find(req, res, null);
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
        handler.find(req, res, null);
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

  context('when find with the projection specifies', () => {
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
      req.query = {
        limit: 10,
        offset: 5,
        sort: '-updateTimestamp,name',
        name: 'scenarios.update.test.data',
      };
      const filter = {
        limit: parseInt(req.query.limit, 10),
        offset: parseInt(req.query.offset, 0),
        sort: {
          updateTimestamp: -1,
          name: 1,
        },
      };

      const query = { name: 'scenarios.update.test.data' };

      data = {
        nature: {
          type: 'scenario',
          quality: 'find',
        },
        payload: {
          filter,
          query,
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
    it('should send a new Context with right projection and query', () => {
      handler.find(req, res, null);
      sinon.assert.calledWith(handler.cementHelper.createContext, data);
      sinon.assert.called(mockContext.publish);
    });
  });
});
