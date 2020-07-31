console.log("#1==============================================================")
// Write a function called "isPersonOldEnoughToDrive".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.
// Notes:
// The legal driving age in the United States is 16.

function isPersonOldEnoughToDrive(person) {
  // your code here
  var age = person['age']
  if (age > 15) {
  	return true
  }
  else {
  	return false
  }
}

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true


console.log("#2==============================================================")
// Write a function called "isPersonOldEnoughToVote".
// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.
// Notes:
// The legal voting age in the United States is 18.

function isPersonOldEnoughToVote(person) {
  // your code here
  var age = person.age;
  if (age > 17) {
  	return true
  }
  else {
  	return false
  }
}

var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true

console.log("#3==============================================================")
// Write a function called "addArrayProperty".
// Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.

function addArrayProperty(obj, key, arr) {
  // your code here
  obj[key] = arr
}

var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]

