---
name: The Dinosaur Guide
description: Visual rules for Project1 only; the root space-explorer page is separate.
colors:
  forest: "#173c2d"
  ivory: "#fff9e9"
  paper: "#f2f3ea"
  text: "#25372d"
  muted: "#506348"
  footer: "#52634e"
  ochre: "#75531f"
  header-muted: "#e0e8d8"
  header-rule: "#78917a"
  header-border: "#c7d6bd"
  header-accent: "#f1ce85"
  period-rule: "#a7b69f"
  control-border: "#4d6752"
  control-hover: "#315d48"
  field: "#fffef8"
  field-border: "#708269"
  placeholder: "#536454"
  result: "#e2e8d8"
  error: "#9b261f"
  selection: "#d4ad59"
  dark-paper: "#14271e"
  dark-text: "#e5ebde"
  dark-header: "#0d2b1e"
  dark-heading: "#eff2e5"
  dark-ochre: "#e1bc84"
  dark-muted: "#b5c6b2"
  dark-period-rule: "#6b826b"
  dark-rule: "#9db895"
  dark-action: "#d7e3bf"
  dark-action-text: "#132e22"
  dark-border: "#8aa180"
  dark-field: "#203d2e"
  dark-result: "#274032"
  dark-result-text: "#e2edcc"
  dark-error: "#ffb7aa"
typography:
  display:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "4.4rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "2.1rem"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  control: "2px"
spacing:
  small: "12px"
  medium: "28px"
  section: "48px"
components:
  action:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
  action-hover:
    backgroundColor: "{colors.control-hover}"
    textColor: "{colors.ivory}"
  field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "10px"
---

# Design System: The Dinosaur Guide

## Overview

Project1 is a natural-history field guide with a forest masthead, large illustrations, and clear reading sections. This system applies only to Project1/index.html, style.css, and script.js. The root space-explorer page has a separate design. The Read surface mode and direction remain in .impeccable/surfaces/project1-index-html.md.

## Colors

Forest and ivory define the masthead and main actions. Pale paper carries the content. Muted green supports captions and classifications; ochre marks dates and focus. Dark mode keeps these roles with lighter text and controls. Exact light and dark colors are recorded above.

## Typography

Trebuchet MS carries both headings and body text. Bold headings and species names provide hierarchy without a second font. The title steps down to 3.4rem below 860px and 3rem below 600px; section headings become 1.8rem below 600px.

## Layout

The centered container is at most 1120px wide, with 32px side padding reduced to 20px below 600px. Desktop navigation has five columns; introduction and tools have two; period summaries have three; the species gallery has two image-led columns. Below 860px the introduction, periods, and tools stack and navigation uses three columns. Below 600px the gallery stacks and navigation uses two columns. Write grid columns explicitly without repeat().

## Elevation & Depth

Surfaces remain flat, without shadows. Color separates the masthead and calculator feedback. Rules distinguish period summaries and major sections without enclosing every item in a card.

## Shapes

Controls have small corners. Images and reading sections stay rectangular. Period dates are plain text, not badges.

## Components

Buttons and form controls are at least 44px tall. Primary actions and selected filters use solid forest; secondary choices use outlines. Hover changes the fill. Focus uses a 3px outline with a 4px offset and theme-appropriate color. Button color changes transition over 0.2s. Calculator errors retain written feedback as well as their distinct color.

## Do's and Don'ts

- Keep all six existing dinosaur illustrations and their descriptive alt text; the introduction reuses trex.jpg.
- Keep the category filter, weight calculator, roar descriptions, and theme switch.
- Keep the existing AI attribution and assignment-required grids.
- Use basic HTML, CSS, and JavaScript from the approved course references.
- Avoid repeated rounded panels, shadows, decorative badges, and new image assets.
