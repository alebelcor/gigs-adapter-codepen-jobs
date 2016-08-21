'use strict';

import test from 'ava';
import getTerm from '../lib/get-term';

test('it should return null when unknown value', t => {
  t.deepEqual(null, getTerm({term: 'foo'}));
  t.deepEqual(null, getTerm({term: void 0}));
  t.deepEqual(null, getTerm({}));
});

test('it should return expected values', t => {
  t.deepEqual('full-time', getTerm({term: 'Full Time'}));
  t.deepEqual('part-time', getTerm({term: 'Part Time'}));
  t.deepEqual('contract', getTerm({term: 'Contract'}));
});
