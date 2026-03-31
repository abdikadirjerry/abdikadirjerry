// Challenge 1: Basic Call Stack

function first() {
  console.log("First function start");
  second();
  console.log("First function end");
}

function second() {
  console.log("Second function start");
  third();
  console.log("Second function end");
}

function third() {
  console.log("Third function");
}

first();

/*
Expected Output:
First function start
Second function start
Third function
Second function end
First function end
*/
