import leftOrRight from './left-or-right.js';

const former = document.getElementById('former');
const image = document.getElementById('arrow-pic');

let win = 0;
let loss = 0;
let winCount = document.getElementById('win-count');
let lossCount = document.getElementById('loss-count');


former.addEventListener('submit', function(event) {
    event.preventDefault();
    const direction = leftOrRight(Math.random());
    let imageSource = '';
    if(direction === 'left') {
        imageSource = './assets/left-arrow.png';
    } else {
        imageSource = './assets/right-arrow.png';
    }
    image.src = imageSource;
    image.classList.remove('hidden');

    
    const choice = former.direction.value;
    let status = document.getElementById('status');

    if(choice === direction) {
        status.textContent = 'Ya won';
        win++;
        winCount.textContent = win;
    } else {
        status.textContent = 'Ya lost. noob';
        loss++;
        lossCount.textContent = loss;
    }
    
});