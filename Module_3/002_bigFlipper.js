function flipEveryNChars(input, n) {
  // create a results variable and empty string.
  // iterate through string for every fifth character

  // split string into an array

  // return results variable
  var flipped = "";
  var characters = input.split("")
  // console.log(splitString)
  for (var i=0; i<characters.length; i=i+n) {
    var currentSlice = characters.slice(i, i+n)
    var reverseSlice = currentSlice.reverse()
    var joinedSlice = reverseSlice.join("")
    flipped += joinedSlice
  }
  return flipped;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('Passed: ' + testName)
  } else {
    console.log('Failed: Testname [' + testName + '] expected "' + expected + '", but got "' + actual + '"')
  }
}

var test1 = flipEveryNChars("abcde12345", 5)
var expected1 = "edcba54321"

assertEqual(test1, expected1, 'Should reverse every n characters of a string.')

var test2 = flipEveryNChars("", 5)
var expected2 = ""

assertEqual(test2, expected2, 'Should reverse every n characters of a string.')

var test3 = flipEveryNChars("1234567", 5)
var expected3 = "5432176"

assertEqual(test3, expected3, 'Should reverse every n characters of a string.')
