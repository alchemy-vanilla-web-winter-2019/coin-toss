const test = QUnit.test;

import headsTails from '../src/heads-tails.js';

test('value less than .5 returns heads', function(assert) {
    const randomNumber = .3;
    const expected = 'heads';
    const result = headsTails(randomNumber);
    assert.equal(expected, result);
});

test('value geater than or equal to .5 returns tails', function(assert) {
    const randomNumber = .6;
    const expected = 'tails';
    const result = headsTails(randomNumber);
    assert.equal(expected, result);
});