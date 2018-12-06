// Booleans
//What is a boolean?
var on = true;
console.log(on); //true 
let off = false;
console.log(off); // false

//boolean can represent: true/false, yes/no, on/off

// Null = empty value (not 0; not undefined)
var empty = null;
console.log(empty); //Null

var undef = undefined;
console.log(undef); // undefined dont do this

let grass;
console.log(grass); 


/* Weve talked before about how every variable is basically a storage container in Javascript think 
of variable with null and undefined as packages coming out of UPS. NUll packages are
packages that were intentionally packed up iwth nothing.*/

// Numbers

var degrees = 90;
console.log(degrees);

var precise = 999999999999999 // 15 9s
console.log(precise); // 9999999999999

var rounded = 9999999999999999
console.log(rounded);

var notQuite = 0.2 + 0.1;
console.log(notQuite);

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); // 0.3

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

// Numbers vs. Strings
let first = 1050 + 100;   //1150
let second = '1050' + '100';  //1050100 reads it as text, not numbers

console.log(first+second);
console.log(second);
console.log(typeof first);
console.log(typeof second);

/*
Addition vs. Concatenation

When JS sees combining two or more numners, it adds the values together using the built-in math
functionality; when it sees adding together one of more strings, it changes and the plus sign becomes an assignment operator--its smashes the value
together without trying to synthesize the values 

*/

let third = 1050 + '100';

console.log(third); //1050100
console.log(typeof third); //string



let firstName = "Allison";
let lastName = "Walker";
let houseNumber = '12757';
let street = "Venice blvd";
let city = "Los Angeles";
let state = "California";
let zipcode = '90066';

console.log(firstName,lastName);
console.log(houseNumber,street);
console.log(city,state,zipcode);

/*
Arrays are great for lists

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
/*

var burritoes = ['large', 4, true];
console.log(burrites); // ['large', 4, true]

console.log(typeof burritos); // OBJECT
*/






