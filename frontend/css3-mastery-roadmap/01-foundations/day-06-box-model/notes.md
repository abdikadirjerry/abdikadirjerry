# CSS Box Model, Overflow & Scroll — Complete Notes

---

## 1. Core Mental Model

In CSS, **everything is a box**.

Every HTML element is treated as a rectangular box by the browser.  
Understanding how this box is built and controlled is essential for layouts.

The box has **4 layers (inside → outside):**

1. Content
2. Padding
3. Border
4. Margin

Content → Padding → Border → Margin


---

## 2. Content

The **content** is the actual element data:
- Text
- Image
- Video
- Form controls

Controlled mainly by:
```css
width
height
Example:

.box {
  width: 200px;
  height: 100px;
}
3. Padding
Padding is space inside the element, between content and border.

Key points:

Padding increases the clickable area

Background color applies to padding

Padding adds to element size (by default)

Example:

.box {
  padding: 20px;
}
Individual sides:

padding-top
padding-right
padding-bottom
padding-left
4. Border
Border wraps around content + padding.

Key points:

Border adds to element size (default behavior)

Can have width, style, and color

Example:

.box {
  border: 2px solid black;
}
5. Margin
Margin is space outside the element.

Key points:

Creates distance between elements

No background color

Vertical margins can collapse

Example:

.box {
  margin: 30px;
}
6. Default Box Size Calculation
By default, CSS uses:

box-sizing: content-box;
That means:

Actual width = width + padding + border
Example:

width: 200px;
padding: 20px;
border: 10px solid;
Actual width = 260px

7. box-sizing: border-box (Best Practice)
With border-box, padding and border are included inside width/height.

* {
  box-sizing: border-box;
}
Benefits:

Predictable layouts

Easier responsive design

Industry standard

8. Margin Collapsing
Margin collapsing happens when vertical margins touch.

Rules:

Only vertical margins collapse

Larger margin wins

Padding and borders stop collapsing

Example:

h1 { margin-bottom: 40px; }
p  { margin-top: 20px; }
Final space = 40px

9. Overflow (Content Control)
Overflow controls what happens when content exceeds its box.

Property:

overflow
Values:

visible   /* default */
hidden
scroll
auto
10. Overflow Values Explained
overflow: visible
Content spills outside the box

overflow: hidden
Extra content is clipped

Used for image cropping and cards

overflow: hidden;
overflow: scroll
Always shows scrollbars

overflow: auto (recommended)
Scrollbars appear only when needed

overflow: auto;
11. Axis-Based Overflow
Control overflow per direction:

overflow-x: hidden;
overflow-y: auto;
Common use cases:

Sidebars

Chat windows

Dashboards

Modals

12. Scrollable Containers
Create scrollable areas without scrolling the whole page.

Example:

.content {
  max-height: 400px;
  overflow-y: auto;
}
13. Scroll Behavior (Modern CSS)
Smooth scrolling:

html {
  scroll-behavior: smooth;
}
Scroll snapping (basic):

scroll-snap-type: y mandatory;
scroll-snap-align: start;
14. Real-World UI Examples
Card Component
.card {
  width: 300px;
  padding: 20px;
  border-radius: 12px;
  overflow: hidden;
}
Sidebar
.sidebar {
  height: 100vh;
  overflow-y: auto;
}
Modal Content
.modal-content {
  max-height: 80vh;
  overflow-y: auto;
}
15. Common Beginner Mistakes
Forgetting box-sizing: border-box

Using margin instead of padding for inner spacing

Breaking scroll with overflow: hidden

Not understanding actual element size

16. The 20% That Gives 80% Understanding
Everything is a box

Box = content + padding + border + margin

Always use box-sizing: border-box

Padding is for inside spacing

Margin is for outside spacing

Use overflow: auto for scroll control