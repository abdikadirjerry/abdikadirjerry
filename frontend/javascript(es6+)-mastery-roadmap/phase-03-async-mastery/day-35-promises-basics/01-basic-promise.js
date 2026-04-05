// Challenge 1 — Basic Promise

function delayPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
}

delayPromise().then((result) => console.log(result));
