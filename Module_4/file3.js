console.log("\n")
console.log("#21: Compute Summation to N")

/*
Write a function called "computeSummationToN".
Given a number, "computeSummationToN" returns the sum of sequential numbers
leading up to the given number, beginning at 0.

Notes:
If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.

var output = computeSummationToN(6);
console.log(output); // --> 21
*/

function computeSummationToN(n) {
  // create a sum variable and set it to 0
  // iterate from 0 to n
    // sum += i
  var isPositive = true
  if (n < 0) {
    n = Math.abs(n)
    isPositive = false
  }

  var sum = 0;
  for (var i=0; i<=n; i++) {
    sum += i
  }

  if (isPositive === false) {
    sum += (sum * -2)
  }

  return sum;
}

var output = computeSummationToN(6);
console.log(output); // --> 21

function assertEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

var input1 = computeSummationToN(6)
var output1 = 21

var input2 = computeSummationToN(-6)
var output2 = -21

assertEquals(input1, output1, 'Computes the sum of all numbers up to and including "n"')
assertEquals(input2, output2, 'Computes the sum of all numbers up to and including "n"')


console.log("\n")
console.log("#22: Convert Score To Grade")

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

  var output = convertScoreToGrade(91);
  console.log(output); // --> 'A'
*/

function convertScoreToGrade(n) {
  // If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
  if (n > 100 || n < 0) {
    return 'INVALID SCORE'
  }

  if (n < 60) {
    return 'F'
  } else if (n < 70) {
    return 'D'
  } else if (n < 80) {
    return 'C'
  } else if (n < 90) {
    return 'B'
  } else {
    return 'A'
  }
}

// var output = convertScoreToGrade(100);
// console.log(output); // --> 'A'

function assertStringEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

// If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
var input1 = convertScoreToGrade(101)
var expectedOutput1 = 'INVALID SCORE'

// If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
var input2 = convertScoreToGrade(-1)
var expectedOutput2 = 'INVALID SCORE'

var input3 = convertScoreToGrade(57)
var expectedOutput3 = 'F'

var input4 = convertScoreToGrade(67)
var expectedOutput4 = 'D'

var input5 = convertScoreToGrade(77)
var expectedOutput5 = 'C'

var input6 = convertScoreToGrade(87)
var expectedOutput6 = 'B'

var input7 = convertScoreToGrade(97)
var expectedOutput7 = 'A'

assertStringEquals(input1, expectedOutput1, 'Returns a letter grade for course score.')
assertStringEquals(input2, expectedOutput2, 'Returns a letter grade for course score.')
assertStringEquals(input3, expectedOutput3, 'Returns a letter grade for course score.')
assertStringEquals(input4, expectedOutput4, 'Returns a letter grade for course score.')
assertStringEquals(input5, expectedOutput5, 'Returns a letter grade for course score.')
assertStringEquals(input6, expectedOutput6, 'Returns a letter grade for course score.')
assertStringEquals(input7, expectedOutput7, 'Returns a letter grade for course score.')


console.log("\n")
console.log("#23: Convert Score to Grade with Plus/Minus")

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
If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
There are is no F+ and there is no F-.
var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
*/

function convertScoreToGradeWithPlusAndMinus(n) {
  // If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
  if (n > 100 || n < 0) {
    return 'INVALID SCORE'
  }

  if (n < 60) {
    return 'F'
  } else if (n < 63) {
    return 'D-'
  } else if (n < 68) {
    return 'D'
  } else if (n < 70) {
    return 'D+'
  } else if (n < 73) {
    return 'C-'
  } else if (n < 78) {
    return 'C'
  } else if (n < 80) {
    return 'C+'
  } else if (n < 83) {
    return 'B-'
  } else if (n < 88) {
    return 'B'
  } else if (n < 90) {
    return 'B+'
  } else if (n < 93) {
    return 'A-'
  } else if (n < 98) {
    return 'A'
  } else {
    return 'A+'
  }
}

// var output = convertScoreToGrade(100);
// console.log(output); // --> 'A'

function assertStringEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

// If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
var input1 = convertScoreToGradeWithPlusAndMinus(101)
var expectedOutput1 = 'INVALID SCORE'

// If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
var input2 = convertScoreToGradeWithPlusAndMinus(-1)
var expectedOutput2 = 'INVALID SCORE'

