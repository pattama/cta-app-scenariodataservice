'use strict';

const sinon = require('sinon');

const DataModel = require('../../../../../lib/utils/datamodels/repository.js');


describe('Utils - datamodels - testsuite', () => {
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
