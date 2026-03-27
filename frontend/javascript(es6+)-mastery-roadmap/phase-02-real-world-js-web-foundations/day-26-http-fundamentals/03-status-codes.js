// Day 26 — Status Codes Practice

function checkStatus(status) {
  if (status === 200) {
    console.log("Success ✅");
  } else if (status === 201) {
    console.log("Created 🆕");
  } else if (status === 400) {
    console.log("Bad Request ⚠️");
  } else if (status === 404) {
    console.log("Not Found 🔍");
  } else if (status === 500) {
    console.log("Server Error 💥");
  } else {
    console.log("Unknown Status");
  }
}

// Test Cases
checkStatus(200);
checkStatus(201);
checkStatus(400);
checkStatus(404);
checkStatus(500);
