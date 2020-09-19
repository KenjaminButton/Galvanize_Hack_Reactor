
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
      // shifting i
      i += 2
    }
    var currentElement = Number(numToString[i])
    sum += currentElement
  }
  return sum
}


console.log(sumDigits(1148))
console.log(sumDigits(-316))





