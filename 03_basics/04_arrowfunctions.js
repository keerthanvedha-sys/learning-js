const user = {
    username: "Keerthan",
    price : 999,

    welcomeMessage : function(){
     console.log(`${this.username} , welcome to website`);
     //console.log(this);
     
    }
}

/// user.welcomeMessage()
// /user.username = "sam"
/// user.welcomeMessage()
/// console.log(this)

// function chai(){
//     let username ="Keerthan"
//     console.log(this);
    
// }

// chai()

//...........................arrowfunctions....................
    
const chai = () => {
    let username =" keerthan"
    console.log(this.username);
}
// chai()

// const addTwo =(num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(3,4));


//implicit return example (no need of return statement (no {}))
const addTwo =(num1,num2)=> (num1+num2)
