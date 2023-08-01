'use strict'

const score0El = document.getElementById('score--0'),
    score1El = document.getElementById('score--1'),
    player1 = document.getElementById('current--0'),
    player2 = document.getElementById('current--1'),
    diceEl = document.querySelector('.dice'),
    btnRoll = document.querySelector('.btn--roll'),
    btnNew = document.querySelector('.btn--new'),
    btnHold = document.querySelector('.btn--hold');



diceEl.classList.add('hidden');

let scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playerActive = true;

const gameIn = () => {
    score0El.textContent = 0;
    score1El.textContent = 0;
    player1.textContent = 0;
    player2.textContent = 0;
    scores = [0,0];
}
gameIn();
let switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player--active').classList.remove('player--active');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    currentScore = 0;
}
btnRoll.addEventListener('click', function () {
    if (playerActive) {
        //gernrate dics number
        const diceNumber = Math.trunc(Math.random() * 6 + 1);
        diceEl.classList.remove('hidden');
        // diceEl.setAttribute('src',`dice-${diceNumber}.png`);
        diceEl.src = `dice-${diceNumber}.png`;
        //calc Score
        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }

})

btnHold.addEventListener('click', function () {
    if (playerActive) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    console.log(scores);
    if (scores[activePlayer] >= 20) {
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        diceEl.classList.add('hidden');
        playerActive = false;
    } else {
        switchPlayer();
    }

    }
})

btnNew.addEventListener('click',function(){
    playerActive = true;
    currentScore = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    diceEl.classList.remove('hidden');
    gameIn();
})