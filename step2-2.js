//step2-2
'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
// Replace this comment and the next line with your code
  for (let number=startIndex; number<=stopIndex; number++){
      numbers.unshift(number);
      if(number%3===0){
          sayThree(number);
      }
      if(number%5===0){
      sayFive(number);
      }
  }
  console.log( numbers);
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(sayThree);
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(sayFive);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;

