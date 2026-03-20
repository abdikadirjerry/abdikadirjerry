const parent = document.getElementById("parent");
const child = document.getElementById("child");

// 🟢 Easy — Bubbling
parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});

// 🟡 Intermediate — Stop Propagation
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked with stopPropagation");
});

// 🔴 Advanced — Capturing Mode
parent.addEventListener(
  "click",
  () => {
    console.log("Parent capturing");
  },
  true,
);

child.addEventListener(
  "click",
  () => {
    console.log("Child capturing");
  },
  true,
);
