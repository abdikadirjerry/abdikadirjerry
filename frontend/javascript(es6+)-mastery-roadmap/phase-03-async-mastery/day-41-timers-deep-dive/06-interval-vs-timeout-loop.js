// 06-interval-vs-timeout-loop.js

// ❌ Problem with setInterval
setInterval(() => {
  console.log("Interval running");
}, 1000);

// ✅ Better control with recursive setTimeout
function loop() {
  console.log("Timeout loop running");

  setTimeout(loop, 1000);
}

loop();

/*
🧠 Important Difference:

setInterval:
- Can overlap if task takes too long ❌

Recursive setTimeout:
- Waits until task finishes ✅
- More control (recommended in real apps)
*/
