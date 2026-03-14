// Challenge 1
// Multiply only even numbers by 2

const numbers1 = [1, 2, 3, 4, 5];

const result1 = numbers1
  .filter(function(num) {
    return num % 2 === 0;
  })
  .map(function(num) {
    return num * 2;
  });

console.log(result1); // [4, 8]



// Challenge 2
// Get uppercase names longer than 3 letters

const names = ["ali", "sara", "mo", "john"];

const result2 = names
  .filter(function(name) {
    return name.length > 3;
  })
  .map(function(name) {
    return name.toUpperCase();
  });

console.log(result2); // ["SARA", "JOHN"]



// Challenge 3
// Square numbers greater than 5

const numbers2 = [2, 6, 3, 8];

const result3 = numbers2
  .filter(function(num) {
    return num > 5;
  })
  .map(function(num) {
    return num * num;
  });

console.log(result3); // [36, 64]