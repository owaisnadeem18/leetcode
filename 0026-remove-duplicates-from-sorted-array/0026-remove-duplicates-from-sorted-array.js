function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0; // Pointer for the position of unique elements

  // Traverse through the array
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) { // If a new unique element is found
      i++; // Move the unique pointer
      nums[i] = nums[j]; // Update the array with the unique element
    }
  }

  return i + 1; // Length of unique elements (index + 1)
}

// Example usage
let nums = [1, 1, 2];
let k = removeDuplicates(nums);
console.log(k); // 2
console.log(nums.slice(0, k)); // [1, 2]
