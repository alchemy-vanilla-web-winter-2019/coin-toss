import headsOrTails from './heads-tails.js';
const test = QUnit.test;


test('if number is less than 0.5, return heads', function(assert) {
    const results = headsOrTails(0.3);
    assert.equal(results, 'heads');

});

test('if number is greater than or equal to 0.5, return tails', function(assert) {
    const results = headsOrTails(0.6);
    assert.equal(results, 'tails');

});