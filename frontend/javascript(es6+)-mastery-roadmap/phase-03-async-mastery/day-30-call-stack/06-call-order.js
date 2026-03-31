// Challenge 6: Predict Call Order

function a() {
  console.log("A start");
  b();
  console.log("A end");
}

function b() {
  console.log("B start");
  c();
  console.log("B end");
}

function c() {
  console.log("C");
}

a();

/*
Goal: Practice predicting execution order using call stack
*/