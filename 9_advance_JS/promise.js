const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls , cryptography, network calls
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()   // resolve call after that refer to then()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed');        // resolve connected to then()
})


// or can create promise by this method

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },2000)
}).then(function(){
    console.log('Async task 2 resolved');
})

// promise Three

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"chai@example.com"})
    },2000)
})

promiseThree.then(function(user){
    console.log(user);
})

// Promise 4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Hitesh", password:"123"})
        }else{
            reject("ERROR OCCURED: Something went wrong");
        }
    }, 2000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise is either resolved or rejected"))


// Promise 5

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript", password:"1234"})
        }else{
            reject("ERROR: JS went wrong");
        }
    }, 2000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data =await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getAllUsers()


// same work by then and catch method

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
.finally(() => console.log("Promised is resolved or rejected"))



// Promise.all

function fakePromise(name, delay){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
            resolve(`${name}`);
       }, delay)
    });
}

const promise1 = fakePromise('Kacha Badam', 1000);
const promise2 = fakePromise('Aayesha', 2000);
const promise3 = fakePromise('Nazilla', 1500);
const promise4 = fakePromise('Manara', 1000);

Promise.all([promise1, promise2, promise3, promise4]).then((response) => {
    console.log(response);
})