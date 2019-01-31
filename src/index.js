import headsOrTails from '../test/heads-tails.js';
const button = document.getElementById('coin-button');
const image = document.getElementById('coin-image');
const headCount = document.getElementById('head-count');
const tailCount = document.getElementById('tail-count');
let head = 0;
let tail = 0;

button.addEventListener('submit', function(event) {
    event.preventDefault();
    const randomNumber = Math.random();
    let side = headsOrTails(randomNumber);
    if(side === 'heads') {
        image.src = './assets/heads.jpg';
        head++;
        headCount.textContent = 'Head Count: ' + head;

    }
    else {
        image.src = './assets/tails.jpg';
        tail++;
        tailCount.textContent = 'Tail Count: ' + tail;

    }



    image.classList.remove('hidden');

});