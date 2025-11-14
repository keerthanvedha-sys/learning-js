// let myName ="keerthan    "
// //console.log(myName.trim().length);
// console.log(myName.trueLength); //challenge make this function


let myHeros = ["thor","spiderman"]

let heroPower ={
    thor:"hammer",
    spiderman : 'sling',

    getspiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Array.prototype.heyKeerthan =function(){
    console.log(`keerthan says hello`)
}

Object.prototype.Keerthan =function(){
    console.log(`Keerthan is present in all objects`);
}

heroPower.Keerthan();
myHeros.Keerthan();
myHeros.heyKeerthan();
//heroPower.heyKeerthana();


//inheritance

const user ={
    name:"username",
    email: "keerthan@gmail.com"
}

const Teacher ={
    makeVedio:true
}

const TeachingSupport ={
    isAvailable:false
}

const TaSupport ={
    makeAssignment :'JS assignment',
    fullTime:true,
    __proto__: TeachingSupport
}

//Teacher.__proto__ =user

// modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
console.log(TeachingSupport.makeVedio);


let anotherUsername ="Keerthan  "

String.prototype.trueLength =function(){
    console.log(`${this}`)
    console.log(`true length is:${this.trim().length}`);


}

anotherUsername.trueLength();
"GIthub".trueLength();