var input3 = convertScoreToGradeWithPlusAndMinus(57)
var expectedOutput3 = 'F'

var input4 = convertScoreToGradeWithPlusAndMinus(62)
var expectedOutput4 = 'D-'

var input5 = convertScoreToGradeWithPlusAndMinus(65)
var expectedOutput5 = 'D'

var input6 = convertScoreToGradeWithPlusAndMinus(68)
var expectedOutput6 = 'D+'

var input7 = convertScoreToGradeWithPlusAndMinus(70)
var expectedOutput7 = 'C-'

var input8 = convertScoreToGradeWithPlusAndMinus(75)
var expectedOutput8 = 'C'

var input9 = convertScoreToGradeWithPlusAndMinus(78)
var expectedOutput9 = 'C+'

var input10 = convertScoreToGradeWithPlusAndMinus(81)
var expectedOutput10 = 'B-'

var input11 = convertScoreToGradeWithPlusAndMinus(87)
var expectedOutput11 = 'B'

var input12 = convertScoreToGradeWithPlusAndMinus(88)
var expectedOutput12 = 'B+'

var input13 = convertScoreToGradeWithPlusAndMinus(91)
var expectedOutput13 = 'A-'

var input14 = convertScoreToGradeWithPlusAndMinus(97)
var expectedOutput14 = 'A'

var input15 = convertScoreToGradeWithPlusAndMinus(98)
var expectedOutput15 = 'A+'

// var input10 = convertScoreToGradeWithPlusAndMinus(75)
// var expectedOutput10 = 'C'

console.log('\n\tTesting "INVALID SCORE" inputs:')
assertStringEquals(input1, expectedOutput1, 'Returns a letter grade for course score.')
assertStringEquals(input2, expectedOutput2, 'Returns a letter grade for course score.')
assertStringEquals(input3, expectedOutput3, 'Returns a letter grade for course score.')
console.log("\n\tTesting D-, D, and D+:")
assertStringEquals(input4, expectedOutput4, 'Returns a letter grade for course score.')
assertStringEquals(input5, expectedOutput5, 'Returns a letter grade for course score.')
assertStringEquals(input6, expectedOutput6, 'Returns a letter grade for course score.')
console.log("\n\tTesting C-, C, and C+:")
assertStringEquals(input7, expectedOutput7, 'Returns a letter grade for course score.')
assertStringEquals(input8, expectedOutput8, 'Returns a letter grade for course score.')
assertStringEquals(input9, expectedOutput9, 'Returns a letter grade for course score.')
console.log("\n\tTesting B-, B, and B+:")
assertStringEquals(input10, expectedOutput10, 'Returns a letter grade for course score.')
assertStringEquals(input11, expectedOutput11, 'Returns a letter grade for course score.')
assertStringEquals(input12, expectedOutput12, 'Returns a letter grade for course score.')

console.log("\n\tTesting A-, A, and A+:")
assertStringEquals(input13, expectedOutput13, 'Returns a letter grade for course score.')
assertStringEquals(input14, expectedOutput14, 'Returns a letter grade for course score.')
assertStringEquals(input15, expectedOutput15, 'Returns a letter grade for course score.')


console.log("\n")
console.log("#24: Repeat String")

/*
Write a function called "repeatString".

Given a string and a number, "repeatString" returns the
given string repeated the given number of times.

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
*/

function repeatString(string, num) {
  if (num < 0) {
    return "Don't put a negative number. Try again."
  }
  return string.repeat(num)
}

// var output = repeatString('code', 3);
// console.log(output); // --> 'codecodecode'

function assertStringEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

var input1 = repeatString('code', 3)
var expectedOutput1 = 'codecodecode'

var input2 = repeatString('code', 0)
var expectedOutput2 = ''

var input3 = repeatString('code', -2)
var expectedOutput3 = "Don't put a negative number. Try again."


assertStringEquals(input1, expectedOutput1, 'Repeats string n amount of times.')
assertStringEquals(input2, expectedOutput2, 'Repeats string n amount of times.')
assertStringEquals(input3, expectedOutput3, 'Repeats string n amount of times.')


console.log("\n")
console.log("#25: Get Longest of Three Words")

