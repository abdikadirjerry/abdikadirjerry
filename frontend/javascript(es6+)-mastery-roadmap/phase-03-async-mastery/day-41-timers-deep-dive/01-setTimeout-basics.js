// 01-setTimeout-basics.js

console.log("Start");

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("End");

/*
🧠 Key Points:
- setTimeout is asynchronous
- It does NOT block code
- Minimum delay, not exact timing
*/
