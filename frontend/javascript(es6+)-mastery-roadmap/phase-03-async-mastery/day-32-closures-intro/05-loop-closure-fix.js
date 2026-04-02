/*
05 — Fix using let
*/

for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("i:", i);
  }, 1000);
}

// Output:
// i: 1
// i: 2
// i: 3
