let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];

let intersect = function(a, b) {
  // Create a copy of nums2 to modify
  let copy_nums2 = [...b];
  // Create an array to store the intersection
  let intersection_arr = [];

  for (let elem of a) {
    // Find the index of the element in copy_nums2
    let index = copy_nums2.indexOf(elem);

    // If the element is found
    if (index !== -1) {
      // Add the element to the result
      intersection_arr.push(elem);
      // Remove the element from copy_nums2 to handle duplicates
      copy_nums2.splice(index, 1);
    }
  }

  return intersection_arr;
};

console.log(intersect(nums1, nums2));  // Output: [2, 2]
