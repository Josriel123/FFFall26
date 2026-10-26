---
name: Leo the Space Explorer
description: Visual rules for the root story page; Project1 uses its own design.
colors:
  paper: "#f8f9f5"
  ink: "#182f3d"
  text: "#253946"
  links: "#884515"
  amber: "#f0c16e"
  amber-light: "#ffe0a4"
  scanner: "#1d3545"
  scanner-text: "#e4ecef"
  muted: "#586975"
  rule: "#bdc8cc"
  highlight: "#f2dcaf"
  dark-paper: "#13232e"
  dark-text: "#d7e1e6"
  dark-heading: "#f4f3eb"
  dark-scanner: "#294352"
  dark-muted: "#b7c7cf"
  dark-rule: "#536b78"
typography:
  display:
    fontFamily: "Georgia, serif"
    fontSize: "4.2rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Georgia, serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Verdana, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Verdana, sans-serif"
    fontSize: "0.85rem"
    lineHeight: 1.4
rounded:
  button: "3px"
spacing:
  small: "12px"
  medium: "24px"
  section: "48px"
components:
  button:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.button}"
    padding: "10px 16px"
  button-hover:
    backgroundColor: "{colors.text}"
    textColor: "{colors.paper}"
  button-scanner:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
---

# Design System: Leo the Space Explorer

## Overview

The root page is a mission journal: clear reading order, serif headings, plain navigation, and a compact scanner beside the story. These rules apply to index.html, style.css, and script.js. The separate dinosaur assignment in Project1 is outside this system. Surface mode and direction are recorded in .impeccable/surfaces/index-html.md.

## Colors

Paper and navy carry the story. Amber draws attention to the scanner action. Brown marks links in light mode. Dark mode keeps the same roles with lighter text and amber links. The frontmatter records the exact colors.

## Typography

Georgia distinguishes the title, section headings, and adventure names. Verdana carries paragraphs, navigation, controls, and captions. The main title steps down to 3.2rem below 860px and 2.8rem below 600px; section headings become 1.8rem below 600px.

## Layout

The centered container is at most 1080px wide with 32px side padding, reduced to 20px below 600px. Desktop story and scanner columns use 2fr 1fr; gear uses 1fr 1.4fr. Both stack below 860px. Adventures use two columns and the three-image gallery uses three, each stacking below 600px. Navigation moves from five columns to three, then two. Grid columns are written explicitly without repeat().

## Elevation & Depth

Surfaces are flat, without shadows. The navy scanner provides the main tonal contrast. Rules separate the header, gear, adventures, and footer instead of enclosing every section.

## Shapes

Buttons have small corners. The scanner and gallery images stay rectangular. Dates remain plain text.

## Components

Buttons and navigation targets are at least 44px tall. Outlined controls fill on hover; the scanner action uses amber. Focus outlines are 3px with a 4px offset, with lighter colors on dark surfaces. Button colors transition over 0.2s. The scanner, theme switch, and checklist retain their existing behavior.

## Do's and Don'ts

- Keep the three existing character and ship images, descriptive captions, and alt text.
- Keep the reading order when columns stack.
- Use basic HTML, CSS, and JavaScript from the approved course references.
- Avoid reintroducing repeated rounded cards, decorative badges, shadows, or additional visual assets.
