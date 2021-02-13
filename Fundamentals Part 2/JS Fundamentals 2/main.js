/*
JavaScript Fundamentals Part 2
By: Suryakiran Santhosh
*/

//---------------------- Activating Strict Mode ------------------------------
// allows the programmer to write bug free code most of the time best practice is to write it at the top of every js file.
// forbids us to do certain things and gives visible error warnings in the console

`use strict`;

//-------------------------- Functions ------------------------------

function logger() {
    console.log("My name is Suryakiran Santhosh and this is my first function in JavaScript.");
}

logger();  // function call


function fruitProcessor(apples, oranges) {
    // apples and oranges are called parameters
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5, 0));


// function declaration
function calcAge1(birthYear) {
    return (2021 - birthYear);
}
let age1 = calcAge1(2001);
console.log(age1);

// function expression or anonymous function
const calcAge2 = function (birthYear) {
    return (2037 - birthYear);
}

// how to call anonymous function 
const age2 = calcAge2(1991);
console.log(age2);

// Arrow Function: for one liner functions
/*
ARROW FUNCTIONS DO NOT ALLOW FOR THIS KEYWORD OPERATIONS!!!!! DIFFERENCE BETWEEN NORMAL AND ARROW FUNCTIONS!!
format : const <value_holding_variable_name> = (<parameter or parameters>) => <function expressions>;
*/
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);  // calling arrow functions
console.log(age3);


/*
Number of Years until retirement
*/
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return (`${firstName} retires in ${retirement}`);
}
console.log(yearsUntilRetirement(1991, `Jack`));


//------------------------------ Arrays -----------------------------------
// Arrays are the most basic data structure in JavaScript

// defining an array:
// only primitive data types are immutable therefore even though const friends we can change 
// the element values. But we cannot redefine an array: friends = [<new values>]
const friends = [`Anton`, `Steve`, `Kevin`, `Patrick`, `Rafi`];
console.log(friends);  // printing entire array

// different way of defining an array:
const majors = new Array(`Mechanical Eng`, `PreMed`, `Business`, `Comp Eng`, `Com Sci`);
console.log(majors);

// accessing elements by index:
console.log(friends[0], majors[0]);  // prints first element
let numOfFriends = friends.length;  // returns length of array
let numOfMajors = majors.length;  // returns length of array
console.log(`I have ${numOfFriends} friends.`);

// accessing last element by index:
console.log(friends[numOfFriends - 1], majors[numOfMajors - 1]);

// changing elements to array by index:
friends[0] = "Anthony";
console.log(friends);

// can combine arrays data types:
const firstName = `Jackson`;
const bioJackson = [firstName, `Borrows`, 2037 - 2021, `Mailman`, friends, `English`];
console.log(`${firstName} ${bioJackson[1]} biography: ${bioJackson}.`);  // returns Jackson's bio, formatting is bad would need to use loops to get nicer format
console.log(bioJackson.length);  // returns amount of information we have on Jackson
console.log(bioJackson[4].length);  // returns how many friends Jackson has 

// can't do operations of different types on arrays.

// built in array methods
// adding to the end of an array
let newLength = friends.push(`Matthew`);  // push function also returns the new length of the array
console.log(friends, newLength);

// adding to the front of an array
let newLength2 = friends.unshift(`Giovanni`);  // unshift function returns the new length of the array
console.log(friends, newLength2);

// remove the last element of an array
let valPopped = friends.pop();  // returns the value of the last index that was removed from array
console.log(friends, valPopped);

// remove the first element of an array and print the value that was removed
let valRemovedFromFront = friends.shift();
console.log(friends, valRemovedFromFront);

// return the index of an element that is in the array:
console.log(friends.indexOf(`Kevin`));
console.log(friends.indexOf(`Bob`));  // returns -1 if value not in array

// returns a boolean of whether or not value is in the array
console.log(friends.includes(`Patrick`));  // returns True
console.log(friends.includes(`Peter`));  // returns False

if (friends.includes(`Rafi`)) {
    console.log(`You are friends with Rafi.`);
}


//------------------------------ Objects -----------------------------------
// key value pairs data structure NOT A HASH TABLE
// declaring and initializing an Object in Object Literal Syntax
// order does not matter in Objects
const coderInfo = {
    firstName: `Suryakiran`,
    lastName: `Santhosh`,
    birthYear: 2001,
    job: `student`,
    friends: [`Anton`, `Steve`, `Kevin`, `Patrick`, `Rafi`],
    hasDriversLicense: true, 
    calcAge: function () {  // can only be anonymous function
        this.age = 2021 - this.birthYear;
        return (this.age);
    }
};
console.log(coderInfo);

// How to get data from an Object: Dots vs. Bracket Notation
// Dot Notation: the dot operator
console.log(coderInfo.lastName);
// Bracket Notation: objectName[KEY], key can have any expression 
console.log(coderInfo[`lastName`]);
// How to use bracket Notation:
const nameKey = `Name`;
console.log(coderInfo[`first` + nameKey]);
console.log(coderInfo[`last` + nameKey]);

const userInput = prompt(`What do you want to know about the coder? Choose between firstName, lastName, age, job, and friends`);

if (coderInfo[userInput]) {
    console.log(coderInfo[userInput]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job, and friends`)
}

// adding new elements to object
coderInfo.location = `Los Angeles`;
coderInfo[`nickname`] = `surya`;

// Challenge: Surya has 3 friends and his best friend is called <first name in friends array>
console.log(`${coderInfo.firstName} ${coderInfo.lastName} has ${coderInfo.friends.length} and his best friend is ${coderInfo.friends[0]}`);

// Object Methods: functions inside objects
// console.log(coderInfo.calcAge(2001));
// console.log(coderInfo[`calcAge`](1991));

// this is a keyword that points to the object itself
// line 145 has a age declaration now 
console.log(coderInfo.age);

//------------------------------ Loops -----------------------------------
// for loops and while loops
// format: counter; condition that the loop runs till; incrementor
// continue and break are keywords to stop loops
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

for (let i = 0; i < friends.length; i++){
    console.log(friends[i]);
}

// looping over arrays backwards
for (let i = friends.length - 1; i >= 0; i--){
    console.log(friends[i]);
}


// nested loops
for (let i = 0; i < friends.length; i++){
    for (let j = 0; j < friends.length; j++){
        console.log(friends[i]);
    }
}


// while loop
let rep = 1;
while (rep <= 10) {
    console.log(`While loop iteration #${rep}`);
    rep++;
}


let dice = Math.trunc((Math.random() * 6) + 1);
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc((Math.random() * 6) + 1);
    if (dice === 6) {
        console.log(`Loop is about to end...`);
    }
}