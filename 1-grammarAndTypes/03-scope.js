var x = 12

function scope() {
   var x = 33
    console.log(x);
}
scope()//33 This is calling our function
console.log(x); //12




function scope() {
    const x = 33
    if (true){
        const x = 45;
        console.log(x);
    }
    console.log(x);
}

    scope()



    /*
    variable grammmar   obeys functional scope  obeys block scope   can be mutated (changed after initialization)
         var                    yes                     no                  yes
         let                    yes                     yes                 yes
         const                  yes                     yes                 no
    */
