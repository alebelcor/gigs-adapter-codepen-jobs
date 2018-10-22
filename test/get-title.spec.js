'use strict';

import test from 'ava';
import getTitle from '../lib/get-title';

test('it should return null when no title', t => {
  t.deepEqual(null, getTitle({}));
  t.deepEqual(null, getTitle({title: ''}));
});

test('it should return the job title', t => {
  t.deepEqual('foo', getTitle({title: 'foo'}));
});

test('it should return the job title (trimmed)', t => {
  t.deepEqual('bar', getTitle({title: ' bar '}));
});
