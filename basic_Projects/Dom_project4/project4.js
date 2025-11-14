let randomNumber = parseInt(Math.random() * 100 + 1);
const sumbit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  sumbit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('please enter number greater than zero');
  } else if (guess > 100) {
    alert('Please enter a number less than 101');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      cleanUp(guess);
      displayMessage(`Game Over.Random Number was ${randomNumber}`);
      endGame();
    } else {
      cleanUp(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`guess higher`);
  } else if (guess > randomNumber) {
    displayMessage(`guess lower`);
  }
}

function cleanUp(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
 const newGamButton = document.querySelector('#newGame')
 newGamButton.addEventListener('click',function(e){
   randomNumber =parseInt(Math.random()*100+1);
   prevGuess=[]
   numGuess=1
   guessSlot.innerHTML= ''
   remaining.innerHTML = `${11-numGuess}`;
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
   playGame=true
 })
}
