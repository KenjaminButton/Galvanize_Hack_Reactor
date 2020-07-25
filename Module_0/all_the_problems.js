// Problem Number #62
function applySplice(array, index, item1, item2) {
  // remove two elements from the array at the index given, and adds item1 and item2 in their place
  // return the array
  array.splice(index, 2, item1, item2)
  return array;

}

var resultArray1 = applySplice([8, 9, 10, 'bad entry1', 'bad entry2', 13], 3, 11, 12);
console.log('should log [8, 9, 10, 11, 12, 13]:', resultArray1);

var resultArray2 = applySplice(['one', 'two', 452, 672, 'five'], 2, 'three', 'four');
console.log('should log ["one", "two", "three", "four", "five"]:', resultArray2);

console.log("#63===========================================================================")


// Problem #63
function isAnArray(input) {
  // create a result variable
  // assign it to a call to the applicable method
  // return the result variable
  var result = Array.isArray(input);
  return result;
}

var resultBoolean1 = isAnArray([1, 2, 3]);
console.log('should log true:', resultBoolean1);

var resultBoolean2 = isAnArray({name: 'Tom', friend: 'Jerry'});
console.log('should log false:', resultBoolean2);


console.log("#64==============================================================================")

function applySlice(array, start, end) {
  // create a sliceOfArray variable
  // assign it to a portion of the array from before start, up to, but not including end
  // return the sliceOfArray variable
  var sliceOfArray = array.slice(start, end);
  return sliceOfArray;
}

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultOfSlice1 = applySlice(array1, 1, 4);
console.log('should log ["u", "e", "u"]:', resultOfSlice1);

var array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultOfSlice2 = applySlice(array2, 2, 8);
console.log('should log [2, 3, 4, 5, 6, 7]:', resultOfSlice2);


console.log("#65==============================================================================")

// Your function should create a copyOfArray variable and assign it to a call to the slice
// method on the array which will make a copy, and return the copyOfArray variable.

function makeACopy(array) {
  // create a copyOfArray variable
  // assign it to a copy of the array
  // return the copyOfArray variable
  var copyOfArray = array.slice();
  return copyOfArray;
}

var array1 = ['Q', 'u', 'e', 'u', 'e'];
var resultCopy1 = makeACopy(array1);
console.log('should log ["Q", "u", "e", "u", "e"]:', resultCopy1);

var array2 = [0, 1, 2, 3, 4];
var resultCopy2 = makeACopy(array2);
console.log('should log [0, 1, 2, 3, 4]:', resultCopy2);

console.log("#66==============================================================================")

// Your function should create a concattedArray variable and assign it to a call to the concat
// method on the input array, applied to the other input array, and return the concattedArray variable

function applyConcat(array1, array2) {
  // create a concattedArray variable
  // assign it to the contents of both array1 and array2
  // return the concattedArray variable
  var concattedArray = array1.concat(array2);
  return concattedArray;
}

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f']
var resultConcat1 = applyConcat(array1, array2);
console.log('should log ["a", "b", "c", "d", "e", "f"]:', resultConcat1);

var array3 = [1, 2, 3];
var array4 = [4, 5, 6];
var resultConcat2 = applyConcat(array3, array4);
console.log('should log [1, 2, 3, 4, 5, 6]:', resultConcat2);


console.log("#67==============================================================================")

//Your function should create a joinedString variable and assign it
//to a call to the .join() method, and return the joinedString variable.

function applyJoin(arrayOfStrings, string) {
  // create a joinedString variable
  // assign it to a string which is all of the strings in the input array separated by the input string
  // return the joinedString variable
  var joinedString = arrayOfStrings.join(string);
  return joinedString;
}

var resultString1 = applyJoin(['first', 'second', 'third'], '--');
console.log('should log joined string:', resultString1);

var resultString2 = applyJoin(['git', 'commit'], ' ');
console.log('should also log joined string:', resultString2);

console.log("#68==============================================================================")

// Your function should create a splitString variable and assign it to a call to
// the .split() method, and return the splitString variable.

function applySplit(stringToBeSplit, splitter) {
  // create a splitString variable
  // assign it to an array which contains the elements in the stringToBeSplit separated by the splitter
  // return the splitString variable
  var splitString = stringToBeSplit.split(splitter);
  return splitString;
}

var resultArray1 = applySplit('first--second--third', '--');
console.log('should log split string:', resultArray1);

var resultArray2 = applySplit('git push origin master', ' ');
console.log('should also log split string:', resultArray2);

console.log("#69==============================================================================")

// Your function should create an index variable and assign it to a call of the indexOf() method
// on the array, and passing element as an argument, and return the index variable.

function applyIndexOfToArray(array, element) {
  // create an index variable
  // assign it to the index inside of array where element can be found
  // return the index variable
  var index = array.indexOf(element);
  return index;
}

var array1 = ['Quick', 'sort', 'is', 'wild'];
var element1 = 'sort';
var resultIndex1 = applyIndexOfToArray(array1, element1);
console.log('should log 1:', resultIndex1);

