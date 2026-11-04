---
name: Dinosaur Quiz
description: Visual rules for the five-question quiz in wqe only.
colors:
  forest: "#173c2d"
  text: "#243a2e"
  action-hover: "#315a3c"
  paper: "#f2f3ea"
  ivory: "#fff9e9"
  header-muted: "#e2e9da"
  muted: "#4a5e4d"
  field: "#fffdf6"
  field-border: "#75836c"
  selected: "#e1e8d7"
  progress-track: "#f8f8f8"
  progress-fill: "#1e87f0"
  ochre: "#8b5a14"
  gold: "#e6c36e"
  correct: "#245330"
  error: "#963b26"
typography:
  display:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "2.4rem"
    fontWeight: 700
    lineHeight: 1.15
  display-compact:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 700
    lineHeight: 1.3
  title-compact:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: "38px"
  status:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "0.95rem"
  caption:
    fontFamily: "Trebuchet MS, sans-serif"
    fontSize: "0.9rem"
rounded:
  button: "2px"
  progress: "0"
spacing:
  small: "12px"
  medium: "16px"
  action: "24px"
  section: "32px"
components:
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.ivory}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "3px 24px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.ivory}"
  button-primary-active:
    backgroundColor: "{colors.text}"
  answer-option:
    backgroundColor: "{colors.field}"
    textColor: "{colors.text}"
    padding: "5px 16px"
  answer-option-selected:
    backgroundColor: "{colors.selected}"
  progress:
    backgroundColor: "{colors.progress-track}"
    rounded: "{rounded.progress}"
    height: "6px"
  guide-link:
    textColor: "{colors.gold}"
  feedback-correct:
    textColor: "{colors.correct}"
  feedback-error:
    textColor: "{colors.error}"
---

# Design System: Dinosaur Quiz

## Overview

**Creative North Star: "Natural-history field guide"**

The quiz carries Project1's forest masthead, pale reading surface, Trebuchet typography, and flat controls into a compact question form. These rules apply to `wqe/index.html`, `style.css`, and `script.js`. The root page and Project1 keep their own systems; the quiz's surface direction remains in `.impeccable/surfaces/wqe-index-html.md`.

UIkit 3.24.2 is loaded from the pinned jsDelivr stylesheet before the local CSS. It supplies the container, button, radio, fieldset, and progress foundations. Local styles supply the quiz palette and sizing. There are no new images, fonts, audio files, or other media assets.

**Key Characteristics:**

- Forest and ivory masthead with a gold guide link.
- Trebuchet headings, readable questions, and full-width radio labels.
- Flat surfaces with clear selected, focus, and answer-feedback states.
- A single reading column with compact responsive spacing.

## Colors

All fourteen hex colors from `style.css` are recorded in the frontmatter, along with UIkit's inherited progress track and fill colors.

### Primary

- **Forest:** masthead, headings, primary buttons, and hovered body links.
- **Action hover:** button hover and focus fill, selected radio fill and border, and body links.

### Secondary

- **Ochre:** focus outlines on the pale reading surface.
- **Gold:** masthead link, its focus outline, and text selection background.
- **Correct / Error:** written answer feedback, including the unanswered warning.
- **Progress fill:** UIkit's default blue for checked-answer progress.

### Neutral

- **Paper / Text:** page background and reading text; Text also supplies the pressed button fill.
- **Ivory / Header muted:** masthead title and button text / supporting masthead copy.
- **Muted:** instructions, question count, score, and source footer.
- **Field / Field border:** unselected answer background and control borders.
- **Selected:** hovered and selected answer background.
- **Progress track:** UIkit's default pale gray for the unfilled progress bar.

**The Written Feedback Rule.** Correctness and errors always have written feedback as well as color.

## Typography

Trebuchet MS with a sans-serif fallback is used throughout. Bold titles and buttons establish hierarchy without another font. The display title becomes 2rem at 700px and below. Question and final-score titles become 1.4rem at 420px and below. The footer uses the smaller caption role. Header supporting copy is limited to 340px; summary paragraphs are limited to 700px.

## Layout

The centered content area has an 800px maximum content width. UIkit adds side gutters of 15px, 30px from 640px, and 40px from 960px. The masthead uses a horizontal flex layout with a 24px gap, then stacks at 700px and below with a 12px gap. Its vertical padding changes from 32px to 24px above and 16px below.

Quiz sections use 36px top and 32px bottom padding; top padding becomes 28px at 700px and below. Question count and score share a flex row. Answer labels form an explicit one-column grid (`1fr`) with a 10px gap. Each label has a 14px radio-to-text gap and a 48px minimum height before padding and borders. Its horizontal padding becomes 12px at 420px and below, where action buttons also fill the available width.

## Elevation & Depth

There are no shadows. The dark masthead, pale page, field borders, and selected-answer fill separate the content. UIkit supplies the existing button color transition (0.1s ease-in-out), radio color and border transition (0.2s ease-in-out), and progress-fill transition (width 0.6s ease). Local CSS adds no animation.

## Shapes

Answer rows and reading sections are rectangular. Buttons have small corners; progress has square ends. UIkit supplies circular radio controls (16px). Borders are thin (1px). General focus outlines are 3px with a 5px offset; answer-row focus uses a 3px offset. The masthead link uses gold for focus against forest.

## Components

### Buttons

Check answer, Next question, See my score, and Play again share the same primary style. Buttons have a 46px minimum height, bold sentence-case text, and the padding recorded above. Hover and focus change the forest fill to Action hover; pressing uses Text. Keyboard focus retains a visible ochre outline.

### Inputs / Fields

Each native radio sits inside a full-width label. Hover and selection use the same pale green fill and green border. The selected radio stays green when the fieldset is disabled after checking an answer. UIkit supplies its checked dot, including the gray dot in the disabled state. Focus outlines both the radio and its label. The whole fieldset locks after one checked answer, preventing repeated scoring.

### Navigation

The masthead has one underlined guide link with a 44px minimum height. It turns ivory on hover and moves below the title at the masthead breakpoint. Body and footer links use green with an underline offset of 4px.

### Progress and feedback

The progress bar is 6px tall, with UIkit's pale gray track and blue fill. Local CSS changes only its height, margins, and corner radius. Its value counts checked answers rather than the currently displayed question. Empty feedback takes no space. Checking an answer reveals a short explanation, locks the choices, and moves focus to the next action. The final score replaces the question section; restarting resets the score, choices, feedback, and progress. A noscript message explains the JavaScript requirement.

## Do's and Don'ts

### Do:

- Do keep Trebuchet, the forest masthead, and the pale reading surface.
- Do keep native radio choices, written feedback, visible focus, and the working restart.
- Do load the pinned UIkit stylesheet before the local overrides.
- Do use explicit grid columns and basic HTML, CSS, and JavaScript.

### Don't:

- Don't extend these quiz rules to the root page or Project1.
- Don't add shadows, repeated rounded panels, or new media to this compact quiz.
- Don't use color alone to communicate an answer result.
