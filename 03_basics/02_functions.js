// using restoperator  
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));

const user ={
    usrename : "Keerthan",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user);
handleObject({
    username: "sam",
    price :999
})

const myNewArray =[200,500,600,100]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

//scope 
