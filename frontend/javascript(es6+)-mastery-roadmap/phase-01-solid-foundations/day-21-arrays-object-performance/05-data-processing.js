//  Challenge 1 — Count Products
const products = [
  { name: "Phone", category: "Electronics" },
  { name: "Laptop", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
];

const categoryCount = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});
console.log(categoryCount);

//  Challenge 2 — Group Users by Age
const users = [
  { name: "Ali", age: 25 },
  { name: "Omar", age: 17 },
  { name: "Sara", age: 25 },
];

const groupedByAge = users.reduce((acc, user) => {
  if (!acc[user.age]) acc[user.age] = [];
  acc[user.age].push(user.name);
  return acc;
}, {});
console.log(groupedByAge);

//  Challenge 3 — Find Most Frequent Value
const numbers = [1, 2, 2, 3, 3, 3, 4];
const freqMap = {};
let maxFreq = 0;
let mostFrequent;

numbers.forEach((n) => {
  freqMap[n] = (freqMap[n] || 0) + 1;
  if (freqMap[n] > maxFreq) {
    maxFreq = freqMap[n];
    mostFrequent = n;
  }
});
console.log("Most Frequent:", mostFrequent);
