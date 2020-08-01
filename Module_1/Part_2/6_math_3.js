console.log("#1==============================================================")
// Write a function called "computeTripledAreaOfARectangle".
// Given a length and width of a rectangle, "computeTripledAreaOfARectangle"
// returns the rectangle's area, multiplied by 3.

function computeTripledAreaOfARectangle(length, width) {
  // your code here
  var result = (length * width) * 3;
  return result;
}

var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24
console.log("#2==============================================================")
// Write a function called "computePerimeterOfACircle".
// Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.
// Notes:
// Math.PI can be used for pi.

function computePerimeterOfACircle(radius) {
  // your code here
  var result = 2 * Math.PI * radius;
  return result;
}

var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI 
console.log("#3==============================================================")

// Write a function called "computeAreaOfACircle".
// Given the radius of a circle, "computeAreaOfACircle" returns its area.
// Notes:
// Math.PI can be used for pi.

function computeAreaOfACircle(radius) {
  // your code here
  var result = Math.PI * radius ** 2;
  return result;
}

var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI 










