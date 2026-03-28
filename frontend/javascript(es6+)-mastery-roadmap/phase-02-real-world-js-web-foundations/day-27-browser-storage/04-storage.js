// Storage Layer

// Name
function saveName(name) {
  localStorage.setItem("username", name);
}

function getName() {
  return localStorage.getItem("username");
}

// Message (sessionStorage)
function saveMessage(msg) {
  sessionStorage.setItem("message", msg);
}

function getMessage() {
  return sessionStorage.getItem("message");
}

// Todo List
function saveTodos(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
}

// Theme
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

function getTheme() {
  return localStorage.getItem("theme");
}
