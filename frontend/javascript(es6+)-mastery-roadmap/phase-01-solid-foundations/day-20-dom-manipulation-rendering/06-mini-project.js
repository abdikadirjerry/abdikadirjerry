const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const total = document.getElementById("totalTasks");

let count = 0;

// update UI
function updateCount() {
  total.textContent = `Total: ${count}`;
}

// 🟢 Add Task
addBtn.onclick = () => {
  const value = input.value.trim();
  if (!value) return;

  const li = document.createElement("li");
  li.textContent = value;

  list.appendChild(li);
  input.value = "";

  count++;
  updateCount();
};

// 🔥 Event Delegation (IMPORTANT)
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    // 🔴 Toggle done
    e.target.classList.toggle("done");

    // 🟡 Delete on double click
    e.target.addEventListener("dblclick", () => {
      e.target.remove();
      count--;
      updateCount();
    });
  }
});
