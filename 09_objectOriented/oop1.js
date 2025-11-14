const user ={
    username:"keerthan",
    loginCount:8,
    signedIn : true,
    getUserDetails : function(){
        console.log("Got user details from database")
    }

}
// console.log(user['username']);
// console.log(user.getUserDetails());


// constructor function

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount =loginCount;
    this.isLoggedIn =isLoggedIn;
    return this
}


const userOne = new User("Keerthan",12,true)
const userTwo = new User("bOb",18,false)
// console.log(userOne) 