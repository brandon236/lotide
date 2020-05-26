const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(arr) {
  const newArr = arr.slice(1);
  return newArr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
