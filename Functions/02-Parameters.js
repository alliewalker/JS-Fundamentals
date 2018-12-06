// PARAMETERS ARE LIKE EMPTY STORAGE BOXES THAT WE CAN NAME WHATEVER WE WANT. 
// THEY NEED TO USE THE SAME NAME INSIDE OF THE FUNCTION. 

// WE CAN ALSO HAVE MULTIPLE DIFFERENT PARAMETERS FOR A SINGLE FUNCTION.
// WE ARE THE ONES THAT PROVIDE THAT PARAMETER WHEN WE CALL OUR FUNCTION.

          //parameter=animal

function pet(animal, owner){
    console.log(`${owner} has a ${animal} for a pet`)
}

//multiple different parameters
pet("dog" , "allie");
pet("cat" , "dave");
pet ("lizard" , "mike");


function child(name){
    console.log(`My child is ${name}`);
}

child("luke");
child("brian");


//CHALLENGE:
// WRITE A FUNCTION THAT TAKES TWO PARAMETERS:
// ONE PARAMETER IS FOR A FIRST NAME,
//ONE IS FOR LAST NAME,
// HAVE THEM COME TOFETHER IN A VARIABLE INSIDE THE FUNCTION.
//CONSOLE.LOG 'HELLO MY NAME IS TOM MCCLELLAN
//CALL YOUR FUNCTION

function firstLast(first, last){
    let fullName = first + ' ' + last;
    console.log(`Hello, my name is ${fullName}.`);
}

firstLast('tom' , 'mcclellan');
firstLast('allie' , 'walker');

