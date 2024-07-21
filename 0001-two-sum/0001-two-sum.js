// Two Numbers sum

let arr = [3, 2, 7, 4, 5, 8, 9, 3, 8];

let target = 6;

let twoSum = (array, targ) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targ) {
        return [i, j];
      }
    }
  }

  return [];
};

console.log(twoSum(arr, target));
