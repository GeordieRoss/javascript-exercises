const findTheOldest = function (peopleArr) {

    let oldestPerson = peopleArr.reduce((oldFart, person) => {
        return (getAge(person) > getAge(oldFart)) ? person : oldFart;
    }, {
        name: "",
        yearOfBirth: year,
        yearOfDeath: year,
    });

    return oldestPerson;
};

const getAge = function (person) {
    return (person.yearOfDeath !== undefined) ? person.yearOfDeath - person.yearOfBirth : year - person.yearOfBirth;
}

let year = 2025;

// Do not edit below this line
module.exports = findTheOldest;
