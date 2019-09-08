'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
//due to x is a constant and declaerd in the first function so when print out f1 it will give us 9
// due to y is an object and the 2nd function use x as a key to chang the value. so it will return 10.