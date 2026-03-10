// Problem 10 — Number Pyramid
let height = 5;

for (let i = 1; i <= height; i++) {
    let row = "";
    
    for (let j = 1; j <= i; j++) {
        row += i; 
    }
    
    console.log(row);
}