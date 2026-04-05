// Challenge 4 — Error Handling

Promise.resolve()
  .then(() => {
    throw new Error("Something went wrong");
  })
  .catch((error) => console.log(error.message));
