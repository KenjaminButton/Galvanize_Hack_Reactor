
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
    // var stringToNum = numToString[i].toNumber()
    // sum += stringToNum
    if (numToString[0] === '-') {
      return "What do I do now?"
    }
    var currentElement = parseInt(numToString[i])
    sum += currentElement
  }
  return sum
}


console.log(sumDigits(1148))
console.log(sumDigits(-316))