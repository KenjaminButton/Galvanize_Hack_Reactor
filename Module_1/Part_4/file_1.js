function getLengthOfLongestElement(arr) {
  // var longestElement = 0
  // iterate through the array
    // if arr[i].length > longestElement:
      // longestElement = arr[i]
  var longestElement = 0;
  for (i=0; i<arr.length; i++) {
    if (arr[i].length > longestElement) {
      longestElement = arr[i].length
    }
  }
  return longestElement;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

console.log("Array Methods 10:")
console.log("Problem 1:")

function squareElements(arr) {
  // iterate over array
  var result = [];
    // square all elements in array
  for (i=0; i<arr.length; i++) {
    var squared_arr = arr[i] ** 2
    result.push(squared_arr)

  }
  return result;
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

console.log("Problem 2:")

function filterOddElements(arr) {
  // create a results variable
  // iterate through all the elements of the arr
    // if element is odd, push it to the results arr
  // return results arr
  var results = [];
  for (i=0; i<arr.length; i++) {
    if (arr[i] % 2 === 1) {
      results.push(arr[i])
    }
  }
  return results;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]


console.log("Problem 3:")

function computeProductOfAllElements(arr) {
  // create a product variable and set it to 1
  // take care of edge case aka empty arr
  // iterate over arr
    // multiply the element by the product variable
  // return product variable
  var product = 1
  if (arr.length === 0) {
    return 0
  }
  for (i=0; i<arr.length; i++) {
    product = product * arr[i]
  }
  return product;
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

console.log("Array Methods 11:")
console.log("Problem 1:")

function filterEvenElements(arr) {
  // create a results array variable
  // iterate over individual elements of the arr
    // if element is even
      // push to results array variable
  // return results variable
  var results = [];
  for (i=0; i<arr.length; i++) {
    if (arr[i] % 2 === 0) {
      results.push(arr[i])
    }
  }
  return results;
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]

console.log("Problem 2:")
// It should return 0 if the array is empty.

function getLengthOfShortestElement(arr) {
  // take care of edge cases
  // create a shortestLength variable and set it to 0
  // iterate over each element in the array
    // if arr[i].length < arr[i-1].length;
      // set shortestLength to arr[i]
  // return shortestLength
  var shortestLength = arr[0];
  for (i=1; i<arr.length; i++) {
    if (arr[i].length <= arr[i-1].length) {
      shortestLength = arr[i].length
    }
  }
  return shortestLength
}

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

console.log("Problem 3:")
// Notes:
// If there are ties, it returns the first element to appear.
// If the array is empty, it should return an empty string.

function getLongestElement(arr) {
  // iterate over arr
    // if arr[i].length > arr[i-1].length
  // return arr[i] 
  var longestElement = arr[0]
  for (i=1; i<arr.length; i++) {
    if (arr[i].length > arr[i-1].length) {
      longestElement = arr[i]
    }
  }
  return longestElement;
}

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

console.log("Array Methods 12:")
console.log("Problem 1:")

// Given an empty array, it should return 0
function findSmallestElement(arr) {
  if (arr.length === 0) {
    return 0
  }
  // create a smallestElement arr and set it to the first element
  // iterate over array
    // if arr[i] < arr[i-1];
      // smallestElement = arr[i]
  // return smallest element
  var smallestElement = arr[0];
  for (i=1; i<arr.length; i++) {
    if (arr[i] < arr[i-1]) {
      smallestElement = arr[i]
    }
  }
  return smallestElement
}

var output = findSmallestElement([4, 1, 9, 10])
console.log(output); // --> 1

console.log("Problem 2:")

// Given an empty array, it should return 0
function findShortestElement(arr) {
  if (arr.length === 0) {
    return ''
  }
  // create a shortestElement arr and set it to the first element
  // iterate over array
    // if arr[i].length < arr[i-1].length;
      // shortestElement = arr[i]
  // return shortestElement
  var shortestElement = arr[0];
  for (i=1; i<arr.length; i++) {
    if (arr[i].length < arr[i-1].length) {
      shortestElement = arr[i]
    }
  }
  return shortestElement
}

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'

console.log("Array Methods 13:")
console.log("1:")

// It should return 0 if the array is empty.
function getLargestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  // create a largestElement variable and set it to arr[0]
  // iterate over arr
    // if arr[i] > arr[i-1]
      // set largestElement to arr[i]
  // return largestElement
  var largestElement = arr[0];
  for (i=1; i<arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i]
    }
  }

  return largestElement;

}

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;

