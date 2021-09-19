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

function fruitProcessor(numberOfApples, numberOfGrapes) {
    const juice = `Juice with ${numberOfApples} Apples and ${numberOfGrapes} Grapes`;
    return juice;
}
const appleGrapeJuice = fruitProcessor(5, 2);
console.log(appleGrapeJuice);
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// Built-in Function
console.log(Number('23')); // Converts '23' to a number type


/*
Function Declarations vs Function Expressions
Function Declaration can be invoked anywhere whereas Function Expressions can only be invoked after it has been defined.
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