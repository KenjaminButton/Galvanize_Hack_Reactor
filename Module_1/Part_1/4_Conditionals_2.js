console.log("#1==============================================================")

// Write a function called "checkAge". Given a person's name and age,
// "checkAge" returns one of two messages: "Go home, {insert_name_here}!",
// if they are younger than 21. "Welcome, {insert_name_here}!", if they are
// 21 or older. Naturally, replace "{insert_name_here}" with the given name. :)

function checkAge(name, age) {
  // your code here
  if (age<21) {
    return 'Go home, ' + name + '!'
  } else {
    return 'Welcome, ' + name + '!'
  }
}

var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'


console.log("#2==============================================================")

// Write a function called "isGreaterThan10". Given a number, "isGreaterThan10"
// returns whether the given number is greater than 10.

function isGreaterThan10(num) {
  // your code here
  if (num>10) {
    return true
  } else {
    return false
  }
}

var output = isGreaterThan10(11);
console.log(output); // --> true

console.log("#3==============================================================")

// Write a function called "isLessThan30". Given a number, "isLessThan30"
// returns whether the given number is less than 30.

function isLessThan30(num) {
  // your code here
  if (num<30) {
    return true
  } else {
    return false
  }
}

var output = isLessThan30(9);
console.log(output); // --> true

console.log("#4==============================================================")

// Write a function called "equalsTen". Given a number, "equalsTen" returns
// whether or not the given number is 10.

function equalsTen(num) {
  // your code here
  if (num === 10) {
    return true
  } else {
    return false
  }
}

var output = equalsTen(9);
console.log(output); // --> false











