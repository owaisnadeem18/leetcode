// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range

let x = 453;

let reverse = (num) => {
  let isNeg = num < 0;

  //   If the number is negative , then convert it into positive and then convert to a string

  let string = Math.abs(num).toString();

  //   If the number was negative then add - with it:

  let reversed_str = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed_str += string[i];
  }

  //   Now convert this str into a num

  let ReversedInt = Number(reversed_str);

  //   If the number was negative then ,

  if (isNeg) {
    ReversedInt = -ReversedInt;
  }

  //   Check 32 bit condition

  if (ReversedInt < -(2 ** 31) || ReversedInt > 2 ** 31 - 1) {
    return 0;
  }

  return ReversedInt;
};

console.log(reverse(x));
