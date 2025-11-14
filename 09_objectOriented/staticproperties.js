//prop

class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username :${this.username}`);
    }

   static createId(){
         return `123`
    }

} 

const keerthan= new User('Cofee');
 console.log(keerthan.createId());
  
