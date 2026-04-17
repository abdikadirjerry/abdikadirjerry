// 02-callbacks-deep.js

function doTask(taskName, callback) {
  console.log(`Starting ${taskName}`);

  callback();

  console.log(`Finished ${taskName}`);
}

doTask("Learning HOF", () => {
  console.log("Executing callback...");
});

/*
🧠 Callback = function passed to another function
*/