console.log("2:")

function computeSumOfAllElements(arr) {
  // create a sum variable and set it to 0;
  // iterate over all the elements of the arr
    // sum += element
  // return sum
  var sum = 0;
  for (i=0; i<arr.length; i++) {
    sum += arr[i]
  }
  return sum;
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6


console.log("Array Methods 13:")
console.log("1:")

/*
Write a function called "getElementsThatEqual10AtProperty".
Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.
Notes:
If the array is empty, it should return an empty array.
If the array contains no elements that are equal to 10, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
*/

function getElementsThatEqual10AtProperty(obj, key) {
  var result_arr = [];
  var arr = obj[key];

  if (arr === undefined) {
    return result_arr
  }

  for (i=0; i<arr.length; i++) {
    if (arr[i] === 10) {
      result_arr.push(arr[i])
    }
  }
  return result_arr
}

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]

var obj = {
  key: [8, 3, 1]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]


console.log("2:")
/*
Write a function called "getElementsLessThan100AtProperty".
Given an object and a key, "getElementsLessThan100AtProperty" returns an array containing all the elements of the array located at the given key that are less than 100.
Notes:
If the array is empty, it should return an empty array.
If the array contains no elements less than 100, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
*/

function getElementsLessThan100AtProperty(obj, key) {
  // create a results array
  // create a variable to store the obj[key] array
  // iterate through the array/variable I just created
    // if element is less than 100
      // push to results array
  // return results array
  var results = [];
  var arr = obj[key]

  if (arr === undefined) {
    return results
  }

  for (i=0; i<arr.length; i++) {
    if (arr[i] < 100) {
      results.push(arr[i])
    }
  }
  return results;
}

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]


console.log("Advanced 4:")
console.log("1:")

/*
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key
is a character in the given string. The value of each key should be how
many times each character appeared in the given string.

Notes:
If given an empty string, countAllCharacters should return an empty object.

*/

function countAllCharacters(str) {
  // create a results variable
  // return the results variable

  // WE can iterate over a string like an array.
    // if results[str[i] === undefined,
      // results[str[i]] = 1
    // else results[str[i]] += 1 

  var results = {};
  for (i=0; i<str.length; i++) {
    if (results[str[i]] === undefined) {
      results[str[i]] = 1
    }
    else {
     results[str[i]] += 1 
    }
  }

  return results;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}

console.log("Objects 8")
console.log("1:")
/*
Write a function called "getElementsGreaterThan10AtProperty".
Given an object and a key, "getElementsGreaterThan10AtProperty" returns
an array containing the elements within the array, located at the given
key, that are greater than 10.

Notes:
If the array is empty, it should return an empty array.
If the array contains no elements greater than 10, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
*/

function getElementsGreaterThan10AtProperty(obj, key) {
  var results = [];

  if (obj[key] === undefined) {
    return results;
  }

  for (i=0; i<obj[key].length; i++) {
    if (obj[key][i] > 10) {
      results.push(obj[key][i])
    }
  }

  return results;
}

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]

console.log("2:")
/*
Write a function called "getFirstElementOfProperty".
Given an object and a key, "getFirstElementOfProperty" returns the
first element of the array located at the given key.
Notes:
If the array is empty, it should return undefined.
If the property at the given key is not an array, it should
return undefined.
If there is no property at the key, it should return undefined.
*/



function getFirstElementOfProperty(obj, key) {
  if (Array.isArray(obj[key]) === false) {
    return undefined
  }
  if (obj[key] === undefined) {
    return undefined;
  }
  var result = obj[key][0]
  return result;
}

