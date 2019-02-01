const test = QUnit.test;

import coinFlip from '../src/coin-flip.js';


test('return horse if randomNumber < 0.5', function(assert) {
    const randomNumber = 0.3;
    const result = coinFlip(randomNumber);
    const expected = 'horse';
    
    assert.equal(result, expected);
});

test('return button if randomNumber >= 0.5', function(assert) {
    const randomNumber = 0.7;
    const result = coinFlip(randomNumber);
    const expected = 'button';
    
    assert.equal(result, expected);
});