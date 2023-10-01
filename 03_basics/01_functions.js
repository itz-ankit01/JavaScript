
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
