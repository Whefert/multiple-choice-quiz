const questions = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const endScreen = document.querySelector("#end-screen");
const start = document.querySelector("#start");
const finalScore = document.querySelector("#final-score");
var correctTone = new Audio("assets/sfx/correct.wav");
var incorrectTone = new Audio("assets/sfx/incorrect.wav");

let score = 0;

let correctAnswer = null;
let currentQuestionIndex = 0;

//create array of questions
const questionsArray = [
  {
    question:
      "Bob Marley was born in the parish of ___________ to a Jamaican mother and British father.",
    correctAnswer: 0,
    answers: ["St. Ann", "Kingston", "Clarendon", "Westmoreland"],
  },
  {
    question:
      "Usain Bolt ran 9.58 seconds to break the 100 meter world record at the ___________.",
    correctAnswer: 2,
    answers: [
      "2007 World Championships",
      "2008 Olympics",
      "2009 World Championships",
      "2012 Olympics",
    ],
  },
  {
    question:
      "Michael Norman Manley served as the ___________ Prime Minister of Jamaica from 1972 - 1980 and 1989 - 1992.",
    correctAnswer: 3,
    answers: ["first", "second", "third", "fourth"],
  },
  {
    question: "Jamaica's population is approximately ___________ people.",
    correctAnswer: 1,
    answers: ["1.2 million", "2.8 million", "5.3 million", "9.2 million"],
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
  startTimer();
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
  correctAnswer = null;
  currentQuestionIndex = 0;
  questions.classList.remove("hide");
  endScreen.classList.add("hide");
  user = { name: "", score: "" };
}
