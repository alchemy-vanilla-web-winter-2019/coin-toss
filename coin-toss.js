function coinToss(randomNumber) {
    let face = '';
    if(randomNumber >= .5){
        face = 'Heads';
    } else {
        face = 'Tails';
    }
    return face;
}

export default coinToss;