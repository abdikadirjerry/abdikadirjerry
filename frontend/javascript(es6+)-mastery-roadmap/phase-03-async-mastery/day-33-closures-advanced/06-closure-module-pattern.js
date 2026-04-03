"use strict";

/*
06 — Module Pattern using Closure
*/

const CounterModule = (function () {
  let count = 0;

  function increment() {
    count++;
    console.log("Count:", count);
  }

  function decrement() {
    count--;
    console.log("Count:", count);
  }

  function reset() {
    count = 0;
    console.log("Reset count:", count);
  }

  return {
    increment,
    decrement,
    reset,
  };
})();

CounterModule.increment();
CounterModule.increment();
CounterModule.decrement();
CounterModule.reset();
