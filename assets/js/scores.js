const clear = document.querySelector("#clear");
const highScores = document.querySelector("#highscores");
const back = document.querySelector("#back-button");
let users = [];

clear.addEventListener("click", function () {
  localStorage.clear();
  highScores.textContent = "";
});

//create li elementf or each user with their score on the front-end
function showUser(user) {
  let userEl = document.createElement("li");
  userEl.textContent = `${user.name} - Score: ${user.score}`;
  highScores.appendChild(userEl);
}

function showUsers() {
  for (let index = 0; index < localStorage.length; index++) {
    const user = JSON.parse(localStorage.getItem(localStorage.key(index)));
    users.push(user);
  }
  sortUsers();
  users.forEach((user) => {
    showUser(user);
  });
}

//sort users taken from local storage befor displaying on the front-end
function sortUsers() {
  users.sort((a, b) => b.score - a.score);
}

showUsers();
