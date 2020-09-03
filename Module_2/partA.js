function renderInventory(inventory) {
  var flatList = "";
  for (var i=0; i<inventory.length; i++) {
    var brandName = inventory[i];
    var shoesArray = brandName.shoes
    // console.log(shoesArray)
    for (var j=0; j<shoesArray.length; j++) {
      var currentShoe = shoesArray[j]
      flatList += brandName.name + ', ' + currentShoe.name + ", " + currentShoe.price + "\n"
    }
  }
  return flatList
}

//Create helper functions if needed
function assertEquals(actual, expected, testName) {
  if (actual === expected) {
    console.log("Passed: " + testName)
  } else {
    console.log("FAILED: Testname [" + testName + " expected " + expected + ", but got " + actual )
  }
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

var expectedFlatList = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900\n';

assertEquals(renderInventory(currentInventory), expectedFlatList, "Should flatten input object data to string in console.")



