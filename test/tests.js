const test = QUnit.test;

test('if random number less than 0.5, return heads', function(assert){
    const result = headsTails(0.2);
    assert.equal(result, 'heads');
});
test('if random number great than 0.5, return tails', function(assert){
    const result = headsTails(0.8);
    assert.equal(result, 'tails');
});