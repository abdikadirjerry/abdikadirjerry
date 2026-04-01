/*
Challenge 05 — Timer Memory Leak

Fix the memory leak.
*/

// ==========================
// ✅ Solution
// ==========================

let intervalId = null;

function startLogging() {
  // Prevent multiple intervals (important 🔥)
  if (intervalId !== null) {
    console.log("Logging already running...");
    return;
  }

  intervalId = setInterval(() => {
    console.log("Logging...");
  }, 1000);
}

function stopLogging() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    console.log("Logging stopped.");
  }
}

// Start logging
startLogging();

// Example: stop after 5 seconds (for testing)
setTimeout(() => {
  stopLogging();
}, 5000);

/*
==========================
✅ EXPLANATION
==========================

1. Original Problem:

setInterval() keeps running forever.

❗ If we don’t clear it:
- It continues consuming memory
- Keeps executing callback
- Can cause memory leaks in real apps


2. Fix — Store Interval ID:

let intervalId = setInterval(...);

This ID allows us to control and stop the interval later.


3. Clear Interval:

clearInterval(intervalId);

This stops the repeating execution and releases resources.


4. Prevent Multiple Intervals (🔥 Important):

If startLogging() is called multiple times:
→ Multiple intervals will run simultaneously

We fix it by:

if (intervalId !== null) return;

This ensures only ONE interval runs.


5. When is Memory Leak Fixed?

- When clearInterval() is called
- When no references to the callback remain
- Then GC can clean it up


6. Key Rule (🔥 Interview):

Always clean up:
- setInterval → clearInterval
- setTimeout → clearTimeout
- Event listeners → removeEventListener

Uncleaned side effects = memory leaks 🚨
*/
