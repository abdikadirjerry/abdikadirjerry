// 03-clearTimeout.js

const timer = setTimeout(() => {
  console.log("This will NOT run");
}, 3000);

clearTimeout(timer);

console.log("Timeout cancelled");

/*
🧠 Use Case:
- Cancel API call
- Prevent unwanted execution
*/
