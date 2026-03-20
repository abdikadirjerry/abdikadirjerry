const list = document.getElementById("list");

// 🟢 Easy — Click List Item
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

// 🟡 Intermediate — Dynamic Items
const newItem = document.createElement("li");
newItem.textContent = "Item 3";
list.appendChild(newItem);

// 🔴 Advanced — Delete Item
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
