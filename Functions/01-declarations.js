//DECLARATIONS 

// FUNCTIONS ARE A SET OF STATEMENTS THAT PERFORM A TASK OR CALCULATES A VALUE.

// DECLARATIONS (GET HOISTED)

hi()
function hi(){
    console.log("HI");
}

// EXPRESSIONS != HOISTED

var hi = function hi(){
    console.log ("I already said hi");
}

// FUNCTION CALLING 

hi();
hi();
hi();

function hey(){
    console.log('tell him i said hey');
}
hey();


//CHALLENGE: CREATE A FUNCTION THAT WHEN INVOKED(FUNCTION) THAT LISTS OUT NUMBERS 1-10.

function number(){
for (let i = 1; i <= 10; i ++ ) {
    console.log(i);
}
}
number();


// CHALLENGE: GIVEN AN ARRAY, CREATE A FUNCTION THAT LISTS OUT THE INDIVIDUAL VALUES 

let arr = ['this' , 'is' , 'really' , 'cool'];

function wordArray(){
for (word in arr){
    console.log(arr[word]);
}
}
wordArray();

//OR

let arr = ['this' , 'is' , 'really' , 'cool'];

function arrayList(){
    for (list of arr){
        console.log(list);
    }
}
arrayList();