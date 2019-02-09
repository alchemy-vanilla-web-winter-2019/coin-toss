import gritShag from './gritShag.js';

//Variables for basic coin flip
const flipForm = document.getElementById('flip-form');
const image = document.getElementById('picture');

//Variables for win or lose
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const status = document.getElementById('status');
let wins = 0;
let losses = 0;

const accountBalanceField = document.getElementById('account-balance');
let accountBalance = parseInt(accountBalanceField.innerText, 10);

const form = document.getElementById('flip-form');
const noMoney = document.getElementById('no-money');





flipForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const wagerInput = form.elements.wager.value;
    let wagerAmount = parseInt(wagerInput);
    
    const userChoice = flipForm.elements.animal.value;
    if(accountBalance <= 0) {
        noMoney.textContent = 'You have no money! You must earn money playing other games before betting here.';
    }
    else if(accountBalance < wagerAmount) {
        noMoney.textContent = 'You do not have enough money to bet this much. Please change wager to be less than your account balance.';
    }
    else{
        const randomNumber = Math.random();
        const returned = gritShag(randomNumber);

        let imageSource = '';

        if(returned === 'Gritty') {
            imageSource = '../assets/Gritty.jpg';
        }
        else {
            imageSource = '../assets/shaggy.jpg';
        }
    
        image.src = imageSource;
        image.classList.remove('hidden');

        if(userChoice === returned) {
            status.textContent = 'You win!';
            wins++;
            winCount.textContent = wins;
            accountBalance += wagerAmount;
            accountBalanceField.textContent = accountBalance;

        }
        else {
            status.textContent = 'Booo you lose!';
            losses++;
            lossCount.textContent = losses;
            accountBalance -= wagerAmount;
            accountBalanceField.textContent = accountBalance;
        }
    }
        
});
