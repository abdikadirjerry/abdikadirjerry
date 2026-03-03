function first() {
  console.log("First function");
}

function second() {
  first();
  console.log("Second function");
}

second();