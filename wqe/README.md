# Dinosaur Quiz

A modified version of the class quiz with five dinosaur questions and UIkit styling.

Open `index.html` in a browser. Select an answer, check it, and continue after reading the feedback. The last question leads to a score and a Play again button.

## Class examples

- [Original quiz HTML](https://github.com/zevenrodriguez/CIM343-643-FrontEndFundemenals-ClassExamples/blob/main/arrayobjectfunctions/quiz.html)
- [Original quiz JavaScript](https://github.com/zevenrodriguez/CIM343-643-FrontEndFundemenals-ClassExamples/blob/main/arrayobjectfunctions/js/quiz.js)
- [UIkit example](https://github.com/zevenrodriguez/CIM343-643-FrontEndFundemenals-ClassExamples/blob/main/uikit/index.html)

The quiz keeps the class example's question/answer object array, current question index, radio inputs, conditionals, and DOM updates. It adds a check for unanswered questions, feedback that stays until Next question, score tracking, and restart. UIkit 3.24.2 styles the container, radio inputs, buttons, and progress bar. Its stylesheet loads from jsDelivr, so the full UIkit styling needs an internet connection.

## Course patterns

- Objects, arrays, functions, answer comparisons, the question index, click events, and `style.display` follow the original quiz.
- Indexed `for` loops follow [Guess the Word](https://github.com/zevenrodriguez/CIM343-643-FrontEndFundemenals-ClassExamples/blob/main/arrayobjectfunctions/js/guesstheword.js) and the [form elements example](https://github.com/zevenrodriguez/CIM343-643-FrontEndFundemenals-ClassExamples/blob/main/jsexamples/js/formelements.js).
- The `change` event follows the [Fall 2026 form example](https://github.com/zevenrodriguez/FFFall26/blob/main/jsexamples/js/form.js).
- `classList.add` and `classList.remove` follow the [clicking example](https://github.com/zevenrodriguez/CIM343-643-FrontEndFundemenals-ClassExamples/blob/main/jsexamples/js/clicking.js).

The page also uses standard labels, a fieldset and legend, live answer feedback, `focus()`, and disabled choices for keyboard access and to prevent changing an answer after checking it. These browser features are kept separate from the quiz logic; they are not claims about what appeared in a particular lecture.

The local CSS uses explicit grid columns, flexbox, media queries, and simple control states. The progress bar keeps UIkit's default colors without browser-specific CSS overrides.

## Question sources

Facts were checked against the Natural History Museum:

- [Triceratops](https://www.nhm.ac.uk/discover/dino-directory/triceratops.html)
- [Brachiosaurus](https://www.nhm.ac.uk/discover/dino-directory/brachiosaurus.html)
- [Spinosaurus](https://www.nhm.ac.uk/discover/dino-directory/spinosaurus.html)
- [Tyrannosaurus](https://www.nhm.ac.uk/discover/dino-directory/tyrannosaurus.html)
- [Velociraptor](https://www.nhm.ac.uk/discover/velociraptor-facts.html)
