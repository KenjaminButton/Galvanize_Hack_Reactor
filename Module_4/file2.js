console.log("\n")
console.log("#11: Calculate Bill Total")

/*
Write a function called "calculateBillTotal".
Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.
Notes:
Assume that sales tax is 9.5% and tip is 15%.
Do NOT tip on the sales tax, only on the pre tip amount.
*/

function calculateBillTotal(preTaxAndTipAmount) {
  var sum = preTaxAndTipAmount
  var tip = 0.15 * preTaxAndTipAmount
  var salesTax = 0.095 * preTaxAndTipAmount
  sum += tip
  sum += salesTax
  return sum
}


var output = calculateBillTotal(20);
console.log(output); // --> 24.9


console.log("\n")
console.log("#12: Get String Length")

/*
Write a function called "getStringLength".
Given a string, "getStringLength" returns the length of the given string.
Notes:
Do NOT use any native 'length' methods.
You might consider using 'substring' or 'slice' as alternatives.
*/

function getStringLength(string) {
  // create a count variable
  // iterate over the string with a for in loop
    // count ++
  // return count variable
  var count = 0;
  for (var i in string) {
    count = count + 1
  }
  return count;
}


console.log(getStringLength('hello'));



console.log("\n")
console.log("#13: Join Array of Arrays")

/*
Write a function called "joinArrayOfArrays".
Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

You should be familiar with the "concat" method for this problem.

*/

var expected1 = [1, 4, true, false, 'x', 'y']


function joinArrayOfArrays(arr) {
  // create an empty results array
  // iterate over arr
    // results.concat(currentElement)
  // return results array

  var result = [];
  for (var i=0; i<arr.length; i++) {
    // prototype method.
    result = result.concat(arr[i])
  }
  return result;
  // return [].concat(...arr)
  // return arr.flat()
}


console.log(joinArrayOfArrays([ [1, 4], [true, false], ['x', 'y'] ]));


console.log("\n")
console.log("#14: Get Product of All Elements at Property")

/*
Write a function called "getProductOfAllElementsAtProperty".
Given an object and a key, "getProductOfAllElementsAtProperty" returns
the product of all the elements in the array located at the given key.
Notes:
If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
*/


function getProductOfAllElementsAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return 0
  }

  if (obj[key].length === 0) {
    return 0
  }
  if (Array.isArray(obj[key]) !== true) {
    return 0
  }


  var product = 1;
  var targetArray = obj[key];
  for (var i=0; i<targetArray.length; i++) {
    product *= targetArray[i]
  }
  return product
}

var obj1 = {
  key: [1, 2, 3, 4]
};

var obj2 = {
  key: []
};

var obj3 = {
  bts: ['7', 'member', 'band']
};

var obj4 = {
  key: {bts: 'Awesome'}
};

console.log(getProductOfAllElementsAtProperty(obj1, 'key'));
console.log(getProductOfAllElementsAtProperty(obj2, 'key'));
console.log(getProductOfAllElementsAtProperty(obj3, 'key'));
console.log(getProductOfAllElementsAtProperty(obj4, 'key'));



console.log("\n")
console.log("#15: Sum Digits")

/*
Write a function called "sumDigits".
Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

Notes:
In order to use some of the methods that will be most helpful to you, you
will most likely want to do some string to number conversion and vice versa.
Be sure to familiarize yourself with the "toString" method, as well
as the "Number" function.

*/


function sumDigits(num) {
  var numToString = num.toString();
  var sum = 0;
  for (var i=0; i<numToString.length; i++) {
    if (numToString[i] === "-") {
      sum -= Number(numToString[i + 1]);
      // shifting my i variable *crucial step to this problem*
      i += 2
    }
    var currentElement = Number(numToString[i])
    sum += currentElement
  }
  return sum
}

console.log(sumDigits(1148))
console.log(sumDigits(-316))


console.log("\n")
console.log("#16: Get Sum of All Elements at Property")
/*
Write a function called "getSumOfAllElementsAtProperty".
Given an object and a key, "getSumOfAllElementsAtProperty"
returns the sum of all the elements in the array located
at the given key.

Notes:
If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the key, it should return 0.
var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
*/

function getSumOfAllElementsAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return 0
  }

  if (Array.isArray(obj[key])  === false) {
    return 0
  }
  var targetArr = obj[key]
  var sum = 0;
  for (var i=0; i<targetArr.length; i++) {
    sum += targetArr[i]
  }
  return sum;
}

function assertEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

var obj1 = {
  key: [4, 1, 8]
};

var obj2 = {
  key: []
};

var obj3 = {
  key: {}
};

var obj4 = {
  btsMembers: []
};

assertEquals(getSumOfAllElementsAtProperty(obj1, 'key'), 13, 'Returns the sum of all elements at given property.')
// If the array is empty, it should return 0.
assertEquals(getSumOfAllElementsAtProperty(obj2, 'key'), 0, 'Returns the sum of all elements at given property.')
// If the property at the given key is not an array, it should return 0.
assertEquals(getSumOfAllElementsAtProperty(obj3, 'key'), 0, 'Returns the sum of all elements at given property.')
// If there is no property at the key, it should return 0.
assertEquals(getSumOfAllElementsAtProperty(obj4, 'key'), 0, 'Returns the sum of all elements at given property.')



console.log("\n")
console.log("#17: Find Shortest Word Amongst Mixed Elements")

/*
Write a function called "findShortestWordAmongMixedElements".
Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.
Notes:
If there are ties, it should return the first element to appear in the given array.
Expect the given array to have values other than strings.
If the given array is empty, it should return an empty string.
If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

*/

function findShortestWordAmongMixedElements(arr) {
  // create an empty array variable to store string in input array
  // iterate over the input array.
    // if typeof arr[i] === 'string' === true,
      // push to empty string array variable

  // create a shortest word variable and set it to the first word in the string array.  
  // iterate over string array.
    // if word is shorter tnan shortest word,
      // set shortest word to current word
  // return shortest word

  var stringArray = []

  for (var i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'string') {
      stringArray.push(arr[i])
    }
  }

  // If the given array is empty, it should return an empty string.
  var shortestWord = stringArray[0]
  if (stringArray[0] === undefined) {
    return ''
  } 
  for (var j=0; j<stringArray.length; j++) {
    if (stringArray[j].length < shortestWord.length) {
      shortestWord = stringArray[j]
    }
  }

  return shortestWord
}

function assertStringEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

// Proving the main function works.
var input1 = findShortestWordAmongMixedElements([4, 'two', 2, 'three'])
var output1 = 'two'

// If there are ties, it should return the first element to appear in the given array.
var input2 = findShortestWordAmongMixedElements(['twenty', 'four', 'seventeen', 4, 'one', 2, 'two'])
var output2 = 'one'

// If the given array is empty, it should return an empty string.
var input3 = findShortestWordAmongMixedElements([])
var output3 = ''

// If the given array contains no strings, it should return an empty string.
var input4 = findShortestWordAmongMixedElements([8, 2, 23, 33, 99, 1, 34, 24])
var output4 = ''

assertStringEquals(input1, output1, 'Finds the shortest word amongst mixed elements in an array:')
assertStringEquals(input2, output2, 'Finds the shortest word amongst mixed elements in an array:')
assertStringEquals(input3, output3, 'Finds the shortest word amongst mixed elements in an array:')
assertStringEquals(input4, output4, 'Finds the shortest word amongst mixed elements in an array:')


