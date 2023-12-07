const clear = document.querySelector("#clear");
const highScores = document.querySelector("#highscores");
const back = document.querySelector("#back-button");

clear.addEventListener("click", function () {
  localStorage.clear();
  highScores.textContent = "";
});

function showUser(user) {
  let userEl = document.createElement("li");
  userEl.textContent = `${user.name} - Score: ${user.score}`;
  highScores.appendChild(userEl);
}

function showUsers() {
  for (let index = 0; index < localStorage.length; index++) {
    const user = JSON.parse(localStorage.getItem(localStorage.key(index)));
    showUser(user);
  }
}

showUsers();
