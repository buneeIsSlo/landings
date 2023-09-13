import "./scss/main.scss";

const navToggle = document.querySelector(".nav-toggle");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const navMenu = document.querySelector(".nav-list");

navToggle.addEventListener("click", (e) => {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    navMenu.classList.toggle("show-nav");
})

console.log("bunee!");