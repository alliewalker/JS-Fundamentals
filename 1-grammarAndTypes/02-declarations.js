console.log("hello World")
//cmd ? highlighted : comment out
//console.log is a great tool to debug later down the line. for now we're going to use it as a learning tool.

var a = 1
var A = 2

console.log(A)

var b = 1
var b = 2 
console.log(b)  //2

let c = 3
c = 4
console.log(c)

var firstName = 'Dave'
const lastName = 'Walker'
console.log(firstName, lastName)
firstName = 'Luke'
console.log(firstName, lastName)

/*
Declarations are the LEFT SIDE of a variable
It is simply the var x
It is on the left sideo f the assignment operator (=)

Initilizations are the RIGHT SIDE of the variable
It sets the value of the variable
It incorporates the variable name (x), the assignment operator (=), and the value (10) => x= 10
*/

var x 
console.log('Declaration:', x);

var x = 10
console.log('initialization 1:', x)

var y = "Hello"
console.log('Both:', x, y)