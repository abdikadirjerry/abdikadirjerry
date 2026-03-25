// 🔴 VERY IMPORTANT — Recognize Complexity

const arr = [1, 2, 3, 4];

// 🟢 Challenge 1
let x = arr[0];

/*
Time Complexity: O(1)

Explanation:
- Direct access → constant time
*/

// 🟢 Challenge 2
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/*
Time Complexity: O(n)

Explanation:
- Loop runs n times
*/

// 🟡 Challenge 3
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(i, j);
  }
}

/*
Time Complexity: O(n²)

Explanation:
- Nested loops → n * n
*/
