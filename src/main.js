import flipCoin from './flip-coin.js';

const image = document.getElementById('coin-image');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const betForm = document.getElementById('betting-form');
const announceResult = document.getElementById('announce-result');

let winCount = 0;
let lossCount = 0;

betForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const randomNumber = Math.random();
    const result = flipCoin(randomNumber);

    if(result === 'Heads') {
        image.src = '../assets/heads.jpg';
    }
    else {
        image.src = '../assets/tails.jpg';
    }
    image.classList.remove('hidden');

    const bet = betForm.elements.bet.value;

    if(bet === result){
        winCount++;
        wins.textContent = winCount;
        announceResult.textContent = result + '! You won!';
    }
    else {
        lossCount++;
        losses.textContent = lossCount;
        announceResult.textContent = result + '! You lost!';
    }

});