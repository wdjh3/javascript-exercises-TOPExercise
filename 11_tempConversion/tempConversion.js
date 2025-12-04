const convertToCelsius = function(temperatureFahrenheit) {
  return Math.round(((temperatureFahrenheit - 32) * 5/9) * 10 ) /10;
};

const convertToFahrenheit = function(temperatureCelsius) {
  return Math.round((temperatureCelsius * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
