'use strict';

const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnhHold = document.querySelector('.btn--hold')


//Starting conditions 
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0

//Rolling dice funcionality
btnRoll.addEventListener('click', function(){
    //1. Generate a random dice roll

    const dice =  Math.trunc((Math.random() * 6) + 1) 

    //2. Display dice

    diceEl.classList.remove('hidden')
    diceEl.src = `/dices/dice-${dice}.png`


    //3. If rolled rolled 1 true, switch to next player
    if(dice !== 1) {
        currentScore += dice
        current0El.textContent = currentScore
    } else {
       
    }
})


