const name = document.querySelector("#name-register");
const username = document.querySelector("#username-register");
const password = document.querySelector("#password-register");
const checkbox = document.querySelector("#checkbox-register");
const button = document.querySelector("#button-register");


button.addEventListener('click', (event) => {
    event.preventDefault()

  const nameValue = name.value
  const usernameValue = username.value
  const passwordValue = password.value

  if (nameValue === "" || usernameValue === "" || passwordValue === "" ) {
    alert("Please fill in all the fields!");
    return;
  }

  sessionStorage.setItem('name', nameValue)
  sessionStorage.setItem('username', usernameValue)
  sessionStorage.setItem('password', passwordValue)

  window.location.href = './login.html'

})