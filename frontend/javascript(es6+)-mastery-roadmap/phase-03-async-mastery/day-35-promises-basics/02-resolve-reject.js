// Challenge 2 — Resolve vs Reject

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Number is greater than 10");
    } else {
      reject("Number is too small");
    }
  });
}

checkNumber(15).then(console.log).catch(console.error);
