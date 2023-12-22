const clock = document.getElementById('clock')
// document.querySelector('#clock')



// hmesha run hote rhe iskeliye setInterval

// setInterval(function (){}, 1000)  => inside setInterval first function , second time interval
setInterval(function (){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)