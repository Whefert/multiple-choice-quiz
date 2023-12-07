const questions = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const endScreen = document.querySelector("#end-screen");
let player = {name}

let correctAnswer = null;
let currentQuestionIndex = 0;
//create array of questions
const questionsArray = [
  {
    question: "Question 1",
    correctAnswer: 0,
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    question: "Question 2",
    correctAnswer: 0,
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
  {
    question: "Question 3",
    correctAnswer: 0,
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
  },
];

//show questions and answers in DOM
function showQuestion() {
  questions.classList.remove("hide");
  resetDOM();
  currentQuestion = questionsArray[currentQuestionIndex];
  currentAnswer = currentQuestion.correctAnswer;
  questionTitle.innerText = currentQuestion.question;
  let answers = currentQuestion.answers;
  for (let i = 0; i < answers.length; i++) {
    const answer = document.createElement("button");
    answer.setAttribute("data-answer", i);
    answer.textContent = answers[i];
    choices.appendChild(answer);
  }
}

choices.addEventListener("click", function (event) {
  feedback.classList.remove("hide");
  if (event.target.getAttribute("data-answer") == currentAnswer) {
    feedback.textContent = "CORRECT";
    score++;
  } else {
    feedback.textContent = "INCORRECT";
  }
  if (currentQuestionIndex < questionsArray.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showEndScreen();
  }
});

function showEndScreen() {
  questions.classList.add("hide");
  endScreen.classList.remove("hide");
}

function resetDOM() {
  questionTitle.textContent = "";
  choices.innerText = "";
}

function storeScore() {
  localStorage.setItem("score", scores);
}

function nextQuestion() {}

showQuestion();
