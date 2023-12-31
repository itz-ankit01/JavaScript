const user = {
    username: "Hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log('Got user detils from dataBase');
        console.log(`username: ${this.username}`);
        // console.log(this);
        
    }
}



console.log(user.username);
console.log(user.getUserDetails());
console.log(this);  // as user object is not returning anything so, undefined will be console, this refers to whole object

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    
    return this;
}

// const userOne = User("hitesh", 12, true);
// const userTwo = User("ChaiAurCode", 11, false);

// console.log(userOne);
// console.log(userTwo);



// constructor function always give new instances

// const userOne = new User("hitesh", 12, true);
// const userTwo = new User("ChaiAurCode", 11, false);

// console.log(userOne);
// console.log(userTwo);

// console.log(userOne.constructor);

// new keyword : - when u first use new keyword , at first , a empty object is created,      
//               - which is known as instances(or say new empty object) 
//               - Now, a constructor function is called due to new keyword
//               - the argument which has been passed , get injected in this keyword
//               - got a new object         




