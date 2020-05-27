const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

// I start by checking to see if the two arrays are the same length and then I see if any values in the arrays are different. If they are then I immediately return false. If the for loop goes all the way through without finding any mis-matching elements, it returns true.
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
    console.log("❌❌❌Assertion Failed: " + arr1 + " !== " + arr2);
    return false;
    }
  }
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
    return true;
};

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);

eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
