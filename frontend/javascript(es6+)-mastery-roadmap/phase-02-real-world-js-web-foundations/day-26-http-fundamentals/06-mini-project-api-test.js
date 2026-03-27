// Day 26 — Mini API Tester

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log("Status:", res.status);

      return res.json();
    })

    .then((data) => {
      console.log("First 5 Posts:");

      data.slice(0, 5).forEach((post) => {
        console.log("ID:", post.id, "Title:", post.title);
      });
    })

    .catch((error) => {
      console.log("Error:", error);
    });
}

getPosts();
