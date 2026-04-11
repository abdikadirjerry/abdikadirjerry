// 04-setInterval-basics.js

let count = 0;

const interval = setInterval(() => {
  count++;
  console.log("Count:", count);

  if (count === 3) {
    clearInterval(interval);
  }
}, 1000);

/*
🧠 setInterval:
- Runs repeatedly every X ms
- Must be cleared manually
*/
