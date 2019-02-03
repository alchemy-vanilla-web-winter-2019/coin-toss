
function headsTails(randomNumber) {
    let coin = '';
    
    if(randomNumber < 0.5) {
        coin = 'heads';
    } else {
        coin = 'tails';
    }
    return coin;
}

export default headsTails;

