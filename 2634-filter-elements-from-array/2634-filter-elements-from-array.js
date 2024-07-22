let filter = (array, fn) => {
  let filterElements = [];

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i)) { // Pass element and index to fn
      filterElements.push(array[i]);
    }
  }

  return filterElements;
};

function fn(element, index) {
  // It will filter the array elements which are greater than 10
  return element > 10;
}

// Now let's call the function of filter, which will have the parameter of above function as fn
let arr = [1, 5, 9, 34, 12, 52, 90, 19, 30];

console.log(filter(arr, fn));
