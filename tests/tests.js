const test = QUnit.test;

import flipCoin from './coin-flip.js';

test('return heads if random number is < 0.5', function(assert) {
    const randomNumber = 0.4;
    const result = flipCoin(randomNumber);
    const expected = 'heads';
    assert.equal(result, expected);
});

test('return tails if random number is >= 0.5', function(assert) {
    const randomNumber = 0.6;
    const result = flipCoin(randomNumber);
    const expected = 'tails';
    assert.equal(result, expected);
});

