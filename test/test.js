const test = QUnit.test;


test('If number is below .5 then show a cat', function(assert){
    const result = catOrDog(.2); 
    assert.equal(result, 'cat');
});

test('If number is >= .5 then show a dog', function(assert){
    const result = catOrDog(.7); 
    assert.equal(result, 'dog');
});
