'use strict';

module.exports = json => {
  let title = null;

  if (typeof json.title === 'string' && json.title.length > 0) {
    title = json.title.trim();
  }

  return title;
};
