// Parallel Requests

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User"), 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Posts"), 1500);
  });
}

function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Comments"), 500);
  });
}

async function run() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments(),
  ]);

  console.log(user, posts, comments);
}

run();
