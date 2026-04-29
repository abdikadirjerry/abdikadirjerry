// 05-composition-vs-inheritance.js

// Composition
function canEat(state) {
  return {
    eat: () => console.log(state.name + " is eating"),
  };
}

function canWalk(state) {
  return {
    walk: () => console.log(state.name + " is walking"),
  };
}

function createPerson(name) {
  const state = { name };

  return {
    ...state,
    ...canEat(state),
    ...canWalk(state),
  };
}

const person = createPerson("Najio");

person.eat();
person.walk();
