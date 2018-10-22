'use strict';

const gigs = require('gigs');

const getTitle = require('./get-title');
const getLocation = require('./get-location');
const isFullTime = require('./is-full-time');

const ADAPTER_SOURCE = 'codepen-jobs';
const ADAPTER_SOURCE_URL = 'https://codepen.io/jobs';

module.exports = function getGigs(json) {
  return json.jobs.map(job => {
    return gigs.create({
      source: ADAPTER_SOURCE,
      source_url: ADAPTER_SOURCE_URL,
      title: getTitle(job),
      description: job.description,
      url: job.url,
      company_name: job.company_name,
      location: getLocation(job),
      full_time: isFullTime(job),
      remote: job.remote
    });
  });
};
