const test = QUnit.test

import gritShag from '../src/gritShag.js';

test('if the number is <0.5, show Gritty', function(assert) {
    const val = 0.3;
    const result = gritShag(val);
    assert.equal(result, 'Gritty');
})

test('if the number is >= 0.5, show Shaggy', function(assert) {
    const val = 0.7;
    const result = gritShag(val);
    assert.equal(result, 'Shaggy')
})