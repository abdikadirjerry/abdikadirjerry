function getUser(callback) {
  setTimeout(() => {
    console.log("User fetched");
    callback({ id: 1, name: "Ali" });
  }, 1000);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    console.log("Posts fetched");
    callback([
      { id: 101, title: "Post 1" },
      { id: 102, title: "Post 2" },
    ]);
  }, 1000);
}

function getComments(postId, callback) {
  setTimeout(() => {
    console.log("Comments fetched");
    callback([{ id: 1001, text: "Comment 1" }]);
  }, 1000);
}

// Chaining callbacks
getUser((user) => {
  getPosts(user.id, (posts) => {
    getComments(posts[0].id, (comments) => {
      console.log("All data loaded");
    });
  });
});
