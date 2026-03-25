// 🔥 Challenge 1 — Find Max

const arr = [5, 2, 9, 1];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);

/*
📌 Time Complexity: O(n)

Explanation:
- Loop runs through all elements once
*/

// 🔥 Challenge 2 — Pair Matching

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      console.log("match");
    }
  }
}

/*
📌 Time Complexity: O(n²)

Explanation:
- Nested loops → n * n
*/
