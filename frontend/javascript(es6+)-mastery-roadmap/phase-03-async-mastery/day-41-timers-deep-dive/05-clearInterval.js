// 05-clearInterval.js

const intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped");
}, 5000);

/*
🧠 Pattern:
- Start interval
- Stop it later using setTimeout
*/
