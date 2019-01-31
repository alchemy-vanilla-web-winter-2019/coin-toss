function headsOrTails(randomNumber) {
    let face = '';
    if(randomNumber < 0.5) {
        face = 'heads';
    } else {
        face = 'tails';
    }
    return face;
}

export default headsOrTails;