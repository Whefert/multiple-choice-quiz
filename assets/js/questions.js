const questions = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const endScreen = document.querySelector("#end-screen");
const start = document.querySelector("#start");
const time = document.querySelector("#time");
//30 seconds in milliseconds
const allottedQuizTime = 30000;
let quizEndTime,
  correctAnswer = null;
let currentQuestionIndex = 0;

//get time to end quiz
function startTimer() {
  quizEndTime = new Date().getTime() + allottedQuizTime;
  let timer = setInterval(function () {
    const now = new Date().getTime();
    const timeToEnd = quizEndTime - now;
    let timeRemaining = Math.floor((timeToEnd % (1000 * 60)) / 1000);
    time.textContent = timeRemaining;

    if (timeRemaining == 0) {
      clearInterval(timer);
      showEndScreen();
    }
  }, 100);
}

let user = { name: "", score: "" };

// TODO: COMMENT CODE LOGIC

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
      "Usain ran 9.58 seconds to break the 100 meter world record at the ___________.",
    answers: [
      "2007 World Championships",
      "2008 Olympics",
      "2009 World Championships",
      "2012 Olympics",
    ],
  },
  {
    question:
      "Michael Norman Manley served as the ___________ Prime Minister of Jamaica from 1972 - 1980 and 1989 - 1992",
    correctAnswer: 0,
    answers: ["1st", "2nd", "3rd", "4th"],
  },
  {
    question: "Jamaica's population is approximately ____________",
    correctAnswer: 0,
    answers: ["1.2 million", "2.8 million", "5.3 million", "9.2 million"],
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
    answer.textContent = `${i + 1}. ${answers[i]}`;
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

start.addEventListener("click", function (event) {
  showQuestion();
  startTimer();
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

function init() {
  resetDOM;
  user = { name: "", score: "" };
}
