const loginForm = document.querySelector(".login");
const loginInput = document.querySelector(".login input");
const loginResult = document.querySelector(".loginResult");
const USERNAME_KEY = "username";

function loginEvent(event) {
    event.preventDefault();
    const user = loginInput.value;
    localStorage.setItem(USERNAME_KEY, user);        
    loginForm.classList.add("hidden");
    loginResult.classList.remove("hidden");
    loginResult.innerHTML = localStorage.getItem(USERNAME_KEY);
    loginInput.value = "";  
}

const localStorage_value = localStorage.getItem(USERNAME_KEY);

if (localStorage_value != null) {
    loginForm.classList.add("hidden");
    loginResult.classList.remove("hidden");
    loginResult.innerHTML = localStorage.getItem(USERNAME_KEY);
}

loginForm.addEventListener("submit", loginEvent);