console.log("#1==============================================================")

// Write a function called "isOddLength".
// Given a word, "isOddLength" returns whether the length of the given word is odd.

function isOddLength(word) {
  // your code here
  if (word.length%2 !== 0) {
  	return true
  }
  else {
  	return false
  }
}

var output = isOddLength('special');
console.log(output); // --> true

console.log("#2==============================================================")

// Write a function called "isEvenLength".
// Given a word, "isEvenLength" returns whether the length of the word is even.

function isEvenLength(word) {
  // your code here
  if (word.length % 2 === 0) {
  	return true
  }
  else {
  	return false
  }
}

var output = isEvenLength('wow');
console.log(output); // --> false

console.log("#3==============================================================")

// Write a function called "isEvenAndGreaterThanTen".
// Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.

function isEvenAndGreaterThanTen(num) {
  // your code here
  if (num%2===0 && num>10) {
  	return true
  }
  else {
  	return false
  }
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false










