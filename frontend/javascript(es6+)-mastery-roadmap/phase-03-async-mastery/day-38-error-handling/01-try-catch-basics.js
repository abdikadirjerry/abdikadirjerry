// Try/Catch Basics

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Execution finished");
}
