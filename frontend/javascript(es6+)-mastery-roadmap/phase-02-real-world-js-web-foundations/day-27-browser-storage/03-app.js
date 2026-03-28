// DOM Elements
const nameInput = document.getElementById("nameInput");
const saveNameBtn = document.getElementById("saveNameBtn");
const nameDisplay = document.getElementById("nameDisplay");

const msgInput = document.getElementById("msgInput");
const saveMsgBtn = document.getElementById("saveMsgBtn");
const msgDisplay = document.getElementById("msgDisplay");

const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

const themeBtn = document.getElementById("themeBtn");

// Load initial data
function init() {
  const savedName = getName();
  if (savedName) nameDisplay.textContent = savedName;

  const savedMsg = getMessage();
  if (savedMsg) msgDisplay.textContent = savedMsg;

  const savedTodos = getTodos();
  renderTodos(savedTodos);

  const theme = getTheme();
  if (theme === "dark") {
    document.body.classList.add("dark");
  }
}

init();

// Name Save
saveNameBtn.addEventListener("click", () => {
  const name = nameInput.value;
  saveName(name);
  nameDisplay.textContent = name;
});

// Message Save
saveMsgBtn.addEventListener("click", () => {
  const msg = msgInput.value;
  saveMessage(msg);
  msgDisplay.textContent = msg;
});

// Todo Add
addTodoBtn.addEventListener("click", () => {
  const task = todoInput.value;

  const todos = getTodos();
  todos.push(task);

  saveTodos(todos);
  renderTodos(todos);

  todoInput.value = "";
});

// Render Todos
function renderTodos(todos) {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = createElement("li", todo);

    li.addEventListener("click", () => {
      deleteTodo(index);
    });

    todoList.appendChild(li);
  });
}

// Delete Todo
function deleteTodo(index) {
  const todos = getTodos();
  todos.splice(index, 1);
  saveTodos(todos);
  renderTodos(todos);
}

// Theme Toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const theme = document.body.classList.contains("dark") ? "dark" : "light";

  saveTheme(theme);
});
