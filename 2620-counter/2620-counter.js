
let n = 34;

function createCounter(n) {
  return function () {
    return n++;
  };
}

let counter = createCounter(n);

console.log(counter());
console.log(counter());
console.log(counter());