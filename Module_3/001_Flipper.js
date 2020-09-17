function flipCharacters(string) {
  // create a results variable string.
  // split the string into an array.
  // handle empty string scenario by returning an empty string.
  // iterate over every 2nd element of the array string.
    // if current element + 1 === undefined, 
      // += (add) current element.
      // break out of the for loop.
    // += (add) current element to results string.
    // += (add) current element - 1 to results string.
  // return results string.
  if (typeof(string) !== "string") {
    return ""
  }

  var results = "";
  var splitString = string.split("")
  
  if (string.length === 0) {
    return results
  }
  for (var i=0; i<splitString.length; i=i+2) {
    var currentElement = splitString[i]
    var nextElement = splitString[i+1]
    if (nextElement === undefined) {
      results += currentElement;
      break;
    }
    results += nextElement;
    results += currentElement
  }
  return results;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('Passed: ' + testName)
  } else {
    console.log('Failed: Testname [' + testName + '] expected "' + expected + '", but got "' + actual + '"')
  }
}

var input_1 = flipCharacters("")
var expected_1 = ""
assertEqual(input_1, expected_1, 'Should test reverse characters in a string.')

var input_2 = flipCharacters("abcd")
var expected_2 = "badc"
assertEqual(input_2, expected_2, 'Should test reverse characters in a string.')

var input_3 = flipCharacters("abcde")
var expected_3 = "badce"
assertEqual(input_3, expected_3, 'Should test reverse characters in a string.')

var input_4 = flipCharacters(8)
var expected_4 = ""
assertEqual(input_3, expected_3, 'Should test reverse characters in a string.')
