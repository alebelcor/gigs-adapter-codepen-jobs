'use strict';

import test from 'ava';
import getIsFullTime from '../lib/get-is-full-time';

test('it should return true', t => {
  t.true(getIsFullTime({term: 'Full Time'}));
});

test('it should return false', t => {
  t.false(getIsFullTime({}));
  t.false(getIsFullTime({term: 'Part Time'}));
  t.false(getIsFullTime({term: 'foo'}));
});
