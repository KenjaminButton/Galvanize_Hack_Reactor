/*
Given a list of non-negative integers and a target sum, find a pair of
numbers that sums to the target sum.

Example:
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

function findPairForSum(array, target) {
  // create a results array
  var results = []
  // iterate through the array
    // iterate through array again and set j = i+1
      // if array[i] + array[j] === target,
        // return array[i] array[j]
  for (var i=0; i<array.length; i++) {
    for (var j=i+1; j<array.length; j++) {
      if (array[i] + array[j] === target) {
        results.push(array[i], array[j])
      }
    }
  }
  return results
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

var test1 = [1,2,3]
var test2 = [1,2,3]

function assertArrayEquals(arr1, arr2, testName) {
  if (arr1.length !== arr2.length) {
    return false + ' ' + testName
  }

  for (var i=0; i<arr1.length; i++) {
    for (var j=0; j<arr2.length; j++) {
      if (arr1[i] !== arr2[j]) {
        return false + ' ' + testName
      } else {
        return true + ' ' + testName
      }
    }
  }

}

console.log(assertArrayEquals(test1, test2, 'Test compares all values in two arrays and whether they are equal to each other.'))







