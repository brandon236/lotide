//I created the flat variable to save the flattened array as well as Array.isArray to check and see if any array element is also an array. 
const flatten = function(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flat.push(arr[i][j]);
      }
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
};

console.log(flatten([1,2,[3,4],5,[6]]));
console.log(flatten([[1],2,3,[4, 3, 4, 1],5]));
console.log(flatten([["Lighthouse", "Labs"]]));

module.exports = flatten;
