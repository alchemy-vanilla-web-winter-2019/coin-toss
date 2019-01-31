function coinFlip(randomNumber) {
    let result = '';

    if(randomNumber < 0.5) {
        result = 'horse';
    }
    else {
        result = 'button';
    }
    return result;
}

export default coinFlip;