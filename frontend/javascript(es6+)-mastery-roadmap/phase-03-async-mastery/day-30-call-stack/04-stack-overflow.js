// Challenge 4: Stack Overflow Example

function infiniteRecursion() {
  console.log("Running...");
  infiniteRecursion();
}

// WARNING: This will crash your program if you run it
// infiniteRecursion();

/*
Goal: Understand what causes "Maximum call stack size exceeded"
*/