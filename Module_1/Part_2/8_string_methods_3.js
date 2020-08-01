function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  var word1_split =  word1.split('');
  var word2_split =  word2.split('');
  var word3_split =  word3.split('');
  var total_sum = word1_split.length + word2_split.length + word3_split.length;
  return total_sum;
}

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14