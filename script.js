'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const rollDiceEl = document.querySelector('.btn--roll');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const holdEl = document.querySelector('.btn--hold');
const newGameEl = document.querySelector('.btn--new');

score0El.textContent = 0;
score1El.textContent = 0;

let scoreOfPlayer0 = score0El.textContent * 1;
let scoreOfPlayer1 = score1El.textContent * 1;
let currentScore0;
let currentScore1;

diceEl.classList.add('hidden');

// if (scoreOfPlayer0 === 10 || scoreOfPlayer1 === 10) {
//   if (scoreOfPlayer0 === 10) {
//     player0.textContent = 'Player1 Wins🎉🎉';
//   } else if (scoreOfPlayer1 === 10) {
//     player1.textContent = 'Player2 Wins🎉🎉';
//   }

//   setTimeout(resetGame, 2000);
// }

rollDiceEl.addEventListener('click', function () {
  let diceValue = Math.ceil(Math.random() * 6);
  diceEl.src = `dice-${diceValue}.png`;
  diceEl.classList.remove('hidden');

  if (diceValue === 1) {
    if (player0.classList.contains('player--active')) {
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
      scoreOfPlayer0 = 0;
      currentScore0 = 0;
      current0El.textContent = currentScore0;
      score0El.textContent = scoreOfPlayer0;
    } else if (player1.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      player0.classList.add('player--active');
      scoreOfPlayer1 = 0;
      score1El.textContent = scoreOfPlayer1;
      currentScore1 = 0;
      current1El.textContent = currentScore1;
    }
  }

  if (player0.classList.contains('player--active')) {
    scoreOfPlayer0 += diceValue;
    score0El.textContent = scoreOfPlayer0;
  } else if (player1.classList.contains('player--active')) {
    scoreOfPlayer1 += diceValue;
    score1El.textContent = scoreOfPlayer1;
  }
});

holdEl.addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    currentScore0 = scoreOfPlayer0;
    current0El.textContent = currentScore0;
    score0El.textContent = 0;
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else if (player1.classList.contains('player--active')) {
    currentScore1 = scoreOfPlayer1;
    current1El.textContent = currentScore1;
    score1El.textContent = 0;
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
});

function resetGame() {
  diceEl.classList.add('hidden');
  scoreOfPlayer0 = 0;
  scoreOfPlayer1 = 0;
  currentScore0 = 0;
  currentScore1 = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = currentScore0;
  current1El.textContent = currentScore1;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
}

newGameEl.addEventListener('click', resetGame);
