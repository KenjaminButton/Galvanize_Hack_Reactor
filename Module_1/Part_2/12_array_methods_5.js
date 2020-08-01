function removeFromBackOfNew(arr) {
  // your code here
  var newArr = arr.slice()
  newArr.pop()
  return newArr
}

var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]


function removeFromFrontOfNew(arr) {
  // your code here
  var newArray = arr.slice()
  newArray.shift()
  return newArray;
}

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]


function countCharacter(str, char) {
  var count = 0;
  var split_string = str.split('')
  // return split_string
  for (i=0; i<split_string.length; i++) {
  	if (split_string[i] === char)
  	  count += 1
  }
  return count
}

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3














