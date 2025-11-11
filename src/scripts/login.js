const username = document.querySelector("#username-login");
const password = document.querySelector("#password-login");
const checkbox = document.querySelector("#checkbox-login");
const button = document.querySelector("#button-login");

// Mostra ou oculta a senha
checkbox.addEventListener("change", () => {
  password.type = checkbox.checked ? "text" : "password";
});


button.addEventListener("click", (event) => {
  event.preventDefault();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "" || passwordValue === "") {
    alert("Please fill in all the fields!");
    return;
  }

  const usernameSession = sessionStorage.getItem('username')
  const passwordSession = sessionStorage.getItem('password')

  if(usernameValue !== usernameSession || passwordValue !== passwordValue){
    alert("Incorrect username or password")
    return;
  }

  window.location.href = './home.html'

  alert("Access granted!");

});
