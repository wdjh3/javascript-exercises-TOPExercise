const removeFromArray = function(array, ...removed) {
    let result = array;
    for (const removedItem of removed) {
        result = result.filter((item) => item !== removedItem);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
