// CamelCase naming convention
let myFirstSchool = "Pei Chun Public School";
let myCurrentSchool = "National University of Singapore";
console.log(myFirstSchool);
console.log(myCurrentSchool);

/*
From ES2020, there is a new primitive data type. BigInt (for larger integers that the Number data type cannot hold)
JavaScript has dynamic typing (automatically determines the data type of the value)
Assign new value of a different data type to the same variable.
*/

let isJavaScriptFun = true;
console.log(isJavaScriptFun);

// Example of dynamic typing
let myRelationshipStatus;
console.log(typeof myRelationshipStatus); // undefined
myRelationshipStatus = "single";
console.log(typeof myRelationshipStatus); // string
myRelationshipStatus = 1;
console.log(typeof myRelationshipStatus); // number

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

console.log(ageOfDarren, ageOfDarren * 2, ageOfDarren / 5, ageOfDarren ** 2); // 2 ** 3 = 2 power 3 = 8

const myFirstName = "Darren";
const myLastName = "Choo";
console.log(myFirstName + " " + myLastName); // Darren Choo

console.log(ageOfFiona > ageOfDarren); // true
console.log(ageOfDarren > ageOfFiona); // false