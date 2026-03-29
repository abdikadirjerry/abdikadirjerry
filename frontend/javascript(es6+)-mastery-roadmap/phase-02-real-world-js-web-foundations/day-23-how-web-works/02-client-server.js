// Challenge — Client vs Server Simulation

function clientRequest() {
  console.log("Client: Sending request...");
  serverResponse();
}

function serverResponse() {
  console.log("Server: Processing request...");
  console.log("Server: Sending data back...");
}

clientRequest();
