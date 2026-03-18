const cart = [
  { name: "Phone", price: 500 },
  { name: "Laptop", price: 1000 },
  { name: "Headphones", price: 200 },
];

let total = 0;
let expensive = cart[0].price;
let cheapest = cart[0].price;

for (let i = 0; i < cart.length; i++) {
  total += cart[i].price;

  if (cart[i].price > expensive) {
    expensive = cart[i].name;
  }

  if (cart[i].price < cheapest) {
    cheapest = cart[i].name;
  }
}

console.log(`Total price: ${total}`);
console.log(`Most expensive: ${expensive}`);
console.log(`Cheapest: ${cheapest}`);
