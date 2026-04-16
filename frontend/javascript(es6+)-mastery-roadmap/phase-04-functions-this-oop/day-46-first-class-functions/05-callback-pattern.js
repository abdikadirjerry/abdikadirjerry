// 05-callback-pattern.js

function fetchData(callback) {
  setTimeout(() => {
    const data = "Server Data";
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log(result);
});

/*
🧠 Concept:
Callbacks are used for async operations
*/
