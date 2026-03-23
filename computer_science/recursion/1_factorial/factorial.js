const factorial = function(n) {
    if (typeof n !== "number" || Math.round(n) !== n || n < 0) {
        return undefined;
    }

    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

// Do not edit below this line
module.exports = factorial;