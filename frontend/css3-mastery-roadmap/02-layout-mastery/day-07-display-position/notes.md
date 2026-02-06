# CSS Display, Positioning & Stacking Context — Notes

---

## 1. Display

Controls how elements participate in layout.

### Common values:
- block
- inline
- inline-block
- none

### block
- Full width
- New line

### inline
- Content width
- No width/height
- No vertical margin
# Examples:
<span>, <a>, <strong>

* Use for:
- Text styling
- Inline links

### inline-block
- Inline behavior
- Supports width & height

* Use for:
- Buttons
- Badges
- Small UI components

### none
- Removed from layout

* Used for:
- Toggles
- Modals
- Menus
---

## 2. Positioning

### static
- Default
- No offset allowed

### relative
- Stays in flow
- Can be offset
- Creates positioning context

### absolute
- Removed from flow
- Positioned relative to nearest positioned ancestor

### fixed
- Relative to viewport
- Stays on scroll

### sticky
- Relative then fixed
- Stops at parent boundary

---

## 3. z-index

Controls stacking order.

Rules:
- Works only on positioned elements
- Higher value appears on top

---

## 4. Stacking Context

A stacking context is an isolated layering environment.

### Created by:
- position + z-index
- opacity < 1
- transform
- filter
- isolation: isolate

Children cannot escape their stacking context.

---

## 5. Common Patterns

### Sticky Header
```css
header {
  position: sticky;
  top: 0;
  z-index: 100;
}
Modal
.modal {
  position: fixed;
  inset: 0;
  z-index: 999;
}
Card Badge
.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}
6. Common Mistakes
Using z-index without position

Too many z-index values

Ignoring stacking context

Using absolute without relative parent

7. 20% That Gives 80%
display controls layout behavior

relative anchors absolute children

absolute removes element from flow

fixed sticks to viewport

sticky is relative + fixed

z-index works inside stacking contexts only