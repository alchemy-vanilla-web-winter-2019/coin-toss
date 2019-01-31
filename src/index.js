import coinFlip from './coin-flip.js';

let winCount = 0;
let lossCount = 0;
const coinPic = document.getElementById('coin-pic');
const flipForm = document.getElementById('flip-form');
const winNode = document.getElementById('wins')
const lossNode = document.getElementById('losses');
const betResult = document.getElementById('bet-result');

flipForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const randomNumber = Math.random();
    const flipResult = coinFlip(randomNumber);

    if(flipResult === 'heads') {
        coinPic.src = '../assets/heads.jpeg';
    }
    else {
        coinPic.src = '../assets/tails.jpeg';
    }

    const bet = flipForm.elements.flip.value;

    if(bet === flipResult) {
        winCount++;
        winNode.textContent = winCount;
        betResult.textContent = 'YOU WIN!';
    }
    else {
        lossCount++;
        lossNode.textContent = lossCount;
        betResult.textContent = 'YOU LOSE!';
    }
    
});
