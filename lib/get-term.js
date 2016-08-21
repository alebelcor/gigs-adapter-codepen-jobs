'use strict';

module.exports = function getTerm(json) {
  let term = null;

  if (json.term === 'Full Time' || json.term === 'Part Time' || json.term === 'Contract') {
    term = json.term.toLowerCase().replace(' ', '-');
  }

  return term;
};
