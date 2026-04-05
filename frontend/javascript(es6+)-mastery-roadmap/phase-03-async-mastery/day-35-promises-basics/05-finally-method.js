// Challenge 5 — finally()

function testFinally() {
  return Promise.resolve("Success")
    .then(console.log)
    .catch(console.error)
    .finally(() => {
      console.log("Operation finished");
    });
}

testFinally();
