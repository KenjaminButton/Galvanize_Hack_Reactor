// 004_transpose.js
function transposeTwoStrings(array) {
  // create empty flatlist string
  // join the two array elements into one array of individual elements.
  // iterate over array elements.
    // push to flatlist i and i + 5
  // return flatlist
  var flatlist = "";
  var combinedArr = [];
  // var secondWord = [];
  for (var i=0; i<array.length; i++) {
    var splitString = array[i].split('')
    for (var j=0; j<splitString.length; j++) {
      combinedArr.push(splitString[j])
    }
  }
  for (var j=0; j<(combinedArr.length/2); j++) {
    flatlist += combinedArr[j] + " " + combinedArr[j+5] + "\n"
  }
  return flatlist
}

console.log(transposeTwoStrings(['Hello', 'World']))

/*
transposeTwoStrings(['Hello', 'World'])

Should return:
H W
e o
l r
l l
o d
*/

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('Passed: ' + testName)
  } else {
    console.log('Failed: Testname [' + testName + '] expected "' + expected + '", but got "' + actual + '"')
  }
}

var test_1 = transposeTwoStrings(['Hello', 'World'])
var expected_1 = "H W\ne o\nl r\nl l\no d\n"

assertEqual(test_1, expected_1, "Should transpose two strings.")

