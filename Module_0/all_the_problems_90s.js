console.log("#90=============================================================")

// Your function should use an if else statement to determine if the ingredient to search for is present within the list of ingredients, and if it is, should return the string '{ingredientToSearchFor} is on the list', and if not, should return the string '{ingredientToSearchFor} is not on the list', where {ingredientToSearchFor} has the value of the argument the function is called on. 

function findIngredient(ingredientList, ingredientToSearchFor) {
  // if ingredientToSearchFor is present within ingredientList
    // return '{ingredientToSearchFor} is on the list'
  // otherwise
    // return '{ingredientToSearchFor} is not on the list'
  if (ingredientList.indexOf(ingredientToSearchFor) === -1) {
    return ingredientToSearchFor + " is not on the list"
  } else {
    return ingredientToSearchFor + " is on the list"
  }
}

var result1 = findIngredient(['flour', 'butter', 'sugar', 'eggs'], 'sugar');
console.log('should log "sugar is on the list":', result1);

var result2 = findIngredient(['milk', 'cereal', 'fruit'], 'pop-tarts');
console.log('should log "pop-tarts is not on the list":', result2);

console.log("#91=============================================================")

// Your function should use an if else statement to determine if the totals of
// bananas and strawberries are sufficient, and if they are, should return the
// string 'We have enough fruit, with ' + {totalBananas} + ' bananas, and ' +
// {totalStrawberries} + ' strawberries', where {totalBananas} and {totalStrawberries}
// are the numbers of each fruit in the fruit totals object. If they are not, your
// function should return the string 'We do not have enough of both fruits'.

function measureRequiredFruit(fruitTotals) {
  // if there are more than 3 bananas and more than 10 strawberries
    // return 'We have enough fruit, with {totalBananas} bananas, and {totalStrawberries} strawberries'
  // otherwise
    // return 'We do not have enough of both fruits'
  if (fruitTotals['bananas'] > 3 && fruitTotals['strawberries'] > 10) {
    return 'We have enough fruit, with ' +  fruitTotals['bananas'] + ' bananas, and ' + fruitTotals['strawberries'] + ' strawberries'
  } else {
    return 'We do not have enough of both fruits'
  }
}

var result1 = measureRequiredFruit({bananas: 4, strawberries: 12});
console.log('should log "We have enough fruit, with 4 bananas, and 12 strawberries":', result1);

var result2 = measureRequiredFruit({bananas: 5, strawberries: 15});
console.log('should log "We have enough fruit, with 5 bananas, and 15 strawberries":', result2);

var result3 = measureRequiredFruit({bananas: 2, strawberries: 12});
console.log('should log "We do not have enough of both fruits":', result3);

var result4 = measureRequiredFruit({bananas: 5, strawberries: 8});
console.log('should log "We do not have enough of both fruits":', result4);

var result5 = measureRequiredFruit({bananas: 3, strawberries: 9});
console.log('should log "We do not have enough of both fruits":', result5);


console.log("#92=============================================================")

// Your function should use an if else if statement to determine which choice
// the player has made, then should return: 'Player 1 chose rock'; 'Player 1
// chose paper'; 'Player 1 chose scissors'; or, 'Player 1 has chosen poorly!',
// depending upon the value of the input parameter.

function player1Choice(choice) {
  // if player1 chose rock
    // return "Player 1 chose rock"
  // otherwise if player1 chose paper
    // return "Player 1 chose paper"
  // otherwise if player1 chose scissors
    // return "Player 1 chose scissors"
  // otherwise
    // return "Player 1 has chosen poorly!"
  if (choice === 'rock') {
    return 'Player 1 chose rock'
  } 
  else if (choice === 'paper') {
    return 'Player 1 chose paper'
  }
  else if (choice === 'scissors') {
    return 'Player 1 chose scissors'
  } else {
    return 'Player 1 has chosen poorly'
  }
}

var result1 = player1Choice('rock');
console.log('should log "Player 1 chose rock":', result1);

var result2 = player1Choice('paper');
console.log('should log "Player 1 chose paper":', result2);

var result3 = player1Choice('scissors');
console.log('should log "Player 1 chose scissors":', result3);

var result4 = player1Choice('gun');
console.log('should log "Player 1 has chosen poorly!":', result4);

console.log("#93=============================================================")

// Your function should use an if else if statement to determine which size
// t-shirt is appropriate based on the following conditions: if the shirtWidth is greater than or equal to 20, and less than 30, the function returns 'You should select a size S'; if the shirtWidth is greater than or equal to 30, and less than 40, the function returns 'You should select a size M'; if the shirtWidth is greater than or equal to 40, and less than 50, the function returns 'You should select a size L'. If none of these conditions is met, the function returns 'You should select a different shirt'. Below are examples of the code running, assuming that you will have completed the described function: selectShirtSize.

function selectShirtSize(choice) {
  // if shirt is greater than or equal 20 and less than 30
    // return 'You should select a size S'
  // otherwise if shirt is greater than or equal to 30 and less than 40
    // return 'You should select a size M'
  // otherwise if shirt is greater than or equal to 40 and less than 50
    // return 'You should select a size L'
  // otherwise
    // return 'You should select a different shirt'
  if (choice >= 20 && choice < 30) {
    return 'You should select a size S'
  } 
  else if (choice >= 30 && choice < 40) {
    return 'You should select a size M'
  }
  else if (choice >= 40 && choice < 50) {
    return 'You should select a size L'
  } else {
    return 'You should select a different shirt'
  }
}


