const fibonacci = function(order) {
    if (order < 0) {
        return "OOPS";
    }
    order = parseInt(order);
    let array = [0, 1];
    for (let i = 0 ; i < order ; i++) {
        let nextNumber = array[0] + array[1];
        array[0] = array[1];
        array[1] = nextNumber;
    }
    return array[0];
};

// Do not edit below this line
module.exports = fibonacci;
