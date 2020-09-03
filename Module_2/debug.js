// FUNCTION DEFINITIONS
function calculateAveragePricePerDesigner(inventory) {
    // create result object in described format
    var averageObject = {
        designers: []
    };
    // iterate over the inventory of designer objects
    for (var i = 0; i < inventory.length; i++) {
        // save current value as readable variable (designerObject)
        var designerObject = inventory[i];
        // save current value's shoes' property as readable variable (shoesArray)
        var shoesArray = designerObject.shoes;
        // console.log(shoesArray)
        // create price object for current designer
        var priceObject = {
            // first property is just name of current designer
            name: designerObject.name,
            // average is set to a function that we define below, function should return the average price of a shoes array
            averagePrice: averagePrice(shoesArray)
        }
        // add price object to result object
        averageObject.designers.push(priceObject);
    }
    // return result object
    return averageObject;
}

// define a function that should return the average price of a shoes array
function averagePrice(shoesArray) {
    // call another function that will sum up the prices in a shoes array, divide it by length of same array
    return sum(shoesArray) / shoesArray.length;
}

// define a function that should return the sum of the prices of a shoes array
function sum(shoesArray) {
    // create sum variable
    var sum = 0;
    // iterate over shoes array
    for (var j = 0; j < shoesArray.length; j++) {
        // add to the sum the price of each shoe
        sum += shoesArray[j].price;
    }
    // return sum variable
    return sum;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
    }
}

// TESTS FOR CALCULATE AVERAGE PRICE PER DESIGNER
var inventory = [{
        name: 'Brunello Cucinelli',
        shoes: [{
                name: 'tasselled black low-top lace-up',
                price: 1000
            },
            {
                name: 'tasselled green low-top lace-up',
                price: 1100
            },
            {
                name: 'plain beige suede moccasin',
                price: 950
            },
            {
                name: 'plain olive suede moccasin',
                price: 1050
            }
        ]
    },
    {
        name: 'Gucci',
        shoes: [{
                name: 'red leather laced sneakers',
                price: 800
            },
            {
                name: 'black leather laced sneakers',
                price: 900
            }
        ]
    }
];
var actualOutput = calculateAveragePricePerDesigner(inventory)
var expectedOuput = {
    'designers': [{
            'name': 'Brunello Cucinelli',
            'averagePrice': 1025
        },
        {
            'name': 'Gucci',
            'averagePrice': 850
        }
    ]
};
assertObjectsEqual(actualOutput, expectedOuput, 'should return properly formatted object');


console.log(calculateAveragePricePerDesigner(inventory))