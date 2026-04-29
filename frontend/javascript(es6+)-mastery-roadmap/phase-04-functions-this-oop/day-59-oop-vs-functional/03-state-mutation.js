// 03-state-mutation.js

const user = {
  name: "Najio",
  score: 0,
};

function increaseScore(obj) {
  obj.score += 10;
}

increaseScore(user);

console.log(user.score);
