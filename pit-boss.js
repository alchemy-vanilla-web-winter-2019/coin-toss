const wins = document.getElementById('wins');
const losses = document.getElementById('losses');

const trackIt = JSON.parse(window.localStorage.getItem('Store It'));
console.log('did it work?', trackIt);
 
wins.textContent = 'Wins = ' + trackIt.wins;
losses.textContent = 'Losses = ' + trackIt.losses;

