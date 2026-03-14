// Challenge 1
const numbers1 = [1, 2, 3, 4, 5];

const result1 = numbers1
  .filter(function (num) {
    return num % 2 === 0;
  })
  .map(function (num) {
    return num * 2;
  });

console.log(result1);

// Challenge 2
const names = ["ali", "sara", "mo", "john"];

const result2 = names
  .filter(function (name) {
    return name.length > 3;
  })
  .map(function (name) {
    return name.toUpperCase();
  });

console.log(result2);

// Challenge 3
const numbers2 = [2, 6, 3, 8];

const result3 = numbers2
  .filter(function (num) {
    return num > 5;
  })
  .map(function (num) {
    return num * num;
  });

console.log(result3);
