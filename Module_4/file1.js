console.log("\n")
console.log("#1: Convert Array to Object 1")

function transformFirstAndLast(array) {
  var result = {};
  var lastElement = array[array.length-1]
  result[array[0]] = lastElement
  return result;
}

console.log(transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']
))


console.log("\n")
console.log("#2: Convert Object to Array")
var input = {
  name : 'Sam',
  age : 25,
  hasPets : true
};

var output = ['name', 'age', 'hasPets']

function getAllKeys(obj) {
  // create an empty results array
  // run a for in loop for the object
    // push keys into results array
  // return results array
  var results = [];
  for (var key in obj) {
    results.push(key)
  }
  return results;
}

console.log(getAllKeys(input))

console.log("\n")
console.log("#3: Convert Object to Array 2")

var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];


var output = {
  make : 'Ford',
  model : 'Mustang',
  year : 1964
}

function transformArrayToObject(array) {
  var results = {}
  // iterate over outer array
    // iterate over inner array
        // set results' first element to key, second element to value
  for (var i=0; i<array.length; i++) {
    for (var j=1; j<array[i].length; j++) {
      results[array[i][j-1]] = array[i][j]
    }
  }

  return results
}

console.log(transformArrayToObject(input))



console.log("\n")
console.log("#4: Convert Array to Object")

function listAllValues(obj) {
  // create a results array
  // for in loop through object
    // obj[key] = value or results.push(obj[key])
  /// return results
  var results = [];
  for (var key in obj) {
    results.push(obj[key])
  }
  return results; 
}

var input = {
  name : 'Krysten',
  age : 33,
  hasPets : false
};

var output = ['Krysten', 33, false]

var input2 = {
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
};

var output2 = ['a', 11, true, 1]

var input3 = {
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
};

var output3 = ['a', 11, true, 0]

function assertArrayEquals(actual, expected, testName) {
  if (actual.length !== expected.length) {
    return 'Test FAILED. Testname "' + testName + '" does not have equal length arrays.'
  }
  for (var i=0; i<expected.length; i++) {
    if (actual[i] !== expected[i]) {
      return 'Test FAILED. Testname "' + testName + ' Failed at ' + actual[i] + ", and expected " + expected[i]   
    } 
  }
  return 'Passed'
}

console.log(assertArrayEquals(listAllValues(input), output, 'Takes all values from an object and places them in an array.'))
console.log(assertArrayEquals(listAllValues(input2), output2, 'Takes all values from an object and places them in an array.'))
console.log(assertArrayEquals(listAllValues(input3), output3, 'Takes all values from an object and places them in an array.'))




console.log("\n")
console.log("#5: Convert Array To Object 3")

var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

var output = [
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

function transformEmployeeData(employeeData) {
  // create a results array
  var results = [];

  for (var i=0; i<employeeData.length; i++) {
    var person = {};
    for (var j=0; j<employeeData[i].length; j++) {
      person[employeeData[i][j][0]] = employeeData[i][j][1]
    } 
    results.push(person)
  } 
  
  // return results array
  return results;
}

console.log(transformEmployeeData(input))



console.log("\n")
console.log("#6: Convert Object To Array 3")

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};

var output = [['name', 'Holly'], ['age', 35], ['role', 'producer']]

function convertObjectToArray(obj) {
  // create an empty results array
  // create a for in loop through the object
    // create an inner array to push to
    // push key to inner array.
    // push value to inner array.
    // push inner array to results array.
  // return results array
  var result = [];
  for (var key in obj) {
    var innerArr = [];
    innerArr.push(key)
    innerArr.push(obj[key])
    result.push(innerArr)
  }
  return result;
}

console.log(convertObjectToArray(input))



console.log("\n")
console.log("#7: Convert Object To Array 3")
/*
Write a function called "findShortestElement".
Given an array, "findShortestElement" returns the shortest string within the given array.
Notes:
If there are ties, it should return the first element to appear.
If the given array is empty, it should return an empty string.
*/
function findShortestElement(arr) {
  // create a shortest variable and set it equal to the first element.
  // iterate over the array.
    // if element is shortest than shortest
      // set shortest to new element.
  // return shortest variable
  
  if (arr.length === 0) {
    return ''
  }

  var shortest = arr[0]
  for (var i=0; i<arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i]
    }
  } return shortest
}

function assertElementEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: testName "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log("Passed")
  }
}

var test1 = findShortestElement(['a', 'two', 'three'])
var expected1 = 'a'

var test2 = findShortestElement(['abcdefghij', 'twofiftyfive', 'zero'])
var expected2 = 'zero'

var test3 = findShortestElement([])
var expected3 = ''

assertElementEquals(test1, expected1, 'Should find the shortest string in the array.')
assertElementEquals(test2, expected2, 'Should find the shortest string in the array.')
assertElementEquals(test3, expected3, 'Should find the shortest string in the array.')

console.log(findShortestElement([]))




console.log("\n")
console.log("#8: Filter Odd Length Words")
/*
Write a function called "filterOddLengthWords".
Given an array of strings, "filterOddLengthWords" returns an array containing
only the elements of the given array whose lengths are odd numbers
*/
function filterOddLengthWords(arr) {
  // create a results array
  // iterate through array
    // if element % 2 === 1
      // results.push(element)
  // return results array
  var results = [];
  for (var i=0; i<arr.length; i++) {
    if (arr[i].length % 2 === 1) {
      results.push(arr[i])
    }
  }
  return results;
}

function assertArrayEquals(actual, expected, testName) {
  if (actual.length !== expected.length) {
    return 'Failed: array lengths are not equal.'
  }
  for (var j=0; j<expected.length; j++) {
    if (actual[j] !== expected[j]) {
      return 'Failed: test name "' + testName + '" failed at "' + actual[j] + '" and "' + expected[j] + '"'
    } 
  }
  return "Passed"
}

var test1 = ['there', 'it', 'is', 'now']
var result1 = ['there', 'now']
console.log(assertArrayEquals(filterOddLengthWords(test1), result1, 'Should return an array of odd length words.'))

var test2 = ['there', 'it', 'is', 'now']
var result2 = ['there', 'new']
console.log(assertArrayEquals(filterOddLengthWords(test2), result2, 'Should return an array of odd length words.'))

var test3 = []
var result3 = []
console.log(assertArrayEquals(filterOddLengthWords(test3), result3, 'Should return an array of odd length words.'))



console.log("\n")
console.log("#9: Get Largest Element")
/*
Write a function called "getLargestElement".
Given an array, "getLargestElement" returns the largest number in the given array.
Notes:
It should return 0 if the array is empty.
*/


function getLargestElement(arr) {
  // handle an empty array case
  // create a largest element variable and set it to the first element of the array
  // iterate over the array
    // if current element is greater than largest element
      // largest element = current element.
  // return largestElement
  if (arr.length === 0) {
    return 0
  }
  var largestElement = arr[0]
  for (var i=0; i<arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i]
    }
  }
  return largestElement
}


var output = getLargestElement([5, 2, 8, 3]);
// console.log(output); // --> 8;

function assertIntegerEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: testName "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log("Passed: " + testName)
  }
}

assertIntegerEquals(getLargestElement([]), 0, 'Should return largest integer in an array.') ;
assertIntegerEquals(getLargestElement([5, 2, 8, 3]), 8, 'Should return largest integer in an array.')  ;




console.log("\n")
console.log("#10: Compute Sum of All Elements")

/*
Write a function called "computeSumOfAllElements".
Given an array of numbers, "computeSumOfAllElements" returns the
sum of all the elements in the given array.

*/

function computeSumOfAllElements(arr) {
  // create a sum variable and set it to 0
  // iterate through array.
    // sum += current element in the array
  // return sum variable
  var sum = 0;
  for (var i=0; i<arr.length; i++) {
    sum += arr[i]
  }
  return sum;
}

function assertIntegerEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: testName "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log("Passed: " + testName)
  }
}


assertIntegerEquals(computeSumOfAllElements([1,2,3]), 6, 'Should return the sum of all integers in an array.')
assertIntegerEquals(computeSumOfAllElements([]), 0, 'Should return the sum of all integers in an array.')