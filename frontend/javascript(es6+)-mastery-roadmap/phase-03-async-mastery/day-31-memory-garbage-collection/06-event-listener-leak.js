/*
Challenge 06 — Event Listener Leak

Simulate DOM listener cleanup.
*/

let button = document.createElement("button");

function handleClick() {
  console.log("Clicked");
}

// Attach listener
button.addEventListener("click", handleClick);

// ==========================
// ✅ Proper Cleanup
// ==========================

// 1. Remove event listener BEFORE removing element
button.removeEventListener("click", handleClick);

// 2. Remove the element from DOM
button.remove();

// 3. Optional (extra safety 🔥)
button = null;

/*
==========================
✅ EXPLANATION
==========================

1. Original Problem:

When you add an event listener:
button.addEventListener("click", handleClick);

The browser keeps a reference:
button → handleClick

If the element is removed WITHOUT removing the listener:
button.remove();

❗ The reference may still exist internally
→ Prevents garbage collection
→ Causes memory leak


2. Correct Fix:

A. Remove listener first:
button.removeEventListener("click", handleClick);

B. Then remove element:
button.remove();

C. Optional:
button = null;

Now:
- No DOM reference
- No function reference
→ Object becomes unreachable
→ GC can clean it


3. Why this matters (🔥 Real World):

In apps (especially React, Vue, etc.):
- Components mount/unmount frequently
- If listeners are not cleaned:
  → Memory increases over time
  → App becomes slow/crashes


4. Key Rule (🔥 Interview):

Always clean up side effects:

- addEventListener → removeEventListener
- setInterval → clearInterval
- subscriptions → unsubscribe


5. Final Answer:

To prevent memory leak:
✔ Remove event listener first
✔ Then remove DOM element
✔ Ensure no references remain
*/
