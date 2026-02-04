📘 Cascade, Specificity & Inheritance

(From zero → confident CSS thinking)

STEP 1: The Big Picture (FOUNDATION)
Beginner idea

When multiple CSS rules target the same element, the browser must choose which one wins.

CSS uses three systems to decide this:

Cascade – where the rule comes from

Specificity – how precise the selector is

Inheritance – whether a property flows from parent to child

🧠 Think of them as layers of decision-making.

PART 1 — THE CASCADE
STEP 2: What the Cascade Is (BEGINNER)

Cascade = priority order of CSS rules

The browser considers:

Where the CSS comes from

In what order it appears

Example
p {
  color: red;
}

p {
  color: blue;
}


Result → blue

Why?
👉 Same selector, later rule wins.

STEP 3: Sources of CSS (INTERMEDIATE)

CSS comes from different places:

Browser default styles

External stylesheets

Internal styles

Inline styles

<p style="color: green;">Hello</p>


Inline styles override everything else.

🧠 Real-world rule:

If you rely on inline styles, your CSS structure is broken.

PART 2 — SPECIFICITY
STEP 4: What Specificity Is (BEGINNER)

Specificity = how exact a selector is

More specific selector → higher priority.

Example:

p { color: red; }
.text { color: blue; }

<p class="text">Hello</p>


Result → blue

Why?
👉 Class selector is more specific than element selector.

STEP 5: Specificity Levels (INTERMEDIATE)

From weakest → strongest:

Element selectors (p, div)

Class selectors (.box)

ID selectors (#header)

Inline styles

🧠 Golden rule:

Classes are your best friend. IDs are dangerous for styling.

STEP 6: Specificity Math (ADVANCED, SIMPLIFIED)

CSS internally scores selectors like this:

Inline → 1000

ID → 100

Class → 10

Element → 1

Example:

#menu .item p {}


Specificity = 100 + 10 + 1 = 111

Higher number wins.

🧠 You don’t need to calculate often — just avoid deep selectors.

STEP 7: !important (ADVANCED WARNING ⚠️)
p {
  color: red !important;
}


Overrides almost everything

Breaks the cascade

🧠 Professional rule:

If you need !important, something is wrong upstream.

Use only for:

Utility helpers

Temporary debugging

PART 3 — INHERITANCE
STEP 8: What Inheritance Is (BEGINNER)

Some CSS properties flow from parent to child.

Example:

body {
  color: black;
}


All text inside <body> becomes black.

STEP 9: What Inherits and What Doesn’t (INTERMEDIATE)
Inherited by default:

color

font-family

font-size

line-height

NOT inherited:

margin

padding

border

background

🧠 This explains many “why isn’t this working?” moments.

STEP 10: Controlling Inheritance (ADVANCED)
Keywords:
color: inherit;
color: initial;
color: unset;


inherit → force inheritance

initial → browser default

unset → smart reset

🧠 Used heavily in component systems.

STEP 11: Real-World Debugging Example
Problem

Button text isn’t changing color.

Debug checklist:

Is it inheriting from parent?

Is there a more specific selector?

Is inline style present?

Is !important used elsewhere?

This process solves 90% of CSS bugs.

🧠 FINAL MENTAL MODEL (MEMORIZE THIS)

The browser first applies the cascade, then resolves specificity conflicts, then applies inheritance to compute one final value per property.

If you understand that sentence, CSS becomes predictable.