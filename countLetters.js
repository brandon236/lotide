const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(string) {
  const newString = string.replace(/\s/g, '');
  const results = {};
  for (const letter of newString) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("the english language uses the letter e quite alot"));

module.exports = countLetters;
