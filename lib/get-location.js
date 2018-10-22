'use strict';

module.exports = function getLocation(json) {
  let location = null;

  if (json.remote || !json.address) {
    return location;
  }

  if (json.address.city) {
    location = json.address.city;
  }

  if (json.address.state_prov) {
    location = location ? `${location}, ${json.address.state_prov}` : json.address.state_prov;
  }

  if (json.address.country) {
    location = location ? `${location}, ${json.address.country}` : json.address.country;
  }

  return location;
};
