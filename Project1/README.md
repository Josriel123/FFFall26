# Project 1: Leo the Space Explorer - Galactic Field Log

* **Student:** Joel Bueno
* **Course:** CIM 343 / 643 - Front End Fundamentals (Section EF)
* **Instructor:** Zevensuy Rodriguez
* **Live Website:** [https://josriel123.github.io/FFFall26/Project1/index.html](https://josriel123.github.io/FFFall26/Project1/index.html)

---

## AI Tool & Prompt Disclosure

* **AI Tool Utilized:** Google Gemini
* **Purpose:** Brainstorming the creative website narrative/worldbuilding and generating thematic illustration assets.
* **Brainstorming Prompts:**
  > "Brainstorm an expanded expedition archive and mission dispatch concept for Leo the Space Explorer and Sparky. Include ideas for scientific tools, planetary telemetry, and deep-space sector broadcasts that can be built into an interactive front-end website."
* **Image Generation Prompts:**
  > "Vibrant colorful digital comic illustration of an alien ice cavern on Planet Frost, glowing emerald green crystal clusters emerging from turquoise glaciers..."
  > "Vibrant colorful digital illustration of a Martian red canyon desert on an alien planet, towering red sandstone cliffs, winding trails under dual moons..."
  > "Vibrant colorful digital comic illustration of an orbital space station and futuristic scout dome outpost on a crater moon..."
* **Process & Implementation:**
  I used AI to brainstorm the expanded creative concept and generate high-resolution visual assets that matched the visual theme of Assignment 1. All semantic HTML5 markup, CSS styling, responsive Grid architectures, and JavaScript interactive logic were implemented and structured by me to meet every rubric specification.

---

## Technical & Rubric Overview

1. **Proper HTML Document Setup:**
   - Standard `<!DOCTYPE html>`, `<html lang="en">`, and `<head>` configuration.
   - Includes `<title>` and `<meta name="description">`.
   - Full semantic HTML structure: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, and `<footer>`.
   - All 6 images contain descriptive `alt` tags.

2. **CSS Styling:**
   - Styled over 10 native HTML tags (`body`, `h1`, `h2`, `h3`, `p`, `a`, `button`, `section`, `time`, `input`, `select`, `label`, `figcaption`, `footer`).
   - Styled multiple distinct classes (`.badge`, `.sector-coord`, `.bio-card`, `.filter-btn`, `.active`, `.action-btn`, `.calc-output`, `.scanner-display`, etc.).
   - Images styled with uniform card aspect ratios, rounded corners, and hover transitions.

3. **Gridded Layouts:**
   - **Gridded Navigation:** 5-column CSS Grid navigation bar.
   - **Gridded Section 1 (Multi-Column Dossier):** 2-column responsive mission card grid.
   - **Gridded Section 2 (Picture Gallery):** 3-column responsive photo gallery grid.

4. **Responsiveness:**
   - Viewport meta tag included.
   - Media queries at `860px` and `600px` adjusting columns and layouts for desktop, tablet, and mobile screens.

5. **JavaScript Interactives:**
   - **Celestial Gravity & Weight Calculator:** Dynamically computes weight and jump ratio on 5 celestial bodies.
   - **Photo Gallery Category Filter:** Live DOM filter between All Photos, Crew & Ship, and Expeditions.
   - **Deep Space Sector Scanner:** Intercepts radio frequencies and cycles live telemetry reports.
   - **Dark / Light Mode Toggle:** Smooth theme switcher with dynamic button text.
