'use strict';

import test from 'ava';
import getCompanyName from '../lib/get-company-name';

test('it should return the company name', t => {
  t.deepEqual('Foo Bar Inc.', getCompanyName({company_name: ' Foo Bar Inc. '}));
});

test('it should return null', t => {
  t.deepEqual(null, getCompanyName({}));
});
