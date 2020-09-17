/*
Flip every pair of characters in a string.

Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
*/

function flipPairs(string) {
  var flippedString = "";

  for (var i=0; i<string.length; i=i+2) {
    var currentLetter = string[i]
    var nextLetter = string[i+1]
    if (nextLetter === undefined) {
      flippedString += currentLetter
      break;
    }
    flippedString += nextLetter
    flippedString += currentLetter
  }
  return flippedString
}

console.log(flipPairs("abcde"))
