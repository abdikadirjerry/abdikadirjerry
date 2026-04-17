// 07-reusable-logic.js

function createLogger(type) {
  return function (message) {
    console.log(`[${type}] ${message}`);
  };
}

const errorLogger = createLogger("ERROR");
const infoLogger = createLogger("INFO");

errorLogger("Something failed");
infoLogger("All good");

/*
🧠 HOF makes reusable patterns
*/
