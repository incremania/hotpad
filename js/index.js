const navBtn = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".side-bar");navBtn.addEventListener("click", (event) => {
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
