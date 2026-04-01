/*
Challenge 08 — Real World Debug

Simulate growing memory usage.
*/

// ==========================
// ❌ Original Problem
// ==========================

let logs = [];

/*
function storeLogs() {
  logs.push(new Array(100000).fill("log"));
}

setInterval(storeLogs, 500);
*/

// ==========================
// ✅ Fixed Solution (Limit Strategy)
// ==========================

const MAX_LOGS = 50;

function storeLogs() {
  logs.push(new Array(100000).fill("log"));

  // Keep only last 50 logs
  if (logs.length > MAX_LOGS) {
    logs.shift(); // remove oldest log
  }
}

setInterval(storeLogs, 500);

/*
==========================
✅ EXPLANATION
==========================

1. Memory Issue:

logs array keeps growing forever:

logs.push(...)

Every 500ms:
- A huge array (100,000 items) is added
- Nothing is removed

❗ Result:
- Memory usage increases continuously
- Eventually causes slowdown or crash
→ Classic memory leak pattern


2. Why this is dangerous (🔥 Real World):

- Dashboards
- Logging systems
- Analytics trackers

If you keep storing without limit:
→ App becomes unusable over time


3. Solution — Limit Strategy:

We define a maximum size:

const MAX_LOGS = 50;

After pushing:
if (logs.length > MAX_LOGS) {
  logs.shift();
}

This:
- Removes oldest data
- Keeps memory stable


4. Before vs After:

❌ Before:
logs → [log1, log2, log3, ..., ∞] 🚨

✅ After:
logs → [last 50 logs only] ✅


5. Alternative Optimization (🔥 Better for performance):

Instead of shift (which is costly),
you could use slice:

logs = logs.slice(-MAX_LOGS);

But shift is fine for learning.


6. Key Rule (🔥 Interview):

Unbounded data structures = memory leaks

Always:
✔ Set limits
✔ Clean old data
✔ Control growth


7. Final Answer:

- Issue: Infinite array growth
- Fix: Limit array size to 50
- Result: Stable memory usage
*/
