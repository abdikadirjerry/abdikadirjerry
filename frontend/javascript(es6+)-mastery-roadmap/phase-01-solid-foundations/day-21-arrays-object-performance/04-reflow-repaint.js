//  Challenge 1 — Identify Repaint
// div.style.color = "red";
/* EXPLANATION: This causes a Repaint. Changing visibility or color 
  doesn't affect the layout/geometry of the elements, so the 
  browser only "repaints" the pixels.
*/

//  Challenge 2 — Identify Reflow
// div.style.width = "200px";
/* EXPLANATION: This causes a Reflow. Changing dimensions (width, height, margin) 
  forces the browser to recalculate the position and geometry of all 
  elements on the page. Reflow is more expensive than Repaint.
*/

//  Challenge 3 — Optimize DOM Updates
// Bad: Updating DOM 100 times inside a loop
const container = document.getElementById("container");

// Better:
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.textContent = `Item ${i}`;
  fragment.appendChild(div);
}
container.appendChild(fragment);

/* DIFFERENCE: DocumentFragment is an "off-screen" DOM node. 
  We add 100 items to the fragment (0 reflows) and then 
  append the fragment to the real DOM once (1 reflow).
*/
