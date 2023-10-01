// const tinderUser = new Object ();

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy"
tinderUser.isLOggedIn = false
// console.log(tinderUser);

const regularApp = {
    email: "Some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Ankit",
            lastname: "Agnihotri"
        }
    }
}

// console.log(regularApp.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "an@gmail.com"
    },
    {
        id: 2,
        email: "ank@gmail.com"
    },
    {
        id: 1,
        email: "anghj@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLOggedIn'));

// Destructure

const course = {
    course: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor);
// console.log(instructor);

// API structure( all api is in json format)
// {
//     "name": "Hitesh",
//     "coursename": "JS in Hindi",
//     "price": "free"
// }


// API in the form of array ( all api is in json format)
[
    {},
    {},
    {}
]