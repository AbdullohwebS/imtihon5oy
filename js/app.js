const darkModeToggle = document.querySelector(".icon img");
const body = document.body;

const darkImg = "images/iconics-image/Dark mode.png";
const lightImg = "images/iconics-image/Dark mode.png";

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  darkModeToggle.src = lightImg;
}

darkModeToggle.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    darkModeToggle.src = darkImg;
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.add("light-mode");
    darkModeToggle.src = lightImg;
    localStorage.setItem("theme", "light");
  }
});