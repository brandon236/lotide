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




//I used the ... operator to make a copy of the original array so it's never modified.
//I then used splice on the new array in order to remove any elements that are found in itemsToRemove.
const without = function(source, itemsToRemove) {
  let newArray = [...source];
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === itemsToRemove[i]) {
        newArray.splice(j, 1);
      }
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1]));
console.log(without([1, 2, 3, 1], [1]));
console.log(without([1, 2, 3, 1], [1, 2]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["1", "2", "3"], [1, 2, 3]));


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;
