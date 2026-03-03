function one() {
  two();
  console.log("One finished");
}

function two() {
  three();
  console.log("Two finished");
}

function three() {
  console.log("Three finished");
}

one();

// Visualize stack:
// one()
//   two()
//     three()