export function renderTasks(tasks, listEl, deleteHandler) {
  listEl.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const btn = document.createElement("span");
    btn.textContent = "❌";
    btn.className = "delete-btn";

    btn.addEventListener("click", () => deleteHandler(index));

    li.appendChild(btn);
    listEl.appendChild(li);
  });
}

export function setStatus(message) {
  document.getElementById("status").textContent = message;
}
