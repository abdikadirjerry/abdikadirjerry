// 08-real-world-utilities.js

function format(currency, amount) {
  return `${currency} ${amount}`;
}

const partial =
  (fn, ...fixed) =>
  (...rest) =>
    fn(...fixed, ...rest);

const usd = partial(format, "$");
const eur = partial(format, "€");

console.log(usd(100)); // $ 100
console.log(eur(100)); // € 100

/*
🧠 UI / formatting reuse
*/
