var c = 300
let a = 266
if(true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    function addnum(){

    }
}

// console.log(a);
// console.log(b);
// console.log(c);

//++++++++++++++++  Nesteed Scope  +++++++++

function one(){
    const username = "Ankit"

    function two(){
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website);
    two()

}

// one()

if(true){
    const username = "Ankit"
    if(username === "Ankit"){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++ Intresting +++++++++++++ //

console.log(addone(5));

function addone(num){
    return num+ 1
}

// addTwo(5) // it will error as before initialised

const addTwo = function (num){
    return num + 2
}
