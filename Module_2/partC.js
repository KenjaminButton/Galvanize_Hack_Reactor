var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

function listAllBlackShoes(inventory) {
  var flatList = ""
  for (var i=0; i<inventory.length; i++) {
    var brandObject = inventory[i]
    var shoesArray = brandObject.shoes
    for (var j=0; j<shoesArray.length; j++) {
      var currentShoe = shoesArray[j];
      if (isShoeBlack(currentShoe)) {
        flatList += brandObject.name + ", " + currentShoe.name + ", " + currentShoe.price +  "\n"
      } 
    }
  }
  return flatList
}

console.log(listAllBlackShoes(currentInventory))

//Create helper functions if needed
function isShoeBlack(shoeObject) {
  if (shoeObject.name.indexOf('black') !== -1) {
    return true
  } else {
    return false
  }
}

function assertIsShoeBlackWorking(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed: Testname: " + testName)
  } else {
    console.log("Failed: Testname: [" + testName + '] expected "' + expected + '", but got "' + actual + '"' )
  }
}

// console.log(isShoeBlack({name: "black shoes with Nike logo."}))
var testObject1 = {name: "black shoes with Nike logo."}
var testObject2 = {name: "white shoes with Nike logo."}

assertIsShoeBlackWorking(isShoeBlack(testObject1), true, 'Should return a boolean value for the "black" in current inventory.')
assertIsShoeBlackWorking(isShoeBlack(testObject2), false, 'Should return a boolean value for the "black" in current inventory.')

var expectedResult = "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900\n"
var actualResult = listAllBlackShoes(currentInventory)

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed: Testname: " + testName)
  } else {
    console.log("Failed: Testname: [" + testName + '] expected "' + expected + '", but got "' + actual + '"' )
  }
}

assertEqual(actualResult, expectedResult, 'Should return a flatlist of black shoes in the current inventory.')


