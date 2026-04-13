import { getTasks, addTask, deleteTask } from "./api.js";
import { renderTasks, setStatus } from "./ui.js";
import { retry } from "./utils.js";

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

let currentTasks = [];

// Load tasks
async function loadTasks() {
  setStatus("Loading...");

  try {
    currentTasks = await retry(() => getTasks());
    renderTasks(currentTasks, list, handleDelete);
    setStatus("Loaded ✅");
  } catch (err) {
    setStatus("Failed to load ❌");
  }
}

// Add task
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const value = input.value.trim();
  if (!value) return;

  setStatus("Adding...");

  try {
    await retry(() => addTask(value));
    input.value = "";
    loadTasks();
  } catch {
    setStatus("Add failed ❌");
  }
});

// Delete task
async function handleDelete(index) {
  setStatus("Deleting...");

  try {
    await retry(() => deleteTask(index));
    loadTasks();
  } catch {
    setStatus("Delete failed ❌");
  }
}

// init
loadTasks();
