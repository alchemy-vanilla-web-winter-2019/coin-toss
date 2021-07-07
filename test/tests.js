const test = QUnit.test;

import coinFlip from '../src/coinFlip.js'


test('does coinFlip return heads if randomNumber is less than 0.5', function(assert) {
    const randomNumber = 0.4;
    const result = coinFlip(randomNumber);
    const expected = 'heads';
    assert.equal(result, expected);
});
test('does coinFlip return tails if randomNumber is greater than or equal to 0.5', function(assert) {
    const randomNumber = 0.6;
    const result = coinFlip(randomNumber);
    const expected = 'tails';
    assert.equal(result, expected);
});