let randomNumber = parseInt((Math.random()* 100) + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

// to check user input is valid or not like inputting ..a, b, -3, 400
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Number')
    }
    else if(guess < 1){
        alert('Please enter a number more than 1')
    }
    else if(guess > 100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            cleanGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame();
        }
        else{
            cleanGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
// print msg for the validate number
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess > randomNumber){
        displayMessage(`Number is TOOO High`);
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TOOO Low`);
    }
}

function cleanGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '');     // always work in key value pair
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false
    newGame()

}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    
    newGameButton.addEventListener('click', function (e){
        randomNumber = parseInt((Math.random()* 100) + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playGame = true
    })

}
