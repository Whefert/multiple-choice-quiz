const time = document.querySelector("#time");
const submit = document.querySelector("#submit");
const submitAnchor = document.querySelector("#submit");
const initials = document.querySelector("#initials");

let user = { name: "", score: 0 };

//30 seconds in milliseconds
const allottedQuizTime = 30000;
const incorrectAnswerTimeSubtraction = 5000;
let quizEndTime;

submitAnchor.addEventListener("click", function (event) {
  if (initials.value.trim() == "") {
    event.preventDefault();
    alert("User initials cannot be empty, please add a value");
    return;
  }
  user.name = initials.value.trim();
  user.score = score;
  localStorage.setItem(`user-${localStorage.length + 1}`, JSON.stringify(user));
});

initials.addEventListener("click", function () {
  feedback.classList.add("hide");
});

//get time to end quiz
function startTimer(isIncorrectAnswer) {
  let timeRemaining;
  if (quizEndTime > 0) {
    //if quiz time has already been established and an incorrect answer is chosen, subtract 5 seconds from the quiz end time
    if (isIncorrectAnswer) {
      quizEndTime -= incorrectAnswerTimeSubtraction;
    }
  } else {
    //get current time + the allotted time for the quiz
    quizEndTime = new Date().getTime() + allottedQuizTime;
  }

  let timer = setInterval(function () {
    const now = new Date().getTime();

    if (quizEndTime <= now) {
      timeRemaining = 0;
      clearInterval(timer);
      showEndScreen();
      time.textContent = "0";
    } else {
      const timeToEnd = quizEndTime - now;
      timeRemaining = Math.floor((timeToEnd % (1000 * 60)) / 1000);
      time.textContent = timeRemaining;
    }
  }, 100);
}

start.addEventListener("click", function (event) {
  startTimer();
});