var array2 = ['size', 'color', 'cut', 'price'];
var element2 = 'style';
var resultIndex2 = applyIndexOfToArray(array2, element2);
console.log('should log -1:', resultIndex2);

console.log("#70==============================================================================")

//Your function should create a variable and assign it to a new object, then return that variable.

function createObject() {
  // create a result variable,
  // assign it to a new object
  // return the result variable
  var result = {};
  return result;
}

var resultObject = createObject();
console.log('should be an object:', typeof resultObject);
console.log('should not be an array:', Array.isArray(resultObject));

console.log("#71==============================================================================")

// Your function should create a variable and assign it to an expression which
// accesses the value of the property located at the string key, then return that variable

function accessAProperty(object, key) {
  // create a result variable,
  // assign it to an expression that accesses the property in the object located at the key
  // return the result variable
  var result = object[key];
  return result;
}

var resultValue = accessAProperty({machine: 'Computer', type: 'Macbook', ram: '2 GHz'}, 'ram');
console.log('should be "2 GHz":', resultValue);


console.log("#72==============================================================================")

// Your function should reassign the property's value within the object, located
// at the string key, to the newValue parameter, and should then return the newly changed object.
function reassignAProperty(object, key, newValue) {
  // reassign the property's value in the object, located at the key, to the newValue parameter
  // return the input object
  object[key] = newValue;
  return object;
}
var resultObject = reassignAProperty({name: 'Ramses', favoriteFood: 'chicken', type: 'dog'}, 'favoriteFood', 'goose');
console.log('should replace "chicken" with "goose":', resultObject);

console.log("#73==============================================================================")

// Your function should use the delete operator to remove the property at the given key from the input object, then return the object.

function removeAProperty(object, key) {
  // remove the property at the given key from the object
  // return the object
  delete object[key];
  return object;
}

var resultObject1 = removeAProperty({q: 9, r: 10, text: 'bad entry'}, 'text');
console.log('should log {q: 9, r: 10}:', resultObject1);

var resultObject2 = removeAProperty({first: 'one', second: 'two', why: 452, third: 'three'}, 'why');
console.log('should log {first: "one", second: "two", third: "three"}:', resultObject2);

console.log("#74==============================================================================")

// Your function should create an isPresent variable and assign it to a comparison between
// the object's value at the given key and undefined, and return the isPresent variable. 

function isPropertyPresent(object, key) {
  // create an isPresent variable
  // assign it to a comparison between object's value at key and undefined
  // return the isPresent variable
  var isPresent = object[key] !== undefined;
  return isPresent;
}

var object1 = {
  a: 1,
  b: 2
}
var key1 = 'c';
var result1 = isPropertyPresent(object1, key1);
console.log('should log false:', result1);

var object2 = {
  'size': 'M',
  'color': 'green',
  'cut': 'tapered',
  'price': 30
};
var key2 = 'cut';
var result2 = isPropertyPresent(object2, key2);
console.log('should log true:', result2);

console.log("#75==============================================================================")

// Your function should create several variables (isObject, isNotAnArray, and
// isObjectAndNotAnArray). Assign isObject to an application of the typeof operator to
// the input. Assign isNotAnArray to a call to the Array.isArray() method with the ! operator
// applied as well. Assign isObjectAndNotAnArray to the two previous variabes combined with
// the && operator, and return the isObjectAndNotAnArray variable. 

function isAnObject(input) {
  // create an isObject variable
  var isObject = (typeof input === 'object');
  // assign it to whether the input is an object type
  // create an isNotAnArray variable
  var isNotAnArray = !Array.isArray(input)
  // assign it to whether the input is not an array
  // create an isObjectAndNotAnArray variable
  var isObjectAndNotAnArray = isObject && isNotAnArray;
  // assign it to a combination of isObject AND isNotAnArray
  // return the isObjectAndNotAnArray variable
  return isObjectAndNotAnArray;
}

var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2);

console.log("#76==============================================================================")

// Your function should create a keys variable, and assign it to an expression which generates
// an array of all of the keys in said object by calling Object.keys(), then return that keys variable.

function getAllKeys(obj) {
  // create a keys variable
  var keys = Object.keys(obj);
  // assign it to an expression which will generate an array of all of the keys in obj
  // return to the keys variable
  return keys;
}

