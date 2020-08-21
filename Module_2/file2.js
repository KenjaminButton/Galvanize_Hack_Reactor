// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
  // uses sum function
  // returns the average of an array of numbers
  return sum(numbers) / numbers.length

}

function sum(numbers) {
  // returns the sum of an array of numbers
  var sum = 0;
  for (var i=0; i<numbers.length; i++) {
    sum += numbers[i]
  }
  return sum
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqualsSum(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed: A+! Free Derek Jeter rookie card for you!")
  } else {
    console.log("Failed: Testname [" + testName + "] expected " + expected + ", but got " + actual)
  }
}

function assertEqualsAverage(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed:")
  }
  else {
    console.log("Failed: Testname [" + testName + "] expected " + expected + ", but got " + actual)
  }
}


// TESTS CASES
var array1 = [2, 4, 6]
// var expectedSum = 12
// assertEqualsSum(sum(array1), expectedSum, 'Should return the average of the array.')

var expectedAverage = 4
assertEqualsAverage(average(array1), expectedAverage, 'Should return the average of the values in the array.')


console.log("Applying Assert Object Equals:")

// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj.lastName;
  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }
  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual)
  expected = JSON.stringify(expected)
  if (actual === expected) {
    console.log("PASSED:")
  }
  else {
    console.log("FAILED: Testname [" + testName + "] expected " + expected + ", but got " + actual)
  }
}

// TESTS CASES
var inputObject = {
  firstName: 'Ken',
  lastName: 'Chang'
}

// var outputObject  = addFullNameProp(inputObject)

var resultObject1 = {
  firstName: 'Ken',
  lastName: 'Chang',
  fullName : 'Ken Chang'
}

assertObjectsEqual(addFullNameProp(inputObject), resultObject1, 'Should add first name and last name to full name.')

// console.log(addFullNameProp(testObject1))

// Look up DEEP OBJECT COMPARISON


// Sample Input
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

// Sample Output
var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}];


// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  // create results array
  // iterate over input array
    // create a person object
    // set current element to name
    // set current age in object
    // push person object to results array
  // returns results array
  var results = [];
  for (var j=0; j<classList.length; j++) {
    var person = {};
    person.name = classList[j]
    person.age = getRandomIntInclusive(10, 11)
    results.push(person)
  }
  return results;
}

// // ASSERTION FUNCTION(S) TO BE USED
// function assertWithinRange(low, high, actual) {
//   if (actual >= low && actual <= high) {
//     return true
//   } else {
//     return false
//   }
// }

// function assertNameEquals(input, output, testName) {
//   for (var i=0; i<input.length; i++) {
//     if (input[i] !== output[i].name) {
//       console.log("Failed at: " + i)
//       return false;
//     }
//     if (assertWithinRange(10, 11, output[i].age) === false) {
//       console.log("Failed at: " + i)
//       return false
//     }
//   }
//   return true
// }
// // TESTS CASE
// var test1 = assertNameEquals(decorateClassListWithAges(classList), true, "should do something..." )
// console.log(test1)


// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  if (text === "") {
    return true
  }

  var lowerCase = text.toLowerCase()
  var arrayOfLetters = lowerCase.split("")
  var setOfLetters = new Set(arrayOfLetters)
  // console.log(setOfLetters)
  return setOfLetters.size === text.length
}

// ASSERTION FUNCTION(S) TO BE USED
function assertIsogram(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed:")
    return true
  } else {
    console.log("Failed: TESTNAME: " + testName + " Expected [" + expected + "], but got [" + actual + "]")
    return false
  }
}


// TESTS CASES
var test1 = "abcdefg"
assertIsogram(isIsogram(test1), true, 'Should return true if text is an isogram.')

var test2 = "ABCabc"
assertIsogram(isIsogram(test2), false, 'Should return true if text is an isogram.')



// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  // Count the instances of each letter
  var arrayOfLetters = word.split('')
  var letterCount = {};
  for (var i=0; i<arrayOfLetters.length; i++) {
    if (letterCount[arrayOfLetters[i]] === undefined) {
      letterCount[arrayOfLetters[i]] = 1;
    } else {
      letterCount[arrayOfLetters[i]]++
    }
  }
  // Iterate all the counts and find the highest
  // Return this word's max repeat count
  var max = 0;
  for (var letter in letterCount) {
    if (letterCount[letter] > max) {
      max = letterCount[letter];
    }
  }
  return max
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  var words = text.split(" ")
  // For each word...
  for (var j=0; j<words.length; j++) {
    var word = words[j]
    var repeatCountForWord = findMaxRepeatCountInWord(word)
    // If that max repeat count is higher than the overall max repeat count, then
    if (repeatCountForWord > maxRepeatCountOverall) {
      // update maxRepeatCountOverall
      maxRepeatCountOverall = repeatCountForWord
      wordWithMaxRepeatCount = word
    }
  }
  return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertMaxRepeat(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed:")
    return true
  } else {
    console.log("Failed: TESTNAME: " + testName + " Expected [" + expected + "], but got [" + actual + "]")
    return false
  }
}

// TESTS CASES
var test_1 = "kenderson"
var actual_1 = findMaxRepeatCountInWord(test_1)
var expected_1 = 2

console.log(assertMaxRepeat(actual_1, expected_1, 'Should return 2'))

var test_2 = "never seeeeeeeeeeeen"
var actual_2 = findFirstWordWithMostRepeatedChars(test_2)
var expected_2 = 'seeeeeeeeeeeen'

console.log(assertMaxRepeat(actual_2, expected_2, 'should return seeeeeeeeeeeen'))


// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  // get area code, wrapped in parenthesis, add to string.
  string += this.parenthesize(this.getAreaCode());
  string += " ";
  // get exchange code, add to string.
  string += this.getExchangeCode()
  // add hyphen to string
  string += "-"
  // get line code, add to string.
  string += this.getLineNumber()

  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.slice(0,3)
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.slice(3,6)
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.slice(6,)
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};

// ASSERTION FUNCTION(S) TO BE USED

// Create a new instance of PhoneNumberFormatter
var formatter = new PhoneNumberFormatter([1, 2, 3, 4, 5, 6, 7, 8, 9, 1])
console.log(formatter)

// test individual methods as we go
var areaCode = formatter.getAreaCode()
console.log("Area Code: " + areaCode)

var exchangeCode = formatter.getExchangeCode()
console.log("Exchange Code: " + exchangeCode)

var lineNumber = formatter.getLineNumber(6,)
console.log("Line Number: " + lineNumber)


var formattedNumber = formatter.render()
console.log(formattedNumber) // (123) 456-7891
// TESTS CASES















