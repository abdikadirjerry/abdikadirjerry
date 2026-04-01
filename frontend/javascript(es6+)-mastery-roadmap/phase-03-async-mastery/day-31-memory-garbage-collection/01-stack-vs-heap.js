/*
Challenge 01 — Stack vs Heap

Predict the output before running.

Explain:

1. Why x did not change
2. Why obj1 changed
*/

let x = 10;
let y = x;

y = 20;

console.log("x:", x); // x: 10
console.log("y:", y); // y: 20

let obj1 = { name: "Ali" };
let obj2 = obj1;

obj2.name = "Ahmed";

console.log("obj1:", obj1); // obj1: { name: "Ahmed" }

/*
Tasks:

1. Predict outputs
2. Explain primitive vs reference behavior
3. Write your explanation below
*/

/*
==========================
✅ ANSWERS & EXPLANATION
==========================

1. Predicted Outputs:

x: 10
y: 20
obj1: { name: "Ahmed" }


2. Why x did not change:

x is a primitive value (number).
Primitive values are stored in the STACK.

When we do:
let y = x;

JavaScript copies the VALUE of x into y (not the reference).

So:
x → 10
y → 10 (copy)

Then:
y = 20;

Only y changes, because it has its own separate copy.
x remains unchanged.


3. Why obj1 changed:

obj1 is an object (reference type).
Objects are stored in the HEAP, and variables store a reference (address).

When we do:
let obj2 = obj1;

Both obj1 and obj2 point to the SAME object in memory.

So:
obj1 ──► { name: "Ali" }
obj2 ──► { name: "Ali" }

Then:
obj2.name = "Ahmed";

This modifies the SAME object in memory.

So now:
obj1 ──► { name: "Ahmed" }
obj2 ──► { name: "Ahmed" }


4. Summary:

- Primitive (number, string, boolean):
  → stored in stack
  → copied by VALUE
  → changes do NOT affect each other

- Reference (object, array, function):
  → stored in heap
  → copied by REFERENCE
  → changes affect all references


🔥 Key Rule:
Primitives = copy
Objects = share
*/
