const permutations = function (array) {
  let totalPermutations = [];
  if (array.length === 0) {
    totalPermutations.push([]);
  } else if (array.length === 1) {
    totalPermutations.push(array);
  } else {
    for (const value of array) {
        for (const permutation of permutations(array.filter(item => item !== value))) {
            totalPermutations.push([value].concat(permutation));
        }
    }
  }
  return totalPermutations;
};

// Do not edit below this line
module.exports = permutations;
