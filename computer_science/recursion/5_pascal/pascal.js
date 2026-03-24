const pascal = function (n) {
  if (n === 1) {
    return [1];
  } else {
    let array = [0].concat(pascal(n - 1)).concat([0]);
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i] + array[i + 1];
    }
    array.pop();
    return array;
  }
};

// Do not edit below this line
module.exports = pascal;
