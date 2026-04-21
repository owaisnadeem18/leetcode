let s = "anagram"
let t = "nagaram"

let isAnagram = (s, t) => {
    if (s.length !== t.length) return false  

    let obj = {}

    for (let char of s) {

        obj[char] = (obj[char] || 0) + 1


    }

    for (let char of t) {

        if (!obj[char]) return false

        obj[char]--

    }

    return true
    
};

console.log(isAnagram(s,t))