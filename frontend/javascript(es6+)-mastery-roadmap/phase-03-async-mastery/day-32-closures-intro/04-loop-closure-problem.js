/*
04 — Loop Closure Problem
*/

for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("i:", i);
  }, 1000);
}

// Output:
// i: 4
// i: 4
// i: 4
