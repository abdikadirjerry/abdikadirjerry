const inventory = [
  { name: "Apple", stock: 10, price: 2 },
  { name: "Banana", stock: 5, price: 1 },
  { name: "Orange", stock: 0, price: 3 },
  { name: "Mango", stock: 8, price: 4 },
];

let total = 0;
let inStock = 0;
let outStock = 0;
let totalInventory = 0;
let available = [];

for (let i = 0; i < inventory.length; i++) {
  total++;

  if (inventory[i].stock > 0) {
    inStock++;
    available.push(inventory[i].name);
  } else {
    outStock++;
  }

  totalInventory += inventory[i].stock * inventory[i].price;
}

console.log(`Total Products: ${total}`);
console.log(`In Stock: ${inStock}`);
console.log(`Out of Stock: ${outStock}`);
console.log(`Total Inventory Value: ${totalInventory}`);
console.log("Available Products:")

for (let i = 0; i < available.length; i++) {
  console.log(` -${available[i]}`);
}
