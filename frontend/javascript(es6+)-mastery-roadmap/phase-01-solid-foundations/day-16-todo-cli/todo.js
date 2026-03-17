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
} 