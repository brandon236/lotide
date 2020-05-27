const middle = function (arr) {
  if (arr.length % 2 === 0 && arr.length > 2) {
    const middle = arr.length / 2;
    return [arr[middle - 1], arr[middle]];
  } else if (arr.length % 2 !== 0 && arr.length > 2){
    const middle = (arr.length - 1) / 2;
    return [arr[middle]];
  } else {
      return [];
  }
}

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
