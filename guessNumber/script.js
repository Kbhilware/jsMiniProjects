'use strict'



let gameNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.score').textContent = score;

const scoreHandler = () => {
    if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.score').textContent = 0;
        document.querySelector('.message').textContent = "You Lost the game!"
    }
}
let highScoreHandler = () => {
    if (highScore < score) {
        highScore = score;
    }
}
let textHandler = (className, message) => {
    document.querySelector('.' + className).textContent = message;
}

console.log(gameNumber);
document.querySelector('.check').addEventListener('click', function () {
    const inputVal = Number(document.querySelector('.guess').value);
    if (!inputVal) {
        textHandler('message', 'No Number')
    } else if (inputVal !== gameNumber) {
        textHandler('message', inputVal > gameNumber ? 'Heiger Number!' : 'Lower Number!')
        scoreHandler();
    } else if (inputVal === gameNumber) {
        textHandler('message', 'Correct Number!');
        document.querySelector('body').style.backgroundColor = "green"
        document.querySelector('.number').style.width = '30rem';
        highScoreHandler();
        textHandler('highscore', highScore);
        textHandler('number', gameNumber);
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    gameNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(gameNumber);
    document.querySelector('.number').style.width = "15rem";
    textHandler('number', '?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    textHandler('message', 'Start guessing...');
    textHandler('score', score);
})
