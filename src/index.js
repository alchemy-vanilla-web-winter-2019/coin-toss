
import headsOrTails from './heads-or-tails.js';

const coinPics = document.getElementById('coins');
const frontNode = document.getElementById('head-count');
const tailsNode = document.getElementById('tails-count');
const formInput = document.getElementById('form-input');

let frontCount = 0;
let tailsCount = 0;




formInput.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    const coinFlip = headsOrTails(randomNumber);
    let imageSource = '';

    if(coinFlip === 'heads') {
        imageSource = './assets/front.jpg';
        frontCount++;
        frontNode.textContent = frontCount;
    }

    else {
        imageSource = './assets/tail.jpg';
        tailsCount++;
        tailsNode.textContent = tailsCount;
    }

    coinPics.src = imageSource;
    coinPics.classList.remove('hidden');


});

formInput.addEventListener('submit', function(event){
    event.preventDefault();

    
});


