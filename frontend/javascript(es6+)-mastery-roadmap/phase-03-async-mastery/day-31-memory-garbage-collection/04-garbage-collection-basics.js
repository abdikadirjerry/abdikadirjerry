/*
Challenge 04 — Garbage Collection

Create objects inside a function.

Then remove references.
*/

function createUser() {
  let user = {
    name: "Ali",
  };

  return user;
}

let data = createUser();

data = null;

/*
==========================
✅ EXPLANATION
==========================

1. Step-by-step Execution:

STEP 1:
Function is called:
let data = createUser();

Inside function:
user ──► { name: "Ali" }

The object is created in HEAP memory.

Then:
return user;

Now:
data ──► { name: "Ali" }

The function finishes execution, so local variable "user" is removed,
BUT the object still exists because "data" is referencing it.


STEP 2:
data = null;

Now:
data ──► null

❗ No references remain to the object

→ Object becomes UNREACHABLE
→ Eligible for Garbage Collection


2. When does GC run?

Garbage Collection:
- Runs automatically in the background
- Is NOT immediate
- Is NOT predictable (depends on engine optimization)

So after:
data = null;

The object is marked for cleanup, and GC will remove it later.


3. Mark-and-Sweep Algorithm (🔥 Important)

JavaScript uses "Mark-and-Sweep" GC.


🧠 STEP 1 — Mark Phase:
- GC starts from ROOTS (global variables, current execution)
- It "marks" all reachable objects

In our case after:
data = null;

There are NO references to the object
→ It is NOT marked


🧹 STEP 2 — Sweep Phase:
- GC removes all UNMARKED objects from memory

→ Our object { name: "Ali" } is deleted


4. Visual Summary:

Before:
data ──► { name: "Ali" }  ✅ reachable

After:
data ──► null             ❌ unreachable

→ Garbage Collector cleans it


5. Key Rule (🔥 Interview):

- Reachable = stays in memory
- Unreachable = garbage collected
- GC uses Mark-and-Sweep to decide


6. Final Answer:

The object becomes eligible for GC right after:

data = null;

And it is removed during the next GC cycle using mark-and-sweep.
*/
