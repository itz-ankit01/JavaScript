class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

//kv kv app is property ko aap har use object ko nhin dena chahte jo iss class se instanciate hua hai
// static is method ko access hone se rok deta hai

    static createId(){
        return `123`        // for unique id we can use math.random but let's assume it is unique
    }
}

const hitesh = new user("hitesh")
// console.log(hitesh.createId());

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

// console.log(iphone);
// iphone.logMe();
console.log(iphone.createId());