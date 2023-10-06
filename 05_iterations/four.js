const myObject = {
    js: "JavaScript",
    cpp: "C++",
    py: "Python",
    ry: "Ruby"
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}


// forin loop for assessing array element
const prog = ['js', 'rb', 'py', 'cpp']
for (const key in prog) {
    // console.log(prog[key]);
}

// Map
const map = new Map();
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key);    // it will not print anything as map is not iterable
}

