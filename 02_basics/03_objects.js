// singleton

// object literals
const mySym = Symbol("key1")

const jsUser ={
    name:"Keerthan",
    "full name" : "Keerthan v v",
    [mySym]:"mykey1",
    age:18,
    email:"Keerthan@google.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Saturday"]

}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);


jsUser.email ="keertan@gmail.com"
// to stop objects from further updates
//Object.freeze(jsUser)
jsUser.email="keerthan@microsoft.com"
console.log(jsUser);

//adding functions
jsUser.greeting= function(){
    console.log("Hello js user")
}
jsUser.greetingtwo =function(){
    console.log(`hello Js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
