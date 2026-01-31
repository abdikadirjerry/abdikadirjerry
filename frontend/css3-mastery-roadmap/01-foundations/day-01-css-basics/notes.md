📘 Day 1 — CSS Basics & Mental Model

(From beginner → intermediate → advanced thinking)

STEP 1: What CSS Is (FOUNDATION)
Beginner level

CSS (Cascading Style Sheets) controls how HTML looks.

HTML = structure (content)

CSS = presentation (design)

Example:

<p>Hello world</p>


Without CSS → plain text
With CSS → colors, spacing, layout

p {
  color: blue;
}


👉 CSS does not create content.
👉 CSS only styles existing elements.

STEP 2: How Browsers Apply CSS (FOUNDATIONAL MENTAL MODEL)
Beginner

When a browser loads a page:

Reads HTML

Reads CSS

Applies styles

Displays the page

Intermediate

For each HTML element, the browser:

Finds all matching CSS rules

Resolves conflicts

Calculates final styles

Advanced (mental model)

Every element ends with ONE computed value per CSS property.

Even if:

5 rules set color

3 set font-size

👉 The browser chooses one winner for each.

This is why CSS sometimes “overrides” other CSS.

STEP 3: Ways to Write CSS (Inline, Internal, External)
Inline CSS
<p style="color:red;">Text</p>


Written directly in HTML

Highest priority

Hard to maintain

🧠 Real-world:

Avoid in real projects

Internal CSS
<style>
  p { color: red; }
</style>


Inside <head>

Page-specific

🧠 Real-world:

Demos or quick tests

External CSS ✅ (BEST PRACTICE)
<link rel="stylesheet" href="style.css">


Clean

Reusable

Scalable

🧠 Professional rule:

Use external CSS unless you have a strong reason not to.

STEP 4: CSS Syntax & Comments (ABSOLUTE BASICS)
CSS rule structure
selector {
  property: value;
}


Example:

h1 {
  font-size: 2rem;
  color: black;
}

Comments
/* This is a comment */


Ignored by the browser

Used for notes & organization

STEP 5: Basic Selectors (BEGINNER → INTERMEDIATE)
Element selector
p { color: blue; }


Applies to all <p> elements

Class selector (MOST IMPORTANT)
.card { padding: 1rem; }


HTML:

<div class="card"></div>


Reusable

Flexible

Professional choice

ID selector (USE CAREFULLY)
#header { background: gray; }


Unique element

High priority

🧠 Real-world rule:

Use classes for styling, IDs for JavaScript & anchors.

STEP 6: How the Browser Calculates Styles (HIGH-LEVEL)
Beginner idea

“Last rule wins” ❌ (not always true)

Correct mental model

The browser uses:

Selector specificity

Source order

Type of CSS (inline > external)

Example:

p { color: red; }
.text { color: blue; }

<p class="text">Hello</p>


👉 Result: blue, because class > element.

Advanced preview (don’t memorize yet)

Priority order (simplified):

Inline styles

ID selectors

Class selectors

Element selectors

STEP 7: CSS Value Types (FOUNDATIONAL)

CSS values fall into three main groups.

1️⃣ Keywords
display: block;
position: relative;
color: inherit;


Predefined meanings

Easy to read

2️⃣ Lengths (MOST IMPORTANT)
Absolute lengths
px


Fixed size

Does not scale

🧠 Use when precision is required.

Relative lengths (RESPONSIVE POWER)
%, em, rem, vh, vw


Examples:

font-size: 1rem;
width: 50%;
height: 100vh;


🧠 These adapt to screen size or parent.

3️⃣ Colors
#ff0000
rgb(255, 0, 0)
hsl(0, 100%, 50%)


Different formats → same final color.

STEP 8: Absolute vs Relative Values (REAL-WORLD IMPORTANCE)
Beginner idea

px = fixed

% = flexible

Intermediate understanding

rem scales with root font-size

vh/vw scales with viewport

Advanced principle

Responsive design is mostly about choosing the right units.

Good CSS uses:

rem for text & spacing

% for containers

vh/vw for sections

STEP 9: Real-World Application (Putting It Together)

Example:

body {
  font-family: Arial, sans-serif;
  font-size: 1rem;
}

.card {
  width: 90%;
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
}


What’s happening:

Browser calculates font size

Applies relative spacing

Layout adapts to screen size

🧠 FINAL MENTAL MODEL (MEMORIZE THIS)

CSS is a rule-based system where the browser matches selectors to elements, resolves conflicts, calculates final values, and paints the page using keywords, lengths, and colors.

If you truly understand this sentence, CSS will make sense going forward.

🛠 Day 1 Practice (Recommended)

Build a simple profile page using:

External CSS only

Classes (no IDs for styling)

rem, %, vh

At least one comment explaining your CSS