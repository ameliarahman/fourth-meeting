const country = require('country-list');

function countryName(countryCode) {

    return country.getName(countryCode)
}

module.exports = countryName;