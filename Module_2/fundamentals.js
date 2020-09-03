console.log("Placement Challenge #20\n")

function transformEmployeeData(employeeData) {
  var results = [];
  for (var i=0; i<employeeData.length; i++) {
    // console.log(Object.fromEntries(employeeData[i]))
    results.push(Object.fromEntries(employeeData[i])) 
  }
  return results;
}



var input = [
  [
      ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
      ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
];


var result = [
  {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
  {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

console.log(transformEmployeeData(input))



console.log("Placement Challenge #21\n")

function convertObjectToArray(obj) {
  var result = Object.entries(obj);
  return result;
}

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}

var output = [['name', 'Holly'], ['age', 35], ['role', 'producer']]


function assertEqual(actual, expected, testName) {
  for (var i=0; i<actual.length; i++) {
    for (var j=0; j<actual[i].length; j++) {
      if (actual[i][j] === expected[i][j]) {
        console.log("Passed.")
      } else {
        console.log("FAILED: Testname [" + testName + "] expected " + expected + ", but got " + actual)
      }
    }
  }
}

var test1 = convertObjectToArray(input)
assertEqual(test1, output, "Should convert an object to an array.")


// function removeDuplicates(array) {
//   // var noDupes = new Set(array)
//   var newSet = Array.from(new Set(array))
//   return newSet.sort()
// }

// var test_1 = [1,3,3,2,5,6,5]
// console.log(removeDuplicates(test_1))

console.log("Placement Challenge #22\n")

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  // https://stackoverflow.com/questions/7972446/is-there-a-not-in-operator-in-javascript-for-checking-object-properties
  if (!(firstName in customerData)) {
    return 'Welcome! Is this your first time?'
  } else if (customerData[firstName].visits === 1 ) {
    return "Welcome back, " +  firstName + "! We're glad you liked us the first time!"
  } else {
    return "Welcome back, " + firstName + "! So glad to see you again!"
  }
}

// console.log(greetCustomer("Joe"))
// console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

function assertEquals(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed: " + testName)
  } else {
    console.log("Failed: Testname [" + testName + "] expected " + expected + " but got " + actual )
  }
}

var test1 = greetCustomer('Terrance')
var expected1 = 'Welcome! Is this your first time?'

assertEquals(test1, expected1, 'Should return custom greeting')

var test2 = greetCustomer('Joe')
var expected2 = "Welcome back, Joe! We're glad you liked us the first time!"

assertEquals(test2, expected2, 'Should return custom greeting')

var test3 = greetCustomer('Carol')
var expected3 = "Welcome back, Carol! So glad to see you again!"

assertEquals(test3, expected3, 'Should return custom greeting')














