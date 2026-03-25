// 🟡 Challenge — O(n²)

const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[i], arr[j]);
  }
}

/*
📌 Time Complexity: O(n²)

📌 Explanation:
- Outer loop runs n times
- Inner loop runs n times for EACH outer loop

👉 Total operations = n * n = n²

👉 Quadratic growth (very expensive)
*/
