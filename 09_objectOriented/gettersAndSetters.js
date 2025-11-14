class User{
    constructor(email,password){
        this.username = email
        this.password =password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value.toUpperCase()
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password=value.toUpperCase()
    }
}

const keerthan = new User("keerthan.ai","123")
console.log(keerthan.password);