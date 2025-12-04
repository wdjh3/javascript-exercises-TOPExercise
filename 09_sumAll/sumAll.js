const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0 ||
        isNotInteger(num1) || isNotInteger(num2) ||
        isNotNumber(num1) || isNotNumber(num2)) {
        return "ERROR";
    }

    if (num1 > num2) {
        let temp = num1; num1 = num2; num2 = temp;
    }

    let sum = 0;

    for (let i = num1 ; i <= num2 ; i++) {
        sum += i;
    }

    return sum;
};

function isNotInteger(num) {
    return !(Math.floor(num) === num);
}

function isNotNumber(num) {
    return !(Number(num) === num);
}

// Do not edit below this line
module.exports = sumAll;
