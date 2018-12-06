//* SWITCH
/* Switch statements help us choose between several options 
for a variable and a default.
Four Main Parts to a SWITCH Statement 
SWITCH, the argument being evaluated
CASE, one of the options for the variable to be
BREAK, this breaks us out of the switch statement once we hit our case
DEFAULT, the default if we dont hit one of our cases, not neccesary. 

*/

var friend="Dave"; //declaration 

switch (friend){
case "Autumn":
console.log("Hey Autumn, when are you going rock climbing?");
break;
case "Dave":
console.log("Hey Dave, how is Cooper?");
break;
case "Alecx":
console.log("Hey Alecx, when are we playing DnD?");
break;
default:
console.log(`I'm sorry, ${friend}, but do I know you?`);


} 


var friend= "Shelly";

switch (friend) {
    case "Shelly":
    console.log("Hi Shelly, lets get sushi");
    break;

    case "sheila":
    console.log("Hi Sheila, want to go to the store?");
    break;

    case "Dave":
    console.log("Dave, how are you doing?");
    break;

    default:
    console.log(`${friend} who are you?`);
}


// Switch with multiple conditions //

let yep = 0;

switch (true) {
case (yep < 0 && yep > -10):
console.log('worked');
break;

case(yep > 0):
console.log('worked');
break;

default:
console.log('didnt work');

}

