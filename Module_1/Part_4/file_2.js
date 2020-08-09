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

console.log("Objects 13:")
/*
Write a function called "getSumOfAllElementsAtProperty".
Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key.
Notes:
If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the key, it should return 0.
*/

function getSumOfAllElementsAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return 0
  }
  if (Array.isArray(obj[key]) === false) {
    return 0
  }
  // create a sum variable
  // iterate through array
    // sum += element
  // return sum 
  var sum = 0;
  for (var i = 0; i<obj[key].length; i++) {
    sum += obj[key][i]
  }
  return sum;

}

var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13

console.log("Array Methods 15:")
console.log("1:")
/*
Write a function called "findShortestWordAmongMixedElements".
Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.
Notes:
If there are ties, it should return the first element to appear in the given array.
Expect the given array to have values other than strings.
If the given array is empty, it should return an empty string.
If the given array contains no strings, it should return an empty string.
*/

function findShortestWordAmongMixedElements(arr) {
  // create a a results array;
  // iterate through arr
    // if arr element is string,
      // push to results arr.

  // create a shortest word array and set it to results[0]

  // if results array length is 0,
      // return ''

  // iterate through results array
    // if current element.length < shortest word.length
      // shortest word = current element 

  // return shortest word

  var results = [];
  for (var i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'string') {
      results.push(arr[i])
    }
  }
    
  if (results.length === 0) {
    return ''
  }

  var shortestWord = results[0];
  for (var j=1; j<results.length; j++) {
    if (results[j].length < shortestWord.length) {
      shortestWord = results[j]
    }  
  }
  return shortestWord
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

console.log("2:")
/*
Write a function called "findSmallestNumberAmongMixedElements".
Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.
Notes:
If the given array is empty, it should return 0.
If the array contains no numbers, it should return 0.
*/

function findSmallestNumberAmongMixedElements(arr) {
  // create a results array
  // iterate through arr
    // if element is number
      // push to results arr

  // if results array length is 0
  //   return 0

  // create a smallest number variable and set it to results[0]

  // iterate through results array
    // if current element is smaller than smallest number variable
      // smallest number = current element

  // return smallest number variable
  var results = []
  for (var i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'number') {
      results.push(arr[i])
    }
  }
  
  if (results.length === 0) {
    return 0
  }

  var smallestNumber = results[0]

  for (var j=1; j<results.length; j++) {
    if (results[j] < smallestNumber) {
      smallestNumber = results[j]
    }
  }

  return smallestNumber;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4


console.log("Array Methods 16:")
console.log("1:")

/*
Write a function called "getLongestWordOfMixedElements".
Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.
Notes:
If the array is empty, it should return an empty string ("").
If the array contains no strings; it should return an empty string.
*/

function getLongestWordOfMixedElements(arr) {
  // create a results variable
  // iterate over array
    // if array element is a string
      // push to results array

  // if results array length < 1
    // return ''

  // create longest word variable and set it to first element of results variable
  // iterate over results array
    // if current element length > longest word length
      // longest word = current element

  // return longest word 

  var results = [];
  for (i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'string') {
      results.push(arr[i])
    }
  }
  
  if (results.length < 1) {
    return ''
  }

  var longestWord = results[0];
  for (j=1; j<results.length; j++) {
    if (results[j].length > longestWord.length) {
      longestWord = results[j]
    }
  }
  return longestWord
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'

console.log("2:")

/*
Write a function called "getLargestNumberAmongMixedElements".
Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.
Notes:
The array might contain values of a type other than numbers.
If the array is empty, it should return 0.
If the array contains no numbers, it should return 0.
*/

