//WHAT IS AN ARRAY?
//HAS SQUARE BRACKETS []
//CAN HOLD MULTIPLE DATA TYPES
//GREAT FOR LISTING

let students = ['Tony' , 'Mashall' , 'Randy' , 'Ray' , 23, true, ['Ryan', 'Iesha']]
console.log(typeof students)
console.log(students instanceof Array) //true
console.log(students [6])
console.log(`hello ${students[6][1]}, you look nice today` )

let food= ['Pecan Pie', 'shrimp' , 'quesadilla' , 'cheese cake' , 'hotdog']
for (f in food){

  //  console.log(food [f])
}

//PUSH METHOD

food.push('porkchop')
for (f in food){
    console.log(food [f])
}

//REMOVE HOTDOG

let food= ['Pecan Pie', 'shrimp' , 'quesadilla' , 'cheese cake' , 'hotdog']
food.pop();
for (f in food){

console.log(food[f])
}

//ANOTHER WAY

food.forEach(f => { console.log(f); })

//CHALLENGE

//CREATE A LIST (WITH AN ARRAY) OF MOVIES
//USE .FOREACH() TO LIST YOUR MOVIES
// ADD ANOTHER MOVIE AT THE END
//REPLACE ONE OF YOUR EXISTING MOVIES WITH ANOTHER ONE


let movie= ['it' , 'Sixteen Candles' , 'The Breakfast Club']
movie.push('Eternal Sunshine')
movie.splice(2,1,'16')

movie.forEach(m => {console.log(m)})




let long = [1,2,3,4,5,6,7,8,9,10]
console.log(long.length);

let colors= ['blue' , 'green' , 'yellow' , 'red' , 'orange' , 'purple'];
console.log(colors.length);
console.log(typeof colors);
console.log(typeof colors.toString())



//CHALLENGE
//FIRST CHECK IF YOU ARE WORKING WITH AN ARRAY
//THEN FLIP THE VALUES WITHIN THE ARRAY USING A METHOD ONLY
//PRINT THE VALUES OF THE NEWLY ARRANGED ARRAY

let names = ['ron' , 'tyler' , 'luke' , 'mike']
console.log(names instanceof Array)
let revArr = names.reverse() 
revArr.forEach(a => console.log(a)) 

