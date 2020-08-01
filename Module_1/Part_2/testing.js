function countCharacter(str, char) {
  // Write a count var
  var count = 0;
  // split string
  var split_string = str.split('')
  // iterate with for loop
  for (i=0; i<split_string.length; i++) {
    // Match char to str
    if (split_string[i] === char) {
      // Increment count var
      count += 1
    }
  } return count
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3