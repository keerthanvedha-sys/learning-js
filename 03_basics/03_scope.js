//problem in var avoid using var in js
var c= 300
let a = 100;

if(true){
 let a = 10
const b = 2
var c = 30 
//console.log("INNER: ",a);
}

//console.log(a);
//console.log(b);
//console.log(a);

function one(){
    const username = "Keerthan"
    function two (){
        const website = "youtube"
       /// console.log(username);
    }
   // console.log(website); gives error due to scope
   two()

}

one()

// +++++++++++++++++++interestingconcept+++++++++++++++

console.log(addone(5));
function addone(num){
    return num+1
}



// another way of declaring functions

// addTwo(5) will give error because it is stored in variable
const addTwo = function(num){
    return num+2
}

