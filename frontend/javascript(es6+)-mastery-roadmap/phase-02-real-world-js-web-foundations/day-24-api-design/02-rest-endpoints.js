// Challenge — REST Endpoint Simulation

function handleRequest(method) {
  if (method === "GET") console.log("Fetch data");
  else if (method === "POST") console.log("Create data");
  else if (method === "PUT") console.log("Update data");
  else if (method === "DELETE") console.log("Delete data");
}

handleRequest("GET");
handleRequest("POST");
