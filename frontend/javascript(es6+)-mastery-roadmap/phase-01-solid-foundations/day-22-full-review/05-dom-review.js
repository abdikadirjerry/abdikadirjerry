const btn = document.getElementById("btn");
const list = document.getElementById("list");

// Add item
btn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = "New Item";

  list.appendChild(li);
});

// Delete + Toggle
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    // Toggle line-through
    e.target.classList.toggle("done");

    // Remove item on double click
    e.target.addEventListener("dblclick", function () {
      e.target.remove();
    });
  }
});
