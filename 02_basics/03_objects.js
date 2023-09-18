// Singleton

// object literals

// Object.create
const mySym = Symbol("key1");
const JsUser = {
    name: "Ankit",
    "full name": "Ankit Agnihotri",
    [mySym]: "myKey1",
    age: 20,
    location: "Bihar",
    email: "ankit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "chat@ckdm.com";
// Object.freeze(JsUser);   // after using freeze nothing can be changed or add
JsUser.email = "chat@nxaxnijnxi.com";

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

