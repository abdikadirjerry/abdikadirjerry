//  Challenge 1 — Count Even Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenCount = numbers.filter((n) => n % 2 === 0).length;
console.log("Even Count:", evenCount);

//  Challenge 2 — Avoid Nested Loops
// Instead of loop inside loop, we use .includes (which is still O(n) but cleaner)
// or better yet, a Set for O(1) lookup.
const largeList = [1, 2, 3];
const searchFor = [2, 5];
const found = searchFor.filter((item) => largeList.includes(item));

//  Challenge 3 — Fast Lookup Table
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Omar" },
];

const userLookup = {};
users.forEach((user) => {
  userLookup[user.id] = user;
});

console.log("Fast Lookup for ID 2:", userLookup[2]);
// Benefit: We don't have to loop through the array to find a user by ID.
