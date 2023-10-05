const myObject = {
    js: "JavaScript",
    cpp: "C++",
    py: "Pyhton",
    ry: "Ruby"
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const prog = ['js', 'rb', 'py', 'cpp']
for (const key in prog) {
    console.log(prog[key]);
}