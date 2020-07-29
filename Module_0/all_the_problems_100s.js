// all_the_problems_100s.js

// Your function should use a for loop to log each element from the beginning to the end of the array, then return nothing. 

console.log("#100=============================================================")

function loopAnArrayAgain(array) {
  // create a loop which iterates over the input array
    // log current array element to the console
  for (i=0; i < array.length; i++) {
    console.log(array[i])
   }
}

loopAnArrayAgain(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArrayAgain([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5

console.log("#101=============================================================")


// Your function should use a for loop to log each character from the beginning to the end of the string, then return nothing.

function loopAStringAgain(string) {
  // create a loop which iterates over the input string
  for (i=0; i < string.length; i++) {
    console.log(string[i])
    // log current string character to the console
  }
}

loopAStringAgain('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAStringAgain('abcd');
// console output:
  // a
  // b
  // c
  // d


console.log("#102=============================================================")

// Your function should use a loop to log every other element from the beginning,
// skipping every other element, until either end of the array, or one shy of
// the end (depending on odd or even length of the array passed), then return nothing.

function loopEveryOther(array) {
  // create a loop which iterates over every other element of the input array
    // log every other array element to the console
  for (i=0; i<array.length; i=i+2) {
    console.log(array[i])
  }

}

loopEveryOther(['a', 'b', 'c', 'd']);
// console output:
  // a
  // c

loopEveryOther([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 3
  // 5

console.log("#103=============================================================")

// Your function should use a loop to log every element from the inputted index, until the end of the array, then return nothing.

function loopStartingAtIndex(array, index) {
  // create a loop which iterates from index to the end of the input array
    // log current array element to the console
  for (i=index; i<array.length; i++) {
    console.log(array[i])
  }
}

loopStartingAtIndex(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // c
  // d
  // e

loopStartingAtIndex([1, 2, 3, 4, 5], 3);
// console output:
  // 4
  // 5

console.log("#104=============================================================")

// Your function should use a loop to log every element from the back of the array, up to the front of the array, then return nothing. 

function loopInReverse(array) {
  // create a loop which iterates from back to front of the input array
    // log current array element to the console
  for (i=array.length-1; i>=0; i--) {
    console.log(array[i])
  }
}

loopInReverse(['a', 'b', 'c', 'd']);
// console output:
  // d
  // c
  // b
  // a

loopInReverse([1, 2, 3, 4]);
// console output:
  // 4
  // 3
  // 2
  // 1


console.log("#105=============================================================")

// Your function should use a loop to log every element except one at the
// inputted index, and should also use a continue statement (must use a semi-colon
// after continue for tests to pass) to skip over the value at the inputted index,
// then return nothing. 

function useContinue(array, index) {
  // create a loop which iterates over the input array
    // if current index is equal to input index
      // use described statement to skip to next iteration of loop (must include semi-colon!)
    // log current array element to the console
  for (i=0; i<array.length; i++) {
    if (i == index) {
      continue;
    }
  console.log(array[i])
  }
}


useContinue(['a', 'b', 'c', 'd'], 1);
// console output:
  // a
  // c
  // d


useContinue([1, 2, 3, 4], 2);
// console output:
  // 1
  // 2
  // 4

console.log("#106=============================================================")

// Your function should use a loop to log every element up to and including
// the element located at the input index, and should also use a break statement 
//(must use a semi-colon after break for tests to pass) to skip over the values
// with indexes greater than that of the input index, then return nothing. 

function useBreak(array, index) {
  // create a loop which iterates over the input array
    // if current index is greater than input index
      // use described statement to stop the loop completely (must include semi-colon!)
    // log current array element to the console
  for (i=0; i<array.length; i++) {
    if (i === index + 1) {
      break;
    }
  console.log(array[i])
  }
}

useBreak(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // a
  // b
  // c


useBreak([1, 2, 3, 4, 5, 6], 3);
// console output:
  // 1
  // 2
  // 3
  // 4

console.log("#107=============================================================")

// Your function should use a for-in loop to log each key in the object,
// then return nothing. DO NOT USE Object.keys() in your solution.

function loopOverKeys(object) {
  // create a loop which iterates over the input object
    // log current key to the console
  for (var keys in object) {
    console.log(keys)
  }
}

loopOverKeys({a: 1, b: 2, c: 3});
// console output:
  // a
  // b
  // c

loopOverKeys({make: 'Ford', model: 'T', year: 1913});
// console output:
  // make
  // model
  // year

console.log("#108=============================================================")

// Your function should use a for-in loop to log each value in the object,
// then return nothing. DO NOT USE Object.values() in your solution.

function loopOverValues(object) {
  // create a loop which iterates over the input object
    // log current value to the console
  for (var value in object) {
    console.log(object[value])
  }
}

loopOverValues({a: 1, b: 2, c: 3});
// console output:
  // 1
  // 2
  // 3

loopOverValues({make: 'Ford', model: 'T', year: 1913});
// console output:
  // Ford
  // T
  // 1913

console.log("#109=============================================================")

// Your function should use a nested for loop to log each element from all inner arrays, then return nothing.

function loopAnArrayOfArrays(arrayOfArrays) {
  // create a loop which iterates over the input array
    // create an inner loop which iterates over current inner array
      // log current element to the console
  for (var i=0; i<arrayOfArrays.length; i++) {
    for (var j=0; j<arrayOfArrays[i].length; j++) {
      console.log(arrayOfArrays[i][j])
    }
  }
}

loopAnArrayOfArrays([ ['a', 'b', 'c'], ['d', 'e', 'f'] ]);
// console output:
  // a
  // b
  // c
  // d
  // e
  // f

loopAnArrayOfArrays([ [1, 2], [3, 4], [5], [6, 7, 8] ]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8

console.log("#110=============================================================")

// Your function should use a nested for-in loop to log each value from all inner objects, then return nothing.

function loopAnObjectOfObjects(nestedObject) {
  // create a loop which iterates over the input object
    // create an inner loop which iterates over current inner object
      // log current value to the console
  for (key1 in nestedObject) {
    for (key2 in nestedObject[key1]) {
      console.log(nestedObject[key1][key2])
    }
  }
}

console.log('Testing')

loopAnObjectOfObjects({ a: {a: 1, b: 2}, b: {a: 5, b: 6} });
// console output:
  // 1
  // 2
  // 5
  // 6

loopAnObjectOfObjects({ structures: {queue: true, stack: false}, plantLife: {tree: 'leaves'}, letters: {apple: 'a', bag: 'b', cats: 'c'} });
// console output:
  // true
  // false
  // leaves
  // a
  // b
  // c

console.log("#111=============================================================")

// Your function should use a for-in loop nested inside of a for loop to log
// each value from all inner objects, then return nothing.

function loopAnArrayOfObjects(arrayOfObjects) {
  // create a loop which iterates over the input array
    // create an inner loop which iterates over current inner object
      // log current value to the console
  for (key1 in arrayOfObjects) {
    for (key2 in arrayOfObjects[key1]) {
      console.log(arrayOfObjects[key1][key2])
    }
  }
}

loopAnArrayOfObjects([{a: 1, b: 2}, {z: 5, y: 6}, {q: 14} ]);
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14

loopAnArrayOfObjects([{queue: false, stack: true}, {fish: 'swims'}, {shirt: 's', pop: 'p', eye: 'e'} ]);
// console output:
  // false
  // true
  // swims
  // s
  // p
  // e

console.log("#112=============================================================")

// Your function should use a for loop nested inside of a for-in loop to log each value from all inner arrays, then return nothing. 

function loopAnObjectOfArrays(objectOfArrays) {
  // create a loop which iterates over the input object
    // create an inner loop which iterates over current inner array
      // log current value to the console
}


loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14
  // 21

loopAnObjectOfArrays({ third: [false, false], fourth: ['runs'], ninth: ['q', 'l', 'z'] });
// console output:
  // false
  // false
  // runs
  // q
  // l
  // z

console.log("#113=============================================================")

// Your function should use a for loop nested inside of a for-in loop to log
// each value from all inner arrays, then return nothing. 

function loopAnObjectOfArrays(objectOfArrays) {
  // create a loop which iterates over the input object
    // create an inner loop which iterates over current inner array
      // log current value to the console
  for (var key1 in objectOfArrays) {
    for (var key2 in objectOfArrays[key1]) {
      console.log(objectOfArrays[key1][key2])
    }
  }
}


loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14
  // 21

loopAnObjectOfArrays({ third: [false, false], fourth: ['runs'], ninth: ['q', 'l', 'z'] });
// console output:
  // false
  // false
  // runs
  // q
  // l
  // z

console.log("#REAL 113=============================================================")

// Your function should use a nested for loop to log all combinations of the two arrays, then return nothing.

function generateCombinations(array1, array2) {
  // create a loop which iterates over the first array
    // create an inner loop which iterates over the second array
      // log current element of first array and current element of second array to the console with space in between
  for (var i in array1) {
    for (var j in array2) {
      console.log(array1[i] + ' ' + array2[j])
    }
  }
}

generateCombinations(['a', 'b', 'c'], ['d', 'e', 'f']);
// console output:
  // a d
  // a e
  // a f
  // b d
  // b e
  // b f
  // c d
  // c e
  // c f

generateCombinations([1, 2], ['buckle', 'my', 'shoe']);
// console output:
  // 1 buckle
  // 1 my
  // 1 shoe
  // 2 buckle
  // 2 my
  // 2 shoe

console.log("#114=============================================================")

/*
Write a function called "filterOddElements".
Given an array of numbers, "filterOddElements" returns an array containing only
the odd numbers of the given array. If the input array contains no odd
numbered elements, your function should return an empty array.

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
*/

function filterOddElements(array) {
  var new_array = []
  for (i=0; i <= array.length; i=i+2) {
    new_array.push(array[i])
  }

  return new_array
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]

console.log("#115=============================================================")

// Write a function called "computeSumOfAllElements".
// Given an array of numbers, "computeSumOfAllElements" returns the sum of all
// the elements in the given array. If input array is empty, your function
// should return 0.

function computeSumOfAllElements(array) {
    let sum = 0

    for(let j = 0; j < array.length; j++) {
        sum += array[j]
    }
    return sum
}

var result1 = computeSumOfAllElements([1, 2, 3]);
console.log('should log 6:', result1);

var result2 = computeSumOfAllElements([]);
console.log('should log 0:', result2);


console.log("#116=============================================================")

// Write a function called "computeAverageOfNumbers".
// Given an array of numbers, "computeAverageOfNumbers" returns their average.
// If input array is empty, your function should return 0.

function computeAverageOfNumbers(array) {
  var sum = 0
  if (array.length <= 0) {
    return 0
  }

  for (var z=0; z<=array.length; z++) {
    sum += z
  }
  return (sum/array.length)
}


var input1 = [1,2,3,4,5];
var result1 = computeAverageOfNumbers(input1);
console.log('should log 3:', result1);

var input2 = [];
var result2 = computeAverageOfNumbers(input2);
console.log('should log 0:', result2);



console.log("#117=============================================================")

/*
We are going to debug a function that takes in an object, and a target value. This function will iterate over the object's values, and attempt to locate the target value. If the value is found, the function should return the name of the key where the value in question is located, and if not, the function should return -1. Below is an example of the code running, assuming that you will have debugged the described function: keyOfObjectValue:
*/

function keyOfObjectValue(object, target) {
  for (var key in object) {
    if (object[key] === target) {
      return target;
    } else {
      return -1;
    }
  }
}

var result1 = keyOfObjectValue({cucumbers: 14, carrots: 20, peas: 400}, 20);
console.log('should log "carrots":', result1);

var result2 = keyOfObjectValue({name: 'Bruce Wayne', hero: 'Batman', city: 'Gotham'}, 'Superman');
console.log('should log -1:', result2);

console.log("#118=============================================================")

/* We are going to debug a function that takes in an array of numbers. This function will iterate over the array's number elements, and return a count representing the number of elements whose value is greater than 40. If there are no values above 40, then the function should return 0. Below is an example of the code running, assuming that you will have debugged the described function: getElementsAbove40:
*/

function getElementsAbove40(numbers) {
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    
    if (numbers[i] > 40) {
      count++;
    }
  }

  return count;
}

var result1 = getElementsAbove40([1, 42, 5, 314, 2, 89]);
console.log('should log 3:', result1);

var result2 = getElementsAbove40([1, 4, 3, 2, 6]);
console.log('should log 0:', result2);


console.log("#119=============================================================")
console.log("#120=============================================================")
console.log("#121=============================================================")












