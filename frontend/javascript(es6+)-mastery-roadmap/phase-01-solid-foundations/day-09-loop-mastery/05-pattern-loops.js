
// 17. Print star line
let line = "";
for (let i = 1; i <= 5; i++) {
    line += "*";
}
console.log(line);

// 18. Print star line
let triangle = "";
for (let i = 1; i <= 5; i++) {
  triangle += "*";
  console.log(triangle);
}

// 19. Print reverse triangle
let rows = 5;

for (let i = rows; i >= 1; i--) {
    let starLine = "";
    
    for (let j = 1; j <= i; j++) {
        starLine += "*";
    }
    
    console.log(starLine);
}
// 20. Print number triangle
let reverseTriangle = "";

for (let i = 1; i <= 5; i++) {
    reverseTriangle += i;
    console.log(reverseTriangle);
}
