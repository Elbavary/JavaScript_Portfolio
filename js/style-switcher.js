// Toggle Style Switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
// Hide Style Switcher On Scroll

window.onscroll = () => {
  if (document.querySelector(".style-switcher").classList.toggle("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
};
// Theme Colors
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveColor(color) {
  alternateStyles.forEach(style => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
// Theme Light And Dark

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.onload = () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
};
