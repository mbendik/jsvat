var COUNTRIES = {};

function _validateRegex(vat, regex) {
  return regex.test(vat);
}

function _validateRules(vat, regex, countryName) {
  var parsedNum = regex.exec(vat);
  var vatNum = parsedNum[2];

  return COUNTRIES[countryName].calcs(vatNum);
}

function _validate(vat, regex, countryName) {
  var result = false;
  if (_validateRegex(vat, regex)) {
    result = _validateRules(vat, regex, countryName);
  }
  return result;
}

function getClearVAT(vat) {
  return vat.toString().toUpperCase().replace(/(\s|-|\.)+/g, '');
}

function _makeArr(regex) {
  if (!Array.isArray(regex)) {
    return [regex];
  }

  return regex;
}

function isCountryBlocked(config, countryName) {
  if (!config || Object.keys(config).length === 0) return false;

  var country = config[countryName];

  return (country === null || country === null) ? true : !country;
}

var exports = {
  config: {},
  checkVAT: function (vat, isDetailed) {
    if (!vat) return false;

    vat = getClearVAT(vat);

    var result = {
      isValid: false,
      countries: []
    };

    for (var countryName in COUNTRIES) {
      if (COUNTRIES.hasOwnProperty(countryName)) {

        //Make sure country check not skipped in config
        if (!isCountryBlocked(exports.config, countryName)) {

          var regexArr = _makeArr(COUNTRIES[countryName].rules.regex);
          for (var i = 0; i < regexArr.length; i++) {

            //If once become a true, shouldn't be a false any more
            result.isValid = (_validate(vat, regexArr[i], countryName)) ? true : result.isValid;
            

            if (!isDetailed && result.isValid) return result.isValid;

            var isValidForCurrCountry = _validate(vat, regexArr[i], countryName);

            if (isValidForCurrCountry) {
              result.countries.push(countryName);
            }
          }

        }
      }
    }

    return isDetailed ? result : result.isValid;

  }
};