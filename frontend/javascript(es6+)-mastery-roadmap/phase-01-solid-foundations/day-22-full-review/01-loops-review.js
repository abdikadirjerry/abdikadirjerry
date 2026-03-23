// challenge 1
const numbers = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(`The Sum Number is ${sum}`);

// challenge 2
const number = [5, 10, 2, 99, 4];
let largest = number[0];

for (let i = 0; i < number.length; i++) {
  if (number[i] > largest) {
    largest = number[i];
  }
}
console.log(`Largest Number is ${largest}`);

// challenge 3
for (let i = 1; i <= 5; i++) {
  let star = "";
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(star);
}

// challenge 4
for (let i = 5; i >= 1; i--) {
  let reverseStar = "";
  for (let j = 1; j <= i; j++) {
    reverseStar += "*";
  }
  console.log(reverseStar);
}

// challenge 5
const str = "developer";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(`The reverse of ${str} is ${reversed}`);

// challenge 6
const word = "hello world";
let oneLine = "";

for (let i = 0; i < word.length; i++) {
  oneLine += word[i];
}
console.log(oneLine);

// challenge 7
const words = ["cat", "elephant", "dog", "tiger"];
let longest = "";

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}
console.log(`The Longest word is ${longest}`);

// challenge 8
let wrd = "javascript";
let count = 0;

for (let i = 0; i < wrd.length; i++) {
  if (
    wrd[i] === "a" ||
    wrd[i] === "e" ||
    wrd[i] === "i" ||
    wrd[i] === "o" ||
    wrd[i] === "u"
  ) {
    count++;
  }
}
console.log(`The Count Number of Vowels in ${wrd} are ${count}`);

// challenge 9
const cart = [
  { name: "Laptop", price: 1200, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
  { name: "Keyboard", price: 75, quantity: 1 },
  { name: "Monitor", price: 300, quantity: 2 },
];

let totalCost = 0;
let maxTotalPrice = 0;
let mostExpensiveItemName = "";
let countExpensiveItems = 0;
let formattedItems = [];
let sumPrices = 0;

for (let i = 0; i < cart.length; i++) {
  let item = cart[i];
  let itemTotal = item.price * item.quantity;

  // Total Cost
  totalCost += itemTotal;

  // Most Expensive Item (by total price)
  if (itemTotal > maxTotalPrice) {
    maxTotalPrice = itemTotal;
    mostExpensiveItemName = item.name;
  }

  // Count items with price > 100
  if (item.price > 100) {
    countExpensiveItems++;
  }

  // Formatted array
  formattedItems.push(`${item.name} x${item.quantity} = ${itemTotal}`);

  // sum of prices
  sumPrices += item.price;
}

// Average price
let averagePrice = sumPrices / cart.length;

// Output
console.log("Formatted Items:", formattedItems);
console.log("Total Cost:", totalCost);
console.log("Most Expensive Item:", mostExpensiveItemName, "-", maxTotalPrice);
console.log("Items with price > 100:", countExpensiveItems);
console.log("Average Price:", averagePrice);
