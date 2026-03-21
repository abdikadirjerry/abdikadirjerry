const input = document.getElementById("taskInput");
const btn = document.getElementById("addTask");
const list = document.getElementById("list");

// 🟢 Add Task
btn.onclick = () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  list.appendChild(li);
  input.value = "";
};

// 🟡 + 🔴 Delete & Toggle
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    // toggle done
    e.target.classList.toggle("done");

    // delete on double click logic (real-world feel)
    e.target.addEventListener("dblclick", () => {
      e.target.remove();
    });
  }
});
