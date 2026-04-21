let s = "leetcode"

function firstUniqChar(s) { 
    let obj = {}
    
    for (let i = 0 ; i < s.length ; i++) {

        let elem = s[i]
        
        obj[elem] = (obj[elem] || 0) + 1   
        
    }
    
    for (let i = 0 ; i < s.length ; i++) {
        
        if (obj[s[i]] === 1) {
            
        return i

    }

}

return -1

}

console.log(firstUniqChar(s))