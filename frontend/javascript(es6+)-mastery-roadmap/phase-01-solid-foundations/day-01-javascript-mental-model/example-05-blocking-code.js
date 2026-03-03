function heavyTask() {
  for (let i = 0; i < 1e9; i++) {}
  console.log("Heavy task done");
}

console.log("Start");
heavyTask();
console.log("End");