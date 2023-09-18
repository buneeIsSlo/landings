import "./scss/main.scss";

const navToggle = document.querySelector(".nav-toggle");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const navMenu = document.querySelector(".nav-list");
const backgroundOverlay = document.querySelector(".bg-overlay");

navToggle.addEventListener("click", (e) => {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    navMenu.classList.toggle("show-nav");
    backgroundOverlay.classList.toggle("hidden");
    navToggle.setAttribute("aria-expanded", !backgroundOverlay.classList.contains("hidden"));
});

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

console.log("bunee!");