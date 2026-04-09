// 01-call-stack-review.js

// The Call Stack is where JS executes functions (LIFO - Last In First Out)

function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();

/*
Execution Flow:

Call Stack:
1. first()
2. second()
3. third()

Output:
First function
Second function
Third function
*/
