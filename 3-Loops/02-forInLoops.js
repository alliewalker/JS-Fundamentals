let student = { name: "Jamie", awesome: true, course: "javaScript" };

              //key     value    key    value   key     value

for (item in student) {
    console.log(item); //key
console.log(student[item]);
}

let catArray = [ 'tabby' , 'burmese' , 'ragdoll' , 'tortie' ];
for (cat in catArray){
    console.log(cat);
}


var name="john";
var capName;

for (var letter in name){
    if (letter ==0){
        capName = name[letter].toUpperCase();
    }else{
    capName += name[letter]. toLowerCase();
    }
}
console.log(capName);