function getLargestNumberAmongMixedElements(arr) {
  // create a results array
  // iterate over arr
    // if current element is a number
      // push to results array

  // if results array length < 1:
    // return 0

  // create a largestNumber variable and set it to results[0]
  // iterate through results array (starting at 1)
    // current element is > largestNumber:
      // largestNumber = current element

  // return largestNumber

  var results = [];
  for (var i =0; i<arr.length; i++) {
    if (typeof arr[i] === 'number') {
      results.push(arr[i])
    }
  }

  if (results.length < 1) {
    return 0
  }

  var largestNumber = results[0]
  for (var j=1; j<results.length; j++) {
    if (results[j] > largestNumber) {
      largestNumber = results[j]
    }
  }

  return largestNumber
}


var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5

console.log("Conditionals 8:")
console.log("1:")
/*
Write a function called "convertScoreToGrade".
Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.
Notes:
(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'
If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
*/

function convertScoreToGrade(score) {
  // your code here
  if (score < 0 || score > 100) {
    return 'INVALID SCORE'
  }

  if (score < 60) {
    return 'F'
  }
  else if (score < 70) {
    return 'D'
  } 
  else if (score < 80) {
    return 'C'
  }
  else if (score < 90) {
    return 'B'
  }
  else {
    return 'A'
  }
}

var output = convertScoreToGrade(91);
console.log(output); // --> 'A'

console.log("2:")

/*
Write a function called "convertScoreToGradeWithPlusAndMinus".
Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.
Notes:
(100 - 90) --> 'A'
(89 - 80) --> 'B'
(79 - 70) --> 'C'
(69 - 60) --> 'D'
(59 - 0) --> 'F'
If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
If the score is between the 8 and 9 (inclusive) of a given range, return the letter with a '+'
There are is no F+ and there is no F-.
*/

function convertScoreToGradeWithPlusAndMinus(score) {

  if (score < 0 || score > 100) {
    return 'INVALID SCORE'
  }

  if (score < 60) {
    return 'F'
  }
  else if (score < 70) {
    if (score < 63) {
      return 'D-'
    } else if (score > 67) {
      return 'D+'
    } else {
      return 'D'
    }
  } 
  else if (score < 80) {
    if (score < 73) {
      return 'C-'
    } else if (score > 77) {
      return 'C+'
    } else {
      return 'C'
    }
  }
  else if (score < 90) {
    if (score < 83) {
      return 'B-'
    } else if (score > 87) {
      return 'B+'
    } else {
      return 'B'
    }
  }
  else {
    if (score < 93) {
      return 'A-'
    } else if (score > 97) {
      return 'A+'
    } else {
      return 'A'
    }
  }
}

var output = convertScoreToGradeWithPlusAndMinus(97);
console.log(output); // --> 'A-'

console.log("Iteration 4:")
console.log("1:")

// Write a function called "computeFactorialOfN".
// Given a natural number (a whole number greater than 0),
// "computeFactorialOfN" returns its factorial.

