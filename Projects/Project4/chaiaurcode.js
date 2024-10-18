let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const textfeild = document.querySelector('#guessField');
const previusguessies = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let preguess = [];
let numguess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(textfeild.value);
    validateguess(guess);
  });
}

function validateguess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    preguess.push(guess);
    if (numguess === 10) {
      displayguess(guess);
      displaymessage(`game over. Random number was ${randomNumber}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomNumber) {
    displaymessage('you guessed it right');
    endgame();
  } else if (guess < randomNumber) {
    displaymessage('number is tooo low');
  } else if (guess > randomNumber) {
    displaymessage('number is tooo high');
  }
}

function displayguess(guess) {
  textfeild.value = '';
  previusguessies.innerHTML += `${guess},`;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
  loworhi.innerHTML = `<h2> ${message} </h2>`;
}

function endgame() {
  textfeild.value = '';
  textfeild.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">start new game</h2>`;

  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preguess = [];
    numguess = 1;
    previusguessies.innerHTML = `${11 - numguess}`;
    textfeild.removeAttribute('disabled');
    startover.removeChild(p);

    playgame = true;
  });
}
