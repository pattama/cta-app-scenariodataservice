'use strict';

const ObjectID = require('bson').ObjectID;

const data = {
  id: (new ObjectID()).toString(),
  bar: 'bar',
  baz: 9,
  qux: 10,
};

const keys = {
  id: { type: 'identifier' },
  bar: { type: 'string', optional: true },
  baz: { type: 'number', optional: true },
  qux: { type: 'number', optional: true },
};

const queryKeys = {
  id: { type: 'identifier', optional: true },
  bar: { type: 'string', optional: true },
  baz: { type: 'number', optional: true },
  qux: { type: 'number', optional: true },
};

module.exports = {
  data: data,
  keys: keys,
  queryKeys: queryKeys,
};
