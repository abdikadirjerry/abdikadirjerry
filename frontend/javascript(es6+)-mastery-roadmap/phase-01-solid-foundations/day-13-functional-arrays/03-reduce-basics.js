// challenge 1
const number = [5, 10, 15];
const total = number.reduce((sum, num) => sum + num, 0);

console.log(total);

// challenge 2
const num = [2, 3, 4];

const result = num.reduce((acc, n) => acc * n, 1);

console.log(result);

// challenge 3
const numbers = [10, 25, 7, 40, 15];

const largest = numbers.reduce(function (max, num) {
  if (num > max) {
    return num;
  } else {
    return max;
  }
});

console.log(largest);
