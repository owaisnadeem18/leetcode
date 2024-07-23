// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

let arr = [1, 4, 2, 6, 9, 11];

let map = function (array, fn) {
  let updated_arr = [];

  for (let i = 0; i < array.length; i++) {
    updated_arr.push(fn(array[i], i));
  }

  return updated_arr;
};

let PlusOne = (elem, index) => {
  return elem + 1;
};

console.log(map(arr, PlusOne));
