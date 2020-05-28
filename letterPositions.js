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


const letterPositions = function(sentence) {
  const results = {};
  const newSentence = sentence.replace(/\s/g, '');
  for (const letter in newSentence) {
    if (results[newSentence[letter]]) {
      results[newSentence[letter]].push(Number(letter));
    } else {
      results[newSentence[letter]] = [Number(letter)];
    }
  }
  return results;
};


//Please note that I'm ignoring spaces for all of these examples.
const result = letterPositions("hello");
console.log(result);
assertArraysEqual(result["h"], [0]);
assertArraysEqual(result["l"], [2, 3]);
console.log();

const result2 = letterPositions("string positions with spaces");
console.log(result2);
console.log();
const result3 = letterPositions("another string");
console.log(result3);
