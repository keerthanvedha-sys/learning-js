//singelton object
//const tinderUser = new Object()
//console.log(tinderUser);


// non singelton objcet
const tinderUser1 ={}
tinderUser1.id ="1231bc"
tinderUser1.name="Sammy"
tinderUser1.isLoggedIn = false
//console.log(tinderUser1);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Keerthan",
            lastname : "Poojary"

        }

    }
}
//accesing objects inside objects
console.log(regularUser.fullname.userfullname);



//to combine objects
const obj1 = {
    1: "a",
    2 : "b"

}
 
const obj2 ={
    3: "a",
    4: "b"

}
//const obj3 ={obj1,obj2} not a properway

// const object3 = Object.assign({},obj1,obj2)
// console.log(object3);

//another effective way
const obj3={...obj1,...obj2}
console.log(obj3);


//when the value comes from database
const users =[
    {
        id:1,
        email:"h@gmail.com"
    },
     {
        id:1,
        email:"h@gmail.com"
    },
     {
        id:1,
        email:"h@gmail.com"
    },
     {
        id:1,
        email:"h@gmail.com"
    }
]
//to access
users[1].email


console.log(tinderUser1);
console.log(Object.keys(tinderUser1));
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));
console.log(tinderUser1.hasOwnProperty('isLoggedIn'));

