// 05-reusable-logger.js

function logger(type, message) {
  console.log(`[${type}] ${message}`);
}

function partial(fn, ...fixed) {
  return (...rest) => fn(...fixed, ...rest);
}

const errorLogger = partial(logger, "ERROR");
const infoLogger = partial(logger, "INFO");

errorLogger("Something went wrong");
infoLogger("System running");

/*
🧠 Real-world reuse
*/
