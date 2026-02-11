# Day 10 — Real Flex Layout Patterns

## Mental Model
Flexbox answers 3 questions:
1. What is the main axis?
2. How is space distributed?
3. What grows or shrinks?

---

# 1. Navbars

## Horizontal Navbar
Use:
display: flex
justify-content: space-between
align-items: center

## Perfect Centered Links
Use 3 flex children.
Give left and right flex: 1.
Center container uses justify-content: center.

## Vertical Sidebar
Use:
flex-direction: column
height: 100vh

Push bottom items using:
flex: 1 on middle section

---

# 2. Cards & Sections

## Basic Card Row
display: flex
gap: 1rem

## Responsive Cards
flex-wrap: wrap
flex: 1 1 300px

## Equal Height Cards
Inside card:
display: flex
flex-direction: column

Push button down:
margin-top: auto

---

# 3. Media Object Pattern

Structure:
Image + content side by side

Use:
display: flex
gap: 1rem

Prevent image shrink:
flex-shrink: 0

Used in:
Comments
Chat
Author boxes

---

# 4. Holy Grail Layout

Body:
display: flex
flex-direction: column
min-height: 100vh

Main:
display: flex
flex: 1

Sidebars:
fixed width

Content:
flex: 1

---

# 5. Landing Page Section

Hero layout:
display: flex
align-items: center
justify-content: space-between

Responsive:
flex-direction: column

---

# Layout Thinking Rules

- Avoid fixed heights
- Use flex: 1 instead of width: 100%
- Use nested flex containers
- Always think main axis vs cross axis
- Use margin-top: auto for pushing elements

Goal:
Build real UI patterns confidently using Flexbox.
