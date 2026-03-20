// 🟢 Easy — Live Input
const input1 = document.getElementById("input");

input1.addEventListener("input", (e) => {
  console.log(e.target.value);
});

// 🟡 Intermediate — Show Output
const input2 = document.getElementById("input");
const output = document.getElementById("output");

input2.addEventListener("input", (e) => {
  output.textContent = e.target.value;
});

// 🔴 Advanced — Character Counter
input2.addEventListener("input", (e) => {
  const length = e.target.value.length;
  output.textContent = `You typed: ${length} characters`;
});
