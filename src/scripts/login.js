const username = document.querySelector("#username-login")
const password = document.querySelector("#password-login")
const checkbox = document.querySelector("#checkbox-login")
const button = document.querySelector("#button-login")

button.addEventListener("click", (event) => {

    let usernameValue = username.value
    let passwordValue = password.value
   
    if(usernameValue === "" || passwordValue === ""){
       event.preventDefault()
        alert("Please fill in all the fields!")
        return;
    } 
    
})