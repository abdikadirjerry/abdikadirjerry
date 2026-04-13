let tasks = [];

// simulate delay + random failure
function simulate(response) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 1000 + 500;
    const fail = Math.random() < 0.2;

    setTimeout(() => {
      fail ? reject("API Error ❌") : resolve(response);
    }, delay);
  });
}

export function getTasks() {
  return simulate([...tasks]);
}

export function addTask(task) {
  tasks.push(task);
  return simulate(task);
}

export function deleteTask(index) {
  tasks.splice(index, 1);
  return simulate(true);
}
