const form = document.querySelector('form')

// form jab submit hota h ya to post type se submit hota hai ya get type se

// lekin jab bhi submit hota uski value url me ya server k pass chali jaati h hame usko rokna hota hai qnki ham value server j ka pass to bhej nhi rahe hai

// wo rokne kliye event pe ek method milta hai


// this usecase will give u empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()         // value server k pass jane se rokta hai
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid height";
    }

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
       const bmi =  (weight/((height*height)/10000)).toFixed(2)
       // show result
       if(bmi < 18.6){
        results.innerHTML = `<span>The person is underWeight: ${bmi}</span>`
       }
       else if(bmi >= 18.6 & bmi < 24.9){
        results.innerHTML = `<span>The person is Normal: ${bmi}</span>`
       }
       else if(bmi >= 24.9){
        results.innerHTML = `<span>The person is OverWeight: ${bmi}</span>`
       }
    }


})