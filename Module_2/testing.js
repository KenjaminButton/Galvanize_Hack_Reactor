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






