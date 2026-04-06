// Promise.allSettled Example

const promises = [
  Promise.resolve("Success 1"),
  Promise.reject("Error occurred"),
  Promise.resolve("Success 2"),
];

Promise.allSettled(promises).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Value:", result.value);
    } else {
      console.log("Error:", result.reason);
    }
  });
});
