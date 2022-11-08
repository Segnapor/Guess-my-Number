'use strict';
 
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');
let score = (document.querySelector('.score'));
const btnCheck = document.querySelector('.btn-check');
const again = document.querySelector(".btn-again");
let secretNumber = Math.floor(Math.random()*10+1);
let displayMessage = function(text){
    message.textContent = text;
}

let nextScore = 20;
btnCheck.addEventListener(`click`,function(){
    let guess = Number(document.querySelector('.guess').value);
    if(secretNumber === guess )
      {
        displayMessage (`Correct Number :)`);
      document.body.style.backgroundColor = 'green';
     nextScore++;
     score.textContent = nextScore;
     number.textContent = secretNumber;
     if(nextScore > highScore.textContent){
        highScore.textContent = nextScore;
     }
    }
    else if (!guess){
        displayMessage (`Enter Number`);
    }
    else if(secretNumber !== guess)
     if(nextScore > 1 )
    {
     secretNumber > guess ? displayMessage (`Too low`):displayMessage (`Too High`);
     nextScore--;
     score.textContent = nextScore
    }else {
        displayMessage (`Game Over:)`);
     score.textContent= 0;
    }
});

//again button
again.addEventListener('click', function(){

    secretNumber = Math.floor(Math.random()*10+1); 
    number.textContent = '?';
    document.body.style.backgroundColor = '#222';
    (document.querySelector('.guess').value) = '';
    displayMessage (`Start guessing...`);
    score.textContent = 20;

})
console.log(score.textContent);


