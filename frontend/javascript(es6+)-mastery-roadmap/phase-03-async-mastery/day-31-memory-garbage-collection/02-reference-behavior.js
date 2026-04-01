/*
Challenge 02 — Reference Behavior

Fix the mutation issue.
*/

let user1 = {
  name: "Ali",
};

// ❌ Problem:
// let user2 = user1;  // This shares the same reference

// ==========================
// ✅ Solution 1 — Spread Operator
// ==========================
let user2 = { ...user1 };

// Modify only user2
user2.name = "Ahmed";

console.log("Spread Solution:");
console.log("user1:", user1); // { name: "Ali" }
console.log("user2:", user2); // { name: "Ahmed" }

// ==========================
// ✅ Solution 2 — Object.assign()
// ==========================
let user3 = Object.assign({}, user1);

// Modify only user3
user3.name = "Hassan";

console.log("\nObject.assign Solution:");
console.log("user1:", user1); // { name: "Ali" }
console.log("user3:", user3); // { name: "Hassan" }

/*
==========================
✅ EXPLANATION
==========================

1. Original Problem:

let user2 = user1;

This copies the REFERENCE, not the object.
So both variables point to the same object in memory.

Changing user2 also changes user1.


2. Solution — Cloning:

To prevent mutation, we create a NEW object (clone).

A. Spread Operator:
let user2 = { ...user1 };

B. Object.assign():
let user3 = Object.assign({}, user1);

Both create a shallow copy of the object.


3. Important Note (Interview 🔥):

These methods perform a SHALLOW COPY.

If object has nested objects:
{
  profile: { age: 20 }
}

Then nested objects are still shared!


4. Summary:

❌ user2 = user1 → same reference (BAD)
✅ {...user1} → new object (GOOD)
✅ Object.assign({}, user1) → new object (GOOD)

🔥 Rule:
Always clone objects when you don’t want side effects.
*/
