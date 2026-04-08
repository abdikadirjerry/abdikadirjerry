// Production Pattern

function fakeApi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ message: "Server error", code: 500 });
    }, 1000);
  });
}

function logError(error) {
  console.error("Logging error:", error);
}

function formatError(error) {
  return {
    message: error.message || "Unknown error",
    code: error.code || 400,
  };
}

async function fetchData() {
  try {
    const data = await fakeApi();
    return data;
  } catch (error) {
    logError(error);
    throw formatError(error);
  }
}

fetchData()
  .then(console.log)
  .catch((err) => {
    console.error("Final Error:", err);
  });
