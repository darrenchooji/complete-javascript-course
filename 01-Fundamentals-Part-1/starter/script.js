let js = 'amazing';

console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

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
const myLastName = "Choo";
console.log(typeof myLastName);