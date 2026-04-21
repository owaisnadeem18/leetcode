
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

let groupAnagrams = function (strs) {

    let obj = {}

    for (let i = 0; i < strs.length; i++) {

        let str = strs[i]

        // Now , we need to create a key to store anagrams array items in a same array:

        // Here , we are creating a new key: 


        key = str.split("").sort().join("")

        if (!obj[key]) {
            obj[key] = []
        }

        obj[key].push(str)

    }

    return Object.values(obj)

};

console.log(groupAnagrams(strs))