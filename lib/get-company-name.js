'use strict';

module.exports = function getCompanyName(json) {
  return typeof json.company_name === 'string' ? json.company_name.trim() : null;
};
