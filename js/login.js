const continueBtn = document.querySelector(".continue-btn");
const passwordDiv = document.querySelector(".password-div");
const emailDiv = document.querySelector(".email-div");
const socialDiv = document.querySelector(".social-div");
const emailLastDiv = document.querySelector('.email-last-div')

continueBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emailDiv.classList.add("hide");
  passwordDiv.classList.remove("hide");
  socialDiv.classList.add("hide");
  emailLastDiv.classList.add("hide")
  emailDiv.styles.borderBottom = "none"
});
