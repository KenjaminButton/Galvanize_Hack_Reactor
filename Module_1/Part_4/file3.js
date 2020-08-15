console.log("assertArraysEqual")
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual)
  expected = JSON.stringify(expected)
  if (actual === expected) {
    console.log("passed")
  } 
  else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual + '')
  }
}

console.log("assertWithinRange")
function assertWithinRange(low, high, actual, testName) {
  if (actual >= low && actual <= high) {
    console.log("passed")
  } else {
    console.log("FAIL [" + testName + '] "' + actual + '" not within range ' + low + ' to ' + high)
  }
}

var dieRoll = 1;
assertWithinRange(1, 6, dieRoll, 'die roll should be between 1 and 6');
// console output:
// passed

var price = 101;
assertWithinRange(1, 100, price, 'price should be between 1 and 100');
// console output:
// FAIL [price should be between 1 and 100] "101" not within range 1 to 100


console.log("Sample of Clean Code:")
// FUNCTION DEFINITION(S)
function addOne(val) {
  return val + 1;
}

// ASSERTION FUNCTION(S) TO BE USED
function assert(condition, testName) {
  if (condition) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + ']');
  }
}

// TESTS FOR isOne
var result1 = addOne(1);
assert(result1 === 2, 'should return result of a positive input number added to 1');

var result2 = addOne(-2);
assert(result2 === 1, 'should return result of a negative input number added to 1');










