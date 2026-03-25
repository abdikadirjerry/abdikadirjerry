// 🟡 Challenge — Loop Analysis

for (let i = 0; i < n; i++) {
  console.log(i);
}

for (let i = 0; i < n; i++) {
  console.log(i);
}

/*
📌 Question:
Is this O(n²)?

❌ NO

📌 Answer: O(n)

📌 Explanation:
- First loop → n operations
- Second loop → n operations

👉 Total = n + n = 2n

👉 In Big-O → we ignore constants

👉 Final = O(n)
*/
