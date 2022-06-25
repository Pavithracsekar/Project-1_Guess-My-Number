'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const manipulateColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const manipulateWidth = function (width) {
  document.querySelector('body').style.backgroundColor = width;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//Adding Event Handler for CLICK button and Actual Logic of Guess My Number Game
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //No input is entered
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    //Number is same as Secret no.
    displayMessage('🏆Correct Number!');
    displaySecretNumber(secretNumber);

    //css style mainupaltion
    manipulateColor('#60b347');
    manipulateWidth('30rem');

    //setting HighScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    //Checks if number is higher or lower than SecretNumber
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      //if Score recheas 0, display Lost
      displayMessage('☹ You Lost!');
      displayScore(0);
    }
  }
});

//Adding Event Handler for AGAIN button and Resetting GAME
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  displaySecretNumber('?');
  document.querySelector('.guess').value = null;

  manipulateColor('#222');
  manipulateWidth('15rem');
});
