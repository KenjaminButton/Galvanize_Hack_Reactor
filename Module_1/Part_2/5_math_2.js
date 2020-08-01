console.log("#1==============================================================")

// Write a function called "computeAreaOfARectangle".
// Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area.

function computeAreaOfARectangle(length, width) {
  // your code here
  var result = length * width;
  return result;
}

var output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32

console.log("#2==============================================================")

// Write a function called "computePerimeterOfARectangle".
// Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.

function computePerimeterOfARectangle(length, width) {
  // your code here
  var result = (length + width) * 2;
  return result;
}

var output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14

console.log("#3==============================================================")

// Write a function called "computePerimeterOfATriangle".
// Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimeter.

function computePerimeterOfATriangle(side1, side2, side3) {
  // your code here
  var result = side1 + side2 + side3;
  return result;
}

var output = computePerimeterOfATriangle(6, 7, 10);
console.log(output); // --> 23











