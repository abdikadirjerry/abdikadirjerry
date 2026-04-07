// Real World Simulation

function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Ali" });
    }, 1000);
  });
}

function getUserProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId, profile: "Premium User" });
    }, 1000);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post1", "Post2"]);
    }, 1000);
  });
}

async function runApp() {
  try {
    const user = await loginUser();

    const [profile, posts] = await Promise.all([
      getUserProfile(user.id),
      getUserPosts(user.id),
    ]);

    console.log(user);
    console.log(profile);
    console.log(posts);
  } catch (error) {
    console.error(error);
  }
}

runApp();
