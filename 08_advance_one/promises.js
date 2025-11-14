const promiseOne =new Promise(function(resolve,reject){
   // do an async task
   //DB calls,cryptography,network
   setTimeout(function(){
console.log('Async task is complete');
 resolve()

   },1000)

})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log('async task 2');
    resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree =new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve({username:"keerthan",email:'Keerthan@google.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
  let error = true
     if(!error){
        resolve({usename:"Keerthan",password:"123"})
     }else{
        reject('ERROR:something went wrong')
     }

    },1000)
})

promiseFour.then((user)=>{
console.log(user);
return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promised is either resolved or rejected");
    
})


const promiseFive =new Promise(function(resolve,reject){
    setTimeout(function(){
  let error = true
     if(!error){
        resolve({usename:"javascript",password:"123"})
     }else{
        reject('ERROR:js went wrong')
     }

    },1000)
})

promiseFive.then(()=>{
    setTimeout(function(){
        console.log(username)
    })
}).catch((error)=>{
    console.log(error);
})

// async await

// async function getALLUsers(){
//     try{
//       const  response = await fetch('https://jsonplaceholder.typicode.com/users')
//       const data =await response.json()
//       console.log(data);
//     }catch(error){
//         console.log("E:",error);
//     }

// }

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
   return response.json()
}).then((data)=>{
console.log(data)
}).catch((error)=>{
    console.log(error)
})