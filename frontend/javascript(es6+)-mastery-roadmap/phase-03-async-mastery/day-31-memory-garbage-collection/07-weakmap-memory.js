/*
Challenge 07 — WeakMap Memory

Use WeakMap for temporary storage.
*/

let cache = new WeakMap();

let user = {
  name: "Ali",
};

cache.set(user, "cached data");

// ==========================
// ✅ Remove reference
// ==========================

user = null;

/*
==========================
✅ EXPLANATION
==========================

1. What happens after user = null?

Before:
user ──► { name: "Ali" }
cache ──► (key: user object → "cached data")

After:
user = null;

❗ No strong references remain to the object

→ The object becomes UNREACHABLE
→ Eligible for Garbage Collection


2. Why WeakMap helps GC (🔥 Important):

WeakMap holds WEAK references to keys.

This means:
- It does NOT prevent garbage collection
- If the key object is gone → entry is automatically removed


3. Normal Map vs WeakMap:

❌ Map:
let map = new Map();
map.set(user, "data");

- Map holds STRONG reference
- Even if user = null → object is STILL in memory
→ Memory leak risk


✅ WeakMap:
let cache = new WeakMap();
cache.set(user, "data");

- Weak reference
- If user = null → GC removes it automatically


4. Key Rule (🔥 Interview):

WeakMap keys:
- Must be objects
- Are weakly held
- Cannot be iterated
- Are automatically cleaned by GC


5. Real-world Use Cases:

- Caching temporary data
- Storing metadata for DOM elements
- Avoiding memory leaks in large apps


6. Final Answer:

After:
user = null;

The object becomes unreachable.

Because WeakMap does NOT hold strong references:
→ The object AND its cached data are removed automatically by GC.
*/
