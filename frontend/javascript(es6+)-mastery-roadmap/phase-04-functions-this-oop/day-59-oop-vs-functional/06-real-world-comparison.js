// 06-real-world-comparison.js

// OOP
class Cart {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }
}

// Functional
function addItem(cart, item) {
  return [...cart, item];
}

let cart = [];

cart = addItem(cart, "Phone");
cart = addItem(cart, "Laptop");

console.log(cart);
