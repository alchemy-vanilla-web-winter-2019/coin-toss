
function headsTails(randomNumber) {
    let coin = '';
    
    if(randomNumber < 0.5) {
        coin = 'Heads';
    } else {
        coin = 'Tails';
    }
    return coin;
}

export default headsTails;

