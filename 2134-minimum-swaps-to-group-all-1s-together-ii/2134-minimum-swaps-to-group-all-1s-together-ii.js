let nums = [0,1,0,1,1,0,0]

function minSwaps(nums) {
    const totalOnes = nums.reduce((sum, num) => sum + num, 0);
    const n = nums.length;

    let currentOnes = 0;
    for (let i = 0; i < totalOnes; i++) {
        currentOnes += nums[i];
    }

    let maxOnesInWindow = currentOnes;
    for (let i = 1; i < n; i++) {
        currentOnes += nums[(i + totalOnes - 1) % n] - nums[i - 1];
        maxOnesInWindow = Math.max(maxOnesInWindow, currentOnes);
    }

    return totalOnes - maxOnesInWindow;
}

console.log(minSwaps(nums))