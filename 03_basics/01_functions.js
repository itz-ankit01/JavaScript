
function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);


function addTwoNumbers(number1, number2){
   let result = number1 + number2
   return result
}


// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){
    if(username === undefined){
        console.log("Please enter a user name");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Ankit"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());


//shopping cart

function calculateCartPrice (val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2200));  // it will return an array [ 200, 400, 500 ]

const user = {
    username: "Ankit",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);

// passing objeect as argument in the function

handleObject({
    username: "Sam",
    price: 399
});


//  passing array as argument in the function

const myArray = [100, 200, 300, 400];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myArray));
// console.log(returnSecondValue([100, 235, 663]));


