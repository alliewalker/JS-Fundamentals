let weather = 75;

if (weather < 70){
    console.log('wear a jacket');
} else{
        console.log("No jacket necessary")
    }

let name = "Allie";

if (name== "Allie"){
    console.log("Hello, my name is Allie");
} else{
    console.log("Hello, what is your name?")
}

/*********************************************************************************** */

//Else If


/************************************* */

//Ternary- a great way to write a single line for an if/ if else statement

let x = 6;

    //if true            //else
(x>0) ? console.log("yes") : console.log("no")


let x=2

if (x ==0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
 } else {
     console.log("goodbye");
 }

let x=2;
(x == 0) ? console.log("hello") : (x< 0) ? console.log("hi") : console.log("goodbye")

let x=16;
(x>= 25) ? console.log("yay rent a car") : 
(x>= 21) ? console.log("yay uou can drink") : 
(x>=18) ? console.log("yay vote") : 
console.log("sorry")


for (let x = 0; x <= 100; x += 1){
    if(x %3 == 0 && x %5 == 0) {
        console.log("fizz buzz");
    } 
    else if (x %5 == 0) {
         console.log("buzz");
        } 
    else if (x %3 == 0) {
         console.log("fizz");
     }
     else {
         console.log(x);
     }
    }
