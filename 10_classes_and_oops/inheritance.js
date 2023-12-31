class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)     // no need to use .call() function
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "email@teacher.com", "123")

// chai.addCourse();
chai.logMe();   // chai also has logMe bcuz it inherit all property  from user

const masalaChai = new user("masalaChai")
masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof user);
console.log(masalaChai instanceof Teacher);