'use strict';

const appRootPath = require('cta-common').root('cta-app-scenariodataservice');
const chai = require('chai');
const expect = chai.expect;
const nodepath = require('path');
const _ = require('lodash');
const ObjectID = require('bson').ObjectID;

const Model = require(nodepath.join(appRootPath,
  '/lib/utils/datamodels', 'scenarios.js'));
const Schema = require(nodepath.join(appRootPath,
  '/lib/bricks/dbinterfaces/mongodbinterface/schemas', 'scenarios.js'));


describe('DatabaseInterfaces - MongoDB - Schema - Scenario', function() {
  describe('constructor', function() {
    const data = {
      id: (new ObjectID()).toString(),
      testSuiteId: (new ObjectID()).toString(),
      pendingTimeout: 1000,
      runningTimeout: 1000,
      scheduled: true,
    };
    const ctaObject = new Model(data);
    it('should return an ExecutionSchema', function() {
      const schemaObject = new Schema(ctaObject);
      expect(schemaObject.id).to.not.exist; // eslint-disable-line no-unused-expressions
      expect(schemaObject._id).to.be.an.instanceof(ObjectID);
      expect(schemaObject._id.toString()).to.equal(ctaObject.id);
      expect(schemaObject.testSuiteId).to.be.an.instanceof(ObjectID);
      expect(schemaObject.testSuiteId.toString()).to.equal(ctaObject.testSuiteId);
      expect(schemaObject.pendingTimeout).to.equal(ctaObject.pendingTimeout);
      expect(schemaObject.runningTimeout).to.equal(ctaObject.runningTimeout);
      expect(schemaObject.scheduled).to.equal(ctaObject.scheduled);
    });
  });

  describe('toCTAData', function() {
    const mongodbDoc = {
      _id: (new ObjectID()),
      testSuiteId: (new ObjectID()),
      pendingTimeout: 1000,
      runningTimeout: 1000,
      scheduled: true,
    };
    it('should return an Execution', function() {
      const object = Schema.toCTAData(mongodbDoc);
      expect(object).to.be.an.instanceof(Model);
      expect(object._id).to.not.exist; // eslint-disable-line no-unused-expressions
      expect(object.id).to.equal(mongodbDoc._id.toString());
      expect(object.testSuiteId).to.equal(mongodbDoc.testSuiteId.toString());
      expect(object.pendingTimeout).to.equal(mongodbDoc.pendingTimeout);
      expect(object.runningTimeout).to.equal(mongodbDoc.runningTimeout);
      expect(object.scheduled).to.equal(mongodbDoc.scheduled);
    });
  });

  describe('dataQueryKeys', function() {
    it('should return Model QueryKeys', function() {
      const modelQueryKeys = Model.queryKeys();
      const schemaQueryKeys = Schema.dataQueryKeys();
      expect(_.isEqual(modelQueryKeys, schemaQueryKeys)).to.be.equal(true);
    });
  });
});
