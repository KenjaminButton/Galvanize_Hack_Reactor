// file_1.js

console.log('Array String Methods 1:')
console.log('1:')

function getAllLetters(str) {
  // your code here
  var result = str.split('');
  return result;
}

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']


console.log('2:')
function getAllWords(str) {
  // your code here
  if (str === '') {
    return []
  }
  var result = str.split(' ');
  return result;
}

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']

var output = getAllWords('');
console.log(output); // --> ['Radagast', 'the', 'Brown']


console.log('Advanced 1:')
console.log('1:')


function countWords(str) {
  // your code here
  var result = {};
  var split_words = str.split(' ')
  // return split_words
  if (str === '') {
    return {}
  }

  for (i=0; i<split_words.length; i++)
    if (result[split_words[i]] === undefined) {
      result[split_words[i]] = 1
    }
    else {
      result[split_words[i]] += 1
    }
  return result;
}

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

console.log('Conditionals 6')
console.log('1:')

function or(expression1, expression2) {
  return !(!expression1 && !expression2)
}

var output = or(true, false);
console.log(output); // --> true;

console.log('2:')

function isEitherEvenOrAreBoth7(num1, num2) {
  // your code here
  var both_seven = (num1 === 7 && num2 === 7);
  var either_even = (num1 % 2 === 0 || num2 % 2 === 0)
  return either_even || both_seven;
}

var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true

console.log('3:')

function isEitherEvenAndLessThan9(num1, num2) {
  // your code here
  var either_even = (num1 % 2 === 0 || num2 % 2 === 0);
  var less_than_nine = (num1 < 9 && num2 < 9)
  return either_even && less_than_nine
}

var output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

var output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false

console.log('Advanced 2:')

function extend(obj1, obj2) {
  for (var keyOfObj2 in obj2) {
    if (obj1[keyOfObj2] === undefined) {
      obj1[keyOfObj2] = obj2[keyOfObj2]
    }
  }
}

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}

console.log('Objects 6:')
console.log('1:')

function removeArrayValues(obj) {
  for (var key in obj) {
    if (Array.isArray(obj[key]) === true) {
      delete obj[key]
    }
  } return obj
}

var obj = {
 a: [1, 3, 4],
 b: 2,
 c: ['hi', 'there'] 
}

removeArrayValues(obj);
console.log(obj); // --> {b: 2}

console.log('2:')

function removeNumberValues(obj) {
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      delete obj[key]
    }
  }
}

var obj = {
 a: 2,
 b: 'remaining',
 c: 4 
}

removeNumberValues(obj);
console.log(obj); // --> {b: 'remaining'}

console.log('3:')

function removeStringValues(obj) {
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      delete obj[key]
    }
  }
}

var obj = {
 name: 'Ken',
 age: 38
}

removeStringValues(obj);
console.log(obj); // --> {age: 38}

console.log('Objects 4:')
console.log('1:')

function removeNumbersLargerThan(num, obj) {
  // Iterate over object
    // remove obj's key value pairing
  for (key in obj) {
    if (obj[key] > num) {
      delete obj[key]
    }
  }
}

var obj = {
 a: 8,
 b: 2,
 c: 'montana' 
}

removeNumbersLargerThan(5, obj)
console.log(obj) // --> { b: 2, c: 'montana' }

console.log('2:')

function removeNumbersLessThan(num, obj) {
  for (key in obj) {
    if (obj[key] < 5) {
      delete obj[key]
    }
  }
}

var obj = {
 a: 8,
 b: 2,
 c: 'montana' 
}

removeNumbersLessThan(5, obj)
console.log(obj) // --> { a: 8, c: 'montana' }




console.log('3:')

function removeStringValuesLongerThan(num, obj) {
  // iterate over string value
    // if value < num
      // delete
  for (key in obj) {
    if (typeof obj[key] === "string" && obj[key].length > num) {
      delete obj[key]
    }
  }
}

var obj = {
 name: 'Montana',
 age: 20,
 location: 'Texas' 
};

removeStringValuesLongerThan(6, obj)
console.log(obj);


console.log('Objects 5:')
console.log('1:')

function removeEvenValues(obj) {
  // iterate over keys value pairs in obj
    // if value is even
      // delete
  for (key in obj) {
    // var value = obj[key];
    if (typeof obj[key] === "number" && obj[key]%2 === 0) {
      delete obj[key]
    }
  }

}


var obj = {
 a: 2,
 b: 3,
 c: 4 
};

removeEvenValues(obj);
console.log(obj); // --> { b: 3 }

console.log('2:')

function countNumberOfKeys(obj) {
  var count = 0;
  for (var key in obj) {
    count += 1
  }
  return count;
}

var obj = {
 a: 1,
 b: 2,
 c: 3 
};

var output = countNumberOfKeys(obj);
console.log(output) // --> 3


console.log('3:')

function removeOddValues(obj) {
  // Iterate over obj
    // if value is even...
      // delete
  for (key in obj) {
    if (obj[key] % 2 !== 0) {
      delete obj[key]
    }
  }
}

var obj = {
 a: 2,
 b: 3,
 c: 4 
};

removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }

console.log("Array Methods 9:")
console.log("1:")

function filterOddLengthWords(words) {
  // Create a results array;
  // Iterate over each word
    // if the length of each word is odd
      // push to results array
  // Return results array;
  var results = [];
  for (i=0; i<words.length; i++) {
    if (words[i].length % 2 !== 0) {
      results.push(words[i])
    }
  }
  return results;
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']



function filterEvenLengthWords(words) {
  // Create a results array;
  // Iterate over each word
    // if the length of each word is even
      // push to results array
  // Return results array;
  var results = [];
  for (i=0; i<words.length; i++) {
    if (words[i].length % 2 === 0) {
      results.push(words[i])
    }
  }
  return results;
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']










