// Challenge — Full Data Flow

function appFlow(input) {
  console.log("UI Input:", input);

  const state = input;

  console.log("State:", state);

  console.log("Sending to API...");

  const response = { message: "Success", data: state };

  console.log("Response:", response);

  console.log("Update UI with response");
}

appFlow("New Task");
