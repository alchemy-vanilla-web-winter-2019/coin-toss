import warfTasha from './warfOrTasha.js';

const winnerImage = document.getElementById('officerPics');
const startButton = document.getElementById('start');
let winnerwinner = document.getElementById('victor');

startButton.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    let winningImage = warfTasha(randomNumber);

    let imageSource = '';

    if(winningImage === 'warf') {
        imageSource = '../assets/warf.jpg';
        winnerwinner.textContent = "WARF WINSS";
    } else {
        imageSource = '../assets/tasha.jpg';
        winnerwinner.textContent = "Tasha WINSS";
    }
    
    winnerImage.src = imageSource;

});