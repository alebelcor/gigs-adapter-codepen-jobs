'use strict';

module.exports = json => {
  return typeof json.company_name === 'string' ? json.company_name.trim() : null;
};