var result1 = selectShirtSize(25);
console.log('should log "You should select a size S":', result1);

var result2 = selectShirtSize(32);
console.log('should log "You should select a size M":', result2);

var result3 = selectShirtSize(47);
console.log('should log "You should select a size L":', result3);

var result4 = selectShirtSize(12);
console.log('should log "You should select a different shirt":', result4);

var result5 = selectShirtSize(67);
console.log('should log "You should select a different shirt":', result5);


console.log("#94=============================================================")

function verifyStock(recipeMinimums, stockTomatoes, stockOnions) {
  // otherwise if stock of tomatoes is sufficient but stock of onions is less than minimum
    // return 'We have enough tomatoes, but need more onions.'

// [x] otherwise
// return 'We have enough tomatoes and onions. There will be {excessTomatoes} extra tomato, and {excessOnions} extra onion.'

// [x] if stock of tomatoes and stock of onions are both less than minimum
// return 'We need more tomatoes and more onions.'

// [x] otherwise if stock of tomatoes is less than minimum but stock of onions is sufficient
// return 'We have enough onions, but need more tomatoes.'

  var excess_tomatoes = stockTomatoes - recipeMinimums['tomatoes'];
  var excess_onions = stockOnions - recipeMinimums['onions'];


  if (stockTomatoes >= recipeMinimums['tomatoes'] && stockOnions >= recipeMinimums['onions']) {
    return 'We have enough tomatoes and onions. There will be ' + excess_tomatoes + ' extra tomato, and ' + excess_onions + ' extra onion.'
  }
  else if (stockTomatoes < recipeMinimums['tomatoes'] && stockOnions < recipeMinimums['onions']) {
    return 'We need more tomatoes and more onions.'
  } else if (stockTomatoes < recipeMinimums['tomatoes'] && stockOnions >= recipeMinimums['onions']) {
    return 'We have enough onions, but need more tomatoes.'
  } else {
    return 'We have enough tomatoes, but need more onions.'
  }

}

var result1 = verifyStock({tomatoes: 3, onions: 7}, 5, 8);
console.log('should log "We have enough tomatoes and onions. There will be 2 extra tomato, and 1 extra onion.":', result1);

var result2 = verifyStock({tomatoes: 5, onions: 1}, 10, 4);
console.log('should log "We have enough tomatoes and onions. There will be 5 extra tomato, and 3 extra onion.":', result2);

var result3 = verifyStock({tomatoes: 2, onions: 4}, 1, 1);
console.log('should log "We need more tomatoes and more onions.":', result3);

var result4 = verifyStock({tomatoes: 4, onions: 2}, 3, 4);
console.log('should log "We have enough onions, but need more tomatoes.":', result4);

var result5 = verifyStock({tomatoes: 10, onions: 6}, 11, 4);
console.log('should log "We have enough tomatoes, but need more onions.":', result5);

console.log("#95=============================================================")

// Write a function called "convertScoreToGrade".
// Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.
// Notes:
// (100 - 90) --> 'A'
// (89 - 80) --> 'B'
// (79 - 70) --> 'C'
// (69 - 60) --> 'D'
// (59 - 0) --> 'F'
// If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.


function convertScoreToGrade(score) {
  // your code here
  if (score > 100 || score < 0) {
    return 'INVALID SCORE'
  }
  else if (score >= 90) {
    return 'A'
  }
  else if (score >= 80) {
    return 'B'
  } 
  else if (score >= 70) {
    return 'C'
  } 
  else if (score >= 60) {
    return 'D'
  } 
  else if (score >= 0 && score < 60) {
    return 'F'
  } 
}
var output = convertScoreToGrade(91);
console.log(output); // --> 'A'

console.log("#96=============================================================")

// Your function should use a while loop to log each integer from start, up to and including end, then return nothing.

function loopASequence(start, end) {
  // create a loop which runs if start is less than or equal to end
    // log current value of start to console
    // increment value of start
  var count = start;
  while (count <= end) {
    console.log(count)
    count += 1;
  }
}

loopASequence(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequence(3, 7);
// console output:
  // 3
  // 4
  // 5
  // 6
  // 7

console.log("#97=============================================================")

// Your function should use a while loop to log each element from the beginning
// to the end of the array, then return nothing. 

function loopAnArray(array) {
  // create an index variable
  // create a loop which iterates over the input array
    // log current array element to the console
    // increment value of index variable
  // var test1 = array.length
  // console.log(test1)
  var index = 0;
  while (index <= array.length - 1) {
    console.log(array[index])
    index++
  }
}

loopAnArray(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArray([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5

console.log("#98=============================================================")

// Your function should use a while loop to log each character from the
// beginning to the end of the string, then return nothing.

function loopAString(string) {
  // create an index variable
  // create a loop which iterates over the input string
    // log current string character to the console
    // increment value of index variable
  var index = 0;
  while (index <= string.length -1) {
    console.log(string[index])
    index++
  }
}

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d



console.log("#99=============================================================")

// Your function should use a for loop to log each integer from start, up to
// and including end, then return nothing.

function loopASequenceAgain(start, end) {
  // create a loop which loops from start to end
    // log current value to console
  for (i=start; i<=end; i++) {
    console.log(i)
  }

}

loopASequenceAgain(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequenceAgain(3, 7);
  // console output:
    // 3
    // 4
    // 5
    // 6
    // 7
