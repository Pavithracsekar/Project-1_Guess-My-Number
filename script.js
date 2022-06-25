'use strict';
/* 
//Start Guessing
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

//?
console.log(document.querySelector('.number').textContent);
document.querySelector('.number').textContent = 13;
console.log(document.querySelector('.number').textContent);

//Score
console.log(document.querySelector('.score').textContent);
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.score').textContent);

//Input feild
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

//On click-do Event Handling
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//After DRY principle- created function to replace common message code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    //No input is entered
    //document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    //Number is same as Secret no.
    // document.querySelector('.message').textContent = '🏆Correct Number!';
    displayMessage('🏆Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    //css style mainupaltion
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';

    //setting HighScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      /* document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      score--; */
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '☹ You Lost!';
      displayMessage('☹ You Lost!');
    }
  }
  //Before Applying DRY Principle
  /* else if (guess > secretNumber) {
    //Number is higher than Secret no.
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹ You Lost!';
    }
  } else if (guess < secretNumber) {
    //Number is lower than Secret no.
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹ You Lost!';
    }
  } */
});

//Adding Event Handler for AGAIN button and Resetting GAME
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
