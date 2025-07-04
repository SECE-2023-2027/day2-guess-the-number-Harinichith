'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');
const numberDisplay = document.querySelector('.number');
const checkButton = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const displayMessage = function (msg) {
  message.textContent = msg;
};
checkButton.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  if (!guess) {
    displayMessage('⛔ No number entered!');
  }
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberDisplay.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    numberDisplay.style.width = '150px';

    if (score > highscore) {
      highscore = score;
      highscoreDisplay.textContent = highscore;
    }
  }
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreDisplay.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreDisplay.textContent = 0;
    }
  }
});
