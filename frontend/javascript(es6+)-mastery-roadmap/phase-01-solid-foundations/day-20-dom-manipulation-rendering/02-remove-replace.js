// 🟢 Remove element
document.getElementById("removeText").onclick = () => {
  document.getElementById("text").remove();
};

// 🟡 Remove last item
document.getElementById("removeLast").onclick = () => {
  const list = document.getElementById("list");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
};

// 🔴 Replace element
document.getElementById("replace").onclick = () => {
  const oldEl = document.getElementById("title");
  const newEl = document.createElement("h2");
  newEl.textContent = "Replaced!";

  oldEl.parentNode.replaceChild(newEl, oldEl);
};
