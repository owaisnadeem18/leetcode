
function canBeEqual(target, arr) {
    // Sort both arrays
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);
    
    // Compare sorted arrays
    for (let i = 0; i < target.length; i++) {
        if (target[i] !== arr[i]) {
            return false;
        }
    }
    return true;
}

// Example usage:
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])); // Output: true
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 5])); // Output: false
