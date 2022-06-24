'use strict';
//Selecting Element
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer=activePlayer === 0 ? 1 : 0;
    currentScore=0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Starting Condition


let score,currentScore,activePlayer,playing;

const init = function() {

    score=[0,0];
    currentScore=0;
    activePlayer=0
    playing=true;

    
    
    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent=0;
    current0El.textContent=0;
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();
//Rolling dice Functionality
btnRoll.addEventListener('click',function(){
    if(playing){
        //1. Generating random dice value.
        var dice=Math.trunc(Math.random()*6)+1;
        console.log(dice);
        //2.Display dice.
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        //3.Check for Rolled 1
        if(dice!==1){
            //Add dice to current score.
            currentScore+= dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }else{
            //Switch to next player.
            
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click',function(){
    if(playing){
        //1.add currentscore to active player score
        score[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
        
        //2.check if player score is more than 100.
        if(score[activePlayer]>=10){
            playing=false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.toggle('player--active');
        }
        else{
            //3.Switch to the next player.
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click',init)