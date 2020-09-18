console.log("\n")
console.log("#11: Calculate Bill Total")

/*
Write a function called "calculateBillTotal".
Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.
Notes:
Assume that sales tax is 9.5% and tip is 15%.
Do NOT tip on the sales tax, only on the pre tip amount.
*/

function calculateBillTotal(preTaxAndTipAmount) {
  var sum = preTaxAndTipAmount
  var tip = 0.15 * preTaxAndTipAmount
  var salesTax = 0.095 * preTaxAndTipAmount
  sum += tip
  sum += salesTax
  return sum
}


var output = calculateBillTotal(20);
console.log(output); // --> 24.9


console.log("\n")
console.log("#12: Get String Length")

/*
Write a function called "getStringLength".
Given a string, "getStringLength" returns the length of the given string.
Notes:
Do NOT use any native 'length' methods.
You might consider using 'substring' or 'slice' as alternatives.
*/

function getStringLength(string) {
  // create a count variable
  // iterate over the string with a for in loop
    // count ++
  // return count variable
  var count = 0;
  for (var i in string) {
    count = count + 1
  }
  return count;
}


console.log(getStringLength('hello'));



console.log("\n")
console.log("#13: Join Array of Arrays")

/*
Write a function called "joinArrayOfArrays".
Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

You should be familiar with the "concat" method for this problem.

*/

var expected1 = [1, 4, true, false, 'x', 'y']


function joinArrayOfArrays(arr) {
  // create an empty results array
  // iterate over arr
    // results.concat(currentElement)
  // return results array

  var result = [];
  for (var i=0; i<arr.length; i++) {
    // prototype method.
    result = result.concat(arr[i])
  }
  return result;
  // return [].concat(...arr)
  // return arr.flat()
}


console.log(joinArrayOfArrays([ [1, 4], [true, false], ['x', 'y'] ]));


console.log("\n")
console.log("#14: Get Product of All Elements at Property")

/*
Write a function called "getProductOfAllElementsAtProperty".
Given an object and a key, "getProductOfAllElementsAtProperty" returns
the product of all the elements in the array located at the given key.
Notes:
If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
*/


function getProductOfAllElementsAtProperty(obj, key) {
  if (obj[key] === undefined) {
    return 0
  }

  if (obj[key].length === 0) {
    return 0
  }
  if (Array.isArray(obj[key]) !== true) {
    return 0
  }


  var product = 1;
  var targetArray = obj[key];
  for (var i=0; i<targetArray.length; i++) {
    product *= targetArray[i]
  }
  return product
}

var obj1 = {
  key: [1, 2, 3, 4]
};

var obj2 = {
  key: []
};

var obj3 = {
  bts: ['7', 'member', 'band']
};

var obj4 = {
  key: {bts: 'Awesome'}
};

console.log(getProductOfAllElementsAtProperty(obj1, 'key'));
console.log(getProductOfAllElementsAtProperty(obj2, 'key'));
console.log(getProductOfAllElementsAtProperty(obj3, 'key'));
console.log(getProductOfAllElementsAtProperty(obj4, 'key'));
