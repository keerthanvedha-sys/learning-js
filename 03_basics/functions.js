function sayMyName(){
  console.log("Keerthan");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){
   let result = number1+number2
   return result
 }

const result = addTwoNumbers(5,8)
// console.log("Result: ",result);

function loginUserMessage(username){
    if(username=== undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Keerthan"));