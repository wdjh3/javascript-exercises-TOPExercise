const palindromes = function (string) {
    string = string.toLowerCase();
    let array = string.split("");
    let filteredArray = array.filter(char => {
        return char !== " " && 
        char !== "," && 
        char !== "." && 
        char !== "!" && 
        char !== "?"
    })
    console.log(array + filteredArray);
    return (filteredArray.join('') === filteredArray.reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
