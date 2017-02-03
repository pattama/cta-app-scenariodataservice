'use strict';

const sinon = require('sinon');

const DataModel = require('../../../../../lib/utils/datamodels/configuration.js');


describe('Utils - datamodels - cofiguration', () => {
  let datamodel;
  context('when construct the data model', () => {
    context('when data contains id', () => {
      const data = { id: 'cofiguration' };
      before(() => {
        datamodel = new DataModel(data);
      });

      it('should filter out the passing id', () => {
        sinon.assert.match('id' in datamodel, false);
      });
    });

    context('when id is missing auto generate id is suppress', () => {
      const data = { name: 'toto' };
      before(() => {
        datamodel = new DataModel(data);
      });

      it('should generate new id', () => {
        sinon.assert.match('id' in datamodel, false);
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

    context('when data contains the convertible fields as string', () => {
      const data = { targetMode: 'cloud', toto: 'abc', properties: [{ name: 'super' }] };
      before(() => {
        datamodel = new DataModel(data, false);
      });

      it('should convert string of boolean to boolean', () => {
        sinon.assert.match(typeof datamodel.targetMode, 'string');
      });

      it('should maintain type object', () => {
        sinon.assert.match(Array.isArray(datamodel.properties), true);
        sinon.assert.match(typeof datamodel.properties[0].name, 'string');
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
