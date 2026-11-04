---
version: 1
slug: "wqe-index-html"
primary_target: "wqe/index.html"
related_targets: ["wqe/style.css","wqe/script.js"]
---

## Scope

Primary target: wqe/index.html. Related source: wqe/style.css and wqe/script.js. Mode: Operate. A visitor answers five dinosaur questions, checks each answer, and sees a final score.

## Direction contract

THESIS: Keep the question and five familiar radio choices as the main content. This is a small class quiz, with no introductory landing screen or dashboard.

OWN-WORLD: Inherit Project1's forest green, pale reading ground, Trebuchet type, flat surfaces, and ochre accent. The quiz uses UIkit containers, buttons, radios, and progress styling. Colors mark selected choices and answer feedback. Dial: ENERGY 1 / RHYTHM 2 / MOTION 1.

STORY: Choose one dinosaur, check the answer, read a brief explanation, and continue. Preserve feedback until the visitor moves on. Finishing reveals the score and a working restart.

FIRST VIEWPORT: A compact forest masthead carries the title and a real link to the Dinosaur Guide. Beneath it, a centered reading column contains the question count, progress, question, five full-width radio labels, and Check answer. Mobile retains this order with smaller spacing.

FORM: A single-question radio form inside the existing field-guide identity. User delegated content and layout. The surface seed ran locally with no catalogue challengers: seed:4c274d5a2deb8cd8. Build directly in HTML/CSS; no image comp or new visual assets.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Verification

Check correct, incorrect, unanswered, final-score, repeat-submission, and restart states. Test keyboard operation, UIkit loading, contrast, and narrow layouts. No loading animation is needed: all questions are local and available at page load. A noscript message explains when JavaScript is unavailable.

Finish review: ship, with no material visual findings across desktop, mobile, and enlarged-text captures. Browser QA passed 310 assertions with no failures or runtime errors. The mechanical detector returned no findings. The built system is recorded in DESIGN.md and .impeccable/design.json.

Class-scope recheck: option handling now uses indexed loops and explicit class changes. Buttons use click events, and sections use the instructor's style.display pattern. UIkit supplies the progress colors. The updated browser suite passed 311 assertions, including keyboard use and mobile reflow. Two mobile type-size documentation advisories were resolved by recording the existing sizes as explicit tokens.
