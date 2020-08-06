console.log("Array Methods 14")
console.log("1:")

/*
Write a function called "joinArrayOfArrays".
Given an array of arrays, "joinArrayOfArrays" returns a
single array containing the elements of the nested arrays.

You should be familiar with the "concat" method for this problem.
*/


function joinArrayOfArrays(arr) {
  // create a results array
  // iterate over outer array
    //iterate over inner array
      // push each individual element to the results array.
  // return a results array
  var results = [];
  for (i=0; i<arr.length; i++) {
    results = results.concat(arr[i])
  }
  /*
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr[i].length; j++) {
      results.push(arr[i][j])
    }
  }
  */
  return results;
}

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']

console.log("Objects 12")
console.log("1:")

/*
Write a function called "getProductOfAllElementsAtProperty".
Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.
Notes:
If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
*/

function getProductOfAllElementsAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return 0
  }
  if (Array.isArray(obj[key]) === false) {
    return 0
  }
  if (obj[key].length === 0) {
    return 0
  }
  // create a results variable and set it to obj[key][0]
  // Iterate over the array
    // multiply it by the i-1
  // return results
  var results = obj[key][0];
  for (var i=1; i<obj[key].length; i++) {
    results = results * obj[key][i]
  }
  return results;
}

var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24

console.log("Advanced 5:")
/*
Given a number, "sumDigits" returns the sum of all its digits.
If the number is negative, the first digit should count as negative.

Notes:
In order to use some of the methods that will be most helpful to you,
you will most likely want to do some string to number conversion
and vice versa.
Be sure to familiarize yourself with the "toString" method, as well
as the "Number" function.
*/

function sumDigits(num) {
  // num to string
  // split string
  // create a results variable
  // iterate through string
    // add to results
  // return results
  var isNegative = false;  
  if (num < 0) {
    isNegative = true
  }
  num = Math.abs(num)

  var sum = 0;
  var numToString = num.toString();


  for (var i=0; i<numToString.length; i++) {
    sum += Number(numToString[i])
  }

  if (isNegative === true) {
    return sum -= Number(numToString[0] * 2)
  }
  return sum;
}

var output = sumDigits(11);
console.log(output); // --> 2

var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4








