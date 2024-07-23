let arr = [1 , 4 , 8 , 2 ,3 ,13 , 19 , 42 , 12]

let size = 5

var chunk = function(arr, size) {
    let chunked_arr = []

    
for (let i = 0 ; i < arr.length ; i += size) {
    chunked_arr.push(arr.slice(i , i+size))   
}
    return chunked_arr
    
};
