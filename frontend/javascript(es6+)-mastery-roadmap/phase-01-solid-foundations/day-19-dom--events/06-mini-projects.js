// 🔥 Project 1 — Button Counter
const btn = document.getElementById("btn");
const count = document.getElementById("count");

let counter = 0;

btn.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
});

// 🔥 Project 2 — Live Username Preview
const username = document.getElementById("username");
const preview = document.getElementById("preview");

username.addEventListener("input", (e) => {
  preview.textContent = e.target.value;
});

// 🔥 Project 3 — Todo List
const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const listEl = document.getElementById("list");

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = taskInput.value;
  listEl.appendChild(li);
  taskInput.value = "";
});

// Event delegation for todo actions
listEl.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
  }
});
