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


const assertArraysEqual = function(arr1, arr2) {
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


const middle = function (arr) {
  if (arr.length % 2 === 0 && arr.length > 2) {
    const middle = arr.length / 2;
    return [arr[middle - 1], arr[middle]];
  } else if (arr.length % 2 !== 0 && arr.length > 2) {
    const middle = (arr.length - 1) / 2;
    return [arr[middle]];
  } else {
    return [];
  }
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
