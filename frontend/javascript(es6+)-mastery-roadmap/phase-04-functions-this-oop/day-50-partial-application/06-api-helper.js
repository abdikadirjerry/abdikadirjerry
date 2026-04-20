// 06-api-helper.js

function request(method, url, data) {
  console.log(method, url, data);
}

function partial(fn, ...fixed) {
  return (...rest) => fn(...fixed, ...rest);
}

const get = partial(request, "GET");
const post = partial(request, "POST");

get("/users");
post("/users", { name: "Najio" });

/*
🧠 Clean API design
*/
