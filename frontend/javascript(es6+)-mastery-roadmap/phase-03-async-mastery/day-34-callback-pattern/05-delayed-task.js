function runAfterDelay(message, delay, callback) {
  setTimeout(() => {
    console.log(message);
    if (callback) callback();
  }, delay);
}

// Example usage
runAfterDelay("Task finished", 1000, () => {
  console.log("Next step started");
});
