// coding_challenge.js

// 1. First, declare a variable named myArray and assign it to an empty array.

var myArray = [];

// 2. Now populate myArray with two strings:
// Put your full name in the first string, and your favorite color in the second.

myArray.push("Kenneth Chang")
myArray.push("blue")
// console.log(myArray);

// 3. Next, declare a function named cutName. It should expect a parameter name.

// 4. cutName should return an array by breaking up the input string into individual words.

function cutName(name) {
  return name.split(" ")
}

console.log(cutName("Kenneth P. Chang"));
console.log(cutName("Kenneth Chang"));

var myInfo = {};
myInfo.fullName = cutName(myArray[0])
myInfo.favoriteColor = myArray[1]
myInfo.github = "https://github.com/kendrickpc"
console.log(myInfo);