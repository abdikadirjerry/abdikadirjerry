// Problem 3
Promise.resolve("Start")
  .then((res) => {
    console.log(res);
    return "Next";
  })
  .then((res) => {
    console.log(res);
    throw new Error("Error!");
  })
  .catch((err) => {
    console.log(err.message);
  });

// ❓ Output?

// Problem 4
Promise.resolve()
  .then(() => {
    console.log("A");
  })
  .then(() => {
    return Promise.resolve("B");
  })
  .then((res) => {
    console.log(res);
  });

// ❓ Output?
