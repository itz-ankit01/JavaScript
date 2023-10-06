const coding = ["js", "ruby", "java", "pyhton", "cpp"]

// Assessing array element using forEach function

// coding.forEach( function (val) {
//     console.log(val);
// } )

coding.forEach( (item) => {
    // console.log(item);
} )

function printMe (item){
    // console.log(item);
}
// coding.forEach(printMe);

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "Js"
    },
    {
        languageName: "python",
        languageFileName: "py"  
    },
    {
        languageName: "java",
        languageFileName: "java"  
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )