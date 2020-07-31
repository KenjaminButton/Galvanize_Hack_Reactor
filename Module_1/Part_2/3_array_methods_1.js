console.log("#1==============================================================")
// Write a function called "getNthElement".
// Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array.
// Notes:
// If the array has a length of 0, it should return 'undefined'.

function getNthElement(array, n) {
  // your code here
  return array[n]
}

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3

console.log("#2==============================================================")

// Write a function called "getFirstElement".
// Given an array, "getFirstElement" returns the first element of the given array.
// Notes:
// If the given array has a length of 0, it should return undefined.


function getFirstElement(array) {
  // your code here
  var result = array[0];
  return result;
}

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1

console.log("#3==============================================================")

// Write a function called "getLastElement".
// Given an array, "getLastElement" returns the last element of the given array.
// Notes:
// If the given array has a length of 0, it should return 'undefined'.

function getLastElement(array) {
  /*
  // var result = array.pop();
  // return result;
  */

  // Instructor's solution
  var result = array[array.length -1]
  return result
}

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4





