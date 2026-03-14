// Challenge 1
const number1 = [1, 2, 3, 4, 5, 6];

const sumEven = number1
  .filter(function (num) {
    return num % 2 === 0;
  })
  .reduce(function (total, num) {
    return total + num;
  }, 0);

console.log(sumEven);

// Challenge 2
const number2 = [1, 2, 3, 4, 5];

const result = number2
  .filter(function (num) {
    return num > 3;
  })
  .map(function (num) {
    return num * 10;
  });

console.log(result);

// Challenge 3
const prices = [10, 25, 5, 40];

const total = prices
  .filter(function (price) {
    return price > 20;
  })
  .reduce(function (sum, price) {
    return sum + price;
  }, 0);

console.log(total);
