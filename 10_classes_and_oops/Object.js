function multiplyBy5(num){
    return num*5;
}

// function function bhi hai or function object bhi h
multiplyBy5.power = 2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function (){
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("Chai", 25)   // new keyword prototype jo new property add ki gayi h, chai ko bata raha h
const tea = createUser("Tea", 250)

chai.printMe()


/*

Here is what happens behind the scenes when the new keyboard is used:

A new Object is created: The new keyboard initiates the creation of a new JavaScript Objects.

A Protoytpe is linked: The newly created Object gets linked to the prototype property of the constructor function. This means that it has access to propertis and methods defined on the constructor's prototype.

The Constructor is called: The constructor function is called with the specific argumnets and this is bound to the newly created objecvt. if no explicit return value is specified from the constructor. Javascript assumes this, the newly created object, to be intended to return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value(object, array, function, etc.), the newly created object is returned

*/
