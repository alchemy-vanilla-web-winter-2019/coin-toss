function coinFlip(randomNumber) {
    let result = '';
    if(randomNumber < 0.5) {
        result = 'heads';
    }
    else {
        result = 'tails';
    }
    return result;
}

export default coinFlip;