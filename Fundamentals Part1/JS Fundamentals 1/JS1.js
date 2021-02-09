/*
JavaScript Fundamentals Part 1
By: Suryakiran Santhosh
*/


console.log("Hello World!")  // How to print strings to the console

//----------------------------------------------------------------------------

/*
JavaScript is a high-level, object-oriented, multi-paradigm programming language.

Web Development: Html (content of the page, text, images, buttons, etc.), CSS (presentation of webpage), and JS (building the web application)

Web frameworks: React, Angular, Vue
Web Applications on web servers: node.js
Native Mobile Applications: React Native and Ionic
Native Desktop Applications: JavaScript Electron
*/

// doc to create html skeleton
// <script src = "__filename.js__"></script> to connect js file to html index file
// <h1> __header__ <h1> to create a header


//------------------------- Values and Variables -------------------------------
// defining variables 
let firstName = "Suryakiran";
let lastName = "Santhosh";
let myAge = 19;
let dob = "June 26, 2001";

// one liner if statement
if (firstName === "Suryakiran") console.log("Hello Coder!");  

// can redefine variables if not declared using const keyword
firstName = "Surya";

// variable can't start with 3 or symbols 
// no reserved JS keywords
// $ and _ are allowed nothing else can be used in name
// real constants are all caps example PI

//covered variable declaration and if statements

// Exercise for Values and Variables 
let country = "United States of America";
let continent = "North America";
let population = 325000000;  // this is an approximation 
console.log(country);
console.log(continent);
console.log(population);


//------------------------- Data Types -------------------------------
// Number type is all numbers are of type floating point number 
// string is a sequence of characters
// boolean is the logical true or false value ex.) let born = true;
// Undefined is the value taken by a variable that is not yet defined: "empty value"
// Null also means empty value
// symbol (ES2015) value that is unique and cannot be changed
// BigInt (ES2020) : larger integers than the Number type can hold

// value is the one with a data type not the variable 

let boolValTrue = true;
let boolValFalse = false;

console.log(typeof (boolValTrue));  // returns the data type of a variable


//------------------------- Declare variables -------------------------------
// there are three ways of declaring variables: let, var, const

// can be anywhere in the function, var is function scope
var sg = "James Harden";

// const variables can never been changed or reassigned or mutated
const goat = "Kobe";

// by default use let because it enforces the scope of the variable, let makes variables block scope 

//------------------------- Operators -------------------------------
console.log("Multiplication: " + 5 * 5);
console.log("Division: " + 25 / 5);
console.log("Exponential: " + 3 ** 2);

let x = 0
x += 1 // there are also *=, /=, -=
x++; // increments the value of x by 1
x--; //decrements the value of x by 1
console.log(x);

// comparison operators --> returns true or false
// >, <, >=, <=
let y = 14;
console.log(x < y);

// Operator Precedence
/* website for precedence table:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

// chain assignment
let a, b;
a = b = 25 - 10 - 5;
console.log(a, b);


//------------------------------- Template Literals ------------------------------------------
// a way to write a stringwith nicer formatting an variables included
// similar to the print(f"{<variable name>}") format
// in JS format: console.log(` ${<variable name>} `) => `${}` format

const language = "JavaScript";
console.log(`Hello ${firstName} ${lastName}. Keep up the good work in studying ${language}.`);

// from now on use `` for strings
// `` allows to create multi line strings


//------------------------------- Making Decisions ------------------------------------------
// When you can drive program
const licenseAge = 18;
const isOldEnough = myAge >= licenseAge;  // defining a boolean to check age
if (isOldEnough) {
    console.log(`You can get your drivers license!`);
} else {
    console.log(`You need to wait ${licenseAge - myAge} to get a drivers license`);
}


// Which Century were you born
const birthYear = 1991;

if (1900 <= birthYear <= 2000) {
    console.log(`You were born in the 20th century.`);
} else {
    console.log(`You were born in the 21th century`);
}


//------------------------------- Type Conversion and Coercion ------------------------------------------
// conversion when programmer converts to a different data type
// coercion when JS converts a data type to another behind the scenes.
// NaN -> not a number

const r = 5000;
const t = "5000";

console.log(typeof (r), typeof (t));
console.log(`Conversion Variables: ${String(r)} and ${Number(t)}`);

//------------------------------- == vs === ------------------------------------------
/*
== : JS will try to coerce the value to check the comparison, IT IS BAD PRACTICE TO USE THIS 
=== : typical == operator used by most every programming language, this one does not do data type coercion
=== should be used most commonly to avoid unknown bugs 
*/

alert(`Hello World`);  // creates an alert on the webpage
const AGE = 18;

// how to accept input from user
const inputAge = Number(prompt(`What is your age?`));

if (AGE === inputAge) {
    console.log(`We are the same age!!`);
} else if (AGE > inputAge) {
    console.log(`I am older than you by ${AGE - inputAge} years.`);
}
else {
    console.log(`You are older than me by ${inputAge - AGE} years.`);
}


// how to implement not equal to
if (inputAge !== -1) console.log(`You are always positive!!`);


//------------------------------- Boolean Logic ------------------------------------------
// And, or, and not operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(!hasDriversLicense);  // prints false to screen
console.log(hasDriversLicense && hasGoodVision);  // prints true to screen
console.log(!hasDriversLicense && hasGoodVision);  // prints false to screen
console.log(hasDriversLicense && !hasGoodVision);  // prints false to screen
console.log(hasDriversLicense || hasGoodVision);  // prints true to screen
console.log(!hasDriversLicense || hasGoodVision);  // prints true to screen
console.log(hasDriversLicense || !hasGoodVision);  // prints true to screen

const shouldDrive = hasDriversLicense && hasGoodVision;
console.log(shouldDrive);


//------------------------------- Switch Cases ------------------------------------------
const day = `monday`;

switch (day) {
    case `monday`:  // day === `monday`
        console.log("Plan chapters covered this week.");
        console.log("Go to monday classes.");
        break;
    case `tuesday`:  // day === `tuesday`
        console.log(`Do homework from monday class.`);
        console.log(`Go to tuesday classes.`);
        break;
    case `wednesday`:  // day === `wednesday`
        console.log(`Do homework from wednesday class.`);
        console.log(`Go to wednesday classes.`);
        break;
    case `thursday`:  // day === `thursday`
        console.log(`Do homework from thursday class.`);
        console.log(`Go to thursday classes.`);
        break;
    case `friday`:  // day === `friday`
        console.log(`Do homework from friday class.`);
        console.log(`Go to friday classes.`);
        break;
    case `saturday`:  // day === `saturday`
        console.log(`Do homework from friday class.`);
        break;
    case `sunday`:  // day === `sunday`
        console.log(`Do homework from friday class.`);
        break;
}


//------------------------------- Statements vs. Expressions ------------------------------------------
/*
Statement: full sentence or actions(if else statements)
Expression: statements that produce a value (produce some data type)
*/

//------------------------------- The Conditional(Ternary) Operator -----------------------------------
// online if else statement 

const legallyAnAdult = 18;
const participantName = `Celine`;
let CelineAge = 23;

const finalDecision= CelineAge >= legallyAnAdult ? console.log(`${participantName} is legally an adult!`) :
    console.log(`${participantName} is not legally an adult just yet.`);

//  <argument> ? if true run this <____> : if false run this <_____>

console.log(finalDecision);