const command = process.argv[2];
const value = process.argv[3];

console.log(command, value);

// Task storage
let tasks = [];

if (command === "add") {
  const task = {
    text: value,
    completed: false,
  };
  tasks.push(task);
  console.log(`Task added: ${value}`);
}

// List Tasks
if (command === "list") {
  console.log("Your Tasks:");

  for (let i = 0; i < tasks.length; i++) {
    const status = tasks[i].completed ? "✅" : "❌";
    console.log(`${i + 1}. ${tasks[i].text} ${status}`);
  }
}

// Mark as Done
if (command === "done") {
  const index = value - 1;

  if (tasks[index]) {
    tasks[index].completed = true;
    console.log(`Task ${value} marked as done`);
  } else {
    console.log("Task not found");
  }
}

// Delete task
if (command === "delete") {
  const index = value - 1;

  if (tasks[index]) {
    tasks.splice(index, 1);
    console.log(`Task ${value} deleted`);
  } else {
    console.log("Task not found");
  }
}
