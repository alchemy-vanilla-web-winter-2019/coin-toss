import flipCoin from '../src/flip-coin.js';

const test = QUnit.test;


test('random number less than 0.5 returns heads', function(assert) {
    const rand = 0.4;
    const result = flipCoin(rand);
    const expected = 'Heads';

    assert.equal(result, expected);
});

test('random number >= 0.5 returns tails', function(assert) {
    const rand = 0.5;
    const result = flipCoin(rand);
    const expected = 'Tails';

    assert.equal(result, expected);
});