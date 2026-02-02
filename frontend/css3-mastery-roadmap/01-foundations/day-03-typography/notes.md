📘 Day 3 — Typography Mastery

(Beginner → Intermediate → Advanced, with real-world usage)

STEP 1: What Typography Is (FOUNDATION)
Beginner idea

Typography is how text looks and feels.

It includes:

Font choice

Size

Spacing

Alignment

Readability

🧠 Truth:

Good typography can save bad design.
Bad typography can ruin good design.

STEP 2: Fonts vs Typefaces (FOUNDATION)

Typeface → the design (e.g. Roboto)

Font → the file (Roboto Regular, Bold, Italic)

In CSS, we usually say “font” for both.

STEP 3: Font Stacks & Fallbacks (BEGINNER → INTERMEDIATE)
Why font stacks exist

Not all users have the same fonts installed.

👉 Browsers try fonts from left to right.

body {
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
}


If Inter fails → Segoe UI → Arial → system default.

Generic font families (IMPORTANT)

Always end with one:

serif

sans-serif

monospace

🧠 Rule:

Never use a single font alone.

STEP 4: Google Fonts (BEGINNER)
What Google Fonts are

Free

Hosted by Google

Easy to use

How to use (basic idea)
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">

body {
  font-family: "Inter", sans-serif;
}


🧠 Real-world:

Great for beginners

Fast setup

Widely supported

STEP 5: Self-Hosted Fonts (INTERMEDIATE)
Why self-host fonts

More control

Better privacy

Offline availability

@font-face {
  font-family: "MyFont";
  src: url("MyFont.woff2") format("woff2");
}


🧠 Professional use:

Portfolios

Production sites

Brand fonts

STEP 6: Font Size (FOUNDATIONAL)
body {
  font-size: 1rem;
}


1rem = browser default (usually 16px)

🧠 Best practice:

Set base font size on body, then scale with rem.

STEP 7: Line Height (VERY IMPORTANT)
Beginner
line-height: 1.5;


Controls space between lines

Improves readability

🧠 Rule:

Use unitless line-height.

Why?

Scales naturally with font size

STEP 8: Letter Spacing (INTERMEDIATE)
letter-spacing: 0.05em;


Space between letters

Useful for headings & buttons

🧠 Real-world:

Small uppercase text

Navigation labels

❌ Avoid large spacing in paragraphs

STEP 9: Text Alignment & Spacing (FOUNDATION)
Text alignment
text-align: left;
text-align: center;


🧠 Best practice:

Body text → left

Headings → optional center

Text spacing
margin-bottom: 1rem;


👉 CSS spacing controls readability more than font choice.

STEP 10: Text Overflow & Ellipsis (INTERMEDIATE)
Problem

Long text breaks layouts.

Solution
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


Result:

This is a very lo…

🧠 Real-world:

Cards

Tables

Product titles

STEP 11: White-Space Handling (ADVANCED BUT PRACTICAL)
white-space: normal;


Common values:

normal → default wrapping

nowrap → single line

pre → preserve spaces

pre-wrap → wrap + preserve spaces

🧠 Use cases:

Code blocks

Chat messages

User-generated content

STEP 12: Real-World Typography Example
body {
  font-family: "Inter", system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #222;
}

h1 {
  font-size: 2.5rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

p {
  max-width: 65ch;
  margin-bottom: 1.5rem;
}


What this achieves:

Comfortable reading width

Balanced spacing

Clean hierarchy

🧠 FINAL TYPOGRAPHY MENTAL MODEL

Good typography is not about fancy fonts — it’s about spacing, rhythm, and readability first.

If you master:

line-height

spacing

font stacks

👉 Your sites will already look “designed”.

🛠 Day 3 Practice (Recommended)

Build a blog article page:

Google Font or system font stack

Use rem everywhere

Proper line-height

Limit text width (ch)

Ellipsis for long titles