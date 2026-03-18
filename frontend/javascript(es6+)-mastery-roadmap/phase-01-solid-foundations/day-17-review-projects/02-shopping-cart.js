const cart = [
  { name: "Phone", price: 500 },
  { name: "Laptop", price: 1000 },
  { name: "Headphones", price: 200 },
];

let total = 0;

let mostExpensive = cart[0];
let cheapest = cart[0];

for (let i = 0; i < cart.length; i++) {
  total += cart[i].price;

  if (cart[i].price > mostExpensive.price) {
    mostExpensive = cart[i];
  }

  if (cart[i].price < cheapest.price) {
    cheapest = cart[i];
  }
}

console.log(`Total Price: ${total}`);
console.log(`Most Expensive: ${mostExpensive.name}`);
console.log(`Cheapest: ${cheapest.name}`);