"use strict";
/*
document.querySelector(".message").textContent = `🎉 Correct Number`;

console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;

document.querySelector(".score").textContent = 18;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

// When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost game!`;
      document.querySelector(`.score`).textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost game!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = (document.querySelector(`.score`).textContent = 20);

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener(`click`, function () {
  let guess = Number(document.querySelector(`.guess`).value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage(`⛔ No number!`);

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number`);
    score++;
    document.querySelector(`.score`).textContent = score;

    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#60b347`;

    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
    }

    document.querySelector(`.highscore`).textContent = highScore;

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You lost game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = document.querySelector(`.score`).textContent = 20;
  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).textContent = `?`;

  document.querySelector(`.guess`).value = "";

  document.querySelector(`body`).style.backgroundColor = `#222`;

  document.querySelector(`.number`).style.width = `15rem`;
});
