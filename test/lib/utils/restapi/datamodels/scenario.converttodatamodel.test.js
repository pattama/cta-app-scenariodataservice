'use strict';

const sinon = require('sinon');

const DataModel = require('../../../../../lib/utils/datamodels/scenarios.js');


describe('Utils - datamodels - scenario', () => {
  let datamodel;
  context('when construct the data model', () => {
    context('when data contains id', () => {
      const data = { id: 'test' };
      before(() => {
        datamodel = new DataModel(data);
      });

      it('should use the passing id', () => {
        sinon.assert.match(datamodel, data);
      });
    });

    context('when id is missing and use default auto generate id constructor', () => {
      const data = { name: 'toto' };
      before(() => {
        datamodel = new DataModel(data);
      });

      it('should generate new id', () => {
        sinon.assert.match('id' in datamodel, true);
      });
    });

    context('when id is missing and auto generate id is it turn off', () => {
      const data = { name: 'toto' };
      before(() => {
        datamodel = new DataModel(data, false);
      });

      it('should not generate new id', () => {
        sinon.assert.match('id' in datamodel, false);
      });
    });

    context('when data contains the convertible fields', () => {
      const data = { scheduled: 'true', pendingTimeout: '15', configuration: { targetMode: 'cloud', toto: 'abc', properties: [{ name: 'super' }] } };
      before(() => {
        datamodel = new DataModel(data, false);
      });

      it('should convert string of boolean to boolean', () => {
        sinon.assert.match(typeof datamodel.scheduled, 'boolean');
      });

      it('should convert string of number to number', () => {
        sinon.assert.match(typeof datamodel.pendingTimeout, 'number');
      });

      it('should convert type object with datamodel to datamodel', () => {
        sinon.assert.match(typeof datamodel.configuration, 'object');
        sinon.assert.match(typeof datamodel.configuration.targetMode, 'string');
      });

      it('should maintain type object', () => {
        sinon.assert.match(Array.isArray(datamodel.configuration.properties), true);
        sinon.assert.match(typeof datamodel.configuration.properties[0].name, 'string');
      });
    });

    context('when data contains non datamodel fields', () => {
      const data = { name: 'test', toto: 'true', tutu: '15' };
      before(() => {
        datamodel = new DataModel(data, false);
      });

      it('should filter out the non datamodel fields', () => {
        sinon.assert.match('name' in datamodel, true);
        sinon.assert.match('toto' in datamodel, false);
        sinon.assert.match('tutu' in datamodel, false);
      });
    });
  });
});
