console.log("\n");
console.log("More Advanced Practice (2)");

console.log("\n#1 Split Strings");
/*
Complete the function splitPairs such that it splits the input string into
pairs of characters. If the input string has a length that is odd, then it
should replace the missing second character of the final pair with an
underscore _.
Note, an empty string should make your function produce an empty array.
*/


function splitPairs(input) {
  var result = [];
  for (var i=0; i<input.length; i=i+2) {
    var current = input[i]
    var next = input[i+1]
    if (next === undefined) {
      next = '_'
    }
    result.push(current + next)
    // result.push(input[i])
  }
  return result;
}


console.log(splitPairs("abcde"));



// function assertArrayEquals(actual, expected, testName) {
//   if (actual.length !== expected.length) {
//     console.log("Failed: test " + testName + " arrays do not have equal lengths" )
//   }
//   for (var i=0; i<expected.length; i++) {
//     if (actual[i] !== expected[i]) {
//       return "Failed: Test " + testName + " failed at " + actual[i] + " and " + expected[i];
//     } 
//   }
//   return "Passed"
// }


// var test1 = splitPairs("abcde")
// var expectedOutput1 = [ 'ab', 'cd', 'e_' ]

// assertArrayEquals(test1, expectedOutput1, 'Splits string into pairs of letters and places them into an array.')

console.log("\n#2: Highest Scoring Word");

/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

let alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}

function highestScoringWord(string) {
  var highScore = 0
  var scrabbleWinner = ""
  var splitWords = string.split(" ")
  for (var i=0; i<splitWords.length; i++) {
    var currentWord = splitWords[i];
    var currentScore = 0
    for (var j=0; j<currentWord.length; j++) {
      var currentLetter = currentWord[j]
      currentScore += alphabet[currentLetter]
    }
    if (currentScore > highScore) {
      scrabbleWinner = currentWord
      highScore = currentScore
    }
  }
  // console.log(highScore);
  return scrabbleWinner
}


console.log(highestScoringWord("i only have one more problem left before the technical assessment exam"));
















