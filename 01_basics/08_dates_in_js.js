// Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 11, 23, 5, 3)
// let myCreatedDate = new Date("2023-09-18")
let myCreatedDate = new Date("09-18-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// in second
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // jan = 0, feb = 1 .... dec = 11
console.log(newDate.getDay());  // monady = 1, tuesday = 2.....
console.log(newDate.getDate());

// console.log(`today date is${newDate.getDate()} and time is ${newDate.getTime()} in milliseconds `);

let s = newDate.toLocaleString('default', {
    weekday: 'long',

})

console.log(s);