// if
// const isUserLoggedIn = true;
// if(isUserLoggedIn){

// }

// if(2 == "2"){
//     console.log("Executed");
// }
// if(2 === "2"){
//     console.log("Executed");
// }
// else{
//     console.log("Not executed");
// }

// <, >, <=, >=, ==, !=, ===, !==
// === it also compares the type

const score = 200
if(score > 100){
    let power = "Fly"
    console.log(`Used Power: ${power}`);
}
// console.log(`Used Power: ${power}`);   // it will error power is not defined here out of scope

// Shorthand notation

const balance = 1000;
// if(balance > 500) console.log("Test1"), console.log("test2");

// if(balance < 500){
//     console.log("Less than 500");
// }
// else if(balance < 750){
//     console.log("Less than 750");
// }
// else if(balance < 950){
//     console.log("Less than 950");
// }
// else {
//     console.log("Less than 1200");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromGmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGmail || loggedInFromGoogle){
    console.log("User Logged In");
}

