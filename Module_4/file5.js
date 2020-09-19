var input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];


var output = {
  make : 'Ford',
  model : 'Mustang',
  year : 1964
}

function transformArrayToObject(array) {
  var results = {}
  // iterate over outer array
    // iterate over inner array
        // set results' first element to key, second element to value
  for (var i=0; i<array.length; i++) {
    for (var j=1; j<array[i].length; j++) {
      results[array[i][j-1]] = array[i][j]
    }
  }

  return results
}

console.log(transformArrayToObject(input))