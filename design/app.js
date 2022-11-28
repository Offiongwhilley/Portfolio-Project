'use strict';

//setting random number to be guessed
let secretNumber = Math.trunc (Math.random() *20+1);
console.log(secretNumber);

//retrieving all elements from DOM and storing them in variables, to be used in implementing the game logic
const body = document.querySelector('body');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const guess = document.querySelector('.guess')
const submitGuess = document.querySelector('.submit');
const playAgain = document.querySelector('.again');
const giveUp = document.querySelector('.give-up');
let score = 20;
let bestScore = 0

//implenting game logic

submitGuess.addEventListener('click', function () {

    //this converts the typeof `.guess` to number (being that the input type of input element is string) and then stores it in a variable so we can use in our code
    const guess = Number(document.querySelector(`.guess`).value);
    console.log(typeof guess);

    //when player does not enter a number
    if (!guess) {
        message.textContent="You haven't enetered a number!"

        //when player enters correct number
    }else if (guess === secretNumber){
        message.textContent ="Correct guess! Well done!";
        number.style.backgroundColor = 'white';
        number.style.width = '15rem';
        number.textContent = secretNumber;
        body.style.backgroundColor = "green";

        if (score > bestScore) {
            bestScore = score;
            document.querySelector('.best-score').textContent = bestScore;
        }

    //when player's input is lower than secret number
    }else if (guess < secretNumber){
        if(score >= 1){
        message.textContent = "Your guess is too low!";

        score--;
        document.querySelector('.score').textContent = score;

        }else
        message.textContent = "You lost the game!";


    //when player's input is lower than secret number
    }else if (guess > secretNumber){
        if(score >= 1){
            message.textContent = "Your guess is too high!";

            score--;
            document.querySelector('.score').textContent = score;
    
            }else
            message.textContent = "You lost the game!";
    }
})


//this function resets the game
playAgain.addEventListener('click', function () {
    body.style.backgroundColor = "white";

    number.style.backgroundColor = "red";

    number.style.width = "7rem";

    number.textContent = "?";

    message.textContent = "Start guessing...";

    const guess = document.querySelector('.guess').value = "";

    document.querySelector('.score').textContent = "0";

    document.querySelector('.best-score').textContent = "0";

})

//this function is invoked when the player gives up.
giveUp.addEventListener('click', function () {
    
    message.textContent= "Awwww! We hope you come back sometime!"

    message.style.fontSize = "1rem"

    body.style.backgroundColor = "white";

    number.style.backgroundColor = "red";

    number.style.width = "7rem";

    number.textContent = "?";

    const guess = document.querySelector('.guess').value = "";

    document.querySelector('.score').textContent = "0";

    document.querySelector('.best-score').textContent = "0";

})
