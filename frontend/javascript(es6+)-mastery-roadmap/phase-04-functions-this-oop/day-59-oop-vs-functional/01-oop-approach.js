// 01-oop-approach.js

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

const counter = new Counter();

counter.increment();
counter.increment();

console.log(counter.count);
