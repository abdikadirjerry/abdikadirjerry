// Global Error Handler

function handleError(error) {
  console.error("Global Error Handler:", error.message || error);
}

async function riskyOperation() {
  throw new Error("Something broke");
}

async function run() {
  try {
    await riskyOperation();
  } catch (error) {
    handleError(error);
  }
}

run();
