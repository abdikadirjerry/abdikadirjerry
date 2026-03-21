const box = document.getElementById("box");

// 🟢 Repaint
document.getElementById("color").onclick = () => {
  box.style.backgroundColor = "green";
};

// 🟡 Reflow + repaint
document.getElementById("size").onclick = () => {
  box.style.width = "200px";
  box.style.height = "200px";
};

// 🔴 Layout shift
document.getElementById("toggle").onclick = () => {
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
};
