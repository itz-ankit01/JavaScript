// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsidetemp = null;
let userEmail;

const id = Symbol('123');userEmail
const anotherId = Symbol('123');

// console.log(id === anotherId);
// console.log(id)

const bigNumber = 551810585419815584519n;  // BigInt

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Ankit",
    age: 20
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof scoreValue);
// console.log(typeof outsidetemp);
// console.log(typeof userEmail);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);

// link to Study
// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// Memory
// Stack(Primitive) Heap(Non Primitive)

let myYoutubeName = "hiteshchoudharydotcom"

let anotherName = myYoutubeName;

anotherName = "AnkitAgnihotri";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "Ankit@goole.com"

console.log(userOne.email);
console.log(userTwo.email);