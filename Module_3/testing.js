// Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

// Note that this is intentionally very similar to the previous problem.

// Please focus on getting a working solution with the tools you know well.

// Practice the interactive/collaborative interview style that's described in the documentation.

// Example:
// var input = 'a short example';
// var output = flipEveryNChars(input, 5);
// console.log(output); // --> ohs axe trelpma

// Breaking this example down piece by piece:
// 'a sho' -> 'ohs a'
// 'rt ex' -> 'xe tr'
// 'ample' -> 'elpma'

// -> 'ohs axe trelpma'

function flipEveryNChars(input, n) {
  var result = ''
  var splitString = input.split('')
  for (var i=0; i<splitString.length; i=i+n) {
    var currentString = splitString.slice(i, i+n)
    var reversedString = currentString.reverse()
    var joinedString = reversedString.join('')
    result += joinedString
  }
  return result
}

console.log(flipEveryNChars("abcdefghij", 5))