var _ = require('lodash')

function calculateAveragePricePerDesigner(inventory) {
  // skeleton for expected
  var result = {
    designers: []
  };

  for (var i=0; i<inventory.length; i++) {
    var averagePricePerDesigner = {};
    var designerObject = inventory[i];
    var shoes = inventory[i].shoes
    averagePricePerDesigner.name = designerObject.name
    averagePricePerDesigner.averagePrice = getAveragePrice(shoes)
    result.designers.push(averagePricePerDesigner)
  }

  return result;
}

// Create helper functions if needed

function getAveragePrice(arrayOfShoesObject) {
  var sum = 0
  for (var j=0; j<arrayOfShoesObject.length; j++) {
    var currentShoe = arrayOfShoesObject[j]
    sum += currentShoe.price
  }
  return sum / arrayOfShoesObject.length
}


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

var actual1 = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

var expected1 = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};


function assertObjectsEquals(actual, expected, testName) {
  if (_.isEqual(actual, expected) === true) {
    console.log("Passed: " + testName)
  } else {
    console.log("FAILED: Testname [" + testName + "] expected " + expected + ", but got " + actual)
  }
}

assertObjectsEquals(calculateAveragePricePerDesigner(currentInventory), expected1, 'Should calculate average price per designer in array object format')

// console.log(calculateAveragePricePerDesigner(currentInventory))

