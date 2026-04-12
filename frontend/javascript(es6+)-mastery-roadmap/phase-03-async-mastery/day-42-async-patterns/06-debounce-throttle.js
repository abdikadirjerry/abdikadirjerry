// 06-debounce-throttle.js

// Debounce: runs AFTER user stops triggering
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Throttle: runs at most once every X ms
function throttle(fn, limit) {
  let waiting = false;

  return function (...args) {
    if (!waiting) {
      fn.apply(this, args);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

// Example usage
const log = () => console.log("Triggered");

// Try calling these repeatedly
const debounced = debounce(log, 1000);
const throttled = throttle(log, 1000);

/*
🧠 Use Cases:
Debounce:
✔ Search input
✔ Auto-save

Throttle:
✔ Scroll events
✔ Resize events
*/
