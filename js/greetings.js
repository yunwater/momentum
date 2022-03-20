const loginForm = document.querySelector(".app-wrap #login-form");
const loginInput = document.querySelector(".app-wrap #login-form input");
const greeting = document.querySelector(".app-wrap #greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginClick(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(usesrname) {
  greeting.innerText = `Hello, ${usesrname}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginClick);
} else {
  paintGreeting(savedUsername);
}
