"use strict";

const qa = [
    {
        question: "Which dinosaur had three horns and a large frill?",
        answer: "Triceratops",
        explanation: "Triceratops had two horns above its eyes and one on its nose."
    },
    {
        question: "Which plant eater had a long neck and front legs longer than its back legs?",
        answer: "Brachiosaurus",
        explanation: "Brachiosaurus had a sloping body and a long neck suited to reaching tall trees."
    },
    {
        question: "Which dinosaur had a tall sail on its back?",
        answer: "Spinosaurus",
        explanation: "Long spines supported the sail on the back of Spinosaurus."
    },
    {
        question: "Which dinosaur's name means 'tyrant lizard king'?",
        answer: "Tyrannosaurus rex",
        explanation: "Tyrannosaurus means 'tyrant lizard', and rex means 'king'."
    },
    {
        question: "Which dinosaur had a large, curved claw on the second toe of each foot?",
        answer: "Velociraptor",
        explanation: "Velociraptor carried a large, sickle-shaped claw on each foot."
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const quizSection = document.getElementById("quiz-section");
const quizForm = document.getElementById("quiz-form");
const question = document.getElementById("question");
const options = document.getElementById("options");
const answerInputs = document.querySelectorAll('input[name="option"]');
const answerLabels = document.getElementsByClassName("answer-option");
const questionNumber = document.getElementById("question-number");
const progress = document.getElementById("progress");
const scoreText = document.getElementById("score");
const feedback = document.getElementById("feedback");
const checkButton = document.getElementById("check-answer");
const nextButton = document.getElementById("next-question");
const summarySection = document.getElementById("summary-section");
const finalScore = document.getElementById("final-score");
const summaryMessage = document.getElementById("summary-message");
const restartButton = document.getElementById("restart");

function showQuestion() {
    question.textContent = qa[currentQuestion].question;
    questionNumber.textContent = "Question " + (currentQuestion + 1) + " of " + qa.length;
    progress.max = qa.length;
    progress.value = currentQuestion;
    scoreText.textContent = score + " correct";
    feedback.textContent = "";
    feedback.className = "feedback";
    options.disabled = false;
    answered = false;
    checkButton.style.display = "inline-block";
    nextButton.style.display = "none";

    for (let i = 0; i < answerInputs.length; i++) {
        answerInputs[i].checked = false;
        answerLabels[i].classList.remove("selected");
    }
}

quizForm.addEventListener("change", function() {
    for (let i = 0; i < answerInputs.length; i++) {
        if (answerInputs[i].checked) {
            answerLabels[i].classList.add("selected");
        } else {
            answerLabels[i].classList.remove("selected");
        }
    }

    feedback.textContent = "";
    feedback.className = "feedback";
});

checkButton.addEventListener("click", function() {
    if (answered) {
        return;
    }

    const selected = document.querySelector('input[name="option"]:checked');

    if (!selected) {
        feedback.textContent = "Choose an answer before checking it.";
        feedback.className = "feedback error";
        answerInputs[0].focus();
        return;
    }

    if (selected.value === qa[currentQuestion].answer) {
        score++;
        feedback.textContent = "Correct! " + qa[currentQuestion].explanation;
        feedback.className = "feedback correct";
    } else {
        feedback.textContent = "Not quite. The answer is " + qa[currentQuestion].answer + ". " + qa[currentQuestion].explanation;
        feedback.className = "feedback error";
    }

    answered = true;
    options.disabled = true;
    scoreText.textContent = score + " correct";
    progress.value = currentQuestion + 1;
    checkButton.style.display = "none";
    nextButton.style.display = "inline-block";

    if (currentQuestion === qa.length - 1) {
        nextButton.textContent = "See my score";
    }

    nextButton.focus();
});

nextButton.addEventListener("click", function() {
    if (!answered) {
        return;
    }

    currentQuestion++;

    if (currentQuestion < qa.length) {
        showQuestion();
        question.focus();
    } else {
        quizSection.style.display = "none";
        summarySection.style.display = "block";
        finalScore.textContent = "You got " + score + " out of " + qa.length + ".";

        if (score === qa.length) {
            summaryMessage.textContent = "You matched every dinosaur to its clue.";
        } else {
            summaryMessage.textContent = "A few dinosaurs still have you guessing.";
        }

        finalScore.focus();
    }
});

restartButton.addEventListener("click", function() {
    currentQuestion = 0;
    score = 0;
    summarySection.style.display = "none";
    quizSection.style.display = "block";
    nextButton.textContent = "Next question";
    showQuestion();
    question.focus();
});

showQuestion();
quizSection.style.display = "block";
