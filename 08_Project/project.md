# Projects Related to DOM

## Project Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

[project made By hiteshchoudhary](https://github.com/hiteshchoudhary)

# Solution Code

## Project 1(Color Changer)

```javascipt
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = e.target.id;
        break;
    }
  })
);

```

## Project 2 (BMI Calculator)

```Javascipt
const form = document.querySelector('form');

// usecase when need empty value

//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height === ' ' || height <= 0 || isNaN(height)) {
    result.innerHTML = 'Plz Enter valid Number';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Plz Enter valid Weight';
  } else {
    const bmi = (weight/(height * height/10000)).toFixed(2)
    if(bmi < 18.6){
      result.innerHTML = `<span> Your Bmi Weight is ${bmi} which is Under Weight`
    } else if ( bmi < 24.9){
      result.innerHTML = `<span> Your Bmi Weight is ${bmi} which is Normal Range`
    }else{
      result.innerHTML = `<span> Your Bmi Weight is ${bmi} which is OverWeight`
    }
  }
});

```

## Project 3 (DigitalClock)

```javascript
const clock = document.querySelector("#clock");
setInterval(() => {
  let time = new Date();
  clock.innerHTML = time.toLocaleTimeString();
}, 1000);
```

## Project 4 (Guessing Number)

```javascipt
let userInputGuessNumber = document.querySelector("#guessField")

const submit = document.querySelector("#subt")

const prevGuessesSlot = document.querySelector(".guesses")

const remainingGuess = document.querySelector('.lastResult')

const lowOrHigh = document.querySelector('.lowOrHi')

const startOver = document.querySelector(".resultParas")

let randomNumber = Math.floor(Math.random() * 100 + 1)
const wrapper = document.getElementById('wrapper')
const div = document.createElement('div')

let prevGuess = []
let playGame
let numGuess = 1

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    const inputValue = userInputGuessNumber.value
    guessValitaion(inputValue)
  })
}


function guessValitaion(guess) {
  if (isNaN(guess) || guess === "" || guess === " ") {
    alert("Please Enter Valid Number")
  } else if (guess < 0) {
    alert("Please Enter a Number greater than 0")
  } else if (guess > 100) {
    alert("please Enter a Number smaller than 100")
  } else {
    prevGuess.push(guess)
    if (numGuess === 9) {
      displayGuess(guess)
      displayMsg(`Failed to Guess Number. Correct Number: ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      guessChecker(guess)
    }
  }
}

function guessChecker(guess) {
  if (guess > randomNumber) {
    displayMsg(`Your guess Number ${guess} tooo Greater`)
  } else if (guess < randomNumber) {
    displayMsg(`Your guess Number ${guess} tooo smaller`)
  } else {
    displayMsg(`Your guess Number ${guess} is Correct`)
    endGame()
  }
}

function displayGuess(guess) {
  userInputGuessNumber.value = ""//clearing value
  prevGuessesSlot.innerHTML += `  ${guess}, `
  numGuess++;
  remainingGuess.innerHTML = `${10 - numGuess}`
}

function displayMsg(msg) {
  lowOrHigh.innerHTML = `${msg}`
}

function endGame() {
  userInputGuessNumber.value = ""
  userInputGuessNumber.setAttribute('disabled', "")
  div.classList.add('btn')
  div.innerHTML = `<button id="newGame">Start New game</button>`
  startOver.appendChild(div);
  playGame = false;
  startGame()
}

function startGame() {
  const newGame = document.getElementById('newGame')
  newGame.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    prevGuessesSlot.innerHTML = ""
    remainingGuess.innerHTML = `${10 - numGuess}`
    userInputGuessNumber.removeAttribute('disabled')
    startOver.removeChild(div)
    playGame = true
  })
}
```

##Project 5 (Keybord key)

```javascript

```

##Project 6 (Color Changer infinity)

```javascript
const Stop = document.querySelector("#stop");
const Start = document.querySelector("#start");
let intervalId;

const randomColorGenerate = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(changebgColor, 1000);
  }

  function changebgColor() {
    document.body.style.backgroundColor = randomColorGenerate();
  }
};

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

Start.addEventListener("click", startChangingColor);
Stop.addEventListener("click", stopChangingColor);
```
