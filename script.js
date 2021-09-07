'use strict';


//let message = document.querySelector('.message').textContent;
//let highscore = document.querySelector('.highscore');
//let score = document.querySelector('.score');
//let secretNumber = document.querySelector('.number').textContent;

//const check = document.querySelector('.check');
//const again = document.querySelector('.again');

//It generates random numbers between 1 and 20

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const pageNumber = document.querySelector('.number');
const pageGuess = document.querySelector('.guess');
const pageMessage = document.querySelector('.message');
const pageCheck = document.querySelector('.check');
const pageBody = document.querySelector('body');
const pageScore = document.querySelector('.score');
const PageHighscore = document.querySelector('.highscore');

const displayMessage = function (message) {
    pageMessage.textContent = message;
};

pageCheck.addEventListener('click', function () {
    const guess = Number(pageGuess.value);
    console.log(secretNumber);


    //No guess
    if(!guess) {
        displayMessage('⛔️ no number!');
        console.log(guess);
    
    //The guess is correct
    } else if(guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        pageNumber.textContent = secretNumber;
        pageBody.style.backgroundColor = '#60b347';
        pageNumber.style.width = '30rem';


        if(highscore < score) {
            highscore = score;
            pageHighscore.textContent = highscore;
        }

    //The guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1 ) {
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
            score--;
            pageScore.textContent = score;
             
        } else {
            displayMessage('💥 You lost the game!');
            pageScore.textContent = 0;
        }
    }
    
    /*
     else if (guess > secretNumber){
        displayMessage('Too high');
        score--;
        document.querySelector('.score').textContent = score;

    //The guess is too low
    } else if (guess < secretNumber) {
        displayMessage('Too low');
        score--;
        document.querySelector('.score').textContent = score;
    }
    */
});


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    pageScore.textContent = score;
    pageNumber.textContent = '?';
    pageGuess.value = '';

    pageBody.style.backgroundColor = '#222';
    pageNumber.style.width = '15rem';
});
