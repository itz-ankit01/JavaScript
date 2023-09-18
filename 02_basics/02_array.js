// Array

const marvel_heroes = ["Captain America", "thor", "IronMan"];
const dc_heroes = ["Batman", "Superman", "Flash"]

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

const allHeros = marvel_heroes.concat(dc_heroes)  // concat returns a new array
// console.log(allHeros);

const all_new_heros = [...dc_heroes, ...marvel_heroes];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Ankit"));
console.log(Array.from("Ankit"));    // string to array
console.log(Array.from({name: "Ankit"}));  // intresting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));