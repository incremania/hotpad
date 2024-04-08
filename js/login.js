const continueBtn = document.querySelector(".continue-btn");
const passwordDiv = document.querySelector(".password-div");
const emailDiv = document.querySelector(".email-div");
const socialDiv = document.querySelector(".social-div");
const emailLastDiv = document.querySelector('.email-last-div')
const email = document.querySelector('#email')
const errorEmail = document.querySelector('.error-email')
const goBackLink = document.querySelector(".go-back-link");

continueBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(email.value);
  console.log()
  if(!email.value) {
    email.style.border = ".9px rgb(201, 58, 26) solid";
    errorEmail.textContent = "Please enter a valid email address.";
  } else {
  emailDiv.classList.add("hide");
  passwordDiv.classList.remove("hide");
  socialDiv.classList.add("hide");
  emailLastDiv.classList.add("hide")
  }
});


goBackLink.addEventListener('click', () => {
     emailDiv.classList.remove("hide");
     passwordDiv.classList.add("hide");
     socialDiv.classList.remove("hide");
     emailLastDiv.classList.remove("hide");
})