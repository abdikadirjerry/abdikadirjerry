const btn = document.getElementById("add");
const container = document.getElementById("container");
const list = document.getElementById("list");

let count = 1;

btn.addEventListener("click", () => {
  // 🟢 Create Paragraph
  const p = document.createElement("p");
  p.textContent = "Hello World";
  container.appendChild(p);

  // 🟡 Create Multiple Items
  const li = document.createElement("li");
  li.textContent = `Item ${count++}`;
  list.appendChild(li);

  // 🔴 Styled Element
  const box = document.createElement("div");
  box.className = "box";
  box.textContent = "New Box";

  box.style.background = "blue";
  box.style.color = "white";
  box.style.padding = "10px";

  container.appendChild(box);
});
