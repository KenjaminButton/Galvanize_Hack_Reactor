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

console.log("#70==============================================================================")

console.log("#70==============================================================================")
console.log("#70==============================================================================")
console.log("#70==============================================================================")
console.log("#70==============================================================================")
console.log("#70==============================================================================")
console.log("#70==============================================================================")
console.log("#70==============================================================================")
