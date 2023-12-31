let myName = "hitesh     ";
let myChannel = "chai     ";

// console.log(myName.trim().length);
// console.log(myName.trim().length);

// we want to create a method trueLength


myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function (){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function (){
    console.log(`Hitesh is present in all object`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh say hllo`);
}

// heroPower.hitesh()           // object
// myHeros.hitesh()                // Array. array is also object, so it will have the object prototype

// myHeros.heyHitesh()

// heroPower.heyHitesh()    // error object has no power , array wala



const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport          // now TeachingSupport and TASupport has been connected
}

Teacher.__proto__ = user


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUserName = "ChaiAurCode           ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
