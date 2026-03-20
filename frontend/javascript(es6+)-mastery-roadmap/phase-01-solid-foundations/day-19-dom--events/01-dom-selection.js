// 🟢 Easy — Select & Log Element
const title = document.getElementById("title");
console.log(title.textContent);

// 🟡 Intermediate — Multiple Elements
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  console.log(item.textContent);
});

// 🔴 Advanced — Modify Elements
const texts = document.querySelectorAll(".text");

texts.forEach((el) => {
  el.textContent = el.textContent.toUpperCase();
});
