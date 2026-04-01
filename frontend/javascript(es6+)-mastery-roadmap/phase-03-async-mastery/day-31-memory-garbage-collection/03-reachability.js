/*
Challenge 03 — Reachability

Identify which objects will be garbage collected.
*/

let user = {
  name: "Ali",
};

let admin = user;

user = null;

admin = null;

/*
==========================
✅ EXPLANATION
==========================

1. What is Reachability?

An object is "reachable" if it can be accessed from a root reference.

Roots include:
- Global variables
- Local variables in functions
- Currently executing code

If something is NOT reachable → it becomes eligible for Garbage Collection (GC).


2. Step-by-step Execution:

STEP 1:
let user = { name: "Ali" };

Memory:
user ──► { name: "Ali" }

Object is reachable → NOT collected


STEP 2:
let admin = user;

Memory:
user  ──► { name: "Ali" }
admin ──► { name: "Ali" }

Now TWO references point to the SAME object


STEP 3:
user = null;

Memory:
user  ──► null
admin ──► { name: "Ali" }

Object is STILL reachable through "admin"
→ NOT collected


STEP 4:
admin = null;

Memory:
user  ──► null
admin ──► null

❗ Now NO references point to the object

→ Object becomes UNREACHABLE
→ Eligible for Garbage Collection


3. When does GC happen?

JavaScript engine (like V8) automatically:
- Detects unreachable objects
- Removes them from memory

This process is NOT immediate and NOT predictable
(it runs in the background)


4. Final Answer:

The object { name: "Ali" } becomes eligible for garbage collection ONLY after:

admin = null;

Because that is the moment when ALL references are gone.


5. Key Rule (🔥 Interview):

Object stays in memory as long as at least ONE reference exists.

No references = Garbage Collected
*/