var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1

console.log("3:")
/*
Write a function called "getNthElementOfProperty".
Given an object and a key, "getNthElementOfProperty" returns the
nth element of an array located at the given key.
Notes:
If the array is empty, it should return undefined.
If n is out of range, it should return undefined.
If the property at the given key is not an array, it should
return undefined.
If there is no property at the key, it should return undefined.
*/

function getNthElementOfProperty(obj, key, n) {
  if (obj[key] === undefined) {
    return undefined
  }
  if (Array.isArray(obj[key]) === false) {
    return undefined
  }
  var result = obj[key][n];
  return result;

}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2



console.log("4:")
/*
Write a function called "getLastElementOfProperty".
Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key.
Notes:
If the array is empty, it should return undefined.
if the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
*/

function getLastElementOfProperty(obj, key) {
  if (Array.isArray(obj[key] === false)) {
    return undefined;
  }
  if (obj[key] === undefined) {
    return undefined;
  }
  var lastElement = obj[key].length -1
  return obj[key][lastElement]
}

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5


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
  if (obj[key] === undefined) {
    return 0
  }
  if (Array.isArray(obj[key]) === false) {
    return 0
  }

  if (obj[key].length === 0) {
    return 0
  }

  var sum = 0;
  for (i=0; i<obj[key].length; i++) {
    sum += obj[key][i]
  }
  return sum / obj[key].length;
}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

console.log("3:")

/*
Write a function called "getEvenLengthWordsAtProperty".
Given an object and a key, "getEvenLengthWordsAtProperty" returns an array
containing all the even length word elements of the array located at the given key.
Notes:
If the array is empty, it should return an empty array.
If it contains no even length elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
*/

function getEvenLengthWordsAtProperty(obj, key) {
  if (obj[key].length === 0) {
    return []
  }
  if (Array.isArray(obj[key]) === false) {
    return []
  }
  if (obj[key] === undefined) {
    return []
  }
  // create a results array
  // interate through key array
    // if word is even
      // push to results array
  // return results array
  var results = [];
  for (i=0; i<obj[key].length; i++) {
    if (obj[key][i].length % 2 === 0) {
      results.push(obj[key][i])
    }
  }
  return results;
}

var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']

console.log("Objects 10:")
console.log("1:")
/*
Write a function called "getSquaredElementsAtProperty".
Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key.
Notes:
If the array is empty, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
*/

function getSquaredElementsAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return []
  }
  if (Array.isArray(obj[key]) === false) {
    return []
  }
  if (obj[key].length === 0) {
    return []
  }

  // Create a results array
  // iterate through results array
    // square each element and push
  // return results array

  var results = [];
  for (i=0; i<obj[key].length; i++) {
   results.push(obj[key][i] ** 2)   
  }
  return results;

}

var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]



console.log("2:")

/*
Write a function called "getOddElementsAtProperty".
Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key.
Notes:
If the array is empty, it should return an empty array.
If it contains no odd elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
*/

function getOddElementsAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return []
  }
  if (Array.isArray(obj[key]) === false) {
    return []
  }
  if (obj[key].length === 0) {
    return []
  }
  // create a results array
  // iterate through the array
    // if the element is odd
      // push to results array
  // return results array
  var results = [];
  for (i=0; i<obj[key].length; i++) {
    if (obj[key][i] % 2 === 1) {
      results.push(obj[key][i])
    }
  }
  return results;
}


var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]

console.log("3:")

/*
Write a function called "getEvenElementsAtProperty".
Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.
Notes:
If the array is empty, it should return an empty array.
If the array contains no even elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the given key, it should return an empty array.
*/

function getEvenElementsAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return []
  }
  if (Array.isArray(obj[key]) === false) {
    return []
  }
  if (obj[key].length === 0) {
    return []
  }
  // create a results array
  // iterate through the array
    // if the element is odd
      // push to results array
  // return results array
  var results = [];
  for (i=0; i<obj[key].length; i++) {
    if (obj[key][i] % 2 === 0) {
      results.push(obj[key][i])
    }
  }
  return results;
}


