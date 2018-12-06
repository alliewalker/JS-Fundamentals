function coffee(){
    console.log ("I always need coffee");

}
coffee();

//FAT ARROW FUNCTION

let coffee =() => {
    console.log("coffee is GREAT!");
}

coffee();

//OR ONE LINE

let coffee =() => console.log("coffee is GREAT!");

coffee();


//ONE LINE FAT ARROW FUNCTION OR CONCISE FAT ARROW FUNCTION

var cat =() => console.log("i like cats");

cat();

//FAT ARROW FUNCTION WITH A PARAMETER USING INTERPOLATION

let name =(firstName) => console.log(`${firstName} is my name`)

name('allie')


//FOR CONCISE FAT ARROW FUNCTIONS, RETURNS ARE IMPLIED.

/********************************************************************************** 
 * RETURNS*/

 function capitalizeName(name) {
     let capName = '';
     for (let h in name){
         if (h==0){
             capName += name[h].toUpperCase();
            } else {
                capName +=name[h].toLowerCase();
            }
     }
     console.log(capName)
    return capName
    }

capitalizeName("allIe");

//ADDING A CONST VARIABLE 

function capitalizeName(name) {
    let capName = '';
    for (let h in name){
        if (h==0){
            capName += name[h].toUpperCase();
           } else {
               capName +=name[h].toLowerCase();
           }
    }
    console.log(capName)
   return capName
   }

const newName = capitalizeName("allIe");
console.log( newName + ' ' + "how are you?");

//CHALLENGE:
//MAKE A TIP CALCULATOR USING A FUNCTION
//HAVE IT RETURN THE THE VALUE CAPTURE THAT RETURNED VALUE IN A VARIABLE
//PRINT THAT VARIABLE

function calculateTip(bill) {
    tip = (bill * 0.2)
    return tip.toFixed(2)
}

let totalTip = calculateTip(20.00)
console.log(totalTip)