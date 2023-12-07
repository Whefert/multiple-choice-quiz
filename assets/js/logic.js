const time = document.querySelector("#time");
const submit = document.querySelector("#submit");
const submitAnchor = document.querySelector("#submit");
const initials = document.querySelector("#initials");
const userCount = 0;

let user = { name: "", score: 0 };

//30 seconds in milliseconds
const allottedQuizTime = 30000;
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

start.addEventListener("click", function (event) {
  startTimer();
});