console.log("\n")
console.log("#18: Find Smallest Number Amongst Mixed Elements")
/*
Write a function called "findSmallestNumberAmongMixedElements".
Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns
the smallest number within the given array.

Notes:
If the given array is empty, it should return 0.
If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

// create an empty integer array variable
// iterate over input array
  // if typeof arr[i] === 'number'
    // push to empty integer array.

// create a smallest number variable and set it the first integer array element
// iterate over integer array
  // if current element is < smallest number
    // set smallest number to current element

// return smallest number

function findSmallestNumberAmongMixedElements(arr) {
  // If the given array is empty, it should return 0.
  if (arr.length === 0) {
    return 0
  }

  var integerArray = []
  for (var i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'number') {
      integerArray.push(arr[i])
    }
  }
  
  if (integerArray.length === 0) {
    return 0
  }

  var smallestNumber = integerArray[0]
  for (var j=0; j<integerArray.length; j++) {
    if (integerArray[j] < smallestNumber) {
      smallestNumber = integerArray[j]
    }
  }
  return smallestNumber
}

function assertEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

var input1 = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
var output1 = 4

var input2 = findSmallestNumberAmongMixedElements([4000, 'lincoln', 9, 'octopus']);
var output2 = 9

// If the given array is empty, it should return 0.
var input3 = findSmallestNumberAmongMixedElements([]);
var output3 = 0

// If the array contains no numbers, it should return 0.
var input4 = findSmallestNumberAmongMixedElements(['abc', 'xyz', 'BTS']);
var output4 = 0

assertEquals(input1, output1, 'Returns the smallest number in a mixed element array.')
assertEquals(input2, output2, 'Returns the smallest number in a mixed element array.')
assertEquals(input3, output3, 'Returns the smallest number in a mixed element array.')
assertEquals(input4, output4, 'Returns the smallest number in a mixed element array.')


console.log("\n")
console.log("#19: Get Longest Word Of Mixed Elements")
/*
Write a function called "getLongestWordOfMixedElements".
Given an array of mixed types, "getLongestWordOfMixedElements" returns
the longest string in the given array.

Notes:
If the array is empty, it should return an empty string ("").
If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/

// create an empty string array
// iterate over input array
  // filter out strings from numbers
    // push strings to empty string array

// create a longestWord variable and set it to first word of string array.
// iterate over string array.
  // if current word is longer than longest word
    // set longest word to current word

// return longest word

function getLongestWordOfMixedElements(arr) {
  // If the array is empty, it should return an empty string ("").
  if (arr.length === 0) {
    return ''
  }

  var stringArr = [];
  for (var i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'string') {
      stringArr.push(arr[i])
    }
  }
  // If the array contains no strings; it should return an empty string.
  if (stringArr.length === 0) {
    return ''
  }
  var longestWord = stringArr[0]
  for (j=0; j<stringArr.length; j++) {
    if (stringArr[j].length > longestWord.length) {
      longestWord = stringArr[j]
    }
  }
  return longestWord
}

function assertStringEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

var input1 = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1])
var output1 = 'word'

var input2 = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1, 'Kenderson'])
var output2 = 'Kenderson'

// If the array is empty, it should return an empty string ("").
var input3 = getLongestWordOfMixedElements([])
var output3 = ''

// If the array contains no strings; it should return an empty string.
var input4 = getLongestWordOfMixedElements([1, 2, 3, 4, 5])
var output4 = ''

assertStringEquals(input1, output1, 'Returns the longest string in a mixed array')
assertStringEquals(input2, output2, 'Returns the longest string in a mixed array')
assertStringEquals(input3, output3, 'Returns the longest string in a mixed array')
assertStringEquals(input4, output4, 'Returns the longest string in a mixed array')


console.log("\n")
console.log("#20: Get Largest Number Among Mixed Elements")
/*
Write a function called "getLargestNumberAmongMixedElements".
Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
The array might contain values of a type other than numbers.
If the array is empty, it should return 0.
If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

// create a variable (storing integers) and set it to an empty array
// iterate over input array
  // if current element is a number
    // push to integers array

// set largest number to first element of integers array
// iterate over integers array
  // if current element is larger than largest number
    // largest number = current element

// return largest number



function getLargestNumberAmongMixedElements(arr) {
  // If the array is empty, it should return 0.
  if (arr.length === 0) {
    return 0
  }

  var integersArray = [];
  for (var i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'number') {
      integersArray.push(arr[i])
    }
  }
  // If the array contains no numbers, it should return 0.
  if (integersArray[0] === undefined) {
    return 0
  }
  var largestNumber = integersArray[0];
  for (var j=0; j<integersArray.length; j++) {
    if (integersArray[j] > largestNumber) {
      largestNumber = integersArray[j]
    }
  }
  return largestNumber
}

function assertEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}


var input1 = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 100])
var output1 = 100

// If the array is empty, it should return 0.
var input2 = getLargestNumberAmongMixedElements([])
var output2 = 0

// If the array contains no numbers, it should return 0.
var input3 = getLargestNumberAmongMixedElements(['Kobe', 'MJ', 'LeBron'])
var output3 = 0

assertEquals(input1, output1, 'Returns the largest number in an array with mixed elements.')
assertEquals(input2, output2, 'Returns the largest number in an array with mixed elements.')
assertEquals(input3, output3, 'Returns the largest number in an array with mixed elements.')

















