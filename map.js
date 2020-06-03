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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}



const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["light", "house", "labs", "test", "string"];
const words3 = ["the", "first", "letter", "of", "every", "word", "in", "this", "sentence"];

const results1 = map(words, word => word[0]);
eqArrays(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words2, word => word[0]);
eqArrays(results2, ["l", "h", "l", "t", "s"]);

const results3 = map(words3, word => word[0]);
eqArrays(results3, ["t", "f", "l", "o", "e", "w", "i", "t", "s"]);

module.exports = map;
