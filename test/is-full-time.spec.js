'use strict';

import test from 'ava';
import isFullTime from '../lib/is-full-time';

test('it should return true', t => {
  t.true(isFullTime({term: 'Full Time'}));
});

test('it should return false', t => {
  t.false(isFullTime({term: 'foo'}));
  t.false(isFullTime({term: 'Part Time'}));
  t.false(isFullTime({}));
});
