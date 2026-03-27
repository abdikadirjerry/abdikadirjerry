// Day 26 — HTTP Methods Practice

// GET Request
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    console.log("GET Posts:", data.slice(0, 3));
  })
  .catch((err) => console.log("GET Error:", err));

// POST Request
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "My Post",
    body: "Learning HTTP",
    userId: 1,
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log("POST Result:", data);
  })
  .catch((err) => console.log("POST Error:", err));

// PUT Request
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    title: "Updated Title",
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log("PUT Result:", data);
  });

// DELETE Request
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
}).then((res) => {
  console.log("DELETE Status:", res.status);
});
