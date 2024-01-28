const password = document.querySelector("#pwd")
  , confirm_password = document.querySelector("#confirm")
  , warning = document.querySelector(".warning");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    password.classList.add("error");
    confirm_password.classList.add("error");
    warning.style.opacity = "1";
} else {
    confirm_password.setCustomValidity('');
    password.classList.remove("error");
    confirm_password.classList.remove("error");
    warning.style.opacity = "0";
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

validatePassword();