let sentence = "race a car";

let isPalindrome = (sent) => {
  // Remove non-alphanumeric characters and convert to lowercase
  let string = sent.replace(/[^a-z0-9]/gi, '').toLowerCase();

  let reversed_str = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed_str += string[i];
  }

  return string === reversed_str;
};

console.log(isPalindrome(sentence)); // Output: false
