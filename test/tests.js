const test = QUnit.test;

import coinFlip from '../src/coin-flip.js';


test('return heads if randomNumber < 0.5', function(assert) {
    const randomNumber = 0.3;
    const result = coinFlip(randomNumber);
    const expected = 'heads';
    
    assert.equal(result, expected);
});

test('return tails if randomNumber >= 0.5', function(assert) {
    const randomNumber = 0.7;
    const result = coinFlip(randomNumber);
    const expected = 'tails';
    
    assert.equal(result, expected);
});