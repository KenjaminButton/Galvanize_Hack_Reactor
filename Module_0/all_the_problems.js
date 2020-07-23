// Problem Number #XX
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

console.log("==============================================================================")