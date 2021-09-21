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
function fruitProcessor1(numberOfApples, numberOfGrapes) {
    const juice = `Juice with ${numberOfApples} Apples and ${numberOfGrapes} Grapes`;
    return juice;
}
const appleGrapeJuice = fruitProcessor1(5, 2);
console.log(appleGrapeJuice);

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
let friends = ['Joash', 'Daniel', 'Elijah'];
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


/*
Basic Array Operations (Methods)

UNSHIFT and PUSH methods returns the new length of the array.
SHIFT and POP methods returns the name of the removed element.

INDEXOF and INCLUDES methods do not perform type coercion. Strict equality.
INDEXOF method returns the integer value of the position of the element in the array. If the element does not exist, '-1' will be returned instead.
INCLUDES method returns a boolean value of the existence of the element in the array. 
*/
friends = ["Fiona", "Martin", "Elijah"];
friends.push("Jayden"); // Adds a new element, 'Jayden' to the end of the array
friends.unshift("Jack"); // Adds a new element, 'Jack' to the start of the array
friends.pop(); // Removes the last element of the array
friends.shift(); // Removes the first element of the array
console.log(friends);

console.log(friends.indexOf("Fiona")); // 0
console.log(friends.includes("Fiona")); // true


// Coding Challenge #2
// const calculateTip = function (bill) {
//     if (bill > 50 && bill < 300) 
//         return bill * 0.15;
//     else 
//         return bill * 0.2;
// };
// const bills = [125, 555, 44];
// const tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
// console.log(tips);
// const totals = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]];
// console.log(totals);


// Introduction to Objects
const darrenObject1 = {
    firstName: 'Darren',
    lastName: 'Choo',
    age: 2021 - 2001, 
    school: 'National University of Singapore',
    friends: ['Fiona', 'Elijah', 'Martin']
};

/*
Dot vs Bracket Notations
Bracket Notations allow for concatenations whereas Dot Notations does not allow concatenations
*/
console.log(darrenObject1.lastName); // Choo
const nameKey = 'Name';
console.log(darrenObject1['last'+nameKey]); // Choo

// Adding properties to objects
darrenObject1.location = 'Singapore';
darrenObject1['instagram'] = '@darrenchooji'; 
console.log(darrenObject1);
console.log(darrenObject1.friends.length); // 3


/*
Object Methods
A function within an object
*/
const darrenObject2 = {
    firstName: 'Darren',
    lastName: 'Choo',
    birthYear: 2001,
    school: 'NUS',
    friends: ['Fiona', 'Jayden', 'Elijah'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2021 - birthYear;
    // }
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year-old studying, studying at ${this.school}. He ${this.hasDriversLicense ? "does have" : "does not have"} driver's license.`;
    }
};
// console.log(darrenObject2.calcAge(darrenObject2.birthYear));
// console.log(darrenObject2['calcAge'](darrenObject2['birthYear']));
console.log(darrenObject2.calcAge());
console.log(darrenObject2.age);
console.log(darrenObject2.getSummary());


// Coding Challenge #3
// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2
//         return this.bmi;
//     }
// };
// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi =  this.mass / this.height ** 2
//         return this.bmi;
//     }
// };
// john.calcBMI();
// mark.calcBMI();
// if (john.bmi > mark.bmi) 
//     console.log(`John's BMI (${john.bmi}) is higher than Mark's BMI (${mark.bmi})`);
// else 
//     console.log(`Mark's BMI (${mark.bmi}) is higher than John's BMI (${john.bmi})`);



// Iteration: The for Loop
for (let rep=1; rep<=5; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}


/*
Looping Arrays, Breaking, and Continuing
CONTINUE: To exit the current iteration of the loop and enter the next.
BREAK: To terminate the loop.
*/
const darrenArray1 = [
    'Darren',
    'Choo',
    2021 - 2001,
    'National University of Singapore',
    ['Fiona', 'Caryl', 'Erika']
];
const types = [];
for (let i=0; i<darrenArray1.length; i++) {
    if (typeof darrenArray1[i] !==  'string') continue;
    types.push(typeof darrenArray1[i]);
}
console.log(types);
for (let i=0; i<darrenArray1.length; i++) {
    if (typeof darrenArray1[i] === 'number') break;
    console.log(darrenArray1[i], typeof darrenArray1[i]);
}



// Looping Backwards and Loops in Loops
const darrenArray2 = [
    'Darren',
    'Choo',
    2021 - 2001,
    'National University of Singapore',
    ['Fiona', 'Caryl', 'Erika']
];
for (let i = darrenArray2.length - 1; i >= 0; i--) {
    console.log(darrenArray2[i]);
}

const exercise = ['Squat', 'Bench Press', 'Deadlift'];
for (let i=0; i<exercise.length; i++) {
    for (let j=1; j<=5; j++) {
        console.log(`Lifting weights for ${exercise[i]} for repetition ${j} 🏋️‍♂️`);
    }
}


// The while Loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end...");
}


// Coding Challenge #4
// const bills4 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips4 = [];
// let totals4 = [];
// const calculateTip4 = function (bill) {
//     if (bill > 50 && bill < 300) 
//         return bill * 0.15;
//     else 
//         return bill * 0.2;
// };
// for (let i=0; i<bills4.length; i++) {
//     let tip = calculateTip4(bills4[i]);
//     tips4.push(tip);
//     totals4.push(tip + bills4[i]);
// }
// const calcualteAverage4 = function (totals) {
//     let total = 0;
//     for (let i=0; i<totals.length; i++) {
//         total += totals[i];
//     }
//     return total / totals.length;
// }
// console.log(bills4, tips4, totals4);
// console.log(calcualteAverage4(totals4));
// console.log(calcualteAverage4(tips4));
// console.log(calcualteAverage4(bills4));