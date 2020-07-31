console.log("#1==============================================================")

// Write a function called "isOdd". Given a number, "isOdd" returns whether the given number is odd.
function isOdd(num) {
  if (num % 2 === 1) {
  	return true
  }
  else {
  	return false
  }
}

var output = isOdd(9);
console.log(output); // --> true

console.log("#2==============================================================")

// Write a function called "isSameLength".
// Given two words, "isSameLength" returns whether the given words have the same length.

function isSameLength(word1, word2) {
  if (word1.length === word2.length) {
  	return true
  }
  else {
  	return false
  }
}

var output = isSameLength('words', 'super');
console.log(output); // --> true

console.log("#3==============================================================")

// Write a function called "areBothOdd".
// Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.

function areBothOdd(num1, num2) {
  if (num1%2===1 && num2%2===1) {
  	return true
  }
  else {
  	return false
  }
}

var output = areBothOdd(1, 3);
console.log(output); // --> true

console.log("#4==============================================================")

// Write a function called "isEitherEven".
// Given two numbers, "isEitherEven" returns whether or not either one of
// the given numbers is even.

function isEitherEven(num1, num2) {
  // your code here
  if (num1%2===0 || num2%2===0) {
  	return true
  }
  else {
  	return false
  }
}

var output = isEitherEven(1, 4);
console.log(output); // --> true

// console.log("#2==============================================================")













