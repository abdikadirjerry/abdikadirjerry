const command = process.argv[2];
const value = process.argv[3];

const tasks = [];

if (command === "add") {
  const task = {
    text: value,
    completed: false,
  };
  tasks.push(task);
  console.log(`Task added: ${value}`);
} else if (command === "list") {
  console.log("Your Tasks:");

  for (let i = 0; i < tasks.length; i++) {
    const status = tasks[i].completed ? "✅" : "❌";
    console.log(`${i + 1}. ${tasks[i].text} ${status}`);
  }
} else if (command === "done") {
  const index = value - 1;
  if (tasks[index]) {
    tasks[index].completed = true;
    console.log(`Task ${value} marked as done`);
  } else {
    console.log("Task not found");
  }
} 