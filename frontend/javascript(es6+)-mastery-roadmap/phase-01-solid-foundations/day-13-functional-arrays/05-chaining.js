// Challenge 1
// Find sum of even numbers

const nums1 = [1, 2, 3, 4, 5, 6];

const sumEven = nums1
  .filter(function(num) {
    return num % 2 === 0;
  })
  .reduce(function(total, num) {
    return total + num;
  }, 0);

console.log(sumEven); 



// Challenge 2
// Multiply numbers greater than 3 by 10

const nums2 = [1, 2, 3, 4, 5];

const result = nums2
  .filter(function(num) {
    return num > 3;
  })
  .map(function(num) {
    return num * 10;
  });

console.log(result); 



// Challenge 3
// Get total price of expensive items

const prices = [10, 25, 5, 40];

const total = prices
  .filter(function(price) {
    return price > 20;
  })
  .reduce(function(sum, price) {
    return sum + price;
  }, 0);

console.log(total); 