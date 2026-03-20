// 🟢 Easy — Button Click
const btn1 = document.getElementById("btn");

btn1.addEventListener("click", () => {
  console.log("Button clicked");
});

// 🟡 Intermediate — Change Text
const msg = document.getElementById("msg");
const btn2 = document.getElementById("btn");

btn2.addEventListener("click", () => {
  msg.textContent = "You clicked me!";
});

// 🔴 Advanced — Toggle Text
let isOn = false;

btn2.addEventListener("click", () => {
  if (isOn) {
    msg.textContent = "OFF";
  } else {
    msg.textContent = "ON";
  }
  isOn = !isOn;
});