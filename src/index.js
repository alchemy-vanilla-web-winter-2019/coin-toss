//import headsOrTails 

const button = document.getElementById('coin-button');

button.addEventListener('submit', function(event) {
    event.preventDefault();
    const randomNumber = Math.random();
    let side = headsOrTails(randomNumber);





});