function computeFactorialOfN(n) {
  // create a product variable and set it to 1
  // iterate over all previous numbers including n
    // multiply it by product variable
  // return product variable
  var product = 1;
  for (i=1; i<=n; i++) {
    product = product * i
  }
  return product
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24


console.log("2:")

/*
Write a function called "repeatString".
Given a string and a number, "repeatString" returns the given string repeated the given number of times.
*/
function repeatString(string, num) {
  // create a results string
  // create a for loop to num.
    // results.push(string)
  // return results string
  var results = ''
  for (i=0; i<num; i++) {
    results = results + string
  }
  return results;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'

console.log("Math 6:")

/*
Write a function called "computeCompoundInterest".
Given a principal, an interest rate, a compounding frequency, and a time
(in years), "computeCompoundInterest" returns the amount of compound
interest generated.

Reference:
https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest
This shows the formula used to calculate the total compound interest generated.
*/

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  /*

  var nt = compoundingFrequency * timeInYears
  var brackets = (1+(interestRate/compoundingFrequency))
  var result = principal * brackets ** (nt);
  
  */
  var result = principal * Math.pow((1+(interestRate/compoundingFrequency)), (compoundingFrequency * timeInYears)) - principal
  return result;
}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061

console.log("Advanced 6:")
/*
Write a function called "modulo".
Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.
It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
Notes:
Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
0 % ANYNUMBER = 0.
ANYNUMBER % 0 = NaN.
If either operand is NaN, then the result is NaN.
Modulo always returns the sign of the first number, even if the remainder is 0.
*/

function modulo(num1, num2) {
  if (num1 === 0) {
    return 0
  }
  if (num2 === 0) {
    return 0
  if (num1 === 0) {
    return 0
  }
  if (num2 === 0) {
    return NaN;
  }
  if (isNaN(num1) || isNaN(num2)) {
    return NaN;
  }

  var isPositive = true;

  if (num1 < 0) {
    isPositive = false
  }

  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  while (num1 >= num2) {
    num1 = num1 - num2;
  }

  if (isPositive) {
    return num1;
  }
  else {
    return -num1;
  }

}

var output = modulo(25, 4);
console.log(output); // --> 1

var output = modulo(87, -7);
console.log(output); // --> 3

console.log("Iteration 5:")

/*
Write a function called "multiply".
Given 2 numbers, "multiply" returns their product.
Notes:
It should not use the multiply operator - *
*/

function multiply(num1, num2) {
  // create a start variable and set it to num1
  // create a for loops and iterate over num2
    // add num2 to start variable 
  // return start variable
  var resultIsPositive = true;
  if ((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)) {
    resultIsPositive = false;
  }

  num1 = Math.abs(num1)
  num2 = Math.abs(num2)

  var result = 0;

  for (var i=0; i<num2; i++) {
    result += num1;
  }

  if (resultIsPositive) {
    return result;
  } else {
    return -result;
  }
}

var output = multiply(-4, 7);
console.log(output); // --> 28



console.log("Advanced 7:")

/*
Write a function called "isOddWithoutModulo".
Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.
Note:
It does so without using the modulo operator (%).
It should work for negative numbers and zero.
*/

function isOddWithoutModulo(num) {
  // var isPositive = true
  // if (num < 0) {
  //   isPositive = false
  // }

  num = Math.abs(num);

  while (num > 2) {
    num = num - 2
  }
  if (num === 1) {
    return true
  }
  else {
    return false
  }
}

var output = isOddWithoutModulo(-1);
console.log(output); // --> true

var output = isOddWithoutModulo(-18);
console.log(output); // --> true

console.log("Advanced 8:")

/*
Write a function called "isEvenWithoutModulo".
Given a number, "isEvenWithoutModulo" returns whether it is even.
Notes:
It does so without using the modulo operator (%).
It should work for negative numbers and zero.
*/

function isEvenWithoutModulo(num) {
  num = Math.abs(num)
  while (num > 0) {
    num = num - 2
    console.log(num)
  }   
  if (num === 0) {
    return true
  } else {
    return false
  }
}

var output = isEvenWithoutModulo(8);
console.log(output); // --> true

console.log("Iteration 6:")
console.log("1:")

/*
Write a function called "multiplyBetween".
Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.
Notes:
The product between 1 and 4 is 1 * 2 * 3 = 6.
If num2 is not greater than num1, it should return 0.
*/

function multiplyBetween(num1, num2) {
  if (num2 <= num1) {
    return 0
  }

  var product = 1;
  for (var i=num1; i<num2; i++) {
    product = product * i
  }
  if (product === -0) {
    return 0
  }
  return product
}

var output = multiplyBetween(2, 5); // 24 = 2 * 3 * 4
console.log(output); // --> 24

var output = multiplyBetween(-5, 1); // 24 = 2 * 3 * 4
console.log(output); // --> 24

console.log("2:")

/*
Write a function called "computeSumBetween".
Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.
Notes:
The sum between 1 and 4 is 1 + 2 + 3 = 6.
If num2 is not greater than num1, it should return 0.
*/

function computeSumBetween(num1, num2) {
  if (num2 <= num1) {
    return 0
  }
  // create a sum variable and set it to 0
  // Create a for loop and start at num1
    // sum += current element
  // return sum
  var sum = 0;
  for (var i=num1; i<num2; i++) {
    sum += i
  }
  return sum
}

var output = computeSumBetween(2, 5); // 9 = 2 + 3 + 4
console.log(output); // --> 9

var output = computeSumBetween(-4, -1); // 9 = 2 + 3 + 4
console.log(output); // --> 9

function transformFirstAndLast(array) {
  // create results object
  // set key to array[0]
  // set value to array[-1]
  // return result
  var results = {};
  
  var key = array[0]
  var value = array[array.length -1]

  results[key] = value
  return results;

}

var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
console.log(transformFirstAndLast(input))


function transformArrayToObject(array) {
  // create a results array
  // iterate over outer array
  var results = {};

  for (var i=0; i<array.length; i++) {
    var key = array[i][0]
    var value = array[i][1]
    results[key] = value

  }
  return results;
}

var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
console.log(transformArrayToObject(input))


function transformEmployeeData(employeeData) {
  var container = []

  for (var i=0; i<employeeData.length; i++) {
    var personArray = employeeData[i]
    var personObject = {};    
    for (var j=0; j<personArray.length; j++) {
      var key = personArray[j][0];
      var value = personArray[j][1];
      personObject[key] = value;
    }
    container.push(personObject)
    
  }
  return container;
  
}

var input = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

var output = transformEmployeeData(input)
console.log(output)


function getAllKeys(obj) {
  var resultsArray = []
  for (key in obj) {
    resultsArray.push(key)
  }
  return resultsArray;

}

var input = {
  name : 'Sam',
  age : 25,
  hasPets : true
};

var output = getAllKeys(input);
console.log(output)


function listAllValues(obj) {
  var resultsArray = [];
  for (key in obj) {
    resultsArray.push(obj[key])
  }
  return resultsArray;
}

var input = {
  name : 'Krysten',
  age : 33,
  hasPets : false
};

var output = listAllValues(input)
console.log(output)

function convertObjectToArray(obj) {
  var outerArray = [];
  for (key in obj) {
    var innerArray = [];
    innerArray.push(key, obj[key])
    outerArray.push(innerArray)
  }
  return outerArray
}

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};

// Should return --> [['name', 'Holly'], ['age', 35], ['role', 'producer']]

console.log("Greet Customer:")

var output = convertObjectToArray(input);
console.log(output)

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  if (customerData[firstName] === undefined) {
    return 'Welcome! Is this your first time?'
  }

  if (customerData[firstName].visits === 1) {
    return "Welcome back, " + firstName + "! We're glad you liked us the first time!"
  } else {
    return "Welcome back, " + firstName + "! So glad to see you again!"
  }

}

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'


var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

console.log("assertEqual")

function multiplyByTwo(n) {
  return n * 2;
}
var output = multiplyByTwo(2); // returns 4
assertEqual(output, 4, 'it doubles 2 to 4');

// console output:
// passed

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed")
  } else {
    console.log('FAILED [' + testName + '] Expected "4", but got "5"')
  }
}

// FAILED [it doubles 2 to 4] Expected "4", but got "5"

console.log("assertArraysEqual")
function assertArraysEqual(actual, expected, testName) {
  // Create a same length variable
  // create a isEqual variable and set it to true
  // for loop actual:
    // if actual[i] !== expected[i]:
      // FAILED
    // else:
      // passed
  var sameLength = actual.length === expected.length;
  var isEqual = true;

  for (var i=0; i<actual.length; i++) {
    if (actual[i] !== expected[i]) {
      isEqual = false
    }    
  }
  if (sameLength && isEqual) {
    console.log("passed")
  }
  else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"')
  }
}

var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// console output:
// passed

console.log("assertObjectsEqual")
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual)
  expected = JSON.stringify(expected)
  if (actual === expected) {
    console.log("passed")
  } 
  else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual + '')
  }
}

}


















