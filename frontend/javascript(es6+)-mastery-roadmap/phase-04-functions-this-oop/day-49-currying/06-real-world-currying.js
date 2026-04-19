// 06-real-world-currying.js

const discount = (rate) => (price) => price - price * rate;

const tenPercent = discount(0.1);
const twentyPercent = discount(0.2);

console.log(tenPercent(100)); // 90
console.log(twentyPercent(100)); // 80

/*
🧠 Real Use:
Reusable business logic
*/
