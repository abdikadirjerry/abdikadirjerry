# CSS Flexbox Fundamentals — Notes

---

## 1. What Flexbox Is

Flexbox is a one-dimensional layout system.
It aligns and distributes space along one axis at a time.

Used for:
- Navbars
- Buttons
- Cards
- Toolbars
- Centering elements

---

## 2. Flex Container & Items

```css
.container {
  display: flex;
}
Container becomes flex container

Direct children become flex items

3. Axes
Default:

flex-direction: row;
Main axis → horizontal

Cross axis → vertical

If column:

Main axis → vertical

Cross axis → horizontal

4. Main Axis Alignment
justify-content: flex-start | center | space-between | space-around | space-evenly;
Controls spacing along the main axis.

5. Cross Axis Alignment
align-items: stretch | center | flex-start | flex-end;
Controls alignment across the cross axis.

6. Gap
gap: 20px;
Adds space between items.
Preferred over margins.

7. Direction & Wrapping
flex-direction: row | column;
flex-wrap: wrap;
flex-flow: row wrap;
8. Flex Item Control
flex-grow
flex-shrink
flex-basis
Shorthand:

flex: 1;
flex: 0 0 200px;
9. align-self
align-self: center;
Overrides container alignment for one item.

10. Common Patterns
Centering
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
Navbar
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
11. Common Mistakes
Ignoring axes

Overusing margins

Forgetting wrap

Nesting flex unnecessarily

12. 20% That Gives 80%
display: flex

main axis vs cross axis

justify-content

align-items

gap

flex: 1

