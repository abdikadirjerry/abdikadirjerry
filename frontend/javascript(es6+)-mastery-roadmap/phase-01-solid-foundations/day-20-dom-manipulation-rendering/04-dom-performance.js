const container = document.getElementById("container");

// 🟢 Slow way (reflow many times)
document.getElementById("normal").onclick = () => {
  container.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.textContent = "Item " + i;
    container.appendChild(div);
  }
};

// 🟡 Fast way using fragment
document.getElementById("optimized").onclick = () => {
  container.innerHTML = "";

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.textContent = "Item " + i;
    fragment.appendChild(div);
  }

  container.appendChild(fragment);
};

/*
🔴 Explanation:
- appendChild in loop → many reflows (slow)
- fragment → builds in memory → 1 render (fast)
*/
