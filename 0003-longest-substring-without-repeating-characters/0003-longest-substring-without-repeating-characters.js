
let s = "abcabcabc";

let lengthOfLongestSubstring = (str) => {
    let maxLength = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        if (seen[str[i]] !== undefined && start <= seen[str[i]]) {
            start = seen[str[i]] + 1;
        }

        seen[str[i]] = i;

        // Update maxLength based on the current window size
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring(s));
