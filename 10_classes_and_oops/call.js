function setUserName (username){

    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // setUserName(username)    // this will not work


    // setUserName.call(username)   /// this will not work as after calling , execution context of setUserName is removed from callstack after function finishes, so the value has been set in this keyword of setUserName , after the function finishes and removed from callstack, value got also removed 


    setUserName.call(this, username)              // .call to hold reference or store the usernmae in the argumented this, of called function
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@google.com", "123")
console.log(chai);