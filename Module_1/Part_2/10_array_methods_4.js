function getAllElementsButFirst(array) {
  /*
  array.shift()
  return array;
  */
  var result = array.slice(1)
  return result;
}

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]

function getAllElementsButLast(array) {
  // your code here
  var result = array.slice(0, array.length - 1)
  return result;
}

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]

function removeFromFront(arr) {
  // your code here
  arr.shift()
  return arr
}

var output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]