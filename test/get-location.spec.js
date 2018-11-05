'use strict';

import test from 'ava';

import getlocation from '../lib/get-location';

test('it should return null when remote', t => {
  t.deepEqual(null, getlocation({remote: true}));
});

test('it should return null when no location data', t => {
  t.deepEqual(null, getlocation({}));
  t.deepEqual(null, getlocation({foo: 'bar'}));
  t.deepEqual(null, getlocation({address: null}));
  t.deepEqual(null, getlocation({address: {city: '', state_prov: '', country: ''}})); // eslint-disable-line camelcase
});

test('it should return at least the city', t => {
  t.deepEqual('foo', getlocation({address: {city: 'foo'}}));
});

test('it should return at least the state', t => {
  t.deepEqual('bar', getlocation({address: {state_prov: 'bar'}})); // eslint-disable-line camelcase
});

test('it should return at least the country', t => {
  t.deepEqual('baz', getlocation({address: {country: 'baz'}}));
});

test('it should return at least the city and state', t => {
  t.deepEqual('aaa, bbb', getlocation({address: {city: 'aaa', state_prov: 'bbb'}})); // eslint-disable-line camelcase
});

test('it should return at least the city and country', t => {
  t.deepEqual('ccc, ddd', getlocation({address: {city: 'ccc', country: 'ddd'}}));
});

test('it should return at least the state and country', t => {
  t.deepEqual('eee, fff', getlocation({address: {state_prov: 'eee', country: 'fff'}})); // eslint-disable-line camelcase
});

test('it should return the city, state and country', t => {
  t.deepEqual('ggg, hhh, iii', getlocation({address: {city: 'ggg', state_prov: 'hhh', country: 'iii'}})); // eslint-disable-line camelcase
});
