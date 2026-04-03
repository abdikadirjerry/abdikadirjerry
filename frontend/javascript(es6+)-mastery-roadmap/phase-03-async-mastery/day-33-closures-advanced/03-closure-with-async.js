"use strict";

/*
03 — Closure + Async Behavior
*/

function fetchDataSimulator(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data for ID: ${id}`);
    }, 1000);
  });
}

function processData() {
  let results = [];

  for (let i = 1; i <= 3; i++) {
    fetchDataSimulator(i).then((data) => {
      results.push(data);
      console.log("Received:", data);
      console.log("Current Results:", results);
    });
  }
}

processData();

/*
Closure keeps 'results' alive across async calls
*/
