const assertEqual = require('./assertEqual.js');

const tail = function(arr) {
  const newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;
