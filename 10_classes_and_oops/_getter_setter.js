class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    // each class consist of getter and setter by default, getter define kiya to setter v define krna pdega
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}hitesh`
    } 

    set password(value){
        this._password = value
    }
}

const hitesh = new user("h@hitesh.ai", "abc")
console.log(hitesh.password);
console.log(hitesh.email);