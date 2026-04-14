// 08-module-structure-project.js

// Simulating modular structure

// api.js
export function fetchData() {
  return Promise.resolve("Data");
}

// ui.js
export function render(data) {
  console.log("Render:", data);
}

// app.js
import { fetchData } from "./api.js";
import { render } from "./ui.js";

async function init() {
  const data = await fetchData();
  render(data);
}

init();

/*
🧠 Concept:
- Separation of concerns
- Clean architecture
*/
