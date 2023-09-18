const name = "Ankit"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ankit-Sharma-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-8, 7)
// console.log(anotherString);

const newStringOne = "   Ankit.    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://ankit.com/ankit%20sharma"
// to replace some middle part

// console.log(url.replace('ankit', 'prince'));

// to search 
// console.log(url.includes('Ankit'));

// convert string to array
console.log(gameName.split('-'));




