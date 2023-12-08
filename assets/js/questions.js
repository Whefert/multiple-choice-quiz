const questions = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const endScreen = document.querySelector("#end-screen");
const start = document.querySelector("#start");
const finalScore = document.querySelector("#final-score");
var correctTone = new Audio("assets/sfx/correct.wav");
var incorrectTone = new Audio("assets/sfx/incorrect.wav");
let timeToEnd;
let score = 0;
let incorrectCount = 0;
let correctAnswer = null;
let currentQuestionIndex = 0;

//create array of questions
const questionsArray = [
  {
    question: "The external JavaScript file must contain the <script> tag.",
    correctAnswer: 1,
    answers: ["True", "False"],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    correctAnswer: 1,
    answers: ["<javascript>", "<script>", "<scripting>", "js"],
  },
  {
    question:
      "What is the correct JavaScript syntax to change the content of the HTML element below? \n\n <p id='demo'>This is a demonstration.</p>",
    correctAnswer: 2,
    answers: [
      "document.getElementByName('p').innerHTML = 'Hello World!'",
      "#demo.innerHTML = 'Hello World!'",
      "document.getElementById('demo').innerHTML = 'Hello World!'",
      "document.getElement('p').innerHTML = 'Hello World!'",
    ],
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    correctAnswer: 3,
    answers: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script link='xxx.js'>",
      "<script src='xxx.js'>",
    ],
  },
];

//show questions and answers on page
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
    answer.textContent = `${i + 1}. ${answers[i]}`;
    choices.appendChild(answer);
  }
}

//show result div below the answer
function showResult() {
  feedback.classList.remove("hide");
  x = setInterval(function () {
    feedback.classList.add("hide");
    clearInterval(x);
  }, 1000);
}

//check if the selection is the correct answer, display the result and
// move on to the next question or the end screen if all quesruibs have been answered
choices.addEventListener("click", function (event) {
  showResult();
  if (event.target.getAttribute("data-answer") == currentAnswer) {
    feedback.textContent = "CORRECT";
    score++;
    correctTone.play();
  } else {
    feedback.textContent = "INCORRECT";
    incorrectCount++;
    startTimer(true);
    incorrectTone.play();
  }
  if (currentQuestionIndex < questionsArray.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showEndScreen();
  }
});

start.addEventListener("click", function (event) {
  init();
  showQuestion();
  startTimer(false);
  endScreen.classList.add("hide");
});

function showEndScreen() {
  questions.classList.add("hide");
  endScreen.classList.remove("hide");
  finalScore.textContent = `: ${score} / ${questionsArray.length}`;
}

function resetDOM() {
  questionTitle.textContent = "";
  choices.innerText = "";
}

function storeScore() {
  localStorage.setItem("score", scores);
}

function init() {
  resetDOM;
  score = 0;
  incorrectCount = 0;
  correctAnswer = null;
  currentQuestionIndex = 0;
  quizEndTime = 0;
  questions.classList.remove("hide");
  endScreen.classList.add("hide");
  user = { name: "", score: "" };
}
