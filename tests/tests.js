const test = QUnit.test;

import coinToss from '../src/cointoss.js';

test('if random number is less than 0.5 return heads', function(assert){
    const result = coinToss(0.3);
    assert.equal(result, 'heads');
});

test('if random number is equal to or greater than .05 return tails', function(assert) {
    const result = coinToss(0.7);
    assert.equal(result, 'tails');
});
