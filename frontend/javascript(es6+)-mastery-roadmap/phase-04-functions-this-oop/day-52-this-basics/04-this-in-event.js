// 04-this-in-event.js

const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this); // button element
});

button.addEventListener("click", () => {
  console.log(this); // not button
});
