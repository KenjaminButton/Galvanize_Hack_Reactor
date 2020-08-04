/*

Notes:
If the array is empty, it should return an empty array.
If the array contains no elements that are equal to 10, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.

*/

console.log("Objects 7")
console.log("1:")

function getElementsThatEqual10AtProperty(obj, key) {
  
  // If there is no property at the key, it should return an empty array.
  var results = [];

  if (obj[key] === undefined) {
    return [];
  }

  // If the property at the given key is not an array, it should return an empty array.
  if (Array.isArray(obj[key]) === false) {
    return [];
  }

  // If the array is empty, it should return an empty array.
  if (obj[key].length === 0) {
    return [];
  }

  // create a results array
  // iterate over the obj.key array
    // if number === 10:
      // push to results array.
  // return the results array

  for (i=0; i<obj[key].length; i++) {
    if (obj[key][i] === 10) {
      results.push(obj[key][i])
    }
  }
  return results;
}

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]


console.log("2:")
