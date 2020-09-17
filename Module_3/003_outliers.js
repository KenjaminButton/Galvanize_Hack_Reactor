function detectOutlierValue(string) {
  // split string into individual elements ex. [2, 4, 7, 8, 10]
  // create an empty evenNumbers array variable 
  // create an empty oddNumbers array variable 
  // iterate over the intArray.
    // if number is even, push numbers to evenNumbers array
    // if number is odd, push numbers to oddNumbers array
  // compare lengths of evenNumbers array and oddNumbers array and return shortest array.
  // create an outlier variable and set it equal to element in shortest array.
  // create outlierIndex variable and run indexOf()
  // return outlierIndex;
  
  var intArray = [];
  var splitString = string.split(" ")

  for (var i=0; i<splitString.length; i++) {
    splitString[i] = parseInt(splitString[i])
    intArray.push(splitString[i])
  }
  
  var evenNumbers = [];
  var oddNumbers = [];
  
  for (var j=0; j<intArray.length; j++) {
    if (intArray[j] % 2 === 0) {
      evenNumbers.push(intArray[j])
    } else {
      oddNumbers.push(intArray[j])
    }
  }

  var shortestArray = []
  if (evenNumbers.length < oddNumbers.length) {
    shortestArray = evenNumbers
  } else {
    shortestArray = oddNumbers
  }

  var outlierNumber = 0;
  for (var k=0; k<shortestArray.length; k++) {
    outlierNumber = shortestArray[k]
  }
  // note* the return value should be 1-indexed, not 0-indexed
  return intArray.indexOf(outlierNumber) + 1
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('Passed: ' + testName)
  } else {
    console.log('Failed: Testname [' + testName + '] expected "' + expected + '", but got "' + actual + '"')
  }
}

var test_1 = detectOutlierValue("2 4 7 8 10")
var expected_1 = 3

assertEqual(test_1, expected_1, "Should pull out the 1-index of the outlier in the string of numbers.")

var test_2 = detectOutlierValue("1 3 5 7 8")
var expected_2 = 5

assertEqual(test_2, expected_2, "Should pull out the 1-index of the outlier in the string of numbers.")





