function flipCoin(rand) {
    if(rand < 0.5) {
        return 'Heads';
    }
    else {
        return 'Tails';
    }
}

export default flipCoin;