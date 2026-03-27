// Day 26 — Headers Practice

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",

  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer myFakeToken123",
  },

  body: JSON.stringify({
    title: "Headers Practice",
    body: "Testing Content-Type",
    userId: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log("Headers Sent Successfully:", data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
