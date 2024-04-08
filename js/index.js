const navBtn = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".side-bar");
const inputDiv = document.querySelector("#find");


navBtn.addEventListener("click", (event) => {
 event.stopPropagation(); 
  sideBar.classList.toggle("show");
});


window.addEventListener("click", () => {
  if (sideBar.classList.contains("show")) {
    sideBar.classList.remove("show");
  }
});


sideBar.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent click event from bubbling up to the window
});




document.addEventListener("DOMContentLoaded", function () {
  fetchUserState();
});

function fetchUserState() {
  // Fetch user's state based on their IP address using ipinfo.io
  fetch("https://ipinfo.io/json")
    .then((response) => response.json())
    .then((data) => {

     const statePrefixes = {
      "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR", "California": "CA", "Colorado": "CO",
      "Connecticut": "CT", "Delaware": "DE", "Florida": "FL", "Georgia": "GA", "Hawaii": "HI", "Idaho": "ID",
      "Illinois": "IL", "Indiana": "IN", "Iowa": "IA", "Kansas": "KS", "Kentucky": "KY", "Louisiana": "LA",
      "Maine": "ME", "Maryland": "MD", "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS",
      "Missouri": "MO", "Montana": "MT", "Nebraska": "NE", "Nevada": "NV", "New Hampshire": "NH", "New Jersey": "NJ",
      "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH", "Oklahoma": "OK",
      "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD", "Tennessee": "TN",
      "Texas": "TX", "Utah": "UT", "Vermont": "VT", "Virginia": "VA", "Washington": "WA", "West Virginia": "WV", "Wisconsin": "WI",
      "Wyoming": "WY", "Lagos": "LG"
    };
      inputDiv.value = `    ${data.region},  ${statePrefixes[data.region] || data.country} `;
    })
    .catch((error) => {
      console.error("Error fetching user state:", error);
    });
}

