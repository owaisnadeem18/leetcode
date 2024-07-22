// question_01_medium

// find the minimun difference between the largest and the smallest element of array using three moves

let nums = [1, 2, 3, 4, 9, 4, 7];

let minDifference = (numbers) => {
  let length = numbers.length;

  //   Sort the numbers of array

  numbers.sort((a, b) => a - b);

  //   If the array has less than 4 elements, return 0

  if (length <= 4) {
    return 0;
  }

  let minDiff = Infinity;

  for (let left = 0, right = length - 4; left < 4; left++, right++) {
    minDiff = Math.min(minDiff, numbers[right] - numbers[left]);
  }
    
    return minDiff
};

console.log(minDifference(nums));
