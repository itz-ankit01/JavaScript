const user = {
    username: "Ankit",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// Object.freeze(user);
// user.username = "Sam"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username =  "Ankit"
//     console.log(this.username);
// }

// chai()


// const chai = function(){
//     let username = "Ankit"
//     console.log(this.username);
// }



const chai = () => {
    let username = "Ankit"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }



// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2)

// we have to use parenthesis to return an object otherwise it will give an error undefined
const addTwo = (num1, num2) => ({username:"Ankit"})

console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8];


// iterate an array
myArray.forEach(function(element) {
    console.log(element);
});
