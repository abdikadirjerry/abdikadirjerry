// 02-functional-approach.js

function increment(count) {
  return count + 1;
}

function decrement(count) {
  return count - 1;
}

let count = 0;

count = increment(count);
count = increment(count);

console.log(count);
