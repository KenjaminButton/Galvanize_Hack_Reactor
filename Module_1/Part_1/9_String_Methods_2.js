// Write a function called "computeAverageLengthOfWords".
// Given two words, "computeAverageLengthOfWords" returns the average of their lengths.

function computeAverageLengthOfWords(word1, word2) {
  // your code here
  var split_word1 = word1.split('');
  var split_word2 = word2.split('');
  var total_sum = split_word1.length + split_word2.length;
  return total_sum / 2
}

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6

