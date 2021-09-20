/*
Activating Strict Mode
====================================================================================
Makes writing secure JavaScript code easier. (Avoid accidental errors)
Provide visible errors in the console.
Any code that is written prior to the activation of strict mode will be ignored.
*/
'use strict';

// let hasDriversLicense = false;
// const passDriversTest = true;
// if (passDriversTest) hasDriverLicense = true; // Console will log the error due to the activation of strict mode


/*
Functions
Chunks of code that can be reused multiple times.
*/
function logger() {
    console.log("My name is Darren Choo");
}
logger();

function fruitProcessor1(numberOfApples, numberOfGrapes) {
    const juice = `Juice with ${numberOfApples} Apples and ${numberOfGrapes} Grapes`;
    return juice;
}
const appleGrapeJuice = fruitProcessor1(5, 2);
console.log(appleGrapeJuice);
const appleJuice = fruitProcessor1(5, 0);
console.log(appleJuice);

// Built-in Function
console.log(Number('23')); // Converts '23' to a number type


/*
Function Declarations vs Function Expressions
Function Declaration can be invoked anywhere whereas Function Expressions can only be invoked after it has been declared.
Matter of personal preferences.
*/
// Function Declarations
function calculateAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calculateAge1(2001);

// Function Expressions
const calculateAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 =  calculateAge2(2008);

console.log(age1, age2);


/*
Arrow Functions (Introduced in ES6)
Special form of Function Expressions that is shorter and faster to write
Great for one line functions
Does not have 'this' keyword
*/
const calculateAge3 = birthYear => 2021 - birthYear;
console.log(calculateAge3(1999));

// Arrow Functions with multiple lines and multiple parameters
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2001, "Darren"));


/*
Functions calling other functions
*/
const cutPieces = function (fruit) {
    return fruit * 4
};
const fruitProcessor2 = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
};
console.log(fruitProcessor2(2, 3));


// Coding Challenge #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const checkWinner = function (averageDolphin, averageKoala) {
//     if (averageDolphin >= averageKoala * 2) return "Dolphin";
//     else if (averageKoala >= averageDolphin * 2) return "Koala";
//     else return "None";
// };
// const averageDolphin1 = calcAverage(44,23,71);
// const averageKoala1 = calcAverage(65,54,49);
// console.log(`Winner: ${checkWinner(averageDolphin1, averageKoala1)}`);

// const averageDolphin2 = calcAverage(85,54,41);
// const averageKoala2 = calcAverage(23,34,27);
// console.log(`Winner: ${checkWinner(averageDolphin2, averageKoala2)}`);


/*
Introduction to Arrays
Array is a data structure.
*/
const friends = ['Joash', 'Daniel', 'Elijah'];
// const years = new Array(1999, 2001, 2008); // An alternative way of writing arrays
console.log(friends);
console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // Elijah

const darren = ["Darren", "Choo", 2021 - 2001, friends];
console.log(darren);

const calcAge = function (birthYear) {
    return 2021 - birthYear;
};
const years = [1999, 2001, 2008];
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);