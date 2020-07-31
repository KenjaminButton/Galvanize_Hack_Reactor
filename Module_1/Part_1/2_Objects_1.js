console.log("#1==============================================================")
// Write a function called "getProperty". Given an object and a key,
// "getProperty" returns the value of the property at the given key. Notes:
// If there is no property at the given key, it should return undefined.

function getProperty(obj, key) {
  // your code here
  return obj[key]
}

var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'

console.log("#2==============================================================")
// Write a function called "addProperty". Given an object, and a key,
// "addProperty" sets a new property on the given object with a value of true.

function addProperty(obj, key) {
  // your code here
  obj[key] = true
}

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true


console.log("#3==============================================================")

function removeProperty(obj, key) {
  // your code here
  delete obj[key]
}

var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
