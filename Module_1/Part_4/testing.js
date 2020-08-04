console.log("Objects 9:")
console.log("1:")

/*
Write a function called "getOddLengthWordsAtProperty".
Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key.
Notes:
If the array is empty, it should return an empty array.
If it contains no odd length elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the given key, it should return an empty array.
*/

function getOddLengthWordsAtProperty(obj, key) {
  var results = []

  if (obj[key] === undefined) {
    return results
  }

  if (Array.isArray(obj[key]) === false) {
    return results
  }

  for (i=0; i<obj[key].length; i++) {
    if ((obj[key][i].length) % 2 === 1) {
      results.push(obj[key][i])
    }
  }
  return results
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']

console.log("2:")

/*
Write a function called "getAverageOfElementsAtProperty".
Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key.
Notes:
If the array at the given key is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
*/


function getAverageOfElementsAtProperty(obj, key) {
  var average = 0
  var sum_total = 0
  var 
  for () {

  }
  return average;
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

console.log("3:")

/*
Write a function called "getEvenLengthWordsAtProperty".
Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.
Notes:
If the array is empty, it should return an empty array.
If it contains no even length elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
*/
















