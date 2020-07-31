console.log("#1==============================================================")

// Write a function called "isLessThan". Given 2 numbers, "isLessThan" returns
// whether num2 is less than num1.

function isLessThan(num1, num2) {
  // your code here
  if (num2 < num1) {
  	return true
  }
  else {
  	return false
  }
}

var output = isLessThan(9, 4);
console.log(output); // --> true


console.log("#2==============================================================")

// Write a function called "isGreaterThan". Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.

function isGreaterThan(num1, num2) {
  // your code here
  if (num2 > num1) {
  	return true
  }
  else {
  	return false
  }
}

var output = isGreaterThan(11, 10);
console.log(output); // --> false

console.log("#3==============================================================")

// Write a function called "isEqualTo". Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.

function isEqualTo(num1, num2) {
  // your code here
  if (num1 === num2) {
  	return true
  }
  else {
  	return false
  }
}

var output = isEqualTo(11, 10);
console.log(output); // --> false

console.log("#4==============================================================")

// Write a function called "isEven". Given a number, "isEven" returns whether it is even.

function isEven(num) {
  // your code here
  if (num % 2 === 0) {
  	return true
  }
  else {
  	return false
  }
}

var output = isEven(11);
console.log(output); // --> false











