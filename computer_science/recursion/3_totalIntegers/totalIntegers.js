const totalIntegers = function (nestedArray) {
  if (typeof nestedArray !== "object") {
    return undefined;
  }

  let integerCount = 0;

  function countIntegers(nestedArray) {
    for (const key in nestedArray) {
      const value = nestedArray[key];
      if (Number.isInteger(value)) {
        integerCount++;
      } else if (typeof value === "object") {
        countIntegers(value);
      }
    }
  }

  countIntegers(nestedArray);

  return integerCount;
};

console.log(totalIntegers([4, 6, { a: 1, b: { a: [5, 10], b: 11 } }, 9]));

// Do not edit below this line
module.exports = totalIntegers;
