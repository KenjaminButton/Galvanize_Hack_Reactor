function joinArrays(arr1, arr2) {
  // your code here
  var result = arr1.concat(arr2);
  return result;
}

var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]


function getElementsAfter(array, n) {
  // your code here
  var result = array.slice(n + 1);
  return result;

}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']

function getElementsUpTo(array, n) {
  // your code here
  var result = array.slice(0, n)
  return result;
}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
console.log(output); // --> ['a', 'b', 'c']