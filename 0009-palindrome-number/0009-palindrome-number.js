

// question_03

// Find the palindrome number


let num = "345";

let isPalindrome = function(number) {
  let str = number.toString();

  let reversed_str = str.split("").reverse().join("");

  if (str == reversed_str) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(num));
