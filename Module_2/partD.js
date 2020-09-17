// create everything for this problem, functions, assertion function, and test cases
// call your function "generateLaceDetails", and let it take the inventory as its parameter

function generateLaceDetails(inventory) {
  var results  =[];
  for (var i=0; i<inventory.length; i++) {
    var brandObject = inventory[i];
    var shoesArray = brandObject.shoes
    for (var j=0; j<shoesArray.length; j++) {
      var currentShoe = shoesArray[j]
      if (shoeContainsLace(currentShoe)) {
        // create an object for the current lace shoe
        var laceObject = {};
        var nameWordsArray = currentShoe.name.split(" ");
        // fill object with appropriate data
        laceObject['nameWords'] = nameWordsArray
        laceObject['targetWordIndex'] = getLaceIndex(nameWordsArray)
        // add object to laceDetails array
        results.push(laceObject)
      }
    }
  }
  return results;
}

function shoeContainsLace(shoeObject) {
  // return if name of shoe contains lace.
  var nameOfShoe = shoeObject.name;
  if (nameOfShoe.indexOf('lace') !== -1) {
    return true
  } else {
    return false
  }
}




var testing1 = {name: 'tasselled black low-top lace-up', price: 1000}
var testing2 = {name: 'plain beige suede moccasin', price: 950}

function assertContainsLace(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed: " + testName)
  } else {
    console.log("Failed: Testname: [" + testName + '] expected "' + expected + '", but got "' + actual + '"' )
  }
}

assertContainsLace(shoeContainsLace(testing1), true, 'Should filter out products with laces in current inventory.')
assertContainsLace(shoeContainsLace(testing2), false, 'Should filter out products with laces in current inventory.')


function getLaceIndex(arrayOfNameWords) {
  for (var k=0; k<arrayOfNameWords.length; k++ ) {
    if (arrayOfNameWords[k].indexOf('lace') !== -1) {
      return k
    }
  }
}

var testing3 = ["tasselled", "black", "low-top", "lace-up"]
// console.log(getLaceIndex(testing3))




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


var expectedResult = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];


function assertArrayEquals(actual, expected, testName) {
  actual = JSON.stringify(actual)
  expected = JSON.stringify(expected)
  if (actual === expected) {
    console.log("Passed: " + testName)
  } else {
    console.log("Failed: Testname: [" + testName + '] expected "' + expected + '", but got "' + actual + '"' )
  }
}


var actualResult = generateLaceDetails(currentInventory)
assertArrayEquals(actualResult, expectedResult, 'Should return array of namewords and target index')

