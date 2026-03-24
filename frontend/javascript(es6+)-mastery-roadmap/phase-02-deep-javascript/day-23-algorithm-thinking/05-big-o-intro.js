// 🟡 Challenge — Identify Complexity

for (let i = 0; i < n; i++) {
  console.log(i);
}

/*
📌 Runs n times
👉 Time Complexity = O(n)
*/

// 🔴 Challenge — Nested Loop

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}

/*
📌 Outer loop runs n times
📌 Inner loop runs n times for EACH outer loop

👉 Total = n * n = n²

👉 Time Complexity = O(n²)
*/
