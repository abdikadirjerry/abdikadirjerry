function taskRunner(taskName, duration, callback) {
  console.log(`Starting ${taskName}`);
  setTimeout(() => {
    console.log(`Completed ${taskName}`);
    if (callback) callback();
  }, duration);
}

// Example usage: chain tasks
taskRunner("Download File", 1000, () => {
  taskRunner("Process File", 1000, () => {
    taskRunner("Upload File", 1000, () => {
      console.log("All tasks done");
    });
  });
});