var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]


console.log("Objects 11:")
console.log("1:")
/*
Write a function called "getSmallestElementAtProperty".
Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key.
Notes:
If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
*/

function getSmallestElementAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return undefined
  }
  if (Array.isArray(obj[key]) ===  false) {
    return undefined
  }
  if (obj[key].length === 0) {
    return undefined
  }
  // create a smallest element variable and set it to the first item in the array.
  // iterate through the array
    // if the element is smaller than smalleet element variable,
      // set smallest element variable to element
  // return smallest element variable
  var smallestElement = obj[key][0];
  for (i=1; i<obj[key].length; i++) {
    if (obj[key][i] < smallestElement) {
      smallestElement = obj[key][i]
    }
  }

  return smallestElement;
}

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

console.log("2:")

/*
Write a function called "getLargestElementAtProperty".
Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.
Notes:
If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
*/

function getLargestElementAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return undefined
  }
  if (Array.isArray(obj[key]) ===  false) {
    return undefined
  }
  if (obj[key].length === 0) {
    return undefined
  }
  // create a largest element variable and set it to the first item in the array.
  // iterate through the array
    // if the element is larger than largest element variable,
      // set largest element variable to element
  // return largest element variable
  var largestElement = obj[key][0];
  for (i=1; i<obj[key].length; i++) {
    if (obj[key][i] > largestElement) {
      largestElement = obj[key][i]
    }
  }
  return largestElement;
}

var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4



console.log("3:")

/*
Write a function called "getAllButLastElementOfProperty".
Given an object and a key, "getAllButLastElementOfProperty" returns an array
containing all but the last element of the array located at the given key.
Notes:
If the array is empty, it should return an empty array.
If the property at the given key is not an array, it return an empty array.
If there is no property at the key, it should return an empty array.
*/

function getAllButLastElementOfProperty(obj, key) {
  if (obj[key] === undefined) {
    return []
  }
  if (Array.isArray(obj[key]) ===  false) {
    return []
  }
  if (obj[key].length === 0) {
    return []
  }
  // createa a results variable and set it to an empty array
  // iterate through the entire array, except the last element
    // push all elements, except last, to results array
  // return results array

  var results = [];
  for (i=0; i<obj[key].length-1; i++) {
    results.push(obj[key][i])
  }
  return results;
}

var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]



console.log("4:")

/*
Write a function called "getElementOfArrayProperty".
Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns the value of the element at the given index of the array located within the given object at the given key.
Notes:
If the array is empty, it should return undefined.
If the given index is out of range of the array located at the given key, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
*/

function getElementOfArrayProperty(obj, key, index) {
  if (obj[key] === undefined) {
    return undefined
  }
  if (Array.isArray(obj[key]) ===  false) {
    return undefined
  }
  if (obj[key].length === 0) {
    return undefined
  }
  return obj[key][index];

}

var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'

console.log("Math 5:")

/*
Write a function called "calculateBillTotal".
Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.
Notes:
Assume that sales tax is 9.5% and tip is 15%.
Do NOT tip on the sales tax, only on the pre tip amount.
*/

function calculateBillTotal(preTaxAndTipAmount) {
  var tax = preTaxAndTipAmount * 0.095
  var tip = preTaxAndTipAmount * 0.15
  return preTaxAndTipAmount + tax + tip 
}

var output = calculateBillTotal(20);
console.log(output); // --> 24.9

console.log("Iteration 2:")

/*
Write a function called "getStringLength".
Given a string, "getStringLength" returns the length of the given string.
Notes:
Do NOT use any native 'length' methods.
You might consider using 'substring' or 'slice' as alternatives.

*/

function getStringLength(string) {
  var count = 0;
  while (string !== "") {
    string = string.slice(1)
    count++
  }
  return count
}
var output = getStringLength('hello');
console.log(output); // --> 5























