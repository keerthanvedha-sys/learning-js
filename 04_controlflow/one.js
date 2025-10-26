// if 
// const isUserLoggedIn =false

// if(isUserLoggedIn ){
//     console.log("hello");
// }else{
//     console.log("user not logged in");
    
// }

// if(2=="2"){
//     console.log("executed");
    
// }

// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }

//short hand notation
// const balance =100
// if(balance>500) console.log("test"); shorthand



// if(balance<500){
// console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900"); 
// }else{
//     console.log("it is greater than 900");
// }


const userLoggedIn =true
const debitCard = true
const loggedInFromGoogle =false
const loggedInFromemail = true

if(userLoggedIn && debitCard){
    console.log("allow to buy course ");
}

if(loggedInFromGoogle || loggedInFromemail){
    console.log("user has logged in");
    
}
