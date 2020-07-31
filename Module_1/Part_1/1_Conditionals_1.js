console.log("#1==============================================================")
// Write a function called "isOldEnoughToDrink". Given a number, in this case
// an age, "isOldEnoughToDrink" returns whether a person of this given age is
// old enough to legally drink in the United States. Notes:

// The legal drinking age in the United States is 21.

function isOldEnoughToDrink(age) {
  // your code here
  if (age >= 21) {
    return true
  } else {
    return false
  }
}

var output = isOldEnoughToDrink(22);
console.log(output); // --> true


console.log("#2==============================================================")

// Write a function called "isOldEnoughToDrive". Given a number, in this case
// an age, "isOldEnoughToDrive" returns whether a person of this given age is
// old enough to legally drive in the United States. Notes:
// The legal driving age in the United States is 16.

function isOldEnoughToDrive(age) {
  // your code here
  if (age >= 16) {
    return true
  } else {
    return false
  }
}

var output = isOldEnoughToDrive(22);
console.log(output); // --> true

console.log("#3==============================================================")

// Write a function called "isOldEnoughToVote". Given a number, in this case
// an age, 'isOldEnoughToVote' returns whether a person of this given age is
// old enough to legally vote in the United States. Notes:
// The legal voting age in the United States is 18.

function isOldEnoughToVote(age) {
  // your code here
  if (age >= 18) {
    return true
  } else {
    return false
  }
}

var output = isOldEnoughToVote(22);
console.log(output); // --> true

console.log("#4==============================================================")

// Write a function called "isOldEnoughToDrinkAndDrive". Given a number, in
// this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of
// this given age is old enough to legally drink and drive in the United
// States. Notes: The legal drinking age in the United States is 21.
// It is always illegal to drink and drive in the United States.


function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  return false
}


var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false












