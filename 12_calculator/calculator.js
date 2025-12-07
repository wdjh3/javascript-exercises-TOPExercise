const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce(((acc, curr) => acc += curr), 0);
};

const multiply = function(array) {
  return array.reduce(((acc, curr) => acc *= curr), 1);
};

const power = function(a, b) {
  result = 1;
	for (let i = 0 ; i < b ; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  if (a === 0 || a === 1) {
    return 1;
  }
  result = 1;
	for (let i = 2 ; i <= a ; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
