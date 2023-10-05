// Immediately invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()



// (function chai(){
    // named iife
//     console.log(`DB CONNECTED`);
// })();

// ()()  => first parenthesis for function and section parenthesis for execution act as chai()

// iife is used to get rid of pollution that is created by global variable and also helped in immediate execution

// (function aurcode(){
//     console.log(`DB CONNECTED TWO`);
// })();

// using arrow function but it will work only when ; is used to end previous executed function

// ( () => {
//     console.log(`DB CONNECTED THREE`);
// })();



/*
( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})("Ankit");
*/