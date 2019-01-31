import headsOrTails from '../src/heads-or-tails.js';

const test = QUnit.test;

test('return heads if random number is < 0.5', function(assert) {
    const randomNumber = 0.4;
    const expected = 'heads';
    const result = headsOrTails(randomNumber);
    assert.equal(result, expected);
});

test('return tails if random number is => 0.5', function(assert) {
    const randomNumber = 0.6;
    const expected = 'tails';
    const result = headsOrTails(randomNumber);
    assert.equal(result, expected);
});