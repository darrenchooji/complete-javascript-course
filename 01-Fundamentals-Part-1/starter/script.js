// CamelCase naming convention
// let myFirstSchool = "Pei Chun Public School";
// let myCurrentSchool = "National University of Singapore";
// console.log(myFirstSchool);
// console.log(myCurrentSchool);

/*
From ES2020, there is a new primitive data type. BigInt (for larger integers that the Number data type cannot hold)
JavaScript has dynamic typing (automatically determines the data type of the value)
Assign new value of a different data type to the same variable.
*/

// Example of dynamic typing
// let myRelationshipStatus;
// console.log(typeof myRelationshipStatus); // undefined
// myRelationshipStatus = "single";
// console.log(typeof myRelationshipStatus); // string
// myRelationshipStatus = 1;
// console.log(typeof myRelationshipStatus); // number

/*
 Difference between var, let, and const
const does not the value of the variable to be changed
var is function-scope
let is block-scope
*/
const currentYear = 2021;
const ageOfDarren = currentYear - 2001;
const ageOfFiona = currentYear - 1999;
console.log(ageOfDarren, ageOfFiona);

console.log(ageOfDarren, ageOfDarren * 2, ageOfDarren / 5, ageOfDarren ** 2); // 20 40 4 400

console.log(ageOfFiona > ageOfDarren); // true
console.log(ageOfDarren > ageOfFiona); // false

// JavaScript has operation precedence. Google Mozilla Developer Network (MDN) Operator Precedence for more information
// Usually, the math operators are executed before the comparison operators.
console.log(currentYear - 1999 > currentYear - 2001); // true

let averageAge = (ageOfDarren + ageOfFiona) / 2
console.log(averageAge);

/*
// Coding Challenge #1
let markWeight = prompt("Enter Mark's weight (in kg) : ");
let markHeight = prompt("Enter Mark's height (in m) : ");
let johnWeight = prompt("Enter John's weight (in kg) : ");
let johnHeight = prompt("Enter John's height (in m) : ");
const markBMI = markWeight / (markHeight ** 2);
const johnBMI = johnWeight / (johnHeight ** 2);
const markHigherBMI = markBMI > johnBMI;
console.log("John's BMI : " + johnBMI);
console.log("Mark's BMI : " + markBMI);
console.log(markHigherBMI);
*/

const myFirstName = "Darren";
const myLastName = "Choo";
const myOccupation = "student";
const myBirthYear = 2001;
// const myDescription = "I am " + myFirstName + " " + myLastName + ", a " + (currentYear - myBirthYear) + " year old " + myOccupation + "!";
const myDescription = `I am ${myFirstName} ${myLastName}, a ${(currentYear - myBirthYear)} year old ${myOccupation}.`; // using Template Literals
console.log(myDescription);
console.log(`Strings with
multiple
lines`);

const ageLimitForDriving = 18;
const myAge = currentYear - myBirthYear;
if (myAge > ageLimitForDriving) {
    console.log(`Eligible to take driver's license`);
}
else {
    console.log(`Not eligble. Have to wait ${(ageLimitForDriving - myAge)} years.`);
}

let century;
if (myBirthYear >= 2000) {
    century = 21;
}
else {
    century = 20;
}
console.log(century);