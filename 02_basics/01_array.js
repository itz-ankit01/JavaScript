// Array

const myArr = [0, 1, 2, 3, 4, 5]
const Heros = ["Shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);
// console.log(myArr);

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9)  // to add any element at the starting of the array
// myArr.shift()    // to delete first element of the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// ++++++++++++ slice and splice ++++++++++++++++++ //

console.log("A -> ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B -> ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C -> ", myArr);

// console.log(myArr2)