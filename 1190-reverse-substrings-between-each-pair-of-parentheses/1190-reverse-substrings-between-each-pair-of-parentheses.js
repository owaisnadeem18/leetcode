let reverseParentheses = (str) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ')') {
      let temp = '';

      while (stack.length && stack[stack.length - 1] !== '(') {
        temp += stack.pop();
      }

      // Remove the '(' from the stack
      stack.pop();

      // Push the reversed content back to the stack
      for (let j = 0; j < temp.length; j++) {
        stack.push(temp[j]);
      }
    } else {
      stack.push(str[i]);
    }
  }

  return stack.join('');
};

console.log(reverseParentheses("(u(love)i)")); // Output should be "iloveu"
console.log(reverseParentheses("(ab(rtv)c)")); // Output should be "abvtrc"
