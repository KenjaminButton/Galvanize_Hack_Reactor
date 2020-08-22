// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  var results = []
  var words = sentence.split(" ")
  // iterate words and collect the palindromes
  for (var i=0; i<words.length; i++) {
    if (isPalindrome(words[i]) === true) {
      results.push(words[i])
    }
  }
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  results.sort(sortAscendingByLength)
  return results.pop()

  // Attack findLongestPalindrome last.
}


function reverseString(string) {
  // change string to all lower case letters.
  // create a variable and split the string
  // reverse array
  // join array
  // reverse string
  var lowerCasedString = string.toLowerCase()
  var stringSplit = lowerCasedString.split('')
  var reverseArray = stringSplit.reverse()
  var joinedString = reverseArray.join('')
  return joinedString
}

function isPalindrome(word) {
  // Attack isPalindrome test case second.
  // hint: you can detect palindromes by comparing a string to its reverse
  word = word.toLowerCase()
  return word === reverseString(word)
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
// Attack reverseString test case first.
function assertEquals(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed: " + testName);
  } else {
    console.log('Failed: TESTNAME [' + testName + '] expected: "' + expected + '", but got "' + actual + '"')
  }
}




// TESTS CASES
var input_1 = "kenderson";
var output_1 = "nosrednek";
assertEquals(reverseString(input_1), output_1, 'Should reverse string.')

var input_2 = "Kenderson";
var output_2 = "nosrednek"
assertEquals(reverseString(input_2), output_2, 'Should reverse string.')

// Testing isPalindrome
var input_3 = "racecar"
var output_3 = true
assertEquals(isPalindrome(input_3), output_3, 'Should return true or false for a palindrome')

var input_4 = "racecaR"
var output_4 = true
assertEquals(isPalindrome(input_4), output_4, 'Should return true or false for a palindrome')

// Testing findLongestPalindrome
var input_5 = "abba racecar an apple a zebra"
var output_5 = "racecar"
assertEquals(findLongestPalindrome(input_5), output_5, 'Should find longest palindrome in sentence')