var resultKeys = getAllKeys({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log ["firstScore", "secondScore", "thirdScore"]:', resultKeys);

console.log("#77==============================================================================")

// Your function should create a values variable, and assign it to an expression which
// generates an array of all of the values in said object by calling Object.values(),
// then return that values variable.

function getAllValues(obj) {
  // create a values variable
  var values = Object.values(obj);
  // assign it to an expression which will generate an array of all of the values in obj
  // return to the values variable

  return values;
}

var resultValues = getAllValues({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log [12, 34, 28]:', resultValues);

console.log("#78==============================================================================")

// Your function should use the .unshift() method to add the input element to the
// front of the inner array located at the given index of the array of arrays,
// then return that array of arrays.

function applyUnshiftAgain(arrayOfArrays, index, element) {
  // add the element to the front of the inner array within the array of arrays located at the index
  // return the array of arrays
  arrayOfArrays[index].unshift(element)
  return arrayOfArrays;
}

var resultArray1 = applyUnshiftAgain([ [1, 3], [10, 11], [9, 4] ], 1, 5);
console.log('should log [ [1, 3], [5, 10, 11], [9, 4] ]:', resultArray1);

var resultArray2 = applyUnshiftAgain([ ['ag', 'bc'], ['ef', 'hi'] ], 0, 'iq');
console.log('should log [ ["iq", "ag", "bc"], ["ef", "hi"] ]:', resultArray2);

console.log("#79==============================================================================")

// Your function should create a variable, assign it to an expression that tells whether
// the input object's value located at the input key is an array or not, using the
// Array.isArray() method, then return that created variable.

function isAnArrayAgain(inputObj, key) {
  // create a result variable
  // assign it to a call to the applicable method
  // return the result variable
  var result = Array.isArray(inputObj[key]);
  return result;
}

var resultBoolean1 = isAnArrayAgain({key1: [1, 2, 3], key2: 'gg'}, 'key1');
console.log('should log true:', resultBoolean1);

var resultBoolean2 = isAnArrayAgain({name: 'Tom', friend: 'Jerry'}, 'friend');
console.log('should log false:', resultBoolean2);

console.log("#80==============================================================================")

// Your function should create a keys variable, and assign it to an expression
// which generates an array of all of the keys in the nested object located within
// the input object, by calling Object.keys(), then return that keys variable.

function getAllKeysAgain(obj, key) {
  // create a keys variable
  // assign it to an expression which will generate an array of all of the keys located within obj at key
  // return to the keys variable
  var keys = Object.keys(obj[key]);
  return keys;

}

var resultKeys = getAllKeysAgain({firstScore: {part1: 12, part2: 14, part3: 10}, secondScore: 34, thirdScore: 28}, 'firstScore');
console.log('should log ["par1", "part2", "part3"]:', resultKeys);

console.log("#81==============================================================================")

// Your function should use the delete operator to remove the property
// specified by the input key, located within an object, located at the
// given index within the input array, and returns the input array.

function removeAPropertyAgain(arrayOfObjects, index, key) {
  // remove the property at the given key from the object at the given index
  // return the input array of objects
  delete arrayOfObjects[index][key]
  return arrayOfObjects;
  
}

var resultObject1 = removeAPropertyAgain([{q: 9, r: 10, text: 'bad entry'}, {a: 1, b: 2}], 0, 'text');
console.log('should log [{q: 9, r: 10}, {a: 1, b: 2}]:', resultObject1);

var resultObject2 = removeAPropertyAgain([{key: 'value'}, {first: 'one', second: 'two', why: 452, third: 'three'}], 1, 'why');
console.log('should log [{key: "value"}, {first: "one", second: "two", third: "three"}]:', resultObject2);

console.log("#82=============================================================")

// Your function should use an if statement to determine if the input parameter is defined, and if it is, should return the string 'Input is defined'.

function isItUndefined(param) {
  // if param is defined (or not undefined)
  // return 'Input is defined'
  if (param !== undefined) {
    return 'Input is defined'
  }
}

var result1 = isItUndefined('anything');
console.log('should log "Input is defined":', result1);

var result2 = isItUndefined();
console.log('Should log undefined, because function returned nothing:', result2);

console.log("#83=============================================================")

// Your function should use an if statement to determine if there are fewer apples than oranges, and if there are, should return the string 'There are fewer apples than oranges'.

function fewerApples(apples, oranges) {
  // if there are fewer apples than oranges
  // return 'There are fewer apples than oranges'
  if (apples < oranges) {
    return 'There are fewer apples than oranges'
  }
}

var result1 = fewerApples(4, 7);
console.log('should log "There are fewer apples than oranges":', result1);

var result2 = fewerApples(19, 12);
console.log('Should log undefined, because function returned nothing:', result2);

console.log("#84=============================================================")

// Your function should create an isPresent variable and assign it to a comparison between the object's value at the given key and undefined, and return the isPresent variable.

function isPropertyPresent(object, key) {
  // create an isPresent variable
  // assign it to a comparison between object's value at key and undefined
  // return the isPresent variable
  var isPresent = object[key] !== undefined;
  return isPresent;
}

var object1 = {
  a: 1,
  b: 2
}
var key1 = 'c';
var result1 = isPropertyPresent(object1, key1);
console.log('should log false:', result1);

var object2 = {
  'size': 'M',
  'color': 'green',
  'cut': 'tapered',
  'price': 30
};
var key2 = 'cut';
var result2 = isPropertyPresent(object2, key2);
console.log('should log true:', result2);

console.log("#85=============================================================")
console.log("#86=============================================================")
console.log("#87=============================================================")
console.log("#88=============================================================")
console.log("#89=============================================================")
console.log("#90=============================================================")
