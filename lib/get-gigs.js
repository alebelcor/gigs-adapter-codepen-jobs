'use strict';

const gigs = require('gigs');

const getTitle = require('./get-title');
const getCompanyName = require('./get-company-name');
const getLocation = require('./get-location');
const getIsFullTime = require('./get-is-full-time');

const ADAPTER_SOURCE = 'codepen-jobs';
const ADAPTER_SOURCE_URL = 'https://codepen.io/jobs';

module.exports = json => {
  return json.jobs.map(job => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL, // eslint-disable-line camelcase
      title: getTitle(job),
      description: job.description,
      url: job.url,
      company_name: getCompanyName(job), // eslint-disable-line camelcase
      location: getLocation(job),
      full_time: getIsFullTime(job), // eslint-disable-line camelcase
      remote: job.remote
    });
  });
};
