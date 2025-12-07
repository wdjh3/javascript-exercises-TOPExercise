const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    return array.reduce((currentPerson, nextPerson) => {
        if (!currentPerson.yearOfDeath) {
            currentPerson.yearOfDeath = currentYear;
        }

        if (!nextPerson.yearOfDeath) {
            nextPerson.yearOfDeath = currentYear;
        }
        

        const currentPersonYears = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        const nextPersonYears = nextPerson.yearOfDeath - nextPerson.yearOfBirth;

        return (currentPersonYears > nextPersonYears ? currentPerson : nextPerson);
    })
};

// Do not edit below this line
module.exports = findTheOldest;
