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
