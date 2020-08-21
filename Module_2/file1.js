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


console.log("Applying assertEqual 1:")
// FUNCTION DEFINITION(S)
function square(n) {
  return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(condition, testName) {
  if (condition) {
    console.log("passed: " + testName)
  } else {
    console.log("failed: " + testName)
  }
}


// TESTS CASES
var result1 = square(3)
assertEqual(result1 === 16, "it should square the input of 4")

var result2 = square(4)
assertEqual(result1 === 16, "it should square the input of 4")

console.log("Applying assertEqual 2:")

// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
  var doesEveryElementMatch = true;

  for (var i = 0; i < array.length; i++) {
    doesEveryElementMatch = callbackFunction(array[i]);
  }
  return doesEveryElementMatch;
}

function lessThan50(n) {
  if (n < 50) {
    return true
  } else {
    return false
  }
}

// ASSERTION FUNCTION(S) TO BE USED
// console.log(lessThan50(60))

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed: ' + testName)
  } else {
    console.log('FAILED!' + testName + ' Expected: ' + expected + ', but got: ' + actual)
  }
}

var arrayTrue = [2, 8, 33]
var actualTrue = every(arrayTrue, lessThan50)
assertEqual(actualTrue, true, 'Should return true if all numbers in the array are less than 50.')

var arrayFalse1 = [51, 49]
var actualFalse1 = every(arrayFalse1, lessThan50)
assertEqual(actualFalse1, false, 'Should return false one or more numbers in the array are less than 50.')

var arrayFalse2 = [49, 51]
var actualFalse2 = every(arrayFalse2, lessThan50)
assertEqual(actualFalse2, false, 'Should return false one or more numbers in the array are less than 50.')





console.log("Applying Assert Array Equals:")
// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];
  for (var i=0; i<array.length; i++) {
    var element = array[i]
    var result = callbackFunction(element);
    
    newArray.push(result)
  }
  console.log(newArray);
  return newArray;
}

function cubeAll(n) {
  return n * n * n
}


function addOne(val) {
  return val + 1
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, testName) {
  var isEqual = true
  for (i=0; i<actual.length; i++) {
    if (actual[i] !== expected[i]) {
      isEqual = false
    }
  }

  var isEqualLength = true
  if (actual.length !== expected.length) {
    isEqualLength = false
  }

  if (isEqual && isEqualLength) {
    return 'Passed'
  } else {
    return 'Failed: [' + testName + '] returned ' + actual + ', but expected ' + expected
  }
}

// TESTS CASES
var array1 = [1, 2, 3]
var result1 = map(array1, cubeAll)
var expected = [1, 8, 27]

console.log(assertArraysEqual(result1, expected, 'should return cubed value of array elements.'))


console.log("Applying Assert Object Equals:")

// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;
  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }
  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual)
  expected = JSON.stringify(expected)
  if (actual === expected) {
    console.log("PASSED:")
  }
  else {
    console.log("FAILED: Testname [" + testName + "] expected " + expected + ", but got " + actual)
  }
}

// TESTS CASES
var inputObject = {
  firstName: 'Ken',
  lastName: 'Chang'
}

// var outputObject  = addFullNameProp(inputObject)

var resultObject1 = {
  firstName: 'Ken',
  lastName: 'Chang',
  fullName : 'Ken Chang'
}

assertObjectsEqual(addFullNameProp(inputObject), resultObject1, 'Should add first name and last name to full name.')



// console.log(addFullNameProp(testObject1))

// Look up DEEP OBJECT COMPARISON
