// Temporal Dead Zone Example

console.log(score);
// This would cause an error because of TDZ

let score = 100;

console.log(score);

// Another TDZ example

{
  // console.log(price); // TDZ error
  let price = 50;
  console.log(price);
}
