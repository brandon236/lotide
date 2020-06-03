const assertEqual = require('./assertEqual.js');

// I start by checking to see if the two arrays are the same length and then I see if any values in the arrays are different. If they are then I immediately return false. If the for loop goes all the way through without finding any mis-matching elements, it returns true.
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



module.exports = eqArrays;