/*
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

Notes:
If there is a tie, it should return the first word in the tie.

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'
*/

function getLongestOfThreeWords(word1, word2, word3) {
  if (typeof word1 !== 'string') {
    return 'Please enter a valid string for "word1" input'
  } else if (typeof word2 !== 'string') {
    return 'Please enter a valid string for "word2" input'
  } else if (typeof word3 !== 'string') {
    return 'Please enter a valid string for "word3" input'
  }

  var longestWord = word1;
  if (word2.length > longestWord.length) {
    longestWord = word2
  }
  if (word3.length > longestWord.length) {
    longestWord = word3
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

var input1 = getLongestOfThreeWords('these', 'three', 'words')
var output1 = 'these'

var input2 = getLongestOfThreeWords('these', 'kenderson', 'BTSisTheBest')
var output2 = 'BTSisTheBest'

var input3 = getLongestOfThreeWords(8, 'kenderson', 'BTSisTheBest')
var output3 = 'Please enter a valid string for "word1" input'

var input4 = getLongestOfThreeWords('Yankees', 2, 'BTSisTheBest')
var output4 = 'Please enter a valid string for "word2" input'

var input5 = getLongestOfThreeWords('RedSox', 'Boston', 7)
var output5 = 'Please enter a valid string for "word3" input'

assertStringEquals(input1, output1, 'Returns the longest word of three words.')
assertStringEquals(input2, output2, 'Returns the longest word of three words.')
assertStringEquals(input3, output3, 'Returns the longest word of three words.')
assertStringEquals(input4, output4, 'Returns the longest word of three words.')
assertStringEquals(input5, output5, 'Returns the longest word of three words.')


console.log("\n")
console.log("#26: Find Shortest of Three Words")

/*
Write a function called "findShortestOfThreeWords".
Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.
Notes:
If there are ties, it should return the first word in the parameters list.
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfThreeWords(word1, word2, word3) {
  if (typeof word1 !== 'string') {
    return 'Please enter a valid string for "word1" input'
  } else if (typeof word2 !== 'string') {
    return 'Please enter a valid string for "word2" input'
  } else if (typeof word3 !== 'string') {
    return 'Please enter a valid string for "word3" input'
  }

  var shortestWord = word1;
  if (word2.length < shortestWord.length) {
    shortestWord = word2
  }
  if (word3.length < shortestWord.length) {
    shortestWord = word3
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

var input1 = findShortestOfThreeWords('a', 'b', 'c')
var output1 = 'a'

var input2 = findShortestOfThreeWords('moviesAreAwesome', 'Netflix', 'letsGoWatchAMovie')
var output2 = 'Netflix'

var input3 = findShortestOfThreeWords('Baseball Season', 'Basketball Season', 'win')
var output3 = 'win'

var input4 = findShortestOfThreeWords(1, 'b', 'c')
var output4 = 'Please enter a valid string for "word1" input'

var input5 = findShortestOfThreeWords('a', {}, 'c')
var output5 = 'Please enter a valid string for "word2" input'

var input6 = findShortestOfThreeWords('a', 'b', [])
var output6 = 'Please enter a valid string for "word3" input'

// var input3 = getLongestOfThreeWords(8, 'kenderson', 'BTSisTheBest')
// var output3 = 'Please enter a valid string for "word1" input'

// var input4 = getLongestOfThreeWords('Yankees', 2, 'BTSisTheBest')
// var output4 = 'Please enter a valid string for "word2" input'

// var input5 = getLongestOfThreeWords('RedSox', 'Boston', 7)
// var output5 = 'Please enter a valid string for "word3" input'

assertStringEquals(input1, output1, 'Returns the longest word of three words.')
assertStringEquals(input2, output2, 'Returns the longest word of three words.')
assertStringEquals(input3, output3, 'Returns the longest word of three words.')
assertStringEquals(input4, output4, 'Returns the longest word of three words.')
assertStringEquals(input5, output5, 'Returns the longest word of three words.')
assertStringEquals(input6, output6, 'Returns the longest word of three words.')


console.log("\n")
console.log("#27: Compute Shortest of Compound Interest")

/*
Write a function called "computeCompoundInterest".
Given a principal, an interest rate, a compounding frequency,
and a time (in years), "computeCompoundInterest" returns the
amount of compound interest generated.

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061

Reference: https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest
This shows the formula used to calculate the total compound interest generated.
*/

function computeCompoundInterest(P, r, n, t) {
  var exponent = n*t
  var bracket = (1 + (r/n))
  var compoundInterest = P * bracket ** exponent - P
  return Number(compoundInterest.toFixed(4))
}

function assertEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

var input1 = computeCompoundInterest(1500, .043, 4, 6)
var output1 = 438.84

assertEquals(input1, output1, 'Should calculate compound interest')


console.log("\n")
console.log("#28: Modulo")

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

var output = modulo(25, 4);
console.log(output); // --> 1
*/

function modulo(numerator, denominator) {
  // If either operand is NaN, then the result is NaN.
  if (typeof numerator !== ('number')) {
    return 'Numerator is not a number. Try again.'
  }
  if (typeof denominator !== ('number')) {
    return 'Denominator is not a number. Try again.'
  }
  if (denominator === 0) {
    return 'Cannot divide by zero. Try again.'
  }
  return numerator % denominator
}

function assertEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

var input1 = modulo(25, 4)
var output1 = 1
// If either operand is NaN, then the result is NaN.
var input2 = modulo('Kenderson', 4)
var output2 = 'Numerator is not a number. Try again.'
// If either operand is NaN, then the result is NaN.
var input3 = modulo(8, 'E-Bay')
var output3 = 'Denominator is not a number. Try again.'

var input4 = modulo(0, 12345)
var output4 = 0
// ANYNUMBER % 0 = NaN.
var input5 = modulo(1234567, 0)
var output5 = 'Cannot divide by zero. Try again.'

assertEquals(input1, output1, 'Returns the remainder of a division.')
assertEquals(input2, output2, 'Returns the remainder of a division.')
assertEquals(input3, output3, 'Returns the remainder of a division.')
assertEquals(input4, output4, 'Returns the remainder of a division.')
assertEquals(input5, output5, 'Returns the remainder of a division.')



console.log("\n")
console.log("#29: Multiply")

/*
Write a function called "multiply".
Given 2 numbers, "multiply" returns their product.

Notes:
It should not use the multiply operator - *

var output = multiply(4, 7);
console.log(output); // --> 28
*/

function multiply(num1, num2) {
  if (typeof num1 !== ('number')) {
    return 'Please input a valid number for input 1'
  }

  if (typeof num2 !== ('number')) {
    return 'Please input a valid number for input 2'
  }

  return num1 * num2
}

function assertEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

assertEquals(multiply(7, 4), 28, 'Returns the product of two numbers')
assertEquals(multiply('baseball cards', 7), 'Please input a valid number for input 1', 'Returns the product of two numbers')
assertEquals(multiply(24, 'basketball cards'), 'Please input a valid number for input 2', 'Returns the product of two numbers')


console.log("\n")
console.log("#30: Is Odd without Modulo")

/*
Write a function called "isOddWithoutModulo".
Given a number, "isOddWithoutModulo" returns whether
the passed in number is odd.

Note:
It does so without using the modulo operator (%).
It should work for negative numbers and zero.

var output = isOddWithoutModulo(17);
console.log(output); // --> true
*/

function isOddWithoutModulo(n) {
  var result = n/2;
  return !Number.isInteger(result) 
}

function assertEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

assertEquals(isOddWithoutModulo(17), true, 'Returns boolean as to whether the input is odd (without using a modulo operator).')
assertEquals(isOddWithoutModulo(18), false, 'Returns boolean as to whether the input is odd (without using a modulo operator).')
// It should work for negative numbers.
assertEquals(isOddWithoutModulo(-25), true, 'Returns boolean as to whether the input is odd (without using a modulo operator).')
// It should work for zeroes.
assertEquals(isOddWithoutModulo(0), false, 'Returns boolean as to whether the input is odd (without using a modulo operator).')


console.log("\n")
console.log("#31: Is Even without Modulo")
/*
Write a function called "isEvenWithoutModulo".
Given a number, "isEvenWithoutModulo" returns whether it is even.
Notes:
It does so without using the modulo operator (%).
It should work for negative numbers and zero.
var output = isEvenWithoutModulo(8);
console.log(output); // --> true
*/
function isEvenWithoutModulo(n) {
  var result = n/2
  return Number.isInteger(result)
}

function assertEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

assertEquals(isEvenWithoutModulo(17), false, 'Returns boolean as to whether the input is odd (without using a modulo operator).')
assertEquals(isEvenWithoutModulo(18), true, 'Returns boolean as to whether the input is odd (without using a modulo operator).')
// It should work for negative numbers.
assertEquals(isEvenWithoutModulo(-25), false, 'Returns boolean as to whether the input is odd (without using a modulo operator).')
// It should work for zeroes.
assertEquals(isEvenWithoutModulo(0), true, 'Returns boolean as to whether the input is odd (without using a modulo operator).')



console.log("\n")
console.log("#32: Multiply Between")

/*
Write a function called "multiplyBetween".
Given 2 integers, "multiplyBetween" returns the product between
the two given integers, beginning at num1, and excluding num2.

Notes:
The product between 1 and 4 is 1 * 2 * 3 = 6.
If num2 is not greater than num1, it should return 0.

var output = multiplyBetween(2, 5);
console.log(output); // --> 24
*/


function multiplyBetween(num1, num2) {
  // If num2 is not greater than num1, it should return 0.
  if (typeof num1 !== ('number')) {
    return 'Please enter a valid number for "num1" input inside multiplyBetween function'
  }

  if (typeof num2 !== ('number')) {
    return 'Please enter a valid number for "num2" input inside multiplyBetween function'
  }

  if (num2 <= num1) {
    return 0
  }

  var product = 1
  for (var i=num1; i<num2; i++) {
    product *= i
  }
  return product
}

function assertEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

// If num2 is not greater than num1, it should return 0.
assertEquals(multiplyBetween(20, 5), 0, 'Returns the product between two given integers')
// If num2 is not greater than num1, it should return 0.
assertEquals(multiplyBetween(20, 20), 0, 'Returns the product between two given integers')

assertEquals(multiplyBetween(2, 5), 24, 'Returns the product between two given integers')

assertEquals(multiplyBetween('basketball', 5), 'Please enter a valid number for "num1" input inside multiplyBetween function', 'Returns the product between two given integers')
assertEquals(multiplyBetween(2, 'football'), 'Please enter a valid number for "num2" input inside multiplyBetween function', 'Returns the product between two given integers')


console.log("\n")
console.log("#33 Compute Sum Between")

/*
Write a function called "computeSumBetween".
Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.
Notes:
The sum between 1 and 4 is 1 + 2 + 3 = 6.
If num2 is not greater than num1, it should return 0.
var output = computeSumBetween(2, 5);
console.log(output); // --> 9
*/


function computeSumBetween(num1, num2) {
  // If num2 is not greater than num1, it should return 0.
  if (typeof num1 !== ('number')) {
    return 'Please enter a valid number for "num1" input inside computeSumBetween function'
  }

  if (typeof num2 !== ('number')) {
    return 'Please enter a valid number for "num2" input inside computeSumBetween function'
  }

  if (num2 <= num1) {
    return 0
  }

  var sum = 0
  for (var i=num1; i<num2; i++) {
    sum += i
  }
  return sum
}

function assertEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

// If num2 is not greater than num1, it should return 0.
assertEquals(computeSumBetween(20, 5), 0, 'Returns the product between two given integers')
// If num2 is not greater than num1, it should return 0.
assertEquals(computeSumBetween(20, 20), 0, 'Returns the product between two given integers')

assertEquals(computeSumBetween(2, 5), 9, 'Returns the product between two given integers')

assertEquals(computeSumBetween('basketball', 5), 'Please enter a valid number for "num1" input inside computeSumBetween function', 'Returns the product between two given integers')
assertEquals(computeSumBetween(2, 'football'), 'Please enter a valid number for "num2" input inside computeSumBetween function', 'Returns the product between two given integers')


console.log("\n")
console.log("#34 Greet Customer")

/*
Write a function called "greetCustomer".
Given a name, "greetCustomer" returns a greeting based on how many times
that customer has visited the restaurant. Please refer to the customerData object.

The greeting should be different, depending on the name on their reservation.
Case 1 - Unknown customer ( Name is not present in customerData ):
var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

Case 2 - Customer who has visited only once ( 'visits' value is 1 ):
var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

Notes:
Your function should not alter the customerData object to update the number of visits.

Do not hardcode to the exact sample data. This is a BAD IDEA:
if (firstName === 'Joe') {
  // do something
}
*/


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
  // return customerData[firstName]
  if (customerData[firstName] === undefined) {
    return 'Welcome! Is this your first time?'
  } else if (customerData[firstName].visits === 1) {
    return "Welcome back, " + firstName + "! We're glad you liked us the first time!"
  } else if (customerData[firstName].visits > 1) {
    return "Welcome back, " + firstName + "! So glad to see you again!"
  } 
}

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

console.log(greetCustomer('Carol'));
console.log(greetCustomer('Howard'));
console.log(greetCustomer('Carrie'));
console.log(greetCustomer('Kenderson'));


console.log("\n")
console.log("#35 Detect Outlier Value")

/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
The return value should be 1-indexed, not 0-indexed.

Example:
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the number are odd
*/

// split string into an array

// create an empty array variable of even numbers.
// create an empty array variable of odd numbers.

// iterate over split string array.
  // if current element is even
    // push to even numbers array.
  // else
    // push to odd numbers array.

// compare array lengths for odd and even numbers

function detectOutlierValue(strOfNumbers) {
  var splitStr = strOfNumbers.split(' ')
  // convert string elements to numbers
  var numArray = [];
  for (var j=0; j<splitStr.length; j++) {
    numArray.push(Number(splitStr[j]))
  }
  console.log(numArray)

  var evenNumbers = [];
  var oddNumbers = [];
  for (var i=0; i<numArray.length; i++) {
    var currentElement = numArray[i]
    if (numArray[i] % 2 === 0) {
      evenNumbers.push(numArray[i])
    } else {
      oddNumbers.push(numArray[i])
    }
  }

  if (oddNumbers.length < evenNumbers.length) {
    return (numArray.indexOf(oddNumbers[0]) + 1)
  } 
  else if (evenNumbers.length < oddNumbers.length) {
    return (numArray.indexOf(evenNumbers[0]) + 1)
  }
}


function assertEquals(actual, expected, testName) {
  if (actual !== expected) {
    console.log('Failed: Test "' + testName + '" expected "' + expected + '", but got "' + actual + '"')
  } else {
    console.log('Passed: ' + testName)
  }
}

var input1 = detectOutlierValue("2 4 7 8 10")
var output1 = 3 // => 3 - Third number is odd, while the rest of the numbers are even
assertEquals(input1, output1, 'Finds the index of the outlier value')

var input2 = detectOutlierValue("2 4 6 8 3")
var output2 = 5 // => 3 - Third number is odd, while the rest of the numbers are even
assertEquals(input2, output2, 'Finds the index of the outlier value')

var input3 = detectOutlierValue("1 3 2 5 7")
var output3 = 3 // => 3 - Third number is odd, while the rest of the numbers are even
assertEquals(input1, output1, 'Finds the index of the outlier value')



console.log("\n")
console.log("#36 Find the Pair")

/*
Given a list of non-negative integers and a target sum, find
a pair of numbers that sums to the target sum.
Example:
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/

function findPairForSum(array, targetSum) {
  var result = [];
  for (var i=0; i<array.length-1; i++) {
    // console.log(array[i])
    for (var k=i+1; k<array.length; k++) {
      if (array[i] + array[k] === targetSum) {
        result.push(array[i], array[k])
        break
      }
    }
  }
  return result;
}

// var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
// console.log(pair); // --> [4, 5]

function assertArrayEquals(actual, expected, testName) {
  if (actual.length !== expected.length) {
    console.log('Failed: Testname "' + testName + '" do not have matching array lengths.')
  }
  for (var i=0; i<actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log("Failed: Testname " + testName + 'failed at ' + expected[i] + ' and ' + actual[i])
    }
  }
}

var input1 = findPairForSum([3, 34, 4, 12, 5, 2], 9);
var output1 = [4, 4, 5]

var input2 = findPairForSum([3, 34, 4, 12, 5, 2], 9);
var output2 = [4, 5]


assertArrayEquals(input1, output1, 'Finds the matching pair of numbers, in an array, to a target sum.')
// assertArrayEquals(input2, output2, 'Finds the matching pair of numbers, in an array, to a target sum.')





